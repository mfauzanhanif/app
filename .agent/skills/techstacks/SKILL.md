---
name: techstacks
description: Panduan teknologi, arsitektur, library pihak ketiga, dan limitasi infrastruktur untuk Super App Dar Al Tauhid. Gunakan skill ini saat menulis kode awal, merancang UI, menambahkan package, atau menangani proses backend yang berat.
---

# Tech Stacks & Infrastructure Guidelines

Panduan ini mendefinisikan standar teknologi dan batasan lingkungan server untuk pengembangan Super App Yayasan Dar Al Tauhid. Semua kode yang dihasilkan harus mematuhi standar ini.

## When to use this skill
- Memulai pembuatan fitur baru (Controller, Model, atau halaman Frontend).
- Menulis kode antarmuka (UI) menggunakan React dan Tailwind.
- Mengimplementasikan fitur ekspor/impor data, pencetakan dokumen, atau manipulasi gambar.
- Mengonfigurasi routing aplikasi (berbasis domain atau tenant).

## How to use it

### 1. Stack Teknologi Utama
Setiap penulisan kode harus menggunakan stack berikut:
- **Backend**: Laravel 12 dengan PHP 8.4 dan database MySQL / MariaDB.
- **Frontend**: React (terintegrasi via Inertia.js), Tailwind CSS v4, dan komponen dari Flowbite-react.
- **Authentication**: Menggunakan pendekatan Hybrid Auth, yaitu perpaduan Laravel Socialite dan Laravel Breeze.
- **Mobile (Opsional/Masa Depan)**: React Native (Expo).

### 2. Arsitektur & Pola Desain (Design Pattern)
Aplikasi ini dibangun dengan arsitektur **Modular Monolith** yang mendukung *Multi-Domain* dan *Multi-Tenant*.
- **Modularitas**: Selalu gunakan struktur dari `nwidart/laravel-modules` untuk memisahkan domain fitur (misalnya: folder `Modules/Admission`, `Modules/Finance` agar rapi). Jangan mencampur kode antar modul secara sembarangan.
- **Domain Routing**: Gunakan *Domain Routing* yang ketat di `routes/web.php`.
  - `app.daraltauhid.com`: Khusus untuk sistem Super App utama.
  - `psb.daraltauhid.com`: Portal Pendaftaran Santri Baru.
  - Domain lain (seperti `mis.daraltauhid.com`, `manuscirebon.com`, dll) digunakan untuk Landing Pages lembaga.
- **Path-Based Multi-Tenancy**: Untuk dashboard internal di dalam `app.daraltauhid.com`, pembedaan tenant/lembaga menggunakan **Slug URL** yang diambil dari kolom `code` tabel lembaga (misalnya: `/ppdt/dashboard`, `/misdt/dashboard`).

### 3. Standar Penggunaan Library
Hanya gunakan *library* berikut untuk menyelesaikan masalah spesifik:
- **Role & Permission**: `spatie/laravel-permission` (Digunakan untuk membedakan akses Guru, Wali, Admin, dll).
- **Audit Log (Modul 18)**: `spatie/laravel-activitylog` (Untuk mencatat riwayat perubahan data).
- **Export/Import Excel**: `maatwebsite/excel` (Digunakan untuk upload massal atau laporan keuangan).
- **PDF Generator**: `barryvdh/laravel-dompdf` (Digunakan untuk cetak Rapor, Kartu Ujian, Slip Gaji).
- **QR Code**: `simplesoftwareio/simple-qrcode` (Digunakan untuk pelabelan aset dan kartu santri).
- **File Management**: `spatie/laravel-medialibrary` (Digunakan untuk unggah profil, bukti transfer, dan dokumen).
- **Format Uang/Mata Uang**: `akaunting/laravel-money` (Agar format rupiah rapi).
- **Data Wilayah**: `laravolt/indonesia` (Digunakan untuk data provinsi, kota, kecamatan, dll).

### 4. Limitasi Infrastruktur (ATURAN SANGAT PENTING!)
Aplikasi ini akan di-deploy di **Shared Hosting (hPanel)**. Server jenis ini memiliki batasan sumber daya (CPU/RAM) dan waktu eksekusi (timeout) yang ketat.
- **Dilarang Keras** menjalankan proses berat secara sinkron (langsung saat request).
- Jika Anda menulis kode untuk *Generate Rapor PDF massal*, *Kalkulasi Gaji massal*, *Import Excel data santri*, atau pengiriman pesan (*Broadcast*), Anda **WAJIB** membungkusnya menggunakan *Laravel Queue / Jobs* yang diproses di latar belakang.
- Pastikan kueri database (Eloquent) sangat dioptimalkan. Gunakan *Eager Loading* untuk mencegah masalah N+1.