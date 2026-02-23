# 8. STUDENT AFFAIRS DATABASES

## 8.1. Tabel `student_mutations`
Tabel ini berfungsi sebagai Log Transaksi status siswa. Setiap kali ada perubahan status drastis (Keluar/Masuk/DO), wajib dicatat di sini.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `type` | ENUM | `mutasi_masuk`, `mutasi_keluar`, `dikeluarkan`, `mengundurkan_diri`, `meninggal`. |
| `mutation_date` | DATE | Not Null. Tanggal efektif mutasi. Tanggal ini menjadi Cut-off untuk tagihan Finance. |
| `decree_number` | VARCHAR | Nomor Surat Keputusan/Surat Pindah (SK). |
| `reason` | TEXT | Alasan kepindahan (misal: "Ikut Orang Tua Pindah Tugas"). |
| `destination` | VARCHAR | Nama Sekolah Tujuan (Jika Pindah Keluar). |
| `origin` | VARCHAR | Nama Sekolah Asal (Jika Pindah Masuk). |
| `npsn_destination` | VARCHAR(20) | Nullable. NPSN sekolah tujuan (Untuk data Dapodik/EMIS). |
| `document_path` | VARCHAR | File Scan Surat Pindah/SK (PDF). |
| `notes` | TEXT | Catatan tambahan. |
| `created_by` | BIGINT | User ID Staff Kesiswaan yang menginput. |
| `created_at` | TIMESTAMP | Waktu dibuat. |

**Index**: `student_id`, `mutation_date`, `type`.

## 8.2. Tabel `student_achievements` (Opsional tapi Recommended)
Kesiswaan biasanya juga menangani prestasi siswa.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `academic_year_id` | BIGINT | Foreign Key. |
| `title` | VARCHAR | Judul Prestasi (misal: "Juara 1 Lomba Pidato"). |
| `level` | ENUM | `sekolah`, `kecamatan`, `kabupaten`, `provinsi`, `nasional`, `internasional`. |
| `organizer` | VARCHAR | Penyelenggara Lomba. |
| `date` | DATE | Tanggal Lomba. |
| `certificate_path` | VARCHAR | Scan Sertifikat. |
| `description` | TEXT | Deskripsi. |

## 8.3. Tabel `student_violations` (Opsional - Pelanggaran Sekolah)
**Penting**: Bedakan dengan pelanggaran Asrama (Boarding). Ini pelanggaran di jam sekolah (misal: Telat, Bolos Mapel, Merokok di kantin).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `date` | DATE | Tanggal pelanggaran. |
| `violation_type` | ENUM | `ringan`, `sedang`, `berat`. |
| `point` | INT | Poin pelanggaran (misal: Telat = 5 poin). |
| `description` | TEXT | Deskripsi kejadian. |
| `sanction` | VARCHAR | Hukuman yang diberikan (misal: "Skorsing 3 hari"). |

### 💡 Logic Integrasi Mutasi (Kunci Super App)

Anda menyebutkan integrasi dengan **Modul Finance** (Freeze/Unfreeze). Berikut logika database-nya:

#### Skenario: Siswa Pindah Keluar
1.  Admin Kesiswaan menginput data di tabel `student_mutations` dengan tipe `mutasi_keluar` dan tanggal `2026-02-20`.

2.  **Backend Logic (Observer/Service)**:
    *   Update tabel `students` (Modul 6): Set kolom `status` menjadi `pindah`.
    *   Update tabel `students` (Modul 6): Set kolom `graduate_date` menjadi `2026-02-20`.

3.  **Finance Logic (Modul 14)**:
    *   Saat Cron Job generate tagihan bulan Maret berjalan (biasanya tgl 25 Feb atau 1 Mar), sistem akan query:
        `SELECT * FROM students WHERE status = 'aktif'`.
    *   Karena status siswa tersebut sudah `pindah`, maka **Invoice Bulan Maret TIDAK AKAN TER-GENERATE**. (Otomatis Freeze).

#### Skenario: Tagihan Pro-rata (Advance Logic)
Jika siswa pindah tanggal 10 Februari, apakah dia bayar SPP Februari Full atau sebagian?
Dengan adanya kolom `mutation_date` di schema ini, Bendahara bisa menghitung manual atau sistem bisa di-set otomatis (misal: Pindah di atas tanggal 15 bayar full, di bawah tanggal 15 bayar setengah).