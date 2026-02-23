---
name: academic-module
description: Panduan logika bisnis untuk Modul Akademik (Academic Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani pengaturan kelas, penempatan siswa ke dalam rombel (rombongan belajar), kalender akademik, dan proses kenaikan kelas/kelulusan.
---

# Academic Module Logic (Akademik)

Modul Akademik adalah kerangka kerja operasional pendidikan. Data dari modul ini sangat bergantung pada penetapan Tahun Ajaran dari Modul Periode.

## 🔴 Cross-References (Penting!)
- Jika menulis *query* yang membutuhkan *filter* tahun ajaran, panggil skill: `periode-module`.
- Jika menetapkan Wali Kelas, panggil skill: `employee-module`.
- Jika hasil Rapat Pleno menentukan siswa naik/tinggal, panggil skill: `grading-module`.

## When to use this skill
- Membangun fitur Master Kelas (`academic_classes`) dan batas kuotanya.
- Membuat fitur penempatan siswa ke kelas (`academic_class_students`).
- Membuat kalender akademik dan menandai hari libur sekolah.
- Eksekusi "Naik Kelas Massal" di akhir tahun.

## Core Business Logic

### 1. Aturan Penempatan Siswa (Class Placement)
- Saat menyimpan data ke `academic_class_students`, sistem HARI mengecek apakah jumlah *student_id* yang ada di kelas tersebut sudah melampaui `quota` yang ditetapkan di `academic_classes`.
- Siswa tidak boleh didaftarkan ganda (*double*) di satu kelas yang sama pada tahun ajaran yang sama.

### 2. Kalender Integrasi
- Jika admin menetapkan tanggal tertentu sebagai `is_day_off = true` di tabel `academic_calendars` (misal: Libur Nasional), sistem harus memblokir guru untuk mengisi Jurnal KBM pada hari tersebut.

### 3. Logika Wali Kelas vs Guru Mapel
- Wali Kelas dicatat di tabel `academic_classes.homeroom_teacher_id` (sebagai jabatan administratif).
- Guru Pengajar (meski mengajar di kelas itu) datanya berada di Modul Kurikulum (Roster), bukan di sini.

### 4. Global Scope Wajib
- Seluruh *query* di modul ini wajib difilter menggunakan parameter `academic_year_id` yang sedang aktif (Disarankan membuat `ActiveYearScope` pada *Model* Laravel).

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `11_ACADEMIC.md` untuk struktur tabel detail.