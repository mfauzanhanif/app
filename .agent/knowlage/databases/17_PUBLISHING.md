# 16. PUBLISHING DATABASES

## 16.1. Content Management (Berita & Artikel)

### 16.1.1. Tabel `publishing_categories` (Kategori)
Taksonomi konten.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `name` | VARCHAR | Nama Kategori (misal: "Berita", "Artikel Islami", "Prestasi"). |
| `slug` | VARCHAR | Unique. URL-friendly name. |
| `type` | ENUM | `berita`, `halaman`, `galeri`. |
| `created_at` | TIMESTAMP | |

### 16.1.2. Tabel `publishing_posts` (Berita Utama)
Tabel utama untuk semua artikel berita.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable. Foreign Key.<br>- Jika NULL: Berita Global Yayasan (Tampil di semua web).<br>- Jika Terisi: Berita Lokal (Hanya tampil di web lembaga tsb). |
| `category_id` | BIGINT | Foreign Key. |
| `author_id` | BIGINT | Foreign Key ke users.id. |
| `title` | VARCHAR | Judul Berita. |
| `slug` | VARCHAR | Unique. |
| `excerpt` | TEXT | Ringkasan singkat untuk tampilan kartu/grid. |
| `content` | LONGTEXT | Isi berita (HTML/Rich Text). |
| `thumbnail_path` | VARCHAR | Gambar utama (Featured Image). |
| `status` | ENUM | `draft`, `terbit`, `arsip`. |
| `published_at` | DATETIME | Waktu terbit (Bisa dijadwalkan). |
| `view_count` | BIGINT | Counter jumlah pembaca. |
| `tags` | JSON | Tagging sederhana (misal: ["Santri", "Juara"]). |

**Index**: `institution_id`, `slug`, `status`, `published_at`.

## 16.2. Web Profile (Halaman Statis)

### 16.2.1. Tabel `publishing_pages`
Untuk halaman profil lembaga yang jarang berubah (Visi Misi, Sambutan Kepala, Sejarah).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `title` | VARCHAR | Judul Halaman (misal: "Sambutan Kepala Madrasah"). |
| `slug` | VARCHAR | Unique per Institution (misal: sambutan-kamad). |
| `content` | LONGTEXT | Isi halaman. |
| `template` | VARCHAR | Nullable. Jika ingin layout khusus (misal: full-width, sidebar-left). |
| `is_active` | BOOLEAN | Default true. |

## 16.3. Internal Announcements (Pengumuman)

### 16.3.1. Tabel `publishing_announcements`
Fitur pengumuman insidentil yang bisa muncul sebagai Popup/Banner di Dashboard atau Website.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable. (Null = Pengumuman Yayasan Pusat). |
| `title` | VARCHAR | Judul Pengumuman (misal: "Himbauan Sholat Gerhana"). |
| `content` | TEXT | Isi pesan. |
| `target_audience` | ENUM | `publik` (Website Depan), `semua_user` (Dashboard), `hanya_guru`, `hanya_wali`, `hanya_siswa`. |
| `type` | ENUM | `info` (Biru), `peringatan` (Kuning), `bahaya` (Merah/Penting). |
| `start_date` | DATETIME | Mulai tampil. |
| `end_date` | DATETIME | Berhenti tampil. |
| `is_popup` | BOOLEAN | Default false. Jika true, muncul sebagai Modal/Popup yang harus di-close. |
| `attachment_path` | VARCHAR | Nullable. File lampiran (PDF Surat Edaran). |

## 16.4. Frontend Utilities (Slider & Menu)

### 16.4.1. Tabel `publishing_sliders` (Banner Depan)
Gambar besar yang bergeser di halaman utama website (Hero Section).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable. |
| `title` | VARCHAR | Judul Banner. |
| `image_path` | VARCHAR | Lokasi file gambar. |
| `link_url` | VARCHAR | Link jika banner diklik (misal: ke form PSB). |
| `order` | INT | Urutan tampil. |
| `is_active` | BOOLEAN | Default true. |

### 16.4.2. Tabel `publishing_menus` (Navigasi)
Mengatur menu navbar dinamis per lembaga.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable. |
| `parent_id` | BIGINT | Self-reference (Untuk Sub-menu/Dropdown). |
| `name` | VARCHAR | Label Menu (misal: "Profil", "Berita"). |
| `url` | VARCHAR | Link tujuan. |
| `order` | INT | Urutan. |
| `location` | ENUM | `header`, `footer`, `sidebar`. |

### 💡 Logic Aggregator (Sarung Dar Al Tauhid)

Untuk portal berita gabungan (`sarung.daraltauhid.com`), Anda cukup melakukan Query sederhana ke tabel `publishing_posts`:

**Skenario: Menampilkan Berita Utama (Aggregator)**
```sql
SELECT * FROM publishing_posts 
WHERE status = 'terbit' 
AND published_at <= NOW()
ORDER BY published_at DESC 
LIMIT 10;
```
Logic ini akan menarik semua berita, baik yang Global (Yayasan) maupun Lokal (MI, MTS, MA).

**Skenario: Menampilkan Berita Website MI (`mis.daraltauhid.com`)**
```sql
SELECT * FROM publishing_posts 
WHERE status = 'terbit' 
AND (institution_id = [ID_MI] OR institution_id IS NULL) -- Ambil berita MI + Berita Yayasan
ORDER BY published_at DESC;
```