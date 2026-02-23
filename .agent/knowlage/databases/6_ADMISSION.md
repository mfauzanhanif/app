# 5. ADMISSION DATABASES

## 5.1. Pengaturan & Gelombang (Settings)

### 5.1.1. Tabel `admission_waves`
Mengatur gelombang pendaftaran per lembaga.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key ke institutions.id (Cascade on Delete). |
| `academic_year_id` | BIGINT | Foreign Key ke academic_years.id (Target tahun ajaran masuk). |
| `name` | VARCHAR | Nama Gelombang (misal: "Gelombang 1 - Jalur Prestasi"). |
| `start_date` | DATE | Tanggal buka pendaftaran. |
| `end_date` | DATE | Tanggal tutup pendaftaran. |
| `exam_date` | DATE | Nullable. Jadwal tes seleksi serentak (jika ada). |
| `announcement_date` | DATE | Nullable. Tanggal pengumuman kelulusan. |
| `registration_fee` | DECIMAL(15,2) | Default 0. Biaya pendaftaran/formulir. |
| `brochure_path` | VARCHAR | Nullable. File brosur untuk frontend. |
| `is_active` | BOOLEAN | Default false. Hanya 1 gelombang aktif per lembaga. |
| `description` | TEXT | Nullable. Info prosedur/alur untuk ditampilkan di web. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

**Index**: `institution_id`, `academic_year_id`, `is_active`.

## 5.2. Pendaftaran & Kandidat (Core Data)

### 5.2.1. Tabel `candidates`
Tabel utama data mentah pendaftar. Terpisah dari tabel students.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `user_id` | BIGINT | Nullable. Foreign Key ke users.id (Akun Wali yang mendaftarkan). Null-on-delete. |
| `institution_id` | BIGINT | Foreign Key. Lembaga tujuan. |
| `admission_wave_id` | BIGINT | Foreign Key. Gelombang pendaftaran. |
| `registration_number` | VARCHAR | Unique. No. Pendaftaran (misal: PSB/2026/MI/001). Auto-generated. |
| `internal_student_id` | BIGINT | Nullable. Khusus Jalur Lanjut Jenjang. Jika diisi, data diambil dari students.id. |
| `nik` | VARCHAR(16) | Unique. NIK Calon Santri (untuk validasi ganda). |
| `nisn` | VARCHAR(10) | Unique. Nullable. NISN Calon Santri. |
| `name` | VARCHAR | Nama Lengkap. |
| `pob` | VARCHAR(100) | Tempat Lahir. |
| `dob` | DATE | Tanggal Lahir. |
| `gender` | ENUM | Pilihan: `l` (laki-laki), `p` (perempuan). |
| `phone` | VARCHAR(20) | Nullable. Nomor telepon. |
| `email` | VARCHAR | Nullable. Email. |
| `address` | TEXT | Alamat Domisili. |
| `rt` | VARCHAR(5) | Nullable. |
| `rw` | VARCHAR(5) | Nullable. |
| `province_code` | CHAR(2) | Nullable. Foreign Key ke `provinces.code`. |
| `city_code` | CHAR(4) | Nullable. Foreign Key ke `cities.code`. |
| `district_code` | CHAR(7) | Nullable. Foreign Key ke `districts.code`. |
| `village_code` | CHAR(10) | Nullable. Foreign Key ke `villages.code`. |
| `postal_code` | VARCHAR(10) | Nullable. |
| `previous_school` | VARCHAR | Nullable. Asal Sekolah. |
| `previous_class` | VARCHAR | Nullable. Kelas terakhir asal sekolah. |
| `previous_school_address` | VARCHAR | Nullable. Alamat sekolah lama. |
| `status` | ENUM | Default 'draft'. Pilihan: `draft`, `diajukan`, `diverifikasi`, `jadwal_tes_ada`, `lulus`, `tidak_lulus`, `diterima`. |
| `student_id` | BIGINT | Nullable. Hasil Akhir. Diisi ID Siswa baru setelah "One Click Migration". |
| `created_at` | TIMESTAMP | Waktu daftar. |
| `updated_at` | TIMESTAMP | Waktu update. |

**Index**: `registration_number`, `nik`, `status`, `institution_id`, `admission_wave_id`.

### 5.2.2. Tabel `candidate_parents`
Data orang tua untuk keperluan biodata (Data ini nanti akan dimigrasi ke tabel guardians jika lulus).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. Cascade on Delete. |
| `type` | ENUM | Pilihan: `ayah`, `ibu`, `wali`. |
| `nik` | VARCHAR(16) | Nullable. NIK Orang tua. |
| `name` | VARCHAR | Nama Orang tua. |
| `phone` | VARCHAR(20) | Nullable. No WA. |
| `email` | VARCHAR | Nullable. Email. |
| `last_education` | ENUM | Nullable. Pendidikan Terakhir. |
| `job` | ENUM | Nullable. Pekerjaan. |
| `income` | ENUM | Nullable. Range penghasilan. |
| `is_alive` | BOOLEAN | Nullable. Status masih hidup. |
| `is_guardian` | BOOLEAN | Nullable. Status wali tertaut. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu update. |

### 5.2.3. Tabel `candidate_documents`
Menyimpan berkas persyaratan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `file_type` | ENUM | Pilihan: `foto`, `kk`, `akta_lahir`, `ijazah`, `skl`, `kip`, `ktp_ortu`, `lainnya`. |
| `file_name` | VARCHAR | Nama file. |
| `file_path` | VARCHAR | Lokasi file. |
| `is_valid` | BOOLEAN | Default null. Null=Belum dicek, True=Valid, False=Ditolak. |
| `notes` | TEXT | Nullable. Catatan admin jika dokumen ditolak. |

**Index**: `candidate_id`, `file_type`.

## 5.3. Seleksi & Billing

### 5.3.1. Tabel `candidate_exams` (Seleksi Manual)
Jadwal dan hasil tes (Wawancara/Tes Tulis/Tes Ngaji).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `examiner_id` | BIGINT | Nullable. Foreign Key ke employees.id (Penguji). |
| `schedule` | DATETIME | Nullable. Jadwal Tes. |
| `type` | ENUM | Pilihan: `wawancara_santri`, `wawancara_wali`, `tes_tulis`, `tes_alquran`. |
| `score` | DECIMAL(5,2) | Nullable. Nilai (0-100). |
| `result` | ENUM | Nullable. Pilihan: `direkomendasikan`, `tidak_direkomendasikan`. |
| `notes` | TEXT | Nullable. Catatan penguji. |
| `created_at` | TIMESTAMP | Waktu dibuat. |

### 5.3.2. Tabel `admission_invoices` (Billing PSB)
Tagihan khusus pendaftaran.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `candidate_id` | BIGINT | Foreign Key. |
| `code` | VARCHAR | Unique. No Invoice (misal: INV/PSB/001). |
| `amount` | DECIMAL(15,2) | Nominal Tagihan. |
| `type` | ENUM | Pilihan: `biaya_formulir`, `biaya_daftar_ulang`. |
| `status` | ENUM | Default 'belum_lunas'. Pilihan: `belum_lunas`, `lunas`, `dibatalkan`. |
| `payment_method` | VARCHAR | Nullable. Manual Transfer / Payment Gateway. |
| `proof_path` | VARCHAR | Nullable. Bukti transfer (jika manual). |
| `verified_at` | TIMESTAMP | Nullable. Waktu pembayaran diverifikasi admin. |
| `verified_by` | BIGINT | Nullable. ID User Admin yang memverifikasi. |

**Index**: `candidate_id`, `status`, `code`.

### 💡 Catatan Logic untuk Developer

1.  **Lanjut Jenjang Logic (`internal_student_id`)**:
    *   Saat pendaftar memilih opsi "Siswa Internal", sistem meminta input NIS/NIK.
    *   Sistem mencari di tabel `students`. Jika ketemu, data `candidates` (Nama, Tgl Lahir, Orang Tua) di-autofill dari data siswa tersebut.
    *   `internal_student_id` diisi dengan ID siswa lama.

2.  **One Click Migration Logic**:
    *   **Trigger**: Admin klik tombol "Enroll/Daftarkan" pada kandidat berstatus `PASSED` dan `PAID` (Daftar Ulang).
    *   **Step 1**: Copy data `candidate_parents` -> insert/update ke tabel `guardians` & hubungkan ke anak.
    *   **Step 2**: Copy data `candidates` -> insert ke tabel `students`.
    *   **Step 3**: Update `candidates.status = diterima` dan isi `candidates.student_id` dengan ID siswa baru (agar tidak bisa dimigrasi 2x).