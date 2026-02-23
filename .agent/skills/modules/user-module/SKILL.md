---
name: user-module
description: Panduan logika bisnis untuk Modul User (IAM - Identity & Access Management). Gunakan skill ini saat menangani Autentikasi (Login/SSO), Otorisasi (Spatie RBAC), Institution Switcher, Student Switcher, atau Middleware hak akses.
---

# User Module Logic (Identity & Access Management)

Modul User mengatur siapa yang bisa masuk ke aplikasi dan apa yang bisa mereka lakukan di lembaga tertentu. Aplikasi ini menggunakan skema RBAC (Role-Based Access Control) dinamis via `spatie/laravel-permission` yang mendukung *Multi-Role-Institution*.

## 🔴 Cross-References (Penting!)
- Jika menangani integrasi otomatis antara Jabatan Pegawai dengan Role, panggil skill: `employee-module`.
- Jika menangani akses login eksternal untuk Wali Santri, panggil skill: `guardian-module`.

## When to use this skill
- Menulis *Middleware* kustom seperti `CheckInstitutionAccess` atau `CheckStudentAccess`.
- Merancang UI/UX untuk *Institution Switcher* (pindah lembaga tanpa login ulang).
- Mengimplementasikan fitur pengecekan hak akses (contoh: `@can` atau `$user->hasPermissionTo()`).

## Core Business Logic

### 1. Unified Login (SSO) & Context Selection
- User HANYA login satu kali di `app.daraltauhid.com`.
- **Internal Employee**: Setelah login, arahkan ke halaman "Pilih Lembaga" untuk menentukan konteks lembaga (misal: masuk sebagai Guru di Pondok atau MA).
- **Guardian (Wali)**: Setelah login, arahkan ke halaman "Pilih Siswa". Gunakan `public_id` (NanoID 10 digit) pada URL, dan jalankan middleware `CheckStudentAccess` dengan sangat ketat.

### 2. The Two Hats Rule (Aturan Multitasking)
- Satu akun user dapat memiliki banyak peran di berbagai lembaga sekaligus (contoh: Kepala di MA, Guru di Pondok).
- **Global Roles**: Role yang melekat tanpa memandang lembaga (misal: `administrator`, `foundation_head`).
- **Scoped Roles**: Role yang HANYA berlaku saat user mengakses lembaga tertentu (misal: `school_operator`, `teacher`). Admin Yayasan (Global Role) tetap bisa mengakses Scoped Role jika memang memiliki penugasan tersebut.

### 3. Session Injection Logic
- Saat mengakses URL sebuah lembaga (misal: `/ppdt/`), Middleware `CheckInstitutionAccess` wajib memvalidasi apakah user punya *role* di Institution ID tersebut.
- Jika valid, sistem otomatis menyuntikkan *session* konteks lembaga tersebut agar semua operasi CRUD selanjutnya hanya berlaku untuk lembaga itu. Jika TIDAK valid, kembalikan response `403 Abort`.

## Panduan Role & Database (Knowledge Base)
- Daftar baku Role (seperti `treasurer`, `class_teacher`, dll) dan Permissions (seperti `journal.create`) dapat dilihat pada file `RolesAndPermissions.md`.
- Skema tabel Spatie dan modifikasi `model_has_roles` untuk mendukung `institution_id` ada pada referensi `3_USER.md`.