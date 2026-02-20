# 3. EMPLOYEE DATABASES

## 3.1. Tabel `employees`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `user_id` | BIGINT | Foreign Key, Nullable. Link ke akun login (users.id). |
| `nik` | VARCHAR(16) | Unique. Primary Identifier Personal (KTP). |
| `nipy` | VARCHAR(30) | Unique, Nullable. NIP Yayasan/PNS. |
| `nuptk` | VARCHAR(30) | Nullable. Penting untuk sekolah. |
| `npwp` | VARCHAR(30) | Nullable. Nomor Pokok Wajib Pajak. |
| `name` | VARCHAR | Not Null. Nama Lengkap. |
| `place_of_birth` | VARCHAR | Not Null. Tempat Lahir. |
| `date_of_birth` | DATE | Not Null. Tanggal Lahir. |
| `gender` | ENUM | Not Null. Pilihan: `l`, `p`. |
| `address` | TEXT | Nullable. Alamat Lengkap. |
| `rt`                 | VARCHAR(5)   | Nullable. RT.                                                                                      |
| `rw`                 | VARCHAR(5)   | Nullable. RW.                                                                                      |
| `province_code`      | CHAR(2)      | Nullable. Kode Provinsi (Foreign Key: `provinces.code`).                                           |
| `city_code`          | CHAR(4)      | Nullable. Kode Kabupaten/Kota (Foreign Key: `cities.code`).                                        |
| `district_code`      | CHAR(7)      | Nullable. Kode Kecamatan (Foreign Key: `districts.code`).                                          |
| `village_code`       | CHAR(10)     | Nullable. Kode Desa/Kelurahan (Foreign Key: `villages.code`).                                      |
| `postal_code`        | VARCHAR(10)  | Nullable. Kode Pos.                                                                                |
| `phone` | VARCHAR(20) | Not Null. Nomor Telepon/WA. |
| `email` | VARCHAR | Unique. Email Pribadi/Kontak. |
| `last_education` | ENUM | Nullable. Pendidikan Terakhir. `sd`, `smp`, `sma`, `d1`, `d2`, `d3`, `s1`, `s2`, `s3`, `tidak_sekolah` |
| `major` | VARCHAR | Nullable. Jurusan/Prodi. |
| `university` | VARCHAR | Nullable. Universitas/Institusi Pendidikan. |
| `bank_name` | VARCHAR | Nullable. Nama Bank. |
| `bank_account` | VARCHAR | Nullable. Nomor Rekening. |
| `bank_account_holder` | VARCHAR | Nullable. Atas Nama Rekening. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Unique**: `nik`, `nipy`, `email`  
**Primary Key**: `id`  
**Foreign Key**: `user_id` -> `users.id` (nullable, nullOnDelete), `province_code` -> `provinces.code`, `city_code` -> `cities.code`, `district_code` -> `districts.code`, `village_code` -> `villages.code`  
**Relasi**:
- `user_id` -> `users.id` (User account)

---

## 3.2. Tabel `employee_assignments`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `employee_id` | BIGINT | Foreign Key. Relasi ke `employees.id`. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke `institutions.id` (Tempat tugas). |
| `position` | VARCHAR | Not Null. Jabatan (Guru Kelas, Kepala Sekolah, Staff TU). |
| `employment_status` | ENUM | Not Null. Pilihan: `tetap`, `tidak_tetap`, `pns`, `pengabdian`, `kontrak`, `magang`. |
| `start_date` | DATE | Not Null. Tanggal mulai bertugas. |
| `end_date` | DATE | Nullable. Tanggal selesai bertugas (Null jika permanent). |
| `is_active` | BOOLEAN | Default true. Status aktif jabatan ini. |
| `basic_salary` | DECIMAL(15, 2) | Default 0. Gaji Pokok per penugasan. |
| `allowance_fixed` | DECIMAL(15, 2) | Default 0. Tunjangan Jabatan tetap. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

**Primary Key**: `id`  
**Foreign Key**: `employee_id` -> `employees.id` (cascade delete), `institution_id` -> `institutions.id` (cascade delete)  

---

## 3.3. Tabel `employee_documents`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key. |
| `employee_id` | BIGINT | Foreign Key ke `employees.id`. (cascade on delete) |
| `file_type` | ENUM | Jenis Dokumen: `foto`, `cv`, `ktp`, `kk`, `akta_lahir`, `ijazah`, `npwp`, `sertifikat`, `lainnya`. |
| `file_name` | VARCHAR | Nama file. |
| `file_path` | VARCHAR | Path file. Disimpan di `Storage::private`. |
| `is_valid` | BOOLEAN | Nullable. Penanda validasi. |
| `notes` | TEXT | Nullable. Catatan jika diperlukan. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

**Primary Key**: `id`  
**Foreign Key**: `employee_id` -> `employees.id` (cascade delete)
**Index**: `employee_id`, `file_type`
