# 2. PERIODE DATABASES

## 2.1. Tabel `academic_years`

| Field      | Type        | Deskripsi                                                                     |
| ---------- | ----------- | ----------------------------------------------------------------------------- |
| id         | BIGINT      | Primary key, Auto Increment. ID Tahun Ajaran.                                 |
| name       | VARCHAR(20) | Unique. Nama Tahun Ajaran (Contoh: 2025/2026).                                |
| start_date | DATE        | Not Null. Tanggal mulai (biasanya 1 Juli).                                    |
| end_date   | DATE        | Not Null. Tanggal selesai (biasanya 30 Juni tahun depannya).                  |
| is_active  | BOOLEAN     | Default false. Status aktif global. Hanya boleh ada 1 row yang bernilai true. |
| created_at | TIMESTAMP   | Waktu dibuat.                                                                 |
| updated_at | TIMESTAMP   | Waktu terakhir diupdate.                                                      |
| deleted_at | TIMESTAMP   | Nullable. Waktu soft delete.                                                  |

**Unique**: `name`  
**Index**: `name`, `is_active`  
**Primary Key**: `id`

## 2.2. Tabel `academic_periods`

| Field            | Type      | Deskripsi                                           |
| ---------------- | --------- | --------------------------------------------------- |
| id               | BIGINT    | Primary key, Auto Increment. ID Semester.           |
| academic_year_id | BIGINT    | Foreign Key, Not Null. Relasi ke academic_years.id. |
| name             | ENUM      | Not Null. Pilihan: Ganjil, Genap.                   |
| start_date       | DATE      | Not Null. Tanggal mulai semester.                   |
| end_date         | DATE      | Not Null. Tanggal selesai semester.                 |
| is_active        | BOOLEAN   | Default false. Status aktif semester saat ini.      |
| created_at       | TIMESTAMP | Waktu dibuat.                                       |
| updated_at       | TIMESTAMP | Waktu terakhir diupdate.                            |

**Unique**: `academic_year_id`, `name` (kombinasi)  
**Index**: `academic_year_id`, `name`, `is_active`  
**Primary Key**: `id`  
**Foreign Key**: `academic_year_id` -> `academic_years.id`  
**Relasi**:

- `academic_year_id` -> `academic_years.id`

Constraint: Kombinasi (academic_year_id, name) harus unik.

## 2.3. Tabel `fiscal_periods`

| Field      | Type        | Deskripsi                                                                                             |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| id         | BIGINT      | Primary key, Auto Increment. ID Tahun Buku.                                                           |
| name       | VARCHAR(20) | Unique. Nama Tahun Buku (Contoh: 2026).                                                               |
| start_date | DATE        | Not Null. Tanggal mulai (biasanya 1 Januari).                                                         |
| end_date   | DATE        | Not Null. Tanggal selesai (biasanya 31 Desember).                                                     |
| is_active  | BOOLEAN     | Default false. Menandakan periode akuntansi yang sedang berjalan.                                     |
| status     | ENUM        | Default OPEN. Status Audit: OPEN (Bisa input), CLOSED (Tutup Sementara), AUDITED (Terkunci Permanen). |
| created_at | TIMESTAMP   | Waktu dibuat.                                                                                         |
| updated_at | TIMESTAMP   | Waktu terakhir diupdate.                                                                              |

**Unique**: `name`  
**Index**: `name`, `is_active`, `status`  
**Primary Key**: `id`
