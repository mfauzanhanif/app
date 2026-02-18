# 6. STUDENT DATABASES

## 6.1. Tabel `students`
Tabel ini menyimpan entitas siswa yang terikat pada **Satu Lembaga**.

**Logic**: Jika Fauzan sekolah di MI, lalu lulus dan lanjut ke SMP (di yayasan yang sama), maka Fauzan akan memiliki 2 baris data di tabel ini (satu dengan `institution_id` MI, satu lagi SMP). Penghubung historisnya adalah `NIK` atau `NISY`.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id. |
| `candidate_id` | BIGINT | Foreign Key, Nullable. Link ke data pendaftaran (PSB) untuk tracking sejarah masuk. |
| `user_id` | BIGINT | Foreign Key, Nullable. Link ke akun login siswa (jika siswa boleh login). |
| `public_id` | CHAR(10) | Unique. NanoID/Random String 10 digit. Digunakan sebagai parameter URL aman untuk fitur "Student Switcher" Wali Santri. |
| `nisy` | VARCHAR(20) | Unique Global. Nomor Induk Santri Yayasan. (Satu ID seumur hidup di yayasan). |
| `nis` | VARCHAR(20) | Unique per Institution. Nomor Induk Siswa (Lokal Sekolah). |
| `nisn` | VARCHAR(10) | Unique Global, Nullable. Nomor Induk Siswa Nasional (Kemdikbud). |
| `nik` | VARCHAR(16) | Index. Nomor Induk Kependudukan. Kunci utama untuk menghubungkan data siswa lintas jenjang. |
| `name` | VARCHAR(255) | Not Null. Nama Lengkap (Sesuai Akta/Ijazah). |
| `nickname` | VARCHAR(50) | Nullable. Nama Panggilan. |
| `gender` | ENUM | `L`, `P`. |
| `pob` | VARCHAR(100) | Tempat Lahir. |
| `dob` | DATE | Tanggal Lahir. |
| `blood_type` | ENUM | `a`, `b`, `ab`, `o`, `tidak_diketahui`. |
| `religion` | ENUM | Default `islam`. |
| `address` | TEXT | Alamat domisili saat ini (Jalan/Dusun). |
| `rt` | VARCHAR(5) | RT. |
| `rw` | VARCHAR(5) | RW. |
| `village` | VARCHAR(100) | Desa/Kelurahan. |
| `district` | VARCHAR(100) | Kecamatan. |
| `city` | VARCHAR(100) | Kota/Kabupaten. |
| `province` | VARCHAR(100) | Provinsi. |
| `postal_code` | VARCHAR(10) | Kode Pos. |
| `transportation` | VARCHAR(50) | Alat transportasi ke sekolah (Jalan kaki, Sepeda, Antar Jemput). |
| `residence_type` | ENUM | `dengan_orang_tua`, `pondok`, `wali_lain`, `kost`. |
| `distance_to_school` | DECIMAL(5,2) | Jarak ke sekolah (KM). |
| `kps_number` | VARCHAR(30) | Nullable. Nomor Kartu Perlindungan Sosial (jika ada). |
| `pip_number` | VARCHAR(30) | Nullable. Nomor Program Indonesia Pintar (jika ada). |
| `photo_path` | VARCHAR(255) | Nullable. Path foto profil siswa (Seragam). |
| `status` | ENUM | `aktif`, `lulus`, `pindah`, `dikeluarkan`, `meninggal`, `diskors`. |
| `join_date` | DATE | Tanggal resmi masuk sekolah. |
| `graduate_date` | DATE | Nullable. Tanggal lulus/keluar. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Unique Constraints**:
*   `public_id` (Global)
*   `nisy` (Global)
*   `nisn` (Global - ignore null)
*   `(institution_id, nis)` -> Kombinasi Lembaga & NIS Lokal harus unik.

**Index**:
*   `name` (Pencarian nama)
*   `nik` (Pencarian riwayat)
*   `status` (Filter siswa aktif)
*   `institution_id`

**Relasi**:
*   `institution_id` -> `institutions.id`
*   `candidate_id` -> `candidates.id`
*   `user_id` -> `users.id`

### 💡 Catatan Implementasi untuk Developer

1.  **NanoID (`public_id`)**:
    *   Sangat krusial untuk fitur Student Switcher di Dashboard Wali.
    *   Jangan gunakan Auto Increment ID (`id`) di URL (misal: `/wali/student/15`) karena orang iseng bisa ganti jadi `/wali/student/16` dan melihat data anak orang lain.
    *   Gunakan `public_id` di URL (misal: `/wali/student/V1StG9y2kA`).
    *   Di Laravel Model `Student.php`, gunakan trait HasUuids atau package NanoID generator pada event creating.

2.  **Tracking Siswa Lintas Jenjang**:
    *   Karena Anda memisahkan baris data per lembaga (Siswa MI beda row dengan Siswa SMP), cara untuk melihat "Riwayat Pendidikan Fauzan dari TK sampai MA" adalah dengan melakukan query berdasarkan NIK.
    *   `SELECT * FROM students WHERE nik = '3209...' ORDER BY join_date ASC`.

3.  **Status Enum**:
    *   Status `aktif` adalah kunci untuk tagihan SPP. Jika status berubah jadi `pindah` (Pindah), sistem Finance harus otomatis stop generate invoice (sesuai request Anda di Modul 8).

4.  **Data Wali?**
    *   Data wali tidak ada di sini karena menggunakan tabel terpisah (`guardians`) dengan relasi Many-to-Many yang akan kita bahas di Modul 7.