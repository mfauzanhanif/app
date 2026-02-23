# 9. BOARDING DATABASES

## 9.1. Dormitory Management (Asrama)

### 9.1.1. Tabel `boarding_buildings` (Gedung Asrama)
Master data gedung/komplek asrama.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id (Pondok). |
| `name` | VARCHAR | Nama Gedung (misal: "Gedung Umar bin Khattab"). |
| `gender` | ENUM | `l` (putra), `p` (putri). Asrama biasanya terpisah ketat. |
| `warden_id` | BIGINT | Foreign Key ke employees.id (Musyrif/Kepala Asrama). |
| `location_description` | TEXT | Deskripsi lokasi. |

### 9.1.2. Tabel `boarding_rooms` (Kamar Santri)
Detail kamar dalam gedung.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `building_id` | BIGINT | Foreign Key ke boarding_buildings.id. |
| `name` | VARCHAR | Nama/Nomor Kamar (misal: "Kamar 101"). |
| `capacity` | INT | Kapasitas maksimal santri (misal: 20 orang). |
| `current_occupancy` | INT | Jumlah penghuni saat ini (untuk validasi kuota). |
| `room_leader_id` | BIGINT | Foreign Key ke students.id (Ketua Kamar). |

### 9.1.3. Tabel `boarding_placements` (Penempatan)
Mencatat sejarah santri pernah tinggal di kamar mana saja (Penting untuk melacak barang hilang atau sejarah teman sekamar).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `room_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. Tahun Ajaran saat penempatan. |
| `check_in_date` | DATE | Tanggal masuk kamar. |
| `check_out_date` | DATE | Nullable. Tanggal pindah/keluar. |
| `is_active` | BOOLEAN | Default true. Penanda kamar aktif saat ini. |

## 9.2. Permission System (Perizinan - The Integration Core)

### 9.2.1. Tabel `boarding_permissions`
Tabel ini mencatat izin keluar komplek pondok (Pulang/Sakit/Tugas).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `type` | ENUM | `sakit_di_asrama`, `sakit_dirawat`, `pulang`, `tugas`, `izin_sebentar`. |
| `start_date` | DATETIME | Waktu mulai izin. |
| `end_date` | DATETIME | Waktu rencana kembali. |
| `reason` | TEXT | Alasan izin. |
| `status` | ENUM | `diajukan`, `disetujui_musyrif`, `disetujui_pengasuh`, `ditolak`, `aktif` (Sedang di luar), `kembali`, `terlambat`. |
| `approved_by` | BIGINT | User ID Pengasuh yang menyetujui. |
| `security_check_out` | DATETIME | Nullable. Waktu real scan QR di pos satpam saat keluar. |
| `security_check_in` | DATETIME | Nullable. Waktu real scan QR di pos satpam saat kembali. |
| `document_path` | VARCHAR | Upload surat dokter / surat tugas. |

**Index**: `student_id`, `start_date`, `status`.

## 9.3. Discipline & Achievement (Kedisiplinan)

### 9.3.1. Tabel `boarding_violation_masters` (Katalog Pelanggaran)
Master data jenis pelanggaran dan poinnya (Buku Saku Santri).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `name` | VARCHAR | Nama Pelanggaran (misal: "Merokok", "Kabur", "Terlambat Jamaah"). |
| `category` | ENUM | `ringan`, `sedang`, `berat`, `sangat_berat`. |
| `default_points` | INT | Poin default (misal: Merokok = 100 poin). |

### 9.3.2. Tabel `boarding_records` (Catatan Kasus)
Log kejadian pelanggaran atau prestasi santri.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `violation_master_id` | BIGINT | Nullable. Link ke master pelanggaran. |
| `record_type` | ENUM | `pelanggaran`, `prestasi`. |
| `date` | DATETIME | Waktu kejadian. |
| `points` | INT | Poin yang didapat/dikurangi. |
| `sanction` | VARCHAR | Hukuman yang diberikan (misal: "Gundul", "Bersih WC"). |
| `description` | TEXT | Kronologi kejadian. |
| `reported_by` | BIGINT | User ID pelapor (Musyrif/Keamanan). |
| `status` | ENUM | `menunggu`, `diproses`, `selesai`. |

### 💡 Logic Integrasi Perizinan (Kunci Super App)

Ini adalah bagian terpenting sesuai request Anda: "Integrasi Izin Boarding ke Akademik".

#### Skenario:
Santri bernama Ahmad izin pulang (sakit) selama 3 hari, dari Senin s.d. Rabu.

1.  **Input**: Pengasuh menginput data di tabel `boarding_permissions`. Status = `disetujui_pengasuh`.
2.  **Trigger/Event (Backend Laravel)**:
    *   Sistem mendeteksi izin tipe `sakit` atau `pulang` yang mencakup hari efektif sekolah.
    *   Sistem mengeksekusi Service ke **Modul Journal (12)**.
3.  **Eksekusi (Auto-Attendance)**:
    *   Sistem mencari tabel presensi harian (`journal_homeroom_attendances` atau sejenisnya) untuk tanggal Senin, Selasa, dan Rabu.
    *   Sistem melakukan Insert/Update status kehadiran Ahmad menjadi `IZIN_PONDOK` atau `SAKIT`.
    *   Kolom `notes` di jurnal diisi otomatis: "Izin Pulang (Ref: Permit #1023)".
4.  **Hasil**:
    *   Saat Wali Kelas membuka aplikasi di hari Senin pagi untuk absen, nama Ahmad sudah otomatis tercentang "Izin".
    *   Wali Kelas tidak perlu tanya ke pengasuh "Ahmad ke mana?".
    *   Orang tua mendapat notifikasi WA: "Ananda Ahmad telah izin pulang dari tgl X s.d Y".