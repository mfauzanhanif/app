---
name: student-affairs-module
description: Panduan logika bisnis untuk Modul Kesiswaan (Student Affairs Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani fitur mutasi siswa (pindah/masuk/DO), pencatatan prestasi, dan pelanggaran di jam sekolah.
---

# Student Affairs Module Logic (Kesiswaan)

Modul Kesiswaan berfungsi sebagai pengelola dinamika siswa di luar kegiatan KBM inti, seperti mutasi perpindahan sekolah, pelacakan prestasi, dan penegakan kedisiplinan di lingkungan sekolah (formal).

## 🔴 Cross-References (Penting!)
- Jika mengurus pembaruan status siswa aktif/pindah, panggil skill: `student-module`.
- Jika mutasi memengaruhi penghentian tagihan bulanan SPP, panggil skill: `finance-module`.

## When to use this skill
- Membuat fitur pencatatan Surat Keputusan (SK) pindah sekolah atau drop-out.
- Membangun *Observer* atau *Event Listener* saat terjadi mutasi siswa.
- Membuat fitur buku kasus (pelanggaran) khusus jam sekolah.

## Core Business Logic

### 1. Logika Mutasi & Integrasi Finance (Freeze/Unfreeze)
Tabel `student_mutations` adalah pusat log transaksi status siswa. Setiap kali ada perubahan status drastis, harus dicatat di sini.
- **Skenario Keluar**: Jika siswa dimutasi `mutasi_keluar` atau `dikeluarkan`, *Backend Logic* (Observer) wajib meng-update tabel `students` dengan mengatur kolom `status` menjadi `pindah` dan `graduate_date` diisi tanggal mutasi.
- **Dampak Finance**: Perubahan status ini otomatis akan menghentikan (*Freeze*) pembuatan *Invoice* tagihan SPP bulanan untuk siswa tersebut di Modul Finance.
- **Skenario Masuk**: Jika siswa pindah `mutasi_masuk`, status otomatis aktif dan tagihan berjalan kembali (*unfreeze*).

### 2. Pemisahan Buku Kasus (Sekolah vs Asrama)
- Pastikan membedakan pelanggaran yang terjadi di tabel `student_violations` dengan pelanggaran asrama.
- Modul ini HANYA menangani pelanggaran di jam sekolah (misal: telat masuk kelas, bolos mapel, merokok di kantin sekolah).

## Database Permissions (Akses Spatie)
Role Waka Kesiswaan (`vice_principal_student_affairs`) memiliki akses ke area ini:
- `discipline.record`: Mencatat poin pelanggaran/prestasi.
- `student.promote`: Memproses perpindahan/kenaikan.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `9_STUDENT_AFFAIR.md` untuk struktur tabel detail (`student_mutations`, `student_achievements`, `student_violations`).