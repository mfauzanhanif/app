---
name: curriculum-module
description: Panduan logika bisnis untuk Modul Kurikulum (Curriculum Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani Mata Pelajaran, Jadwal Pelajaran (Roster), RPP/TP/ATP, Projek P5 (Kokurikuler), dan Ekstrakurikuler.
---

# Curriculum Module Logic (Kurikulum)

Modul Kurikulum bertindak sebagai pusat perencanaan. Setiap data di sini (seperti Tujuan Pembelajaran atau Jadwal Roster) akan menjadi *Dropdown Option* saat Guru mengisi Jurnal Mengajar di kelas.

## 🔴 Cross-References (Penting!)
- Jika data dari modul ini akan ditarik ke dalam laporan harian, panggil skill: `journal-module`.
- Jika mengatur ruangan/lapangan untuk Ekskul, panggil skill: `asset-module`.

## When to use this skill
- Membangun *Timetable Generator* (Jadwal Pelajaran) dan fitur *Conflict Checker*.
- Mengelola materi ajar (CP/KD dan TP/ATP).
- Membangun perencanaan Projek Penguatan Profil Pelajar Pancasila (P5).

## Core Business Logic

### 1. Conflict Checker (Validasi Jadwal Bentrok)
- **Aturan Ketat**: Saat menyimpan jadwal ke `curriculum_timetables`, sistem wajib mengecek bentrok jadwal.
  - Satu Kelas tidak boleh belajar 2 mapel di hari dan jam yang sama.
  - Satu Guru tidak boleh mengajar di 2 kelas di hari dan jam yang sama. Jika ada konflik, tolak dan beri *Alert*.

### 2. Relasi Materi (Lesson Plans)
- Tabel `curriculum_lesson_plans` (TP/ATP) adalah fondasi KBM.
- Saat Guru membuka "Form Jurnal Mengajar", *dropdown* "Materi/Topik" wajib ditarik dari tabel ini berdasarkan *Filter*: `subject_id` dan `grade_level`.

### 3. P5 (Kokurikuler) Berbeda dengan Mapel Biasa
- Projek P5 (`p5_projects`) tidak diampu oleh satu guru mapel, melainkan oleh "Tim Fasilitator" (Tabel Pivot `p5_facilitators`).
- Struktur datanya tidak berbasis KD/Materi, melainkan berbasis Dimensi & Elemen Pancasila (`p5_targets`).

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `12_CURRICULUM.md` untuk struktur tabel (seperti `curriculum_subjects`, `curriculum_timetables`, `p5_projects`, `extracurriculars`).