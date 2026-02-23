# 12. JOURNAL DATABASES

## 12.1. Daily Attendance (Presensi Harian / Wali Kelas)
Tabel ini adalah "Master Status Kehadiran" hari itu. Status di sini akan diwariskan ke jurnal mapel jam pertama sampai terakhir.

### 12.1.1. Tabel `journal_daily_attendances` (Header)
Rekapitulasi absen per kelas per hari.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `class_id` | BIGINT | Foreign Key ke academic_classes.id. |
| `homeroom_teacher_id` | BIGINT | Foreign Key ke employees.id (Wali Kelas yang input). |
| `date` | DATE | Tanggal presensi. |
| `summary_present` | INT | Jumlah Hadir (Cache). |
| `summary_sick` | INT | Jumlah Sakit (Cache). |
| `summary_permission` | INT | Jumlah Izin (Cache). |
| `summary_alpha` | INT | Jumlah Alpha (Cache). |
| `is_locked` | BOOLEAN | Default false. Jika true, wali kelas tidak bisa ubah lagi (misal sudah lewat hari). |
| `created_at` | TIMESTAMP | Waktu input. |

**Unique Constraint**: (`class_id`, `date`) -> Satu kelas hanya punya 1 rekap per hari.

### 12.1.2. Tabel `journal_daily_attendance_details` (Detail Siswa)
Detail status per siswa.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `daily_attendance_id` | BIGINT | Foreign Key. |
| `student_id` | BIGINT | Foreign Key. |
| `status` | ENUM | `h` (hadir), `s` (sakit), `i` (izin), `a` (alpha), `d` (dispensasi). |
| `source` | ENUM | `manual` (Input Wali), `boarding` (Auto dari Asrama). |
| `notes` | VARCHAR | Catatan (misal: "Sakit Demam" atau "Pulang Kampung"). |

**Index**: `student_id`, `status` (Untuk rekap rapor).

## 12.2. The Unified Journal (Jurnal KBM)
Saya menggunakan pendekatan Central Header (`journals`) agar Approval dan Payroll mudah, dengan Detail Table terpisah untuk Intra/Projek/Ekskul.

### 12.2.1. Tabel `journals` (Header Utama)
Menyimpan data Siapa, Kapan, Berapa Lama, dan Statusnya.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `teacher_id` | BIGINT | Foreign Key ke employees.id (Guru yang mengajar real-time). |
| `schedule_id` | BIGINT | Nullable. FK ke curriculum_timetables.id (Jika Intra). |
| `class_id` | BIGINT | Nullable. FK ke academic_classes.id (Nullable karena Ekskul mungkin lintas kelas). |
| `type` | ENUM | `intra`, `projek_p5`, `ekstrakurikuler`. |
| `date` | DATE | Tanggal mengajar. |
| `start_time` | TIME | Jam mulai. |
| `end_time` | TIME | Jam selesai. |
| `total_jp` | INT | Total Jam Pelajaran (Penting untuk Payroll). |
| `is_substitute` | BOOLEAN | Default false. Penanda Guru Inval. |
| `original_teacher_id` | BIGINT | Nullable. Guru asli yang digantikan (jika inval). |
| `status` | ENUM | `draft`, `diajukan`, `disetujui`, `ditolak`, `terkunci`. |
| `approved_by` | BIGINT | User ID Kepala Sekolah. |
| `approved_at` | TIMESTAMP | Waktu approval. |
| `rejection_note` | TEXT | Alasan jika ditolak. |
| `created_at` | TIMESTAMP | |

**Index**: `teacher_id`, `date`, `status`, `type`.

### 12.2.2. Tabel `journal_details_intra` (Konten KBM Reguler)
Menyimpan Apa yang diajarkan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `journal_id` | BIGINT | Foreign Key ke journals.id. |
| `subject_id` | BIGINT | Foreign Key ke curriculum_subjects.id. |
| `lesson_plan_id` | BIGINT | Nullable. FK ke curriculum_lesson_plans.id (TP/Materi). |
| `custom_topic` | VARCHAR | Topik manual jika tidak ambil dari RPP. |
| `method` | VARCHAR | Metode (Ceramah, Diskusi). |
| `media` | VARCHAR | Media (LCD, Alat Peraga). |
| `obstacles` | TEXT | Catatan kendala/kejadian di kelas. |
| `photo_path` | VARCHAR | Bukti foto kegiatan. |

### 12.2.3. Tabel `journal_details_project` (Konten P5)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `journal_id` | BIGINT | Foreign Key ke journals.id. |
| `project_id` | BIGINT | Foreign Key ke p5_projects.id. |
| `phase` | VARCHAR | Tahap aktivitas (Pengenalan/Aksi). |
| `dimensions_check` | JSON | Array ID dimensi yang diobservasi hari itu. |
| `notes` | TEXT | Catatan fasilitator. |

### 12.2.4. Tabel `journal_details_extra` (Konten Ekskul)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `journal_id` | BIGINT | Foreign Key ke journals.id. |
| `extracurricular_id` | BIGINT | FK ke extracurriculars.id. |
| `material` | TEXT | Materi latihan. |
| `location` | VARCHAR | Lokasi latihan. |

## 12.3. Subject Attendance (Presensi per Jam)

### 12.3.1. Tabel `journal_student_attendances`
Mencatat kehadiran siswa spesifik untuk satu sesi jurnal (Override dari Daily Attendance).

**Strategi Hemat Storage**:
Jangan simpan semua siswa. **HANYA SIMPAN YANG STATUSNYA BERBEDA** dengan `journal_daily_attendance_details`.

**Logic App**: Saat menampilkan absensi di UI Guru, load status dari Daily Attendance. Jika ada record di tabel ini, timpa (override) statusnya.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `journal_id` | BIGINT | Foreign Key ke journals.id. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `status` | ENUM | `h` (hadir), `s` (sakit), `i` (izin), `a` (alpha), `d` (dispensasi), `t` (telat), `b` (bolos/cabut). |
| `notes` | VARCHAR | Alasan perubahan (misal: "Sakit di UKS saat jam ke-3"). |

**Index**: `journal_id`, `student_id`.

### 💡 Logic Penting untuk Developer

1.  **Auto-Fetch Logic (Daily Attendance)**:
    *   Saat Wali Kelas membuka halaman Absen Pagi:
        `Query ke boarding_permissions: WHERE student_id IN (List Siswa Kelas Ini) AND date = TODAY AND status = ACTIVE`.
    *   Jika ketemu, otomatis set status siswa jadi `i` atau `s` dan kunci kolomnya (disable radio button).

2.  **Inheritance Logic (Subject Attendance)**:
    *   Saat Guru Mapel buka Jurnal:
    *   Backend tidak perlu insert row ke `journal_student_attendances` untuk semua 30 siswa. Cukup kirim data kosong.
    *   Frontend me-render status default berdasarkan `journal_daily_attendances`.
    *   Jika Guru mengubah status Budi jadi "Bolos", baru Insert 1 row ke `journal_student_attendances`.

3.  **Payroll Calculation (Modul 15)**:
    *   Nanti Modul Payroll cukup query ke tabel header `journals`:
        ```sql
        SELECT SUM(total_jp)
        FROM journals
        WHERE teacher_id = ?
        AND status = 'disetujui'
        AND date BETWEEN ? AND ?
        ```
    *   Ini sangat ringan dan cepat.

4.  **Validation Substitute (Guru Inval)**:
    *   Jika `is_substitute = true`, pastikan sistem Payroll menghitung honor untuk `teacher_id` (pengganti), bukan `original_teacher_id` (guru asli yang berhalangan).
    *   Guru asli mungkin tetap dapat "Gaji Pokok" tapi kehilangan "Tunjangan Mengajar/JP".