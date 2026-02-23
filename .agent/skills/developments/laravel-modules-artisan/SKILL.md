---
name: laravel-modules-artisan
description: >-
    Panduan perintah Artisan khusus untuk arsitektur nwidart/laravel-modules.
    Gunakan skill ini setiap kali Anda diminta untuk men-generate file baru
    seperti Controller, Model, Request, atau Service untuk sebuah Modul.
---

# Laravel Modules Artisan Commands

Aplikasi ini menggunakan arsitektur **Modular Monolith** dengan package `nwidart/laravel-modules`.

## 🚫 CRITICAL WARNING: NO STANDARD ARTISAN MAKE

Jangan gunakan perintah bawaan Laravel (`php artisan make:...`) jika file tersebut ditujukan untuk sebuah Modul. File akan tersasar ke folder `app/` dan merusak arsitektur.
Selalu gunakan prefix `module:make-...`!

## 🔴 Cross-References (Penting!)

- Pengecualian! Untuk pembuatan tabel/database, **WAJIB** merujuk pada `database-schemas`. Migrasi tidak diletakkan di dalam folder Modules.

## When to Apply

- Saat _user_ meminta Anda membuat Controller, Model, FormRequest, atau struktur file baru untuk fitur tertentu.
- Saat Anda perlu memberikan perintah _command line_ kepada _user_ untuk mengeksekusinya di terminal.

## Core Commands (Cheatsheet)

### 1. Membuat Modul Baru

Jika diminta membuat domain fitur baru (misal: Clinic):

```bash
php artisan module:make Clinic
```

### 2. Membuat Controller

Format: `php artisan module:make-controller <NamaController> <NamaModul>`

```bash
# BENAR: Akan masuk ke Modules/Finance/Http/Controllers/InvoiceController.php
php artisan module:make-controller InvoiceController Finance

# SALAH: DILARANG MENGGUNAKAN INI
php artisan make:controller InvoiceController
```

### 3. Membuat Model Eloquent

Format: `php artisan module:make-model <NamaModel> <NamaModul>`

```bash
# BENAR: Akan masuk ke Modules/Student/Models/Student.php
php artisan module:make-model Student Student
```

### 4. Membuat Form Request (Validasi)

Format: `php artisan module:make-request <NamaRequest> <NamaModul>`

```bash
# BENAR: Akan masuk ke Modules/Admission/Http/Requests/StoreCandidateRequest.php
php artisan module:make-request StoreCandidateRequest Admission
```

### ⚠️ PENGECUALIAN FATAL (MIGRATION, SEEDER, FACTORY)

Sesuai arsitektur proyek ini, file database **DILARANG** diletakkan di dalam folder `Modules/`. Semuanya harus terpusat di root bawaan Laravel.

Oleh karena itu, **JANGAN PERNAH** menggunakan perintah:

- `php artisan module:make-migration`
- `php artisan module:make-seeder`
- `php artisan module:make-factory`

Gunakan perintah standar Laravel untuk urusan database:

```bash
# BENAR (Tetap gunakan make: bawaan Laravel khusus untuk database)
php artisan make:migration create_finance_invoices_table
php artisan make:seeder FinanceInvoiceSeeder
php artisan make:factory FinanceInvoiceFactory
```

### Aturan Namespace

Jika Anda menulis file secara manual tanpa terminal, pastikan namespace-nya benar:

- **Controller**: `namespace Modules\Finance\Http\Controllers;`
- **Model**: `namespace Modules\Finance\Models;`
- **Request**: `namespace Modules\Finance\Http\Requests;`
