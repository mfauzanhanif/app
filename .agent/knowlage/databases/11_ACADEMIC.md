# 10. ACADEMIC DATABASES

## 10.1. Academic Core (Tahun Ajaran & Semester)

**Catatan**: Data master `academic_years` dan `academic_periods` sudah didefinisikan di **Modul 1 (Institution)** karena sifatnya global. Di modul ini, kita menggunakan referensinya.

### 10.1.1. Tabel `academic_settings` (Konfigurasi Lokal)
Setiap lembaga (MI, MTS, MA) mungkin punya kebijakan akademik berbeda meskipun tahun ajarannya sama.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. Tahun Ajaran yang sedang aktif di lembaga ini. |
| `academic_period_id` | BIGINT | Foreign Key. Semester yang sedang aktif. |
| `grading_system` | ENUM | `k13`, `merdeka`, `custom`. Sistem penilaian default. |
| `minimum_attendance_percent` | INT | Standar kehadiran minimal (misal: 80%). |
| `updated_at` | TIMESTAMP | Waktu update terakhir. |

## 10.2. Class Management (Manajemen Kelas)

### 10.2.1. Tabel `academic_classes` (Master Kelas)
Mendefinisikan entitas kelas/rombel.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `room_id` | BIGINT | Foreign Key ke asset_rooms.id (Lokasi fisik kelas). |
| `homeroom_teacher_id` | BIGINT | Foreign Key ke employees.id (Wali Kelas). |
| `grade_level` | INT | Tingkat Kelas (misal: 1, 2, 7, 8, 10). |
| `name` | VARCHAR | Nama Kelas (misal: "VII-A", "10 IPA 1"). |
| `code` | VARCHAR | Unique per Tahun. Kode singkat (misal: "7A-2026"). |
| `quota` | INT | Kapasitas maksimal siswa. |
| `is_active` | BOOLEAN | Default true. |

**Index**: `institution_id`, `academic_year_id`, `homeroom_teacher_id`.

### 10.2.2. Tabel `academic_class_students` (Penempatan Siswa)
Tabel pivot yang mencatat sejarah siswa pernah duduk di kelas mana saja.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `class_id` | BIGINT | Foreign Key ke academic_classes.id. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `status` | ENUM | `aktif`, `pindah`, `keluar`, `naik_kelas`. |
| `join_date` | DATE | Tanggal masuk kelas ini. |
| `leave_date` | DATE | Tanggal keluar (jika pindah kelas/keluar sekolah). |
| `notes` | VARCHAR | Catatan (misal: "Pindahan dari 7B"). |

**Unique Constraint**: (`class_id`, `student_id`) - Siswa tidak boleh ganda di satu kelas.

**Index**: `student_id` (untuk query riwayat kelas).

## 10.3. Academic Calendar (Kalender Akademik)

### 10.3.1. Tabel `academic_calendars`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `title` | VARCHAR | Nama Kegiatan (misal: "Libur Awal Ramadhan"). |
| `type` | ENUM | `libur`, `ujian`, `kegiatan`, `pembagian_rapor`. |
| `start_date` | DATE | Tanggal Mulai. |
| `end_date` | DATE | Tanggal Selesai. |
| `is_day_off` | BOOLEAN | Apakah KBM libur? (Penting untuk validasi Jurnal Mengajar). |
| `description` | TEXT | Detail kegiatan. |
| `color_code` | VARCHAR | Kode warna untuk tampilan di UI Kalender (misal: #FF0000). |

## 10.4. Movements (Kenaikan & Kelulusan)

### 10.4.1. Tabel `academic_promotions` (Riwayat Kenaikan Kelas)
Mencatat proses kenaikan kelas massal akhir tahun.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `from_class_id` | BIGINT | Kelas Asal (Tahun lalu). |
| `to_class_id` | BIGINT | Nullable. Kelas Tujuan (Tahun baru). Null jika tinggal kelas/lulus. |
| `academic_year_id` | BIGINT | Tahun Ajaran Kenaikan. |
| `type` | ENUM | `naik_kelas`, `tinggal_kelas`, `lulus`. |
| `promoted_date` | DATE | Tanggal penetapan kenaikan. |
| `decision_maker_id` | BIGINT | User ID (Kepala Sekolah) yang memvalidasi. |
| `notes` | TEXT | Catatan Rapat Pleno (misal: "Naik bersyarat"). |

### 💡 Logic & Integrasi Penting (Developer Note)

1.  **Global Scope (Tahun Ajaran)**:
    *   Hampir semua query di modul ini (dan modul turunannya seperti Jurnal/Nilai) **WAJIB** memfilter berdasarkan `academic_year_id` yang sedang aktif.
    *   **Saran**: Buat Global Scope di Laravel Model (`ActiveYearScope`).

2.  **Validasi Kapasitas Kelas**:
    *   Saat menempatkan siswa (`academic_class_students`), sistem harus mengecek `COUNT(student_id)` di kelas tersebut apakah sudah melebihi `academic_classes.quota`.

3.  **Integrasi Kalender ke Jurnal**:
    *   Jika `academic_calendars.is_day_off = true` pada tanggal tertentu, maka **Modul Jurnal (12)** harus memblokir guru untuk menginput presensi/jurnal pada tanggal tersebut (kecuali override admin).

4.  **Logika Kenaikan Kelas (Movement)**:
    *   **Fitur "Naik Kelas Massal" di UI Admin**:
        1.  Pilih Kelas Asal (misal: 7A).
        2.  Sistem me-load semua siswa 7A.
        3.  Admin mencentang siswa yang naik.
        4.  Pilih Kelas Tujuan (misal: 8A).
        5.  **Eksekusi**: Sistem membuat row baru di `academic_class_students` untuk kelas 8A dan mengupdate row lama di 7A dengan status `naik_kelas`.

5.  **Perbedaan "Wali Kelas" vs "Guru Kelas"**:
    *   Di tabel `academic_classes`, kolom `homeroom_teacher_id` adalah **Wali Kelas** (Jabatan Administratif).
    *   Guru yang mengajar di kelas tersebut (Pengajar) datanya ada di **Modul 11 (Curriculum - Jadwal Pelajaran)**, bukan di sini.