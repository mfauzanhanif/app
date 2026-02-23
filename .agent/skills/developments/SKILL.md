---
name: developments-index
description: Peta navigasi (Index) untuk seluruh panduan teknis, stack frontend, dan tools backend di Super App Dar Al Tauhid. Gunakan skill ini saat Anda butuh panduan spesifik mengenai cara menulis kode (React, Tailwind, Jobs, Testing) atau mengeksekusi perintah Artisan.
---

# Developments & Tech Stack Index

Direktori ini berisi aturan teknis (Tech Stack) dan tata cara penulisan kode yang spesifik untuk proyek Super App Dar Al Tauhid. Proyek ini menggunakan standar modern (Laravel 12, Inertia v2, Tailwind v4, Wayfinder, Pest, dan arsitektur Modular).

**ATURAN UNTUK AGENT:**
Jangan menggunakan standar bawaan (default) pengetahuan Anda! Jika Anda ditugaskan untuk menulis kode di area bawah ini, **WAJIB** membaca file `SKILL.md` di folder yang bersesuaian terlebih dahulu.

## 1. Frontend Ecosystem (React & UI)
Panduan untuk antarmuka pengguna, navigasi SPA, dan *styling*.
- **`inertia-react-development`**: Baca ini saat membuat halaman React, komponen, atau Form. Menggunakan standar Inertia v2 (komponen `<Form>`, *Deferred Props*).
- **`tailwindcss-development`**: Baca ini saat menata layout atau warna. Menggunakan standar Tailwind v4 (`@theme`, tanpa `tailwind.config.js`) dan mengutamakan komponen Flowbite-React.
- **`wayfinder-development`**: Baca ini saat menghubungkan React ke *endpoint* Laravel. **PROYEK INI TIDAK MENGGUNAKAN ZIGGY**.

## 2. Backend Tools & CLI (Laravel & Modular)
Panduan eksekusi perintah terminal dan optimalisasi server.
- **`laravel-modules-artisan`**: Baca ini SEBELUM membuat file baru (Controller, Model, Request) untuk sebuah Modul. Menjelaskan penggunaan `php artisan module:make-...`.
- **`background-jobs-development`**: Baca ini saat membuat fitur yang berat (Generate PDF, Tagihan Massal, Hitung Gaji) agar aman dijalankan di *Shared Hosting* (menggunakan *Chunking* & Queue).

## 3. Quality Assurance (Testing)
Panduan untuk memastikan kode bebas dari *bug*.
- **`pest-testing-development`**: Baca ini saat diminta menulis *Unit Test* atau *Feature Test*. **PROYEK INI TIDAK MENGGUNAKAN CLASS PHPUNIT**. Semua test menggunakan sintaks fungsional Pest (`it()`, `test()`).