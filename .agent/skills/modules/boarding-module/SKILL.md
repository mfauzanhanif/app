---
name: boarding-module
description: Panduan logika bisnis untuk Modul Kepesantrenan/Asrama (Boarding Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani manajemen kamar santri, perizinan pulang/sakit, dan poin pelanggaran pondok.
---

# Boarding Module Logic (Kepesantrenan/Asrama)

Modul Boarding mengatur kehidupan santri di lingkungan asrama (Pondok), mulai dari penempatan kamar hingga kedisiplinan. Fitur terpenting dari modul ini adalah sistem perizinan yang terintegrasi langsung dengan absensi sekolah.

## 🔴 Cross-References (Penting!)
- Jika perizinan asrama sudah di-*approve* dan harus mengunci absensi pagi, panggil skill: `journal-module`.

## When to use this skill
- Membangun fitur manajemen gedung asrama dan penempatan santri di kamar (`boarding_placements`).
- Membuat fitur *Approval* Perizinan (Izin Pulang, Sakit di Asrama).
- Membuat pencatatan poin kedisiplinan/pelanggaran khas pesantren (Buku Saku Santri).

## Core Business Logic

### 1. Manajemen Kamar (Dormitory)
- Penempatan kamar (`boarding_placements`) harus mencatat *history* (tanggal masuk/keluar) per tahun ajaran untuk melacak riwayat teman sekamar atau pelacakan barang hilang.
- Harus ada validasi agar penghuni kamar (`current_occupancy`) tidak melebihi kapasitas maksimal (`capacity`).

### 2. Integrasi Perizinan (Kunci Ekosistem!)
Ini adalah integrasi wajib antara Modul Boarding dan Modul Jurnal Akademik.
- **Trigger**: Pengasuh menyetujui (`disetujui_pengasuh`) izin santri dengan tipe `sakit` atau `pulang` di tabel `boarding_permissions` yang mencakup hari efektif sekolah.
- **Auto-Attendance**: Sistem (melalui *Service* atau *Event*) WAJIB mencari rekap absensi harian (`journal_homeroom_attendances`) dan otomatis mengatur status kehadiran santri menjadi "Izin" atau "Sakit". 
- **Hasil**: Wali Kelas di sekolah tidak perlu menanyakan keberadaan santri, karena absen paginya sudah otomatis terkunci oleh sistem asrama.

### 3. Kedisiplinan Asrama
- Pencatatan poin (`boarding_records`) dipusatkan untuk pelanggaran khas pesantren (misal: kabur, terlambat jamaah) yang merujuk pada `boarding_violation_masters`.
- Poin ini bisa menjadi bahan evaluasi atau terhubung dengan nilai "Sikap / Spiritual" di Rapor (Modul Grading).

## Database Permissions (Akses Spatie)
Role Pengasuh/Musyrif (`boarding_mentor`) mengelola area ini menggunakan permission berikut:
- `dorm.manage`: Mengatur penempatan kamar santri.
- `permission.approve`: Menyetujui izin pulang santri.
- `discipline.record`: Mencatat poin pelanggaran/prestasi asrama.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `10_BOARDING.md` untuk struktur tabel detail (`boarding_buildings`, `boarding_rooms`, `boarding_permissions`, dll).