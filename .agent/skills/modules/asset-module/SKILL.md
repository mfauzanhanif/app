---
name: asset-module
description: Panduan logika bisnis untuk Modul Sarana Prasarana (Asset Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani manajemen inventaris, ruangan/gedung, mutasi barang, peminjaman aset, sistem tiket perbaikan (maintenance), dan penghapusan aset.
---

# Asset Module Logic (Sarana & Prasarana)

Modul Aset mengelola siklus hidup fisik (*Lifecycle*) dari seluruh barang milik Yayasan Dar Al Tauhid, mulai dari pengadaan, penempatan, operasional harian, perawatan, hingga penghapusan. Modul ini juga merupakan penyedia master data "Ruangan" untuk kegiatan operasional sekolah dan asrama.

## 🔴 Cross-References (Penting!)
Jika tugas yang sedang Anda kerjakan menyentuh area berikut, **WAJIB** baca skill lain:
- Jika mengurus *Room Management* untuk penempatan kelas siswa, panggil skill: `academic-module`.
- Jika mengurus biaya perbaikan (*Repair Cost*) atau persetujuan anggaran pengadaan (*Procurement Budget*), panggil skill: `finance-module`.

## When to use this skill
- Membangun fitur pencatatan dan *generate* QR Code/Barcode untuk pelabelan inventaris.
- Membuat fitur *Ticketing System* (Pelaporan Kerusakan) dari *end-user* (Guru/Santri) ke Admin Sarpras.
- Membuat fitur mutasi pemindahan kursi/meja/alat dari satu ruangan ke ruangan lain.
- Membangun fitur *Stock Opname* (Audit fisik berkala).

## Core Business Logic

### 1. Master Data Ruangan (Room Management)
- Sistem harus mendata hierarki lokasi fisik secara terstruktur: Gedung -> Lantai -> Ruangan (`rooms`).
- Ruangan ini memegang peranan krusial karena akan digunakan oleh Modul Akademik untuk menentukan "Di ruang mana kelas 7A belajar?".

### 2. Asset Lifecycle & Tagging
Setiap aset memiliki siklus:
- **Registry**: Pencatatan awal barang dengan *Auto-generated Code* (mendukung *QR Code UUID* untuk identifikasi unik).
- **Mutation**: Pencatatan riwayat perpindahan aset antar ruangan (`asset_mutations`). Log harus mencatat siapa yang memindahkan, kapan, dan alasannya.
- **Lending**: Fasilitas peminjaman barang (misal proyektor) berjangka pendek oleh santri atau guru dengan alur: *Request* -> *Approval* -> *Serah Terima* -> *Pengembalian*.
- **Disposal**: Penghapusan aset yang rusak total atau dijual. Aset tidak di-*hard delete*, melainkan statusnya diubah menjadi *Disposed* agar riwayatnya (history) tetap ada untuk keperluan audit.

### 3. Maintenance & Ticketing System
- **Alur Tiket**: User bisa *scan* QR barang yang rusak, lalu klik "Lapor Rusak". Tiket akan masuk ke sistem Admin Sarpras dengan alur status: *Reported* -> *In Review* -> *In Repair* -> *Resolved*.
- **Integrasi Biaya**: Setiap perbaikan yang memakan biaya (*Repair Cost*) harus dicatat dan terintegrasi laporannya sebagai pengeluaran di pos pemeliharaan pada Modul Keuangan.

### 4. Procurement (Pengadaan)
- Setiap pengadaan aset baru (Purchase Request) yang diajukan oleh unit harus divalidasi dengan sisa pagu anggaran di Modul Keuangan.
- Wajib menggunakan *Workflow* persetujuan berjenjang (Kepala Bagian -> Bendahara -> Ketua Yayasan).

## Database Permissions (Akses Spatie)
Dalam mengatur otorisasi, gunakan *permission* standar berikut:
- `asset.create`: Input barang baru.
- `asset.move`: Melakukan mutasi aset antar ruangan.
- `asset.dispose`: Mengajukan penghapusan aset.
- `asset.audit`: Melakukan stok opname.
- `ticket.create`: Melapor kerusakan (Semua User).
- `ticket.resolve`: Menandai perbaikan selesai.
- `procurement.approve`: Menyetujui pengadaan barang.

## Panduan Database (Knowledge Base)
Jika Anda membutuhkan detail tabel untuk `assets`, `rooms`, `asset_mutations`, `asset_maintenances`, atau `stock_opnames`, rujuklah pada file dokumentasi database `5_ASSET.md`.