# 13. GRADING DATABASES

## 13.1. Configuration (Konfigurasi Penilaian)

### 13.1.1. Tabel `grading_types` (Jenis Penilaian & Bobot)
Mengatur komponen nilai (PH, PTS, PAS) dan bobotnya.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `name` | VARCHAR | Nama (misal: "Sumatif Lingkup Materi", "PAS", "Imtihan Syafahi"). |
| `code` | VARCHAR(10) | Kode (misal: PH, PTS, SAS). |
| `category` | ENUM | `formatif`, `sumatif`, `projek`. |
| `weight` | INT | Bobot dalam persen (misal: 40 untuk 40%). |
| `grade_level` | INT | Nullable. Jika bobot beda per tingkat kelas. |
| `is_active` | BOOLEAN | Default true. |

**Logic Bobot**: Total `weight` untuk satu tahun ajaran/tingkat harus 100%.

### 13.1.2. Tabel `grading_kkm` (Kriteria Ketuntasan)
Mengatur batas kelulusan per mata pelajaran (K13) atau interval KKTP (Merdeka).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `subject_id` | BIGINT | Foreign Key ke curriculum_subjects.id. |
| `grade_level` | INT | Tingkat kelas. |
| `kkm_value` | DECIMAL | Angka KKM tunggal (misal: 75.00). |
| `description` | TEXT | Deskripsi kompetensi jika tuntas/belum. |

### 13.1.3. Tabel `grading_predicates` (Konversi Huruf)
Mapping angka ke huruf (Interval).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `grade` | VARCHAR(5) | Huruf (A, B, C, D). |
| `min_score` | DECIMAL | Batas bawah (misal: 90). |
| `max_score` | DECIMAL | Batas atas (misal: 100). |
| `description` | VARCHAR | Predikat (misal: "Sangat Baik"). |
| `type` | ENUM | `pengetahuan` (Angka), `keterampilan` (Keterampilan), `sikap` (Sikap). |

## 13.2. Score Entries (Input Nilai)

### 13.2.1. Tabel `grading_scores` (Nilai Akademik)
Tabel transaksi utama nilai harian/ujian.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `grading_type_id` | BIGINT | Foreign Key ke grading_types.id (PH/PTS/PAS). |
| `subject_id` | BIGINT | Foreign Key ke curriculum_subjects.id. |
| `class_id` | BIGINT | Foreign Key ke academic_classes.id. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `teacher_id` | BIGINT | Foreign Key (Guru yang menilai). |
| `score` | DECIMAL(5,2) | Nilai Angka (0-100). |
| `competency_id` | BIGINT | Nullable. Link ke TP/KD (untuk generate deskripsi otomatis). |
| `feedback` | TEXT | Catatan khusus guru untuk nilai ini. |
| `created_at` | TIMESTAMP | |

**Index**: `student_id`, `subject_id`, `class_id`.

### 13.2.2. Tabel `grading_p5_scores` (Nilai Projek)
Khusus Kurikulum Merdeka (Projek Penguatan Profil Pelajar Pancasila).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `project_id` | BIGINT | Foreign Key ke p5_projects.id (Modul 11). |
| `student_id` | BIGINT | Foreign Key. |
| `dimension_id` | BIGINT | Foreign Key ke p5_targets.id. |
| `predicate` | ENUM | `mb` (Mulai Berkembang), `sb`, `bsh`, `sab` (Sangat Berkembang). |
| `notes` | TEXT | Catatan proses (Anekdot). |

### 13.2.3. Tabel `grading_extracurriculars` (Nilai Ekskul)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `academic_period_id` | BIGINT | Semester (Ganjil/Genap). |
| `extracurricular_id` | BIGINT | Foreign Key ke extracurriculars.id. |
| `student_id` | BIGINT | Foreign Key. |
| `score` | ENUM | `a`, `b`, `c`, `d`. |
| `description` | TEXT | Deskripsi kemampuan siswa. |

### 13.2.4. Tabel `grading_attitudes` (Nilai Sikap/Spiritual)
Jurnal Sikap Wali Kelas / Guru PAI.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `academic_period_id` | BIGINT | Semester. |
| `student_id` | BIGINT | Foreign Key. |
| `aspect` | ENUM | `spiritual`, `sosial`. |
| `predicate` | ENUM | `sangat_baik`, `baik`, `cukup`, `kurang`. |
| `description` | TEXT | Deskripsi naratif (misal: "Ananda sangat rajin sholat dhuha..."). |

## 13.3. Result Processing (Kalkulasi Akhir)

### 13.3.1. Tabel `grading_finals` (Nilai Akhir Rapor)
**PENTING**: Tabel ini adalah Cache/Snapshot. Nilai di sini adalah hasil kalkulasi dari `grading_scores` berdasarkan rumus bobot. Tujuannya agar saat cetak rapor, sistem tidak perlu hitung ulang dari nol.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `academic_period_id` | BIGINT | Semester. |
| `class_id` | BIGINT | Foreign Key. |
| `student_id` | BIGINT | Foreign Key. |
| `subject_id` | BIGINT | Foreign Key. |
| `knowledge_score` | DECIMAL | Nilai Akhir Pengetahuan (K13) / Nilai Akhir Mapel (Merdeka). |
| `skill_score` | DECIMAL | Nilai Akhir Keterampilan (K13) / Nullable (Merdeka). |
| `final_score` | DECIMAL | Rata-rata / Nilai Gabungan. |
| `predicate` | VARCHAR(5) | Huruf (A/B/C). |
| `description_knowledge` | TEXT | Deskripsi otomatis dari capaian TP tertinggi/terendah. |
| `description_skill` | TEXT | Deskripsi keterampilan. |
| `is_locked` | BOOLEAN | Jika true, nilai ini final dan siap cetak. |

### 13.3.2. Tabel `grading_report_files` (Arsip PDF)
Hasil generate Queue Job.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `academic_period_id` | BIGINT | Semester. |
| `student_id` | BIGINT | Foreign Key. |
| `type` | ENUM | `uts`, `uas`, `projek`, `tahfidz`. |
| `file_path` | VARCHAR | Path file PDF di storage private. |
| `download_token` | VARCHAR | Token unik untuk link download aman. |
| `generated_at` | TIMESTAMP | Waktu generate. |

### 💡 Logic Kalkulasi & Generate Deskripsi (Developer Note)

1.  **Generate Deskripsi Otomatis**:
    *   **Logic**: Ambil nilai TP/KD tertinggi dan terendah dari tabel `grading_scores`.
    *   **Tertinggi (95 - TP1)**: "Ananda sangat menguasai dalam hal [Nama TP1]..."
    *   **Terendah (70 - TP3)**: "...namun perlu bimbingan lebih lanjut dalam [Nama TP3]."
    *   Simpan teks hasil generate ini ke kolom `description_knowledge` di tabel `grading_finals`.

2.  **Attendance Recap (Rekap Absen)**:
    *   Di Rapor ada kolom Sakit/Izin/Alpha. Data ini **JANGAN** diinput manual oleh Wali Kelas di modul grading.
    *   **Logic**: Query COUNT dari tabel `journal_daily_attendance_details` (Modul 12) `WHERE status='s' AND semester=GANJIL`.

3.  **Queue Job untuk PDF**:
    *   Saat user klik "Print Rapor", jangan stream PDF langsung ke browser.
    *   **Dispatch Job**: `GenerateReportCard::dispatch($studentId, $classId)`.
    *   Simpan PDF jadi file fisik, lalu update tabel `grading_report_files`.
    *   Kirim notifikasi (Pusher/Reverb) ke frontend: "Rapor Budi Siap Download".

4.  **Kenaikan Kelas**:
    *   Status "Naik/Tinggal Kelas" tidak disimpan di modul Grading, tapi di **Modul 10 (academic_promotions)**. Modul Grading hanya menyediakan datanya (Leger).