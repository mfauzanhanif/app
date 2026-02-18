# Tech Stack

## Architecture

- Modular Monolith Architecture
- Multi Domain
- Multi Tenant

## Backend

- Laravel 12
- PHP 8.4
- MySQL / MariaDB

## Frontend

- React (via Inertia.js)
- Tailwind CSS v4
- Flowbite-react

## Mobile

- React Native (expo)

## Authentication

- Hybrid Auth (Laravel Socialite + Laravel Breeze)

## Version Control

- Git

## Infrastructure

- Shared Hosting (hPanel)

## Libraries

1. Manajemen Modul (Agar folder Modules/Admission, Modules/Finance tertata rapi)
```
nwidart/laravel-modules
```

2. Role & Permission (Untuk membedakan akses Guru, Wali, Admin, Yayasan)
```
spatie/laravel-permission
```

3. Audit Log (Untuk Modul 17 - Mencatat siapa ubah apa)
```
spatie/laravel-activitylog
```

4. Excel Export/Import (Untuk upload data siswa massal & download laporan keuangan)
```
maatwebsite/excel
```

5. PDF Generator (Untuk Cetak Rapor, Kartu Ujian, Slip Gaji)
```
barryvdh/laravel-dompdf
```

6. QR Code Generator (Untuk Label Aset & Kartu Santri)
```
simplesoftwareio/simple-qrcode
```

7. File & Media Management (Untuk upload foto profil, bukti transfer, scan SK)
```
spatie/laravel-medialibrary
```

8. HTTP Client (Sudah bawaan Laravel, tapi pastikan ada untuk nembak API Flip/WA Gateway)
```
guzzlehttp/guzzle
```

9. Date Handling (Sudah bawaan, Carbon). Tapi untuk format uang (Rp), saran saya pakai library ini biar rapi
```
akaunting/laravel-money
```

10. Indonesia Region
```
laravolt/indonesia
```