---
name: guardian-module
description: Panduan logika bisnis untuk Modul Wali Santri (Guardian Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani pembuatan akun wali, pemetaan keluarga (Family Mapping), deduplikasi data orang tua, dan Dashboard Wali Santri.
---

# Guardian Module Logic

Wali/Orang Tua adalah entitas yang berdiri sendiri (Global se-Yayasan), bukan sekadar "kolom pelengkap" di tabel siswa. Modul ini dirancang agar satu Wali cukup memiliki 1 akun untuk memantau semua anaknya yang tersebar di berbagai unit pendidikan Yayasan.

## 🔴 Cross-References (Penting!)
- Jika mengurus *login* Wali Santri, panggil skill: `user-module`.
- Jika mengurus migrasi otomatis data wali dari pendaftar, panggil skill: `admission-module`.
- Jika menarik data tagihan atau nilai anak untuk ditampilkan di Dashboard Wali, panggil skill: `finance-module` dan `grading-module`.

## When to use this skill
- Menulis logika `One Click Migration` dari data pendaftar baru (`candidate_parents`).
- Mengatur relasi Many-to-Many antara Siswa dan Orang Tua.
- Merancang Dashboard Wali Santri (Student Switcher).

## Core Business Logic

### 1. Master Data Wali (Global Scope)
- Tabel `guardians` menyimpan data tunggal Wali (ayah/ibu).
- Login menggunakan kredensial berupa No HP/WA atau `guardian_unique_id` (contoh: WAL-2026-0001).

### 2. Family Mapping (Relasi Pivot)
- Hubungan antara tabel `guardians` dan `students` dijembatani oleh tabel pivot `guardian_student`.
- Setiap siswa hanya boleh memiliki maksimal 1 wali utama yang berstatus aktif dalam konfigurasi (*enforced by database constraint*).

### 3. Logic Deduplikasi (Pencegahan Data Ganda)
Ini adalah alur "cerdas" wajib saat menambah anak baru atau menjalankan *One Click Migration*:
1. Ambil data NIK atau No HP dari form/calon pendaftar.
2. Lakukan kueri pengecekan ke tabel `guardians`.
3. **Jika ditemukan (Found)**: Ambil `guardian_id` yang sudah ada, lalu langsung buat *row* di pivot tabel `guardian_student` yang menghubungkan Wali lama tersebut dengan Anak baru. JANGAN buat data wali baru.
4. **Jika tidak ditemukan (Not Found)**: Buat baris baru di `guardians`, generate `guardian_unique_id` baru, dan buat relasi pivot.

## Database Permissions (Akses Spatie)
- `guardian.link`: Menghubungkan akun wali dengan siswa (Family Mapping).

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `8_GUARDIAN.md` untuk struktur lengkap tabel `guardians` dan `guardian_student`.