---
name: payroll-module
description: Panduan logika bisnis untuk Modul Penggajian (Payroll Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani kalkulasi gaji otomatis, manajemen kasbon, generate slip gaji, dan pencairan gaji (disbursement).
---

# Payroll Module Logic (Penggajian)

Modul Payroll berfungsi sebagai "Kalkulator Otomatis" yang menarik data mentah (kehadiran dan jam mengajar) dari modul operasional lain untuk diubah menjadi perhitungan Take Home Pay (THP).

## 🔴 Cross-References (Penting!)
- Untuk menarik Gaji Pokok & Presensi Kehadiran Kerja, panggil skill: `employee-module`.
- Untuk menarik Total Jam Pelajaran (JP) mengajar, panggil skill: `journal-module`.
- Untuk pencatatan buku besar saat uang gaji cair, panggil skill: `finance-module`.

## When to use this skill
- Membangun *Variable Calculation Engine* (Logic kalkulator untuk menghitung Gaji Guru).
- Membuat manajemen pinjaman/kasbon pegawai dan cicilan otomatisnya (`employee_loans`).
- Membangun *Job/Queue* untuk mencetak ratusan Slip Gaji PDF yang terproteksi *password*.

## Core Business Logic

### 1. The Calculation Engine (Aturan Kalkulasi Utama)
Saat Bendahara mengeklik "Hitung Gaji", Backend wajib memproses data pada rentang tanggal *Cut-off* periode tersebut dengan aturan:
- **Honor Mengajar**: Ambil `SUM(total_jp)` dari tabel Modul Jurnal. **SYARAT MUTLAK**: Hanya jurnal berstatus `Approved` (disetujui Kepsek) yang boleh dihitung jadi uang. Kalikan dengan tarif JP guru tersebut.
- **Guru Pengganti (Inval)**: Jika jurnal ditandai `is_substitute = true`, maka honor mengajar masuk ke kantong `teacher_id` (pengganti yang riil mengajar), BUKAN ke `original_teacher_id`.
- **Auto-Deduction Kasbon**: Cek tabel pinjaman (`employee_loans`). Jika pegawai masih punya hutang yang belum lunas, otomatis masukkan nilai cicilan bulanannya sebagai pengurang (Deduction) di slip gajinya.

### 2. Aturan Snapshot Data (SANGAT KRITIKAL)
- Tabel `payroll_details` digunakan untuk menyimpan rincian baris di slip gaji (misal: Honor Mengajar Rp 500.000).
- **Aturan Agent**: Kolom `name` dan `amount` di tabel detail ini bersifat **Snapshot**. Nilai ini harus langsung di-hardcode ke tabel saat *generate*. **JANGAN PERNAH** me-relasikan/mem-format nama & nominal dari master tarif (komponen) saat PDF dicetak. Tujuannya agar data riwayat Slip Gaji tahun lalu tidak berubah jika tarif yayasan naik tahun ini.

### 3. Pencairan Gaji (Disbursement) & Integrasi Jurnal
- Alur persetujuan slip gaji: *Draft* -> *Verified* (HRD) -> *Approved* (Ketua Yayasan) -> *Ready to Pay*.
- Ketika status gaji berubah menjadi *Paid* (karena integrasi transfer bank massal selesai), sistem harus mengirim sinyal balik ke Modul Finance untuk mencatat otomatis Jurnal Akuntansi Pengeluaran.

## Database Permissions (Akses Spatie)
Gunakan permission berikut:
- `payroll.calculate`: Menghitung gaji bulanan (Draft).
- `payroll.approve`: Menyetujui pencairan gaji (Khusus Ketua Yayasan).
- `payroll.print`: Mencetak slip gaji.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `16_PAYROLL.md` untuk melihat struktur tabel `payroll_periods`, `payrolls`, `payroll_details`, dan `employee_loans`.