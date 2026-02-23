---
name: institution-module
description: Panduan logika bisnis untuk Modul Institusi (Institution Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani fitur registrasi lembaga, hierarki yayasan (parent-child), domain routing, atau identifikasi tenant.
---

# Institution Module Logic

Modul Institusi adalah pondasi utama dari aplikasi Super App Dar Al Tauhid. Modul ini mengatur struktur organisasi Yayasan, mencatat data lembaga di bawahnya, dan mengendalikan akses *Multi-Tenant* berbasis domain dan URL path.

## 🔴 Cross-References (Penting!)
Jika tugas yang sedang Anda kerjakan menyentuh area berikut, **WAJIB** baca skill lain:
- Jika mengurus *Role & Permission* untuk Kepala Lembaga, panggil skill: `user-module`.
- Jika mengurus penempatan Guru di lembaga ini, panggil skill: `employee-module`.

## When to use this skill
- Membuat fitur CRUD data lembaga (Yayasan, Pondok, Sekolah, Masjid).
- Menambahkan atau mengelola dokumen legalitas lembaga (`institution_documents`).
- Mengatur konfigurasi *Routing* Laravel berbasis domain atau subdomain.
- Mengembangkan *Middleware* untuk mendeteksi *Tenant* (Lembaga) dari URL slug.

## Core Business Logic

### 1. Hierarki Lembaga (Parent-Child)
Sistem membedakan **Yayasan Pusat** (*Parent*) dengan lembaga di bawahnya (*Children*) seperti MI, Pondok, SMP, dll.
- **Database**: Gunakan relasi `parent_id` yang me-referensi ke tabel `institutions` (Self-Reference). Jika `parent_id` adalah `NULL`, maka itu adalah Yayasan Pusat.

### 2. Domain Mapping & Routing (Sangat Ketat!)
Aplikasi ini melayani banyak domain. Pastikan Anda menggunakan **Domain Routing yang ketat** di `routes/web.php` *sebelum* masuk ke *logic* utama aplikasi.
- **Core App**: `app.daraltauhid.com` (Khusus untuk Dashboard Internal).
- **PSB Portal**: `psb.daraltauhid.com`.
- **News Aggregator**: `sarung.daraltauhid.com`.
- **Landing Pages**: `daraltauhid.com`, `mis.daraltauhid.com`, `manuscirebon.com`, dll.

### 3. Path-Based Multi-Tenancy (Dashboard)
Sistem menggunakan **Satu Domain Utama** (`app.daraltauhid.com`) untuk seluruh operasional dashboard internal. Pembedaan tenant/lembaga tidak menggunakan subdomain, melainkan **Slug URL**.
- Slug diambil dari kolom `code` pada tabel `institutions`.
- **Contoh Format**: `app.daraltauhid.com/{slug}/dashboard`.
  - Yayasan: `/ydtp/dashboard`.
  - MI: `/misdt/dashboard`.
  - Pondok: `/ppdt/dashboard`.
- **Aturan Agent**: Selalu pastikan ada `CheckInstitutionAccess` Middleware di route group ini untuk memvalidasi hak akses user di lembaga terkait.

### 4. Kategorisasi & Akses (Internal vs Eksternal)
- Aplikasi memisahkan lembaga **Internal** (Milik Sendiri) dan **Eksternal** (Mitra/Binaan) melalui kolom boolean `is_internal`.
- Lembaga Eksternal (seperti sekolah mitra) HANYA didata untuk keperluan jaringan, mereka **tidak memiliki akses** ke dalam sistem Super App.

## Database Permissions (Akses Spatie)
Dalam mengatur akses menu untuk modul ini, gunakan *permission* standar berikut:
- `institution.create`: Membuat lembaga baru.
- `institution.edit`: Mengedit profil lembaga/yayasan.

## Panduan Database (Knowledge Base)
Jika Anda membutuhkan detail tabel untuk `institutions` atau `institution_documents`, Anda dapat merujuk pada dokumentasi database `1_INSTITUTION.md`. (Catatan: `id` harus `BIGINT`, `code` harus `Unique` dan bebas spasi/URL-friendly).