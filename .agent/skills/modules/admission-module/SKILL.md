---
name: admission-module
description: Panduan logika bisnis untuk Modul Penerimaan Santri Baru (Admission Module / PSB) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani portal pendaftaran, formulir biodata pendaftar, seleksi kandidat, tagihan pendaftaran, dan fitur One Click Migration.
---

# Admission Module Logic (Penerimaan Santri Baru / PSB)

Modul Admission beroperasi secara musiman dan merupakan "Pintu Gerbang" masuknya data ke dalam ekosistem Yayasan Dar Al Tauhid. Modul ini menangani portal pendaftaran di `psb.daraltauhid.com`.

## 🔴 Cross-References (Penting!)
Jika tugas yang sedang Anda kerjakan menyentuh area berikut, **WAJIB** baca skill lain:
- Jika mengeksekusi *One Click Migration*, panggil skill: `student-module` dan `guardian-module`.
- Jika kandidat sudah menjadi siswa aktif dan harus membayar SPP rutin bulanan, panggil skill: `finance-module`.

## When to use this skill
- Membangun halaman *frontend* untuk portal pendaftaran santri baru.
- Membuat fitur *upload* berkas pendaftaran (KK, Akta, dll).
- Membuat alur *billing* sederhana (Finance Lite) untuk biaya formulir atau uang pangkal.
- Mengimplementasikan logika seleksi kelulusan dan "One Click Migration".

## Core Business Logic

### 1. Data Isolation (Isolasi Data Pendaftar)
- Data pendaftar **TIDAK BOLEH** langsung dimasukkan ke tabel `students` atau `users`.
- Pendaftar disimpan di tabel terpisah yaitu `candidates` dan data orang tua di `candidate_parents`.

### 2. Pendaftaran Jalur Internal (Lanjut Jenjang)
- Sistem memfasilitasi santri lama yang ingin lanjut jenjang (misal dari MI ke SMP Dar Al Tauhid).
- **Logic**: Jika wali memilih opsi "Siswa Internal", minta input NIS/NIK. Jika ditemukan di tabel `students`, data `candidates` akan di-*autofill* (isi otomatis) berdasarkan data siswa lama tersebut, dan kolom `internal_student_id` diisi dengan ID siswa lama.

### 3. Billing PSB (Finance Lite)
- Modul ini memiliki sistem *billing* sendiri (`admission_invoices`) yang terpisah dari Modul Finance utama.
- Tagihan pendaftaran digenerate secara otomatis saat calon santri mendaftar.
- Metode pembayaran pada fase awal menggunakan manual transfer (upload bukti), belum menggunakan payment gateway.

### 4. One Click Migration (SANGAT KRITIKAL)
Proses memindahkan status *Candidate* menjadi *Student* dan *Guardian* secara permanen.
- **Trigger**: Tombol hanya boleh dieksekusi oleh Admin jika kandidat telah berstatus **LULUS** seleksi dan tagihan Daftar Ulang **LUNAS** (PAID).
- **Step 1 (Deduplikasi Wali)**: Ambil `candidate_parents`. Query NIK/No WA ke tabel `guardians`. Jika ADA, ambil `guardian_id` lama. Jika TIDAK ADA, insert row baru ke `guardians`.
- **Step 2 (Migrasi Siswa)**: Copy `candidates` -> insert ke `students`. Pastikan validasi `NISN` aman (jika `NULL` tidak masalah, jika terisi tidak boleh duplikat dengan siswa aktif lain).
- **Step 3 (Tautkan)**: Buat baris baru di tabel pivot `guardian_student`.
- **Step 4 (Finalisasi)**: Update `candidates.status = diterima` dan simpan ID Siswa baru ke `candidates.student_id` agar kandidat yang sama tidak bisa dimigrasi 2 kali.

## Database Permissions (Akses Spatie)
Gunakan *permission* berikut untuk membatasi aksi Panitia PPDB / Waka Kesiswaan:
- `candidate.view`: Melihat data pendaftar.
- `candidate.verify`: Memvalidasi dokumen pendaftar.
- `candidate.decide`: Menentukan status Lulus/Tidak Lulus.
- `candidate.migrate`: Menjalankan "One Click Migration".

## Panduan Database (Knowledge Base)
Jika Anda membutuhkan detail tabel untuk `admission_waves`, `candidates`, `candidate_parents`, `candidate_documents`, atau `admission_invoices`, rujuklah pada file dokumentasi database `6_ADMISSION.md`.