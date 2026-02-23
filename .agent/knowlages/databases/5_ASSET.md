# 4. ASSET DATABASES

## 4.1. Tabel `asset_categories`
Kategori aset untuk pengelompokan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id (Nullable jika kategori global yayasan). |
| `name` | VARCHAR | Nama Kategori (misal: "Elektronik"). |
| `is_depreciable` | BOOLEAN | Default true. Menandakan apakah kategori ini bisa disusutkan. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

**Relasi**: `institution_id` -> `institutions.id`.

## 4.2. Tabel `buildings`
Menyimpan data gedung.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id. |
| `name` | VARCHAR | Nama Gedung (misal: "Gedung Al-Fatih"). |
| `code` | VARCHAR | Nullable. Kode gedung (misal: "BLD-01"). |
| `total_floors` | INT | Default 1. Total Lantai. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Relasi**: `institution_id` -> `institutions.id`.

## 4.3. Tabel `rooms`
Menyimpan data lokasi fisik dalam gedung.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id. |
| `building_id` | BIGINT | Foreign Key. Relasi ke buildings.id. |
| `name` | VARCHAR | Nama Ruangan (misal: "Kelas 1A"). |
| `code` | VARCHAR | Nullable. Kode Ruangan (misal: "R-101"). |
| `floor_number` | INT | Default 1. Lantai ke-berapa. |
| `capacity` | INT | Default 0. Kapasitas maksimum. |
| `pic_user_id` | BIGINT | Nullable. Penanggung Jawab Ruangan (Foreign Key ke users.id). |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Relasi**: `institution_id` -> `institutions.id`, `building_id` -> `buildings.id`, `pic_user_id` -> `users.id`.

## 4.4. Tabel `assets`
Tabel utama yang menyimpan data setiap unit barang.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `asset_category_id` | BIGINT | Foreign Key ke asset_categories.id. |
| `room_id` | BIGINT | Foreign Key ke rooms.id (Lokasi saat ini). |
| `name` | VARCHAR | Nama Barang (misal: "Laptop Asus ROG"). |
| `code` | VARCHAR | Unique. Kode Inventaris (Barcode/QR Content). |
| `brand` | VARCHAR | Nullable. Merk. |
| `model` | VARCHAR | Nullable. Tipe/Model. |
| `serial_number` | VARCHAR | Nullable. SN dari pabrik. |
| `purchase_date` | DATE | Tanggal pembelian. |
| `purchase_price` | DECIMAL(15,2) | Harga beli. |
| `funding_source` | VARCHAR | Nullable. Sumber Bantuan (BOS, Yayasan). |
| `useful_life_years` | INT | Default 5. |
| `condition` | ENUM | Pilihan: `baik`, `rusak_ringan`, `rusak_berat`. |
| `status` | ENUM | Pilihan: `aktif`, `dipinjam`, `diperbaiki`, `hilang`, `dijual`. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |
| `deleted_at` | TIMESTAMP | Nullable. Waktu soft delete. |

**Index**: `code`, `institution_id`, `status`.

## 4.5. Tabel `asset_mutations`
Mencatat riwayat perpindahan aset antar ruangan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `from_room_id` | BIGINT | Asal ruangan (`rooms.id`). |
| `to_room_id` | BIGINT | Tujuan ruangan (`rooms.id`). |
| `moved_by_user_id` | BIGINT | User ID yang memindahkan. |
| `moved_at` | DATETIME | Waktu perpindahan. |
| `reason` | TEXT | Nullable. Alasan pindah. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

## 4.6. Tabel `asset_lendings`
Peminjaman jangka pendek.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `borrower_user_id` | BIGINT | User Peminjam (Santri/Guru). |
| `approved_by_user_id` | BIGINT | Nullable. User penyetuju (Admin Sarpras). |
| `borrowed_at` | DATETIME | Nullable. Waktu pinjam real. |
| `expected_return_at` | DATETIME | Batas waktu kembali. |
| `returned_at` | DATETIME | Nullable. Waktu real kembali. |
| `status` | ENUM | Default 'diajukan'. Pilihan: `diajukan`, `disetujui`, `dipinjam`, `dikembalikan`, `ditolak`. |
| `purpose` | TEXT | Nullable. Keperluan peminjaman. |
| `notes_condition_after`| TEXT | Nullable. Catatan saat kembali. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

## 4.7. Tabel `asset_maintenances`
Tiket & Perbaikan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `reported_by_user_id` | BIGINT | User pelapor kerusakan. |
| `ticket_number` | VARCHAR | Unique. Nomor tiket. |
| `status` | ENUM | Pilihan: `diajukan`, `disetujui`, `diperbaiki`, `selesai`, `tidak_diperbaiki`. |
| `issue_description` | TEXT | Deskripsi kerusakan. |
| `evidence_photo_path` | VARCHAR | Nullable. Foto kerusakan. |
| `repair_started_at` | DATETIME | Nullable. |
| `repair_finished_at`| DATETIME | Nullable. |
| `technician_name` | VARCHAR | Nullable. Teknisi. |
| `repair_cost` | DECIMAL(15,2) | Default 0. Biaya. |
| `repair_notes` | TEXT | Nullable. Catatan perbaikan. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

## 4.8. Tabel `stock_opnames`
Header Stock Opname.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `auditor_user_id` | BIGINT | User auditor. |
| `title` | VARCHAR | Judul. |
| `audit_date` | DATE | Tanggal audit. |
| `status` | ENUM | Default 'draft'. Pilihan: `draft`, `selesai`. |
| `notes` | TEXT | Nullable. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

## 4.9. Tabel `stock_opname_items`
Detail aset bermasalah saat audit.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `stock_opname_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `actual_status` | ENUM | Pilihan: `baik`, `rusak_ringan`, `rusak_berat`. |
| `auditor_note` | TEXT | Nullable. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |

## 4.10. Tabel `asset_disposals`
Penghapusan aset.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `approved_by_user_id` | BIGINT | Nullable. User penyetuju. |
| `disposal_date` | DATE | Tanggal penghapusan. |
| `reason` | ENUM | Pilihan: `rusak_berat`, `hilang`, `dijual`, `dikirim`. |
| `sale_price` | DECIMAL(15,2) | Default 0. |
| `notes` | TEXT | Nullable. |
| `created_at` | TIMESTAMP | Waktu dibuat. |
| `updated_at` | TIMESTAMP | Waktu terakhir diupdate. |