# 5. ADMISSION DATABASES

## 5.1. Pengaturan & Gelombang (Settings)

### 5.1.1. Tabel `admission_waves`
Mengatur gelombang pendaftaran per lembaga.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key ke institutions.id. |
| `academic_year_id` | BIGINT | Foreign Key ke academic_years.id (Target tahun ajaran masuk). |
| `name` | VARCHAR | Nama Gelombang (misal: "Gelombang 1 - Jalur Prestasi"). |
| `start_date` | DATE | Tanggal buka pendaftaran. |
| `end_date` | DATE | Tanggal tutup pendaftaran. |
| `exam_date` | DATE | Nullable. Jadwal tes seleksi serentak (jika ada). |
| `announcement_date` | DATE | Nullable. Tanggal pengumuman kelulusan. |
| `registration_fee` | DECIMAL | Biaya pendaftaran/formulir. |
| `brochure_path` | VARCHAR | Nullable. File brosur untuk frontend. |
| `is_active` | BOOLEAN | Default false. Hanya 1 gelombang aktif per lembaga. |
| `description` | TEXT | Info prosedur/alur untuk ditampilkan di web. |

**Relasi**: `institution_id`, `academic_year_id`.

## 5.2. Pendaftaran & Kandidat (Core Data)

### 5.2.1. Tabel `candidates`
Tabel utama data mentah pendaftar. Terpisah dari tabel students.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `user_id` | BIGINT | Foreign Key ke users.id (Akun Wali yang mendaftarkan). |
| `institution_id` | BIGINT | Foreign Key. Lembaga tujuan. |
| `admission_wave_id` | BIGINT | Foreign Key. Gelombang pendaftaran. |
| `registration_number` | VARCHAR | Unique. No. Pendaftaran (misal: PSB/2026/MI/001). Auto-generated. |
| `internal_student_id` | BIGINT | Nullable. Khusus Jalur Lanjut Jenjang. Jika diisi, data diambil dari students.id. |
| `nik` | VARCHAR(16) | NIK Calon Santri (untuk validasi ganda). |
| `name` | VARCHAR | Nama Lengkap. |
| `gender` | ENUM | `l` (laki-laki), `p` (perempuan) |
| `pob` | VARCHAR | Tempat Lahir. |
| `dob` | DATE | Tanggal Lahir. |
| `previous_school` | VARCHAR | Asal Sekolah. |
| `nism` | VARCHAR | Nullable. Nomor Induk Siswa Madrasah (jika ada). |
| `address` | TEXT | Alamat Domisili. |
| `status` | ENUM | `draft`, `diajukan`, `diverifikasi`, `jadwal_tes_ada`, `lulus`, `tidak_lulus`, `diterima`. |
| `student_id` | BIGINT | Nullable. Hasil Akhir. Diisi ID Siswa baru setelah "One Click Migration". |
| `created_at` | TIMESTAMP | Waktu daftar. |

**Index**: `registration_number`, `nik`, `status`.

**Relasi**:
*   `user_id` -> `users.id` (Parent Account).
*   `internal_student_id` -> `students.id` (Relasi ke data lama jika siswa internal).
*   `student_id` -> `students.id` (Relasi ke data baru setelah diterima).

### 5.2.2. Tabel `candidate_documents`
Menyimpan berkas persyaratan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `file_type` | ENUM | `kk`, `akta`, `ktp_wali`, `ijazah`, `foto`, `skl`, `kip`. |
| `file_path` | VARCHAR | Lokasi file. |
| `is_valid` | BOOLEAN | Default null. Null=Belum dicek, True=Valid, False=Ditolak. |
| `notes` | TEXT | Catatan admin jika dokumen ditolak. |

### 5.2.3. Tabel `candidate_families`
Data orang tua untuk keperluan biodata (Data ini nanti akan dimigrasi ke tabel guardians jika lulus).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `type` | ENUM | `ayah`, `ibu`, `wali`. |
| `nik` | VARCHAR(16) | NIK Orang tua. |
| `name` | VARCHAR | Nama Orang tua. |
| `phone` | VARCHAR | No WA. |
| `job` | VARCHAR | Pekerjaan. |
| `income` | ENUM | Range penghasilan (misal: <1jt, 1-3jt, dll). |

## 5.3. Seleksi & Billing

### 5.3.1. Tabel `candidate_exams` (Seleksi Manual)
Jadwal dan hasil tes (Wawancara/Tes Tulis/Tes Ngaji).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `examiner_id` | BIGINT | Foreign Key ke employees.id (Penguji). |
| `schedule` | DATETIME | Jadwal Tes. |
| `type` | ENUM | `wawancara_santri`, `wawancara_wali`, `tes_tulis`, `tes_alquran`. |
| `score` | DECIMAL | Nilai (0-100). |
| `result` | ENUM | `direkomendasikan`, `tidak_direkomendasikan`. |
| `notes` | TEXT | Catatan penguji. |

### 5.3.2. Tabel `admission_invoices` (Billing PSB)
Tagihan khusus pendaftaran (Formulir & Uang Pangkal). Terpisah dari modul Finance utama agar tidak mengotori pembukuan tahunan sebelum siswa resmi masuk.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `code` | VARCHAR | No Invoice (misal: INV/PSB/001). |
| `amount` | DECIMAL | Nominal Tagihan. |
| `type` | ENUM | `biaya_formulir`, `biaya_daftar_ulang`. |
| `status` | ENUM | `belum_lunas`, `lunas`, `dibatalkan`. |
| `payment_method` | VARCHAR | Manual Transfer / Payment Gateway. |
| `proof_path` | VARCHAR | Bukti transfer (jika manual). |
| `verified_at` | TIMESTAMP | Waktu pembayaran diverifikasi admin. |

### 💡 Catatan Logic untuk Developer

1.  **Lanjut Jenjang Logic (`internal_student_id`)**:
    *   Saat pendaftar memilih opsi "Siswa Internal", sistem meminta input NIS/NIK.
    *   Sistem mencari di tabel `students`. Jika ketemu, data `candidates` (Nama, Tgl Lahir, Orang Tua) di-autofill dari data siswa tersebut.
    *   `internal_student_id` diisi dengan ID siswa lama.

2.  **One Click Migration Logic**:
    *   **Trigger**: Admin klik tombol "Enroll/Daftarkan" pada kandidat berstatus `PASSED` dan `PAID` (Daftar Ulang).
    *   **Step 1**: Copy data `candidate_families` -> insert/update ke tabel `guardians` & `guardian_student` (Modul 7).
    *   **Step 2**: Copy data `candidates` -> insert ke tabel `students` (Modul 6).
    *   **Step 3**: Update `candidates.status = ENROLLED` dan isi `candidates.student_id` dengan ID siswa baru (agar tidak bisa dimigrasi 2x).