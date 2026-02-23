---
name: student-module
description: Panduan logika bisnis untuk Modul Siswa (Student Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani profil siswa, identifier unik (NanoID, NISN, NISY), manajemen status aktif/pindah, dan riwayat lintas jenjang.
---

# Student Module Logic

Modul Student menyimpan "The Golden Record" dari data peserta didik. Setiap data siswa di tabel ini secara tegas terikat (*BelongsTo*) pada satu lembaga (Institution) tertentu.

## 🔴 Cross-References (Penting!)
- Jika mengurus penempatan anak ke orang tuanya, panggil skill: `guardian-module`.
- Jika mengurus penempatan siswa ke dalam kelas, panggil skill: `academic-module`.
- Jika mengurus status tagihan bulanan siswa, panggil skill: `finance-module`.

## When to use this skill
- Membuat URL *endpoint* untuk profil siswa (menggunakan `public_id` / NanoID).
- Menangani pencarian riwayat pendidikan santri lintas lembaga (misal: mencari histori santri dari MI hingga MA).
- Memperbarui status siswa yang memengaruhi *billing* keuangan.

## Core Business Logic

### 1. Identifier Hierarchy (Sistem ID Santri)
Siswa diidentifikasi dengan berbagai lapis ID:
- `public_id` (NanoID 10 digit): Wajib digunakan sebagai parameter di URL (contoh: `/wali/student/V1StG9y2kA`) demi keamanan. Jangan gunakan Auto Increment ID!
- `nisy`: Nomor Induk Santri Yayasan (Unik se-Yayasan).
- `nis`: Nomor Induk Lokal Sekolah.
- `nisn`: Nomor Induk Siswa Nasional. Boleh `NULL`, tapi jika diisi tidak boleh duplikat.

### 2. Lintas Jenjang (Tracking Siswa)
- Siswa MI berada di baris (*row*) yang berbeda dengan Siswa SMP di tabel `students`.
- Jika Fauzan lulus dari MI dan lanjut ke SMP Dar Al Tauhid, ia akan memiliki 2 baris data di tabel `students`. Penghubung historisnya adalah `NIK` atau `NISY`.

### 3. Status Lifecycle (Sangat Penting untuk Keuangan!)
Kolom `status` (`aktif`, `lulus`, `pindah`, `dikeluarkan`) adalah kunci dari sistem tagihan.
- Jika status berubah menjadi selain `aktif` (misalnya karena mutasi), sistem Finance akan otomatis menghentikan (*freeze*) pembuatan tagihan (Invoice) di bulan berikutnya.

## Database Permissions (Akses Spatie)
Gunakan *permission* standar berikut:
- `student.create`: Input siswa manual.
- `student.edit`: Update data profil siswa.
- `student.promote`: Memproses kenaikan kelas/kelulusan.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `7_STUDENT.md` untuk struktur tabel detail. (Catatan: Data keluarga tidak ada di tabel ini, karena menggunakan tabel pivot ke Modul Guardian).