---
name: periode-module
description: Panduan logika bisnis untuk Modul Periode (Periode Module) di Super App Dar Al Tauhid. Gunakan skill ini saat membuat fitur yang berhubungan dengan Tahun Ajaran, Semester, atau Tahun Buku Keuangan.
---

# Periode Module Logic

Modul Periode adalah pengendali waktu utama untuk operasional akademik dan keuangan di Super App Dar Al Tauhid. Setiap *query* data transaksional (seperti jurnal, nilai, atau laporan keuangan) wajib difilter berdasarkan periode yang sedang aktif.

## 🔴 Cross-References (Penting!)
- Jika mengurus Kenaikan Kelas atau Jadwal Pelajaran, panggil skill: `academic-module` atau `curriculum-module`.
- Jika mengurus Tutup Buku atau Laporan Neraca, panggil skill: `finance-module`.

## When to use this skill
- Membangun *Global Scope* di Laravel Model untuk memfilter data berdasarkan tahun ajaran aktif.
- Membuat fitur ganti semester (Ganjil ke Genap).
- Membuat *scheduler* atau validasi untuk tutup buku keuangan tahunan.

## Core Business Logic

### 1. Academic Year Control (Tahun Ajaran)
- Mengatur rentang Tahun Ajaran standar pendidikan (Juli - Juni). 
- **Validasi Ketat**: Sistem HANYA mengizinkan satu tahun ajaran (`academic_years`) yang berstatus aktif dalam satu waktu (dikendalikan penuh oleh Yayasan Pusat).

### 2. Semester Control (Periode Akademik)
- Mengatur status Ganjil/Genap (`academic_periods`) di dalam rentang tahun ajaran yang sedang aktif.

### 3. Fiscal Year Control (Tahun Buku Keuangan)
- Berbeda dengan Tahun Ajaran, Tahun Buku Keuangan (`fiscal_periods`) menggunakan standar kalender masehi (Januari - Desember).
- Modul ini penting untuk keperluan laporan pajak dan audit Yayasan.

## Panduan Database (Knowledge Base)
Jika Anda membutuhkan struktur tabel (seperti `academic_years`, `academic_periods`, dan `fiscal_periods`), rujuklah pada dokumentasi `2_PERIODE.md`.