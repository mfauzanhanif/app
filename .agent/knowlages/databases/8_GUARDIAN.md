# 7. GUARDIAN DATABASES

## 7.1. Tabel `guardians`
Tabel Master Data Wali. Data di sini bersifat global untuk seluruh yayasan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary key, Auto Increment. |
| `user_id` | BIGINT | Foreign Key, Nullable. Link ke akun login (users.id). |
| `guardian_unique_id` | VARCHAR(20) | Unique. ID Unik Wali (misal: WAL-2026-0001). Digunakan sebagai Username Login. |
| `nik` | VARCHAR(16) | Unique. KTP. Kunci utama untuk mencegah duplikasi data saat migrasi PSB. |
| `phone` | VARCHAR(20) | Unique. Nomor WA Aktif. Kunci untuk Broadcast WA Gateway. |
| `email` | VARCHAR(255) | Unique, Nullable. |
| `name` | VARCHAR(255) | Not Null. Nama Lengkap sesuai KTP. |
| `gender` | ENUM | Pilihan: `l` (laki-laki), `p` (perempuan). |
| `pob` | VARCHAR(100) | Nullable. Tempat Lahir. |
| `dob` | DATE | Nullable. Tanggal Lahir. |
| `last_education` | ENUM | Nullable. `sd`, `smp`, `sma`, `d1`, `d2`, `d3`, `s1`, `s2`, `s3`, `tidak_sekolah`. |
| `job` | ENUM | Nullable. Pekerjaan. |
| `income` | ENUM | Nullable. Range penghasilan. |
| `address` | TEXT | Alamat Domisili. |
| `rt` | VARCHAR(5) | Nullable. |
| `rw` | VARCHAR(5) | Nullable. |
| `province_code` | CHAR(2) | Nullable. Foreign Key ke `provinces.code`. |
| `city_code` | CHAR(4) | Nullable. Foreign Key ke `cities.code`. |
| `district_code` | CHAR(7) | Nullable. Foreign Key ke `districts.code`. |
| `village_code` | CHAR(10) | Nullable. Foreign Key ke `villages.code`. |
| `postal_code` | VARCHAR(10) | Nullable. |
| `is_alive` | BOOLEAN | Default true. Status hidup/meninggal. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Unique Constraints**: `guardian_unique_id`, `nik`, `phone`, `email`.

**Index**: `name` (Pencarian), `phone` (Lookup WA).

**Relasi**: `user_id` -> `users.id`.

## 7.2. Tabel `guardian_student` (Pivot Table)
Ini adalah "Jantung" dari fitur Family Mapping. Tabel ini menghubungkan `guardians` dengan `students`. Setiap siswa hanya memiliki maksimal 1 wali aktif (enforcer di database).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `guardian_id` | BIGINT | Foreign Key ke guardians.id. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `relationship` | ENUM | Pilihan: `ayah_kandung`, `ibu_kandung`, `wali`, `ayah_tiri`, `ibu_tiri`, `kerabat`. |
| `created_at` | TIMESTAMP | Waktu relasi dibuat. |
| `updated_at` | TIMESTAMP | Waktu diupdate. |

**Foreign Key**:
*   `guardian_id` -> `guardians.id` (cascade delete).
*   `student_id` -> `students.id` (cascade delete).

**Unique Constraint**: 
1. Kombinasi (`guardian_id`, `student_id`) harus unik.
2. `student_id` harus unik (enforce 1 guardian per student).

### 💡 Logic "Cerdas" Migrasi (Developer Note)

Saat fitur "One Click Migration" di Modul Admission dijalankan, sistem harus melakukan pengecekan berikut sebelum insert ke tabel `guardians`:

1.  **Ambil Data Kandidat**: Ambil data `candidate_parents` (Ayah & Ibu) dari calon siswa yang lulus.
2.  **Cek Duplikasi (Deduplication Logic)**:
    *   Query: `SELECT id FROM guardians WHERE nik = 'NIK_AYAH_CANDIDATE' OR phone = 'NO_WA_AYAH_CANDIDATE' LIMIT 1`.
3.  **Keputusan Sistem**:
    *   **JIKA DITEMUKAN (Found)**: Jangan buat row baru di `guardians`. Ambil `id` yang ditemukan, lalu buat row baru di tabel pivot `guardian_student` yang menghubungkan `guardian_id` lama dengan `student_id` baru.
    *   **JIKA TIDAK DITEMUKAN (Not Found)**: Insert row baru di `guardians`, generate `guardian_unique_id` baru, lalu buat row di tabel pivot.

**Hasil Akhir**: Pak Budi (yang datanya sudah ada karena kakaknya sekolah di situ) otomatis terhubung dengan adiknya tanpa data ganda.

### User Experience (UX) Wali

Dengan struktur ini, saat Pak Budi login menggunakan `guardian_unique_id` atau No WA:

1.  Sistem mencari `guardian_id` miliknya.
2.  Sistem mencari `student_id` mana saja yang terhubung di tabel pivot.
3.  Dashboard menampilkan daftar anaknya dengan jenjangnya.
    *   Ahmad (Pondok - Kelas 10)
    *   Siti (MI - Kelas 4)