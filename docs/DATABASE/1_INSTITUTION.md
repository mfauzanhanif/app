# 1. INSTITUTION DATABASES

## 1.1. Tabel `institutions`

| Field             | Type         | Deskripsi                                                                                          |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| id                | BIGINT       | Primary key, Auto Increment. ID Unik Lembaga.                                                      |
| code              | VARCHAR(20)  | Unique. Kode singkat lembaga (misal: PONTREN, MI SMP).                                             |
| slug              | VARCHAR(100) | Unique. URL-friendly identifier (misal: smp-plus-dar-al-tauhid).                                   |
| domain            | VARCHAR(100) | Unique, Nullable. Domain/Subdomain khusus untuk fitur Multi-Tenant (misal: mis.daraltauhid.com).   |
| name              | VARCHAR(255) | Not Null. Nama resmi lembaga.                                                                      |
| no_statistic      | VARCHAR(50)  | Nullable. Nomor Statistik (NSM/NSS/NSPP).                                                          |
| npsn              | VARCHAR(20)  | Nullable. Nomor Pokok Statistik Nasional.                                                          |
| is_internal       | BOOLEAN      | Default true. true = Milik Yayasan, false = Mitra/Binaan.                                          |
| category          | ENUM         | Not Null. Kategori umum: PESANTREN, FORMAL, NON_FORMAL, SOSIAL.                                    |
| type              | ENUM         | Not Null. Jenjang spesifik (Lihat Daftar Enum di bawah).                                           |
| headmaster_id     | BIGINT       | Nullable. Foreign Key ke `employees.id`.                                                           |
| email             | VARCHAR(255) | Nullable. Email resmi lembaga.                                                                     |
| phone             | VARCHAR(50)  | Nullable. Nomor telepon kantor.                                                                    |
| address           | TEXT         | Nullable. Alamat lengkap.                                                                          |
| rt                | VARCHAR(5)   | Nullable. RT.                                                                                      |
| rw                | VARCHAR(5)   | Nullable. RW.                                                                                      |
| province_code     | CHAR(2)      | Nullable. Kode Provinsi (Foreign Key: `provinces.code`).                                           |
| city_code         | CHAR(4)      | Nullable. Kode Kabupaten/Kota (Foreign Key: `cities.code`).                                        |
| district_code     | CHAR(7)      | Nullable. Kode Kecamatan (Foreign Key: `districts.code`).                                          |
| village_code      | CHAR(10)     | Nullable. Kode Desa/Kelurahan (Foreign Key: `villages.code`).                                      |
| postal_code       | VARCHAR(10)  | Nullable. Kode Pos.                                                                                |
| logo_path         | VARCHAR(255) | Nullable. Lokasi file logo.                                                                        |
| letterhead_path   | VARCHAR(255) | Nullable. Lokasi file gambar Kop Surat.                                                            |
| parent_id         | BIGINT       | Foreign Key, Nullable. ID Induk Lembaga (Self-Reference ke institutions.id). NULL = Yayasan Pusat. |
| is_active         | BOOLEAN      | Default true. Status operasional lembaga.                                                          |
| created_at        | TIMESTAMP    | Waktu dibuat.                                                                                      |
| updated_at        | TIMESTAMP    | Waktu terakhir diupdate.                                                                           |
| deleted_at        | TIMESTAMP    | Nullable. Waktu soft delete.                                                                       |

**Unique**: `code`, `slug`, `domain`  
**Index**: `code`, `slug`, `domain`, `email`, `phone`  
**Primary Key**: `id`  
**Foreign Key**: `parent_id` -> `institutions.id` (nullable, self-reference), `province_code` -> `provinces.code`, `city_code` -> `cities.code`, `district_code` -> `districts.code`, `village_code` -> `villages.code`

**Relasi**: 
- `parent_id` -> `institutions.id` (self-reference untuk hierarki lembaga)
- `headmaster_id` -> `employees.id` (nullable)

**Enum Reference:**

**Category**: `yayasan`, `pondok`, `formal`, `non_formal`, `sosial`

**Type**:
- `yayasan`
- `pondok`
- `tk`, `sd`, `mi`
- `smp`, `mts`
- `sma`, `ma`, `smk`, `slb`
- `mdta`, `tpq`, `madrasah`
- `lksa`

## 1.2. Tabel `institution_documents` (Berkas Persyaratan)

| Field             | Type         | Deskripsi                                                                                          |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| id                | BIGINT       | Primary key, Auto Increment.                                                                       |
| institution_id    | BIGINT       | Foreign Key ke `institutions.id`. (Cascade on Delete)                                              |
| file_type         | ENUM         | Jenis berkas: `akta_pendirian`, `status`, `sk_operasional`, `ijop`, `sk_akreditasi`, `npwp`, `lainnya`. |
| file_name         | VARCHAR(255) | Nama file asli.                                                                                    |
| file_path         | VARCHAR(255) | Lokasi file disimpan.                                                                              |
| is_valid          | BOOLEAN      | Nullable. Validasi dokumen.                                                                        |
| notes             | TEXT         | Nullable. Catatan verifikasi dokumen.                                                              |
| created_at        | TIMESTAMP    | Waktu dibuat.                                                                                      |
| updated_at        | TIMESTAMP    | Waktu terakhir diupdate.                                                                           |

**Index**: `institution_id`, `file_type`  
**Primary Key**: `id`  
**Foreign Key**: `institution_id` -> `institutions.id`