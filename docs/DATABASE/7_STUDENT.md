# 6. STUDENT DATABASES

## 6.1. Tabel `students`
Tabel ini menyimpan entitas siswa yang terikat pada **Satu Lembaga**.

**Logic**: Jika Fauzan sekolah di MI, lalu lulus dan lanjut ke SMP (di yayasan yang sama), maka Fauzan akan memiliki 2 baris data di tabel ini (satu dengan `institution_id` MI, satu lagi SMP). Penghubung historisnya adalah `NIK` atau `NISY`.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id. |
| `candidate_id` | BIGINT | Foreign Key, Nullable. Link ke data pendaftaran (PSB). |
| `user_id` | BIGINT | Foreign Key, Nullable. Link ke akun login siswa. |
| `public_id` | CHAR(10) | Unique. NanoID/Random String 10 digit (Parameter URL aman). |
| `nisy` | VARCHAR(20) | Unique Global. Nomor Induk Santri Yayasan. |
| `nis` | VARCHAR(20) | Nullable. Nomor Induk Siswa (Lokal Sekolah). |
| `nisn` | VARCHAR(10) | Unique Global, Nullable. Nomor Induk Siswa Nasional (Kemdikbud). |
| `nik` | VARCHAR(16) | Index. Nomor Induk Kependudukan. |
| `name` | VARCHAR(255) | Not Null. Nama Lengkap (Sesuai Akta/Ijazah). |
| `nickname` | VARCHAR(50) | Nullable. Nama Panggilan. |
| `gender` | ENUM | Pilihan: `l`, `p`. |
| `pob` | VARCHAR(100) | Tempat Lahir. |
| `dob` | DATE | Tanggal Lahir. |
| `blood_type` | ENUM | `a`, `b`, `ab`, `o`, `tidak_diketahui`. |
| `religion` | ENUM | Default `islam`. |
| `address` | TEXT | Alamat domisili saat ini (Jalan/Dusun). |
| `rt` | VARCHAR(5) | Nullable. |
| `rw` | VARCHAR(5) | Nullable. |
| `province_code` | CHAR(2) | Nullable. Kode Provinsi. |
| `city_code` | CHAR(4) | Nullable. Kode Kabupaten/Kota. |
| `district_code` | CHAR(7) | Nullable. Kode Kecamatan. |
| `village_code` | CHAR(10) | Nullable. Kode Desa/Kelurahan. |
| `postal_code` | VARCHAR(10) | Nullable. |
| `transportation` | VARCHAR(50) | Nullable. Alat transportasi ke sekolah. |
| `residence_type` | ENUM | Nullable. `dengan_orang_tua`, `pondok`, `wali_lain`, `kost`. |
| `distance_to_school` | DECIMAL(5,2) | Nullable. Jarak ke sekolah (KM). |
| `kps_number` | VARCHAR(30) | Nullable. Nomor Kartu Perlindungan Sosial. |
| `pip_number` | VARCHAR(30) | Nullable. Nomor Program Indonesia Pintar. |
| `photo_path` | VARCHAR(255) | Nullable. Path foto profil siswa. |
| `status` | ENUM | Default `aktif`. Pilihan: `aktif`, `lulus`, `pindah`, `dikeluarkan`, `meninggal`, `diskors`. |
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

**Index**: `name`, `nik`, `status`.

## 6.2. Tabel `student_parents`
Data Ayah & Ibu setiap siswa.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `student_id` | BIGINT | Foreign Key ke students.id. (Cascade on delete). |
| `type` | ENUM | `ayah`, `ibu`. |
| `nik` | VARCHAR(16) | Nullable. |
| `name` | VARCHAR | Nama Lengkap. |
| `phone` | VARCHAR(20) | Nullable. |
| `email` | VARCHAR | Nullable. |
| `last_education` | ENUM | Nullable. Pilihan: `sd`, `smp`, `sma`, `d1`, `d2`, `d3`, `s1`, `s2`, `s3`, `tidak_sekolah`. |
| `job` | ENUM | Nullable. Daftar pekerjaan (Buruh, Dokter, dll). |
| `income` | ENUM | Nullable. Daftar range penghasilan. |
| `address` | TEXT | Alamat Lengkap. |
| `rt` - `postal_code` | VARIOUS | Prefix wilayah (mirip students). |
| `is_alive` | BOOLEAN | Default true. |
| `is_guardian` | BOOLEAN | Nullable. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

**Index**: `student_id`, `type`.

## 6.3. Tabel `student_documents`
Berkas Siswa.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `file_type` | ENUM | `foto`, `kk`, `akta_lahir`, `ijazah`, `skl`, `kip`, `ktp_ortu`, `lainnya`. |
| `file_name` | VARCHAR | Nama file (asli/tampilan). |
| `file_path` | VARCHAR | Path file (Private Storage). |
| `is_valid` | BOOLEAN | Nullable. |
| `notes` | TEXT | Nullable. |
| `created_at` | TIMESTAMP | Waktu dibuat. |

**Index**: `student_id`, `file_type`.

### 💡 Catatan Implementasi untuk Developer

1.  **NanoID (`public_id`)**:
    *   Sangat krusial untuk fitur Student Switcher di Dashboard Wali.
    *   Jangan gunakan Auto Increment ID (`id`) di URL.
    *   Gunakan `public_id` di URL (misal: `/wali/student/V1StG9y2kA`).

2.  **Tracking Siswa Lintas Jenjang**:
    *   Siswa MI beda row dengan Siswa SMP.
    *   Cara mencari "Riwayat Pendidikan Fauzan": `SELECT * FROM students WHERE nik = '3209...' ORDER BY join_date ASC`.

3.  **Status Enum**:
    *   Status `aktif` adalah kunci untuk tagihan SPP. Jika status berubah jadi `pindah` (Pindah), sistem Finance harus otomatis stop generate invoice.

4.  **Data Wali?**
    *   Data wali / hak akses login keluarga tidak ada di tabel ini, karena menggunakan tabel terpisah (`guardians`) dengan relasi Many-to-Many di Modul 7.