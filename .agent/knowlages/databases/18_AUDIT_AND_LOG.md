# 17. AUDIT & LOG MODULE (Keamanan & Jejak Digital)

Modul ini bekerja di latar belakang (background) untuk merekam setiap aktivitas sensitif user, riwayat login, dan error sistem.

## 17.1. User Activity Log (Jejak Aktivitas)
Tabel ini mencatat setiap perubahan data (Create, Update, Delete). Struktur ini dirancang agar kompatibel dengan package standar industri seperti `spatie/laravel-activitylog`.

### 17.1.1. Tabel `activity_logs`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `log_name` | VARCHAR | Kategori Log (misal: `finance`, `grading`, `auth`). |
| `description` | TEXT | Deskripsi manusiawi (misal: "Pak Budi mengubah nilai Matematika Ahmad"). |
| `subject_type` | VARCHAR | Model yang diubah (misal: `App\Models\GradingScore`). |
| `subject_id` | BIGINT | ID dari data yang diubah. |
| `causer_type` | VARCHAR | Siapa yang mengubah (misal: `App\Models\User`). |
| `causer_id` | BIGINT | ID User pelakunya. |
| `institution_id` | BIGINT | Nullable. Agar log bisa difilter per lembaga. |
| `properties` | JSON | Payload Kunci. Menyimpan data old (sebelum edit) dan new (setelah edit). |
| `ip_address` | VARCHAR(45) | IP Address pelaku. |
| `user_agent` | TEXT | Info Browser/Device pelaku. |
| `created_at` | TIMESTAMP | Waktu kejadian. |

**Index**: `subject_id`, `causer_id`, `log_name`.

## 17.2. Authentication History (Riwayat Login)
Berbeda dengan activity log yang mencatat "aksi", tabel ini khusus mencatat "sesi". Penting untuk mendeteksi pembajakan akun.

### 17.2.1. Tabel `authentication_logs`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `user_id` | BIGINT | Foreign Key ke users.id. |
| `ip_address` | VARCHAR(45) | Alamat IP. |
| `user_agent` | TEXT | Info Browser (Chrome/Firefox) & OS (Windows/Android). |
| `login_at` | TIMESTAMP | Waktu login berhasil. |
| `logout_at` | TIMESTAMP | Nullable. Waktu logout. |
| `login_status` | ENUM | `sukses`, `gagal`. |
| `failure_reason` | VARCHAR | Nullable (misal: "Wrong Password", "Account Suspended"). |
| `location` | VARCHAR | Nullable. Perkiraan lokasi (Kota/Negara) dari IP. |

## 17.3. System Health (Error & Performance)
Untuk developer (Anda), tabel ini penting agar tidak perlu mengecek file `laravel.log` di server secara manual.

### 17.3.1. Tabel `system_errors`

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `level` | VARCHAR | `error`, `kritis`, `peringatan`. |
| `message` | TEXT | Pesan error singkat. |
| `context` | JSON | Stack trace lengkap (Baris code mana yang error). |
| `url` | VARCHAR | URL halaman yang error. |
| `method` | VARCHAR | `GET`, `POST`, `PUT`. |
| `user_id` | BIGINT | Nullable. Siapa user yang mengalami error ini. |
| `created_at` | TIMESTAMP | Waktu error terjadi. |
| `is_resolved` | BOOLEAN | Default false. Penanda apakah bug sudah diperbaiki developer. |

### 💡 Skenario Penggunaan Audit Log (Implementasi Nyata)

1.  **Kasus: "Nilai Anak Saya Kok Turun?"**
    *   **Situasi**: Seorang wali murid protes nilai anaknya berubah dari 90 jadi 70. Guru menyangkal mengubahnya.
    *   **Investigasi**: Admin membuka menu Audit Log, filter by Student Name = Ahmad.
    *   **Hasil**: Ditemukan log:
        *   User: Pak Budi (Guru Mapel).
        *   Action: Update `grading_scores`.
        *   Time: Jam 23:45 malam.
        *   Properties: `{"old": {"score": 90}, "new": {"score": 70}}`.
    *   **Kesimpulan**: Pak Budi memang mengubahnya (mungkin tidak sengaja atau lupa). Data tidak bisa berbohong.

2.  **Kasus: "Uang Kas Selisih"**
    *   **Situasi**: Laporan keuangan selisih Rp 500.000.
    *   **Investigasi**: Admin cek log kategori finance.
    *   **Hasil**: Ditemukan log "Delete Invoice #INV-001".
    *   **Kesimpulan**: Ada invoice yang dihapus paksa oleh Admin X. Transaksi ini bisa dikembalikan (Revert) jika Anda membuat fitur restore.

3.  **Kasus: "Akun Diretas?"**
    *   **Situasi**: Kepala Yayasan merasa ada aktivitas aneh di akunnya.
    *   **Investigasi**: Cek `authentication_logs`.
    *   **Hasil**: Terlihat ada login sukses dari IP Address Rusia atau Device tak dikenal pada jam 3 pagi.
    *   **Tindakan**: Segera ganti password dan aktifkan 2FA.

### 💡 Catatan Teknis Developer

1.  **Gunakan Package**:
    *   Jangan bikin roda baru. Gunakan `spatie/laravel-activitylog`.
    *   Package ini sangat powerful, mendukung Polymorphic Relations, dan otomatis mencatat old vs new data hanya dengan menambahkan Trait `LogsActivity` di Model Anda.

2.  **Pruning (Pembersihan Otomatis)**:
    *   Data log akan membengkak dengan cepat (bisa jutaan baris per tahun).
    *   Buat Scheduled Task di Laravel: `activitylog:clean` untuk menghapus log yang lebih tua dari 365 hari (sesuai kebijakan yayasan).

3.  **Excluded Fields**:
    *   **JANGAN PERNAH** me-log kolom sensitif seperti `password`, `pin_dompet`, atau `token`.
    *   Konfigurasi model Anda untuk ignore kolom-kolom ini saat logging.