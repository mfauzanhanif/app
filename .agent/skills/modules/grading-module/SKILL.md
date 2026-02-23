---
name: grading-module
description: Panduan logika bisnis untuk Modul Penilaian (Grading Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani pengaturan bobot nilai (KKM/KKTP), kalkulasi nilai leger, auto-description narasi, dan antrian pencetakan rapor PDF.
---

# Grading Module Logic (Penilaian & Rapor)

Modul Grading bertugas mengalkulasi hasil belajar. Modul ini memiliki limitasi eksekusi tinggi, terutama di fase *Generate Rapor* yang harus dikerjakan secara *asynchronous* (di latar belakang) karena menggunakan server *Shared Hosting*.

## 🔴 Cross-References (Penting!)
- Mengambil total kehadiran S/I/A dari Wali Kelas, panggil skill: `journal-module`.
- Mengatur status Naik/Tinggal Kelas setelah proses penilaian, panggil skill: `academic-module`.

## When to use this skill
- Membangun antarmuka (UI) input nilai menyerupai Excel (Grid Data) dengan fitur *Auto-Save*.
- Mengimplementasikan *Auto-Generator* untuk narasi/deskripsi rapor.
- Membangun fitur Kalkulasi Leger (rekap nilai sekelas).
- Membangun *Job/Queue* untuk pencetakan Rapor PDF (`barryvdh/laravel-dompdf`).

## Core Business Logic

### 1. Auto-Description Generator (Wajib Diimplementasikan)
Kurikulum Merdeka menuntut guru menulis narasi rapor. Sistem harus membantu dengan cara *generate* otomatis.
- **Logic**: Ambil nilai tertinggi dan terendah siswa dari tabel `grading_scores` (berdasarkan `competency_id` atau TP).
- **Format**: Gabungkan teks: *"Ananda sangat menguasai [Nama TP Tertinggi], namun masih perlu bimbingan dalam [Nama TP Terendah]."*.

### 2. Rekap Absen DILARANG Input Manual
- Kolom Sakit/Izin/Alpha di halaman cetak rapor **TIDAK BOLEH** disediakan form input manual bagi Wali Kelas.
- Data harus langsung di-*Query* menggunakan `COUNT()` dari status kehadiran siswa di tabel `journal_daily_attendance_details` pada semester tersebut.

### 3. Snapshot Leger & Queue PDF
- Karena kalkulasi bobot (Harian * 40% + PTS * 30% + PAS * 30%) cukup berat, simpan hasil akhir ke tabel *Cache* yaitu `grading_finals`.
- **ATURAN KERAS SHARED HOSTING**: Proses "*Generate Rapor Sekelas*" **WAJIB** dikirim ke *Background Queue*. Saat proses selesai, simpan *file_path* PDF ke `grading_report_files` lalu tembak notifikasi ke frontend agar User bisa mengunduhnya.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `14_GRADING.md` untuk struktur tabel detail (seperti pengaturan bobot, KKM, input nilai, dan arsip PDF).