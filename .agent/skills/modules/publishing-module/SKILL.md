---
name: publishing-module
description: Panduan logika bisnis untuk Modul Publikasi (Publishing Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani sistem CMS (Content Management System), berita, aggregator konten, halaman statis lembaga, dan pengumuman internal/eksternal.
---

# Publishing Module Logic (Publikasi & CMS)

Modul Publikasi mengelola konten informasi publik dan internal Yayasan Dar Al Tauhid. Sistem ini dirancang untuk melayani banyak domain/subdomain (*Multi-Domain Landing Pages*) dari satu pusat data.

## 🔴 Cross-References (Penting!)
- Jika membuat *routing* khusus untuk *Landing Page* lembaga, panggil skill: `institution-module`.

## When to use this skill
- Membangun fitur CRUD Berita (`publishing_posts`), Kategori, dan Halaman Statis (`publishing_pages`).
- Membangun fitur *News Aggregator* untuk Portal Berita Utama (`sarung.daraltauhid.com`).
- Membuat fitur *Popup/Banner* Pengumuman Internal untuk Dashboard Super App (`publishing_announcements`).

## Core Business Logic

### 1. Logic Visibilitas Konten (Global vs Lokal)
Tabel `publishing_posts` menyimpan semua berita. Kolom `institution_id` adalah penentu visibilitas:
- **Global (Yayasan)**: Jika `institution_id` bernilai `NULL`, maka konten tersebut adalah milik Yayasan Pusat dan berhak tampil di semua *website* cabang.
- **Lokal (Cabang)**: Jika `institution_id` terisi (misal ID MI), maka konten hanya tampil di *Landing Page* MI (`mis.daraltauhid.com`) dan di portal *Aggregator*.

### 2. Logic News Aggregator (Portal Sarung)
Portal `sarung.daraltauhid.com` adalah agregator.
- **Query Dasar**: Ambil semua konten `WHERE status = 'terbit' AND published_at <= NOW()` tanpa memfilter `institution_id`. Ini akan menarik seluruh feed berita dari Pondok, MI, SMP, hingga MA.

### 3. Internal Announcements (Pengumuman Dashboard)
- Fitur ini untuk memberikan informasi sistem (misal: "Rapat Koordinasi Yayasan", "Server Maintenance").
- Harus memiliki fitur *Target Audience* (`semua_user`, `hanya_guru`, `hanya_wali`) dan mendukung tampilan *Popup Modal* (`is_popup = true`) yang memaksa *user* membacanya saat baru login.

## Panduan Database (Knowledge Base)
Rujuklah ke dokumentasi `17_PUBLISHING.md` untuk struktur tabel detail (`publishing_categories`, `publishing_posts`, `publishing_pages`, `publishing_announcements`, dll).