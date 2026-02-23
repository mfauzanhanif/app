---
name: journal-module
description: Panduan logika bisnis untuk Modul Jurnal (Journal Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani presensi siswa harian, presensi jam pelajaran, log KBM guru, approval kepala sekolah, dan pencatatan absensi.
---

# Journal Module Logic (Jurnal & Presensi)

Modul Jurnal mencatat realisasi lapangan dari perencanaan di Modul Kurikulum. Data *Approved* dari modul ini adalah nyawa (sumber) untuk penghitungan Honor Guru di Modul Payroll.

## 🔴 Cross-References (Penting!)
- Untuk tarikan data perizinan otomatis dari Asrama, panggil skill: `boarding-module`.
- Untuk koneksi Total JP ke uang gaji, panggil skill: `payroll-module`.
- Untuk rekap absen S/I/A akhir semester, panggil skill: `grading-module`.

## When to use this skill
- Membangun UI dan API untuk Presensi Apel Pagi Wali Kelas (`journal_daily_attendances`).
- Membangun Form Input Jurnal Guru (Integrasi RPP/TP dari Kurikulum).
- Mengimplementasikan alur "Guru Inval" (Guru Pengganti).
- Membuat fitur persetujuan massal (*Batch Approval*) oleh Kepala Lembaga.

## Core Business Logic

### 1. Hierarki Absensi Berantai (Sangat Penting!)
- **Auto-Fetch Asrama**: Pagi hari, sistem otomatis mengecek Modul Boarding. Santri yang diizinkan pulang, absennya akan otomatis di-*lock* (Terkunci) di tampilan Wali Kelas sebagai "Izin".
- **Override Logic (Hemat Database)**: 
  - Saat Guru Mapel mengisi absen di jam ke-3, Frontend merender *default status* dari data Wali Kelas (Hadir). 
  - Backend **TIDAK PERLU** menyimpan data "Hadir" ke tabel `journal_student_attendances` untuk semua 30 siswa (menghemat *storage*).
  - Backend **HANYA** melakukan `INSERT` data jika Guru Mapel mengubah status siswa (misal: "Budi bolos").

### 2. Guru Inval (Substitute) & Payroll Feed
- Jika ada absennya guru asli, guru pengganti (Inval) yang mengisi jurnal harus dicentang `is_substitute = true`.
- `teacher_id` diisi dengan guru yang mengajar riil, sementara `original_teacher_id` diisi guru yang absen.
- **Perhatian**: Modul Payroll hanya akan menghitung Honor Mengajar berdasarkan `teacher_id` riil.

### 3. Approval Workflow (Keamanan Keuangan)
- Guru tidak bisa digaji jika jurnalnya tidak disetujui.
- Status KBM: *Draft* -> *Submitted* -> *Approved* (Oleh Kepsek) -> *Locked* (Setelah digaji).

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `13_JOURNAL.md` untuk struktur `journals`, dan pembagian detail jurnal (`_intra`, `_project`, `_extra`).