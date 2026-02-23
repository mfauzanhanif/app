---
name: database-schemas
description: Panduan arsitektur database, struktur tabel, konvensi penamaan, dan aturan identifier (seperti NanoID) untuk Super App Dar Al Tauhid. Gunakan skill ini saat membuat file Migration, Model Eloquent, Factory, Seeder, atau menulis query database.
---

# Database Schemas & Eloquent Guidelines

Panduan ini mengatur bagaimana tabel dan relasi data harus dirancang di dalam Super App Dar Al Tauhid. Karena aplikasi ini menggunakan pendekatan **Modular Monolith** dan **Multi-Tenant**, struktur database harus dirancang dengan sangat disiplin.

## 🔴 Cross-References (Penting!)
- Jika Anda tidak yakin tabel ini masuk ke dalam logika bisnis modul yang mana, baca file indeks: `.agent/skills/modules/SKILL.md`.
- Jika Anda membutuhkan detail spesifik mengenai relasi sebuah modul (misal: bagaimana Mutasi memengaruhi Keuangan), baca skill di dalam folder `modules/`.

## When to use this skill
- Menjalankan perintah artisan untuk membuat *Migration*, *Factory*, atau *Seeder*.
- Merancang relasi *Eloquent* (`HasMany`, `BelongsToMany`, `MorphTo`, dll) di dalam Model.
- Menulis *Query Builder* yang kompleks atau mendefinisikan *Global Scope*.
- Menerapkan batasan *Foreign Key* (Cascade/Restrict) dan *Soft Deletes*.

## Core Database Conventions

### 1. Penempatan File Database (Pengecualian Modularitas)
Meskipun aplikasi ini menggunakan `nwidart/laravel-modules` untuk memisahkan domain fitur, ada **aturan ketat** terkait pemusatan struktur database:
- **Migration, Seeder, dan Factory WAJIB** diletakkan di folder *root* bawaan Laravel:
  - `database/migrations/`
  - `database/seeders/`
  - `database/factories/`
- **DILARANG KERAS** meletakkan file-file tersebut di dalam folder `Modules/` (misal: `Modules/Student/Database/Migrations/`). Hal ini dilakukan agar urutan migrasi (*migration order*) dan relasi antar tabel lebih mudah dikelola secara terpusat.
- **Pengecualian Model**: File **Model (Eloquent)** tetap harus diletakkan di dalam folder modul masing-masing agar *logic* tetap terisolasi (contoh: `Modules/Student/Models/Student.php`).

### 2. Aturan Identifier & Keamanan URL (NanoID)
Aplikasi ini melarang penggunaan ID Auto Increment untuk eksposur publik demi keamanan data.
- **Primary Key (`id`)**: Tetap gunakan `id` (BIGINT UNSIGNED, Auto Increment) sebagai *Primary Key* standar dan untuk kebutuhan *Foreign Key* antar tabel.
- **Public ID (`public_id`)**: Setiap tabel yang datanya akan diakses via URL oleh user/publik (seperti Profil Siswa, Invoice, Tiket Perbaikan) **WAJIB** memiliki kolom `public_id` dengan format **NanoID (10 karakter)**.
- **Routing**: Saat membuat *Route Binding*, gunakan `public_id`. Contoh URL: `/wali/student/V1StG9y2kA`.

### 3. Isolasi Tenant (Multi-Tenancy)
Hampir seluruh data operasional (KBM, Keuangan, Aset) adalah milik lembaga tertentu (Pondok, MI, SMP, dll).
- **Kolom `institution_id`**: Selalu sertakan kolom `institution_id` (Foreign Key ke tabel `institutions`) pada tabel transaksional.
- **Global Scope**: Gunakan *Global Scope* atau *Trait* khusus pada Model Eloquent untuk memastikan query otomatis terfilter berdasarkan `institution_id` dari *session* pengguna yang sedang login.

### 4. Filter Waktu (Periode)
Data akademik dan keuangan tidak boleh bocor lintas tahun ajaran/buku.
- Tabel akademik (Penempatan Kelas, Jadwal, Nilai) **wajib** memiliki `academic_year_id` dan/atau `academic_period_id`.
- Tabel keuangan (Jurnal Akuntansi, Tagihan) **wajib** memiliki referensi ke `fiscal_period_id`.

## Relasi Data Kritis (The "Must-Know" Relations)

### A. Pegawai (The Two Hats Rule)
- Entitas identitas fisik pegawai HANYA ada satu di tabel `employees` (berbasis NIK/NIPY).
- Relasi pegawai ke lembaga menggunakan *Pivot Table* `employee_assignments`.

### B. Siswa & Wali (Separation of Concerns)
- Tabel `students` bersifat per-jenjang. Siswa dicatat ulang menjadi baris baru jika lulus MI dan masuk SMP.
- Tabel `guardians` bersifat Global (Satu akun untuk seluruh Yayasan).
- Keduanya dihubungkan oleh tabel *Pivot* `guardian_student`.

### C. Jurnal KBM (Efisiensi Storage)
- Tabel kehadiran siswa per mapel (`journal_student_attendances`) jangan diisi data "Hadir" untuk seluruh siswa agar database tidak cepat penuh.
- **Hanya simpan (INSERT)** ke tabel tersebut jika status kehadiran siswa BERBEDA dari absen pagi wali kelas (misal: "Bolos" atau "Izin Pulang").

### 5. Audit & Tracking
Setiap tabel yang memuat data sensitif (Keuangan, Profil Pegawai, Nilai Rapor) WAJIB menggunakan `spatie/laravel-activitylog`.
- Gunakan trait `LogsActivity` di dalam Model.
- Konfigurasikan `$logAttributes` untuk mencatat perubahan yang spesifik. Kolom *password*, *PIN*, atau *token* WAJIB dimasukkan ke dalam `$logAttributesToIgnore`.

## Panduan Migrasi (Constraint)
- Saat membuat *Foreign Key*, pastikan Anda memikirkan aturan `onDelete`.
- Jika data terkait keuangan atau histori nilai, gunakan `restrict` atau terapkan `SoftDeletes` di tabel tersebut agar histori tidak rusak jika data induk dihapus.
- Gunakan `cascade` hanya untuk tabel *pivot* atau tabel detail yang tidak memiliki makna jika tabel induknya hilang (misal: `invoice_details` boleh di-cascade jika `invoices` dihapus, asalkan sistem membolehkan penghapusan invoice).