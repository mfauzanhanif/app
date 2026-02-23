---
name: finance-module
description: Panduan logika bisnis untuk Modul Keuangan (Finance Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani pembuatan tagihan (billing/invoice), sistem dompet digital santri (wallet), integrasi payment gateway (Flip/Midtrans), dan penjurnalan akuntansi otomatis.
---

# Finance Module Logic (Keuangan & Akuntansi)

Modul Keuangan mengelola seluruh arus kas masuk dan keluar. Modul ini wajib terisolasi dengan ketat dan menggunakan sistem penjurnalan (*Double-Entry Accounting*) otomatis saat terjadi transaksi operasional.

## 🔴 Cross-References (Penting!)
- Jika pembuatan tagihan berasal dari pendaftaran santri baru, panggil skill: `admission-module`.
- Jika harus menghentikan (*freeze*) tagihan bulanan karena siswa pindah, panggil skill: `student-affairs-module`.
- Jika mencairkan gaji pegawai ke bank, panggil skill: `payroll-module`.

## When to use this skill
- Membangun *Cron Job / Scheduler* untuk *Generate Invoice* massal (misal: Tagihan SPP Bulanan).
- Membangun integrasi *Payment Gateway* dan *Webhook Callback* penerimaan dana.
- Membuat fitur Dompet Santri (*Tuition Wallet* & *Pocket Money*).
- Membangun otomatisasi *Jurnal Akuntansi* (`finance_journals`).

## Core Business Logic

### 1. Tagihan & Freeze Logic
- *Job Generator* bulanan **HANYA** boleh men-generate tagihan untuk siswa yang berstatus `aktif` di tabel `students`. Jika siswa berstatus `pindah`, tagihan harus berhenti (*Freeze*) secara otomatis.

### 2. Dual Wallet System (Dompet Santri)
Santri memiliki dua jenis dompet (`finance_wallets`):
- **Tuition Wallet**: Uang deposit pendidikan. Sifatnya *Restricted* (Hanya bisa digunakan oleh sistem untuk melunasi tagihan/invoice sekolah).
- **Pocket Money**: Uang saku harian. Sifatnya *Transactional* (Bisa dipakai jajan di kantin menggunakan kartu RFID/NFC, dengan proteksi PIN dan *Daily Limit*).

### 3. Payment Flow & Auto-Allocation (WAJIB DIIKUTI)
Alur masuknya uang ke Yayasan menggunakan sistem *Fixed Virtual Account (FVA)* [cite: uploaded:mfauzanhanif/app-docs/app-docs-977336fce0b642a62eb56ff7545657cccc5033cb/Modules.md, uploaded:mfauzanhanif/app-docs/app-docs-977336fce0b642a62