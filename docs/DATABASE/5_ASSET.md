# 4. ASSET DATABASES

## 4.1. Tabel `asset_categories`
Kategori aset untuk pengelompokan (misal: Elektronik, Mebel, Kendaraan).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id (Nullable jika kategori global yayasan). |
| `name` | VARCHAR | Nama Kategori (misal: "Elektronik"). |
| `code` | VARCHAR(10) | Kode Kategori (misal: "ELK"). Digunakan untuk generate Kode Aset. |
| `description` | TEXT | Nullable. |
| `depreciation_rate` | DECIMAL | Nullable. Persentase penyusutan per tahun (jika perlu hitung nilai aset). |

**Relasi**: `institution_id` -> `institutions.id`.

## 4.2. Tabel `asset_rooms` (Master Ruangan)
Menyimpan data lokasi fisik.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. Relasi ke institutions.id. |
| `pic_employee_id` | BIGINT | Nullable. Penanggung Jawab Ruangan (Foreign Key ke employees.id). |
| `name` | VARCHAR | Nama Ruangan (misal: "Lab Komputer 1"). |
| `building` | VARCHAR | Nama Gedung (misal: "Gedung Al-Fatih"). |
| `floor` | INT | Lantai ke-berapa. |
| `capacity` | INT | Kapasitas orang. |
| `facilities` | JSON | Fasilitas default (misal: ["AC", "Wifi"]). |
| `is_active` | BOOLEAN | Default true. |

**Relasi**: `pic_employee_id` -> `employees.id`.

## 4.3. Tabel `assets`
Tabel utama yang menyimpan data setiap unit barang.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `category_id` | BIGINT | Foreign Key ke asset_categories.id. |
| `room_id` | BIGINT | Foreign Key ke asset_rooms.id (Lokasi saat ini). |
| `code` | VARCHAR(50) | Unique. Kode Inventaris (misal: ELK/2026/001). Auto-generated. |
| `name` | VARCHAR | Nama Barang (misal: "Laptop Asus ROG"). |
| `brand` | VARCHAR | Merk. |
| `model` | VARCHAR | Tipe/Model. |
| `serial_number` | VARCHAR | Nullable. SN dari pabrik. |
| `purchase_date` | DATE | Tanggal pembelian. |
| `purchase_price` | DECIMAL(15,2) | Harga beli. |
| `funding_source` | ENUM | `bos`, `yayasan`, `hibah`, `wakaf`, `lainnya`. |
| `condition` | ENUM | `baik`, `rusak_ringan`, `rusak_berat`, `hilang`. |
| `status` | ENUM | `tersedia`, `dipinjam`, `perbaikan`, `dihapus`. |
| `uuid` | UUID | Unique. Untuk QR Code. |
| `image_path` | VARCHAR | Foto aset. |

**Index**: `code`, `uuid`, `status`.

## 4.4. Tabel `asset_stock_opnames` (Audit)
Header kegiatan Stock Opname.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `title` | VARCHAR | Judul Audit (misal: "Opname Semester Ganjil 2026"). |
| `date` | DATE | Tanggal pelaksanaan. |
| `auditor_id` | BIGINT | User yang melakukan audit. |
| `status` | ENUM | `draft`, `selesai`. |
| `notes` | TEXT | Catatan umum. |

## 4.5. Tabel `asset_stock_opname_details` (Hasil Audit)
Detail per barang saat audit.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `stock_opname_id` | BIGINT | Foreign Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `status_system` | VARCHAR | Status di sistem sebelum scan (misal: Ada di Ruang A). |
| `status_actual` | ENUM | `cocok`, `hilang`, `salah_lokasi`, `rusak`. |
| `notes` | VARCHAR | Catatan temuan (misal: "Barang ada di Gudang, bukan di Kelas"). |

## 4.6. Tabel `asset_mutations` (Perpindahan)
Mencatat riwayat perpindahan aset antar ruangan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `from_room_id` | BIGINT | Nullable. Asal ruangan. |
| `to_room_id` | BIGINT | Tujuan ruangan. |
| `moved_by` | BIGINT | User ID yang memindahkan. |
| `moved_at` | TIMESTAMP | Waktu perpindahan. |
| `reason` | VARCHAR | Alasan pindah. |

## 4.7. Tabel `asset_lendings` (Peminjaman)
Peminjaman jangka pendek oleh Siswa/Guru.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `user_id` | BIGINT | Peminjam (Bisa Guru/Siswa/Wali). |
| `asset_id` | BIGINT | Foreign Key. |
| `borrow_date` | DATETIME | Waktu pinjam. |
| `expected_return_date` | DATETIME | Batas waktu kembali. |
| `actual_return_date` | DATETIME | Nullable. Waktu real kembali. |
| `status` | ENUM | `tertunda`, `disetujui`, `aktif`, `dikembalikan`, `terlambat`, `ditolak`. |
| `approver_id` | BIGINT | Nullable. Admin Sarpras yang menyetujui. |
| `notes` | TEXT | Keperluan peminjaman. |
| `return_condition` | ENUM | Kondisi saat kembali (`baik`, `rusak`). |

## 4.8. Tabel `asset_maintenances` (Tiket & Perbaikan)
Menggabungkan Tiket Laporan dan Eksekusi Perbaikan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `reporter_id` | BIGINT | User pelapor kerusakan (Scan QR). |
| `description` | TEXT | Deskripsi kerusakan. |
| `photo_proof` | VARCHAR | Foto kerusakan. |
| `status` | ENUM | `dilaporkan`, `ditinjau`, `sedang_diperbaiki`, `selesai`, `tidak_bisa_diperbaiki`. |
| `technician_name` | VARCHAR | Nullable. Nama teknisi/vendor. |
| `repair_cost` | DECIMAL | Nullable. Biaya jasa + sparepart. |
| `repair_date` | DATE | Tanggal pengerjaan. |
| `completion_date` | DATE | Tanggal selesai. |
| `funding_source` | VARCHAR | Sumber dana perbaikan (Integrasi Finance). |

## 4.9. Tabel `asset_purchase_requests` (PR)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `requester_id` | BIGINT | Pegawai yang mengajukan. |
| `request_date` | DATE | Tanggal pengajuan. |
| `title` | VARCHAR | Judul pengajuan (misal: "Pengadaan Komputer Lab Baru"). |
| `total_estimated_cost` | DECIMAL | Total estimasi biaya. |
| `status` | ENUM | `draft`, `pending_headmaster`, `pending_treasurer`, `pending_foundation`, `approved`, `rejected`, `ordered`. |
| `rejection_reason` | TEXT | Alasan jika ditolak. |

## 4.10. Tabel `asset_purchase_items` (Detail PR)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `purchase_request_id` | BIGINT | Foreign Key. |
| `item_name` | VARCHAR | Nama barang yang diminta. |
| `quantity` | INT | Jumlah. |
| `estimated_price` | DECIMAL | Harga perkiraan satuan. |
| `priority` | ENUM | `rendah`, `normal`, `tinggi`, `kritis`. |
| `url_reference` | VARCHAR | Link toko online/katalog (opsional). |

## 4.11. Tabel `asset_disposals`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `asset_id` | BIGINT | Foreign Key. |
| `date` | DATE | Tanggal penghapusan. |
| `disposal_type` | ENUM | `dijual`, `disumbangkan`, `dihancurkan`, `hilang`. |
| `reason` | TEXT | Alasan (misal: "Rusak total kena banjir"). |
| `sale_value` | DECIMAL | Nullable. Nilai uang yang didapat jika dijual (Masuk Kas). |
| `approved_by` | BIGINT | User ID Ketua Yayasan yang menyetujui. |
| `document_path` | VARCHAR | Berita Acara Penghapusan (PDF). |

### Catatan Implementasi untuk Developer

1.  **QR Code Logic**: Kolom `uuid` di tabel `assets` digunakan untuk generate QR Code. URL QR Code nanti mengarah ke: `app.daraltauhid.com/asset/scan/{uuid}`.
2.  **Integrasi Mutasi**: Saat `asset_mutations` dibuat, trigger/observer harus mengupdate kolom `room_id` di tabel `assets` ke ruangan baru.
3.  **Integrasi Disposal**: Saat `asset_disposals` dibuat, status aset di tabel `assets` harus berubah jadi `DIHAPUS` atau `DISPOSED` agar tidak muncul di list inventaris aktif, tapi history-nya tetap ada.
4.  **Integrasi Finance**:
    *   `repair_cost` di tabel `asset_maintenances` akan menjadi Expense di Modul Finance.
    *   `sale_value` di tabel `asset_disposals` akan menjadi Income (Lain-lain) di Modul Finance.