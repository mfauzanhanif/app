# 11. CURRICULUM DATABASES

## 11.1. Intrakurikuler (KBM Reguler)

### 11.1.1. Tabel `curriculum_subjects` (Master Mapel)
Menyimpan daftar mata pelajaran yang tersedia di lembaga.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `code` | VARCHAR(10) | Unique per Lembaga. Kode Mapel (misal: MAT, PAI, ARB). |
| `name` | VARCHAR(100) | Nama Mapel (misal: "Matematika", "Bahasa Arab"). |
| `group` | ENUM | `nasional_a` (Wajib A), `nasional_b` (Wajib B), `peminatan_c`, `mulok`, `diniyah` (Khas Pondok). |
| `is_active` | BOOLEAN | Default true. |

**Relasi**: `institution_id` -> `institutions.id`.

### 11.1.2. Tabel `curriculum_structures` (Struktur Kurikulum)
Mengatur alokasi Jam Pelajaran (JP) per tingkat kelas.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. Struktur ini berlaku untuk tahun berapa. |
| `subject_id` | BIGINT | Foreign Key ke curriculum_subjects.id. |
| `grade_level` | INT | Tingkat Kelas (misal: 7, 8, 9). |
| `count_jp` | INT | Jumlah Jam Pelajaran per Minggu (misal: 4 JP). |
| `curriculum_type` | ENUM | `k13`, `merdeka`. |

### 11.1.3. Tabel `curriculum_competencies` (CP / KD)
Menyimpan standar kompetensi (Capaian Pembelajaran / Kompetensi Dasar).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `subject_id` | BIGINT | Foreign Key. |
| `grade_level` | INT | Tingkat Kelas. |
| `type` | ENUM | `cp` (Capaian Pembelajaran - Merdeka), `kd_pengetahuan` (K13), `kd_keterampilan` (K13). |
| `code` | VARCHAR(20) | Kode (misal: 3.1, 4.1 atau FASE_D). |
| `description` | TEXT | Deskripsi kompetensi. |

### 11.1.4. Tabel `curriculum_lesson_plans` (TP / ATP / Materi)
Data ini yang akan muncul di dropdown Jurnal Mengajar.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `competency_id` | BIGINT | Foreign Key ke curriculum_competencies.id. |
| `teacher_id` | BIGINT | Foreign Key (Pembuat RPP). Nullable jika RPP dipakai bersama (MGMP). |
| `code` | VARCHAR(20) | Kode TP (misal: TP.1.1). |
| `topic` | VARCHAR | Materi Pokok / Tujuan Pembelajaran. |
| `semester` | ENUM | `ganjil`, `genap`. |

### 11.1.5. Tabel `curriculum_timetables` (Jadwal Pelajaran)
Tabel paling kompleks karena memetakan Guru, Mapel, Kelas, dan Waktu.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `class_id` | BIGINT | Foreign Key ke academic_classes.id (Modul 10). |
| `day` | ENUM | `senin`, `selasa`, `rabu`, `kamis`, `jumat`, `sabtu`, `ahad`. |
| `time_slot` | INT | Jam ke- (1, 2, 3, dst). |
| `subject_id` | BIGINT | Foreign Key. |
| `teacher_id` | BIGINT | Foreign Key ke employees.id (Guru Pengampu). |
| `room_id` | BIGINT | Nullable. Foreign Key ke asset_rooms.id (Jika pindah kelas, misal ke Lab). |
| `start_time` | TIME | Waktu mulai (07:00). |
| `end_time` | TIME | Waktu selesai (07:40). |

**Unique Constraint**:
*   `(day, time_slot, class_id)` -> Satu kelas tidak boleh ada 2 mapel di jam yang sama.
*   `(day, time_slot, teacher_id)` -> Satu guru tidak boleh mengajar di 2 kelas di jam yang sama (Conflict Checker Logic).

## 11.2. Kokurikuler (P5 - Project Based)

### 11.2.1. Tabel `p5_themes` (Master Tema)
Master data tema dari pemerintah (Kemendikbud).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `name` | VARCHAR | Nama Tema (misal: "Gaya Hidup Berkelanjutan"). |
| `description` | TEXT | Deskripsi. |

### 11.2.2. Tabel `p5_projects` (Definisi Projek)
Projek spesifik yang dijalankan lembaga.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `theme_id` | BIGINT | Foreign Key ke p5_themes.id. |
| `title` | VARCHAR | Judul Projek (misal: "Sampahku Tanggung Jawabku"). |
| `description` | TEXT | Deskripsi kegiatan. |
| `start_date` | DATE | Tanggal mulai projek. |
| `end_date` | DATE | Tanggal selesai projek. |
| `coordinator_id` | BIGINT | Foreign Key ke employees.id (Koordinator Projek). |

### 11.2.3. Tabel `p5_facilitators` (Tim Guru)
Pivot table karena satu projek diampu banyak guru.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `project_id` | BIGINT | Foreign Key. |
| `employee_id` | BIGINT | Foreign Key (Guru Fasilitator). |

### 11.2.4. Tabel `p5_targets` (Dimensi & Elemen)
Menentukan dimensi apa yang dinilai dalam projek ini.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `project_id` | BIGINT | Foreign Key. |
| `dimension` | VARCHAR | Dimensi (misal: "Beriman & Bertakwa"). |
| `element` | VARCHAR | Elemen (misal: "Akhlak kepada alam"). |
| `sub_element` | VARCHAR | Sub-elemen (Target capaian akhir fase). |

## 11.3. Ekstrakurikuler (Pengembangan Diri)

### 11.3.1. Tabel `extracurriculars` (Master Ekskul)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `name` | VARCHAR | Nama Ekskul (Pramuka, Futsal). |
| `category` | ENUM | `wajib`, `pilihan`. |
| `coach_id` | BIGINT | Nullable. FK ke employees.id (Jika pembina internal). |
| `external_coach` | VARCHAR | Nullable. Nama pelatih luar (Jika hiring pro). |
| `quota` | INT | Kapasitas maksimal (0 = Unlimited). |
| `schedule_day` | ENUM | Hari latihan rutin. |
| `schedule_time` | TIME | Jam latihan rutin. |
| `location` | VARCHAR | Tempat latihan (Lapangan/Aula). |

### 11.3.2. Tabel `extracurricular_members` (Anggota)
Pivot table pendaftaran siswa ke ekskul.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `extracurricular_id` | BIGINT | Foreign Key. |
| `student_id` | BIGINT | Foreign Key. |
| `joined_at` | DATE | Tanggal daftar. |
| `status` | ENUM | `aktif`, `mengundurkan_diri`, `dikeluarkan`. |

**Unique Constraint**: (`academic_year_id`, `extracurricular_id`, `student_id`) -> Siswa tidak boleh daftar double di ekskul yang sama pada tahun yang sama.

### 💡 Logic Penting untuk Developer

1.  **Conflict Checker (Jadwal Bentrok)**:
    *   Saat admin menyimpan jadwal baru di `curriculum_timetables`, jalankan query:
        `SELECT count(*) FROM curriculum_timetables WHERE teacher_id = ? AND day = ? AND time_slot = ?`.
    *   Jika hasil > 0, tolak simpan dan beri alert: "Guru tersebut sudah mengajar di kelas X pada jam ini!".

2.  **Dropdown Jurnal Mengajar (Modul 12)**:
    *   Saat guru mengisi jurnal untuk Mapel Matematika Kelas 7, sistem mengambil data dari tabel `curriculum_lesson_plans`:
        `WHERE subject_id = [ID_MTK] AND grade_level = 7`.
    *   Inilah kenapa struktur data `lesson_plans` (TP/ATP) sangat penting diinput di awal tahun.

3.  **Copy-Paste Kurikulum**:
    *   Fitur "Clone from Last Year" sangat dibutuhkan.
    *   Admin tidak perlu input ulang struktur kurikulum & mapel setiap tahun ajaran baru. Cukup copy row dari `academic_year_id` tahun lalu ke tahun ini.