---
name: audit-log-module
description: Panduan logika bisnis untuk Modul Audit & Log di Super App Dar Al Tauhid. Gunakan skill ini saat menangani pencatatan aktivitas user (activity log), riwayat login, monitoring error sistem, dan kebijakan retensi data (pembersihan otomatis).
---

# Audit & Log Module Logic (Keamanan & Jejak Digital)

Modul Audit & Log memastikan semua aktivitas sensitif di dalam sistem dapat dilacak ("Siapa melakukan apa, kapan, dan di mana"). Modul ini adalah instrumen utama bagi Administrator dalam melakukan investigasi.

## 🔴 Cross-References (Penting!)
- Jika menangani keamanan otentikasi (mencegah *brute force*), panggil skill: `user-module`.

## When to use this skill
- Membangun fitur pencatatan perubahan data menggunakan package `spatie/laravel-activitylog`.
- Membuat fitur pencatatan riwayat sesi login (`authentication_logs`).
- Membangun UI Dashboard Error Log untuk melihat performa sistem (`system_errors`).
- Menulis *Scheduler* / *Cron Job* untuk membersihkan log kedaluwarsa.

## Core Business Logic

### 1. User Activity Log (Data Change Tracking)
- **Implementasi**: Gunakan *trait* `LogsActivity` dari Spatie pada model-model sensitif (seperti Transaksi Keuangan, Jurnal, Nilai, Profil Pegawai).
- **Payload Wajib**: Log harus merekam ID Pelaku (`causer_id`), IP Address, User Agent, dan *Properties* (mencatat data `old` dan `new` saat terjadi Update).
- **LARANGAN KERAS**: Jangan pernah mencatat (*log*) kolom sensitif seperti `password`, `pin` dompet, atau `token`. Pastikan kolom-kolom ini masuk dalam konfigurasi *ignored attributes*.

### 2. Authentication History
- Berbeda dengan *activity log*, tabel `authentication_logs` khusus mencatat lalu lintas sesi.
- Wajib mencatat percobaan masuk yang sukses maupun **Gagal**, termasuk alasan kegagalan ("Wrong Password") untuk mendeteksi anomali seperti serangan *Brute Force*.

### 3. Data Retention (Pembersihan Otomatis)
- Karena aplikasi ini adalah Super App yang datanya terus mengalir, tabel log akan membengkak dengan cepat.
- **Wajib Ada Scheduler**: Buat *Console Command* Laravel yang dijalankan harian (`daily()`) untuk melakukan *Auto-Pruning* (penghapusan otomatis) terhadap data log yang usianya melebihi batas retensi (misal: > 365 hari) agar *storage database* tidak penuh.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `18_AUDIT_AND_LOG.md` untuk struktur tabel detail (`activity_logs`, `authentication_logs`, `system_errors`).