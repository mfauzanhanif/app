# 14. FINANCE DATABASES

## 14.1. Master Data & Billing

### 14.1.1. Tabel `finance_coa` (Chart of Accounts)
Daftar akun akuntansi (misal: 1101-Kas Bank BSI, 4101-Pendapatan SPP).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable. Jika Null = Akun Global Yayasan. |
| `code` | VARCHAR(20) | Unique. Kode Akun (misal: 1-1001). |
| `name` | VARCHAR | Nama Akun (misal: "Kas di BSI"). |
| `type` | ENUM | `asset`, `liability`, `equity`, `revenue`, `expense`. |
| `normal_balance` | ENUM | `debit`, `credit`. Saldo normal akun. |
| `parent_id` | BIGINT | Self-reference untuk hierarki akun (Sub-akun). |

### 14.1.2. Tabel `finance_fee_types` (Komponen Biaya)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `name` | VARCHAR | Nama Biaya (misal: "SPP Juli 2026"). |
| `amount` | DECIMAL(15,2) | Nominal Default. |
| `frequency` | ENUM | `monthly` (Bulanan), `yearly` (Tahunan), `once` (Uang Pangkal). |
| `coa_revenue_id` | BIGINT | FK ke finance_coa. Akun pendapatan yang dikredit saat lunas. |
| `is_active` | BOOLEAN | Default true. |

### 14.1.3. Tabel `finance_invoices` (Header Tagihan)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `student_id` | BIGINT | Foreign Key. |
| `invoice_number` | VARCHAR | Unique. (misal: INV/2026/07/0001). |
| `date` | DATE | Tanggal terbit tagihan. |
| `due_date` | DATE | Tanggal jatuh tempo. |
| `total_amount` | DECIMAL | Total tagihan. |
| `paid_amount` | DECIMAL | Jumlah yang sudah dibayar (untuk cicilan). |
| `status` | ENUM | `unpaid`, `partial`, `paid`, `cancelled`. |
| `snap_token` | VARCHAR | Token dari Payment Gateway (untuk direct payment link). |
| `payment_url` | VARCHAR | URL pembayaran langsung (opsional). |

### 14.1.4. Tabel `finance_invoice_items` (Detail Tagihan)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `invoice_id` | BIGINT | Foreign Key. |
| `fee_type_id` | BIGINT | Foreign Key. |
| `description` | VARCHAR | Keterangan detail. |
| `amount` | DECIMAL | Nominal item ini. |
| `discount` | DECIMAL | Potongan (misal: Beasiswa/Anak Guru). |
| `final_amount` | DECIMAL | Amount - Discount. |

## 14.2. Wallet & Transactions (Inti Transaksi)

### 14.2.1. Tabel `finance_wallets` (Dompet Santri)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `student_id` | BIGINT | Foreign Key. |
| `type` | ENUM | `tuition` (Pendidikan), `pocket` (Uang Saku). |
| `balance` | DECIMAL(15,2) | Saldo saat ini. |
| `pin` | VARCHAR | Hashed PIN (Hanya untuk Pocket Money). |
| `daily_limit` | DECIMAL | Limit transaksi harian (Pocket Money). |
| `is_locked` | BOOLEAN | Blokir dompet jika ada masalah/hilang kartu. |
| `rfid_card_id` | VARCHAR | UID Kartu NFC/RFID (untuk jajan di kantin). |

**Unique Constraint**: (`student_id`, `type`).

### 14.2.2. Tabel `finance_wallet_transactions` (Mutasi Dompet)
Log keluar masuk uang di dompet (mirip mutasi rekening bank).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `wallet_id` | BIGINT | Foreign Key. |
| `type` | ENUM | `debit` (Masuk), `credit` (Keluar). |
| `amount` | DECIMAL | Nominal. |
| `transaction_type` | ENUM | `topup_gateway`, `payment_invoice`, `canteen_purchase`, `manual_adjustment`. |
| `reference_id` | BIGINT | ID Referensi (bisa ID Invoice, ID Transaksi Gateway, atau ID Transaksi Kantin). |
| `description` | VARCHAR | Keterangan mutasi. |
| `balance_after` | DECIMAL | Saldo setelah transaksi (Snapshot). |
| `created_at` | TIMESTAMP | Waktu transaksi. |

## 14.3. Payment Gateway Integration

### 14.3.1. Tabel `finance_payment_methods` (Konfigurasi)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `code` | VARCHAR | Kode metode (misal: BCA_VA, QRIS_GOPAY). |
| `provider` | VARCHAR | flip. |
| `name` | VARCHAR | Nama tampilan (misal: "Virtual Account BCA"). |
| `admin_fee_flat` | DECIMAL | Biaya admin nominal (misal: Rp 4.000). |
| `admin_fee_percent` | DECIMAL | Biaya admin persen (misal: 0.7%). |
| `is_active` | BOOLEAN | Status aktif. |

### 14.3.2. Tabel `finance_gateway_transactions` (Log Pembayaran Masuk)
Mencatat setiap request pembayaran ke Payment Gateway.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `user_id` | BIGINT | User (Wali) yang membayar. |
| `student_id` | BIGINT | Santri tujuan topup/bayar. |
| `fixed_va_id` | BIGINT | Nullable. Foreign Key ke finance_fixed_vas.id. Diisi jika uang masuk via FVA. |
| `order_id` | VARCHAR | Unique. ID Order yang dikirim ke Gateway (TRX-timestamp-random). |
| `external_id` | VARCHAR | ID Referensi dari Gateway (flip_id). |
| `payment_method_id` | BIGINT | Foreign Key. |
| `amount_total` | DECIMAL | Total yang harus dibayar (Tagihan + Admin Fee). |
| `amount_received` | DECIMAL | Bersih yang diterima yayasan (Total - Admin Fee). |
| `admin_fee` | DECIMAL | Biaya layanan gateway. |
| `status` | ENUM | `pending`, `paid`, `expired`, `failed`. |
| `paid_at` | TIMESTAMP | Waktu sukses bayar. |
| `callback_payload` | JSON | Simpan raw data callback dari gateway (untuk debugging). |

## 14.4. Accounting (Buku Besar)

### 14.4.1. Tabel `finance_journals` (Jurnal Umum Header)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `fiscal_period_id` | BIGINT | Foreign Key (Tahun Buku). |
| `transaction_date` | DATE | Tanggal transaksi. |
| `code` | VARCHAR | No Bukti Jurnal (misal: JU/2026/01/001). |
| `description` | TEXT | Keterangan jurnal. |
| `reference_type` | VARCHAR | Polymorphic (misal: `Modules\Finance\Models\Invoice`). |
| `reference_id` | BIGINT | ID Referensi asal transaksi. |
| `total_debit` | DECIMAL | Checksum (Debit harus sama dengan Kredit). |
| `total_credit` | DECIMAL | Checksum. |
| `is_posted` | BOOLEAN | Jika true, sudah masuk buku besar dan tidak bisa diedit. |

### 14.4.2. Tabel `finance_journal_details` (Baris Jurnal)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `journal_id` | BIGINT | Foreign Key. |
| `coa_id` | BIGINT | Foreign Key ke finance_coa.id. |
| `debit` | DECIMAL | Nominal Debit. |
| `credit` | DECIMAL | Nominal Kredit. |

### 14.4.3. Tabel `finance_fixed_vas` (Virtual Account Tetap)
Tabel ini memetakan Santri dengan Nomor VA dari berbagai Bank.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `student_id` | BIGINT | Foreign Key ke students.id. |
| `bank_code` | VARCHAR(10) | Kode Bank (misal: BCA, BNI, BRI, BSI, MANDIRI). |
| `va_number` | VARCHAR(30) | Unique. Nomor VA Lengkap (Prefix + Unique ID). Contoh: 98812345001. |
| `status` | ENUM | ACTIVE, INACTIVE. |
| `provider_id` | VARCHAR | ID dari Payment Gateway (misal: id_callback_midtrans). |
| `created_at` | TIMESTAMP | Waktu generate VA. |
Unique Constraint: (student_id, bank_code) -> Satu santri hanya boleh punya 1 VA per Bank.

### 14.4.4. Logic Alur Pembayaran (Payment Flow)

#### A. Inisialisasi (Saat Santri Diterima/Migrasi)
1.  **Admin/Sistem menjalankan Job**: `GenerateFixedVA(student_id)`.
2.  Sistem request ke Payment Gateway (flip) untuk **Create Fixed VA**.
3.  Simpan nomor VA yang didapat ke tabel `finance_fixed_vas`.
4.  **Wali Santri melihat di Dashboard**:
    *   BCA Virtual Account: `8808-1234-5678` (Ahmad)
    *   BNI Virtual Account: `9881-2345-6789` (Ahmad)

#### B. Pembayaran (Top-Up)
1.  Wali Santri transfer **Rp 1.000.000** ke VA BNI Ahmad (tanpa buka aplikasi).
2.  **Payment Gateway mengirim Webhook**: "Dana masuk Rp 1.000.000 ke VA 9881...".
3.  **Backend Logic**:
    *   Cari pemilik VA di tabel `finance_fixed_vas`. -> Ketemu: `Ahmad`.
    *   Catat di `finance_gateway_transactions`.
    *   **Tambah Saldo** di `finance_wallets` (Tipe: `tuition`) milik Ahmad.

#### C. Auto-Allocation (Pelunasan Otomatis)
1.  Sistem mendeteksi saldo Ahmad bertambah **Rp 1.000.000**.
2.  Sistem cek tabel `finance_invoices` Ahmad yang statusnya `unpaid`.
    *   Ada tagihan SPP: **Rp 300.000**.
    *   Ada tagihan Uang Gedung: **Rp 500.000**.
3.  **Action**:
    *   Potong saldo **Rp 800.000**.
    *   Update Invoice jadi `paid`.
    *   Sisa saldo **Rp 200.000** mengendap di dompet (bisa buat bulan depan atau dipindah ke Uang Saku).

**Keuntungan**:
*   Yayasan menerima uang cash di muka (Top-up).
*   Pencatatan akuntansi otomatis & real-time.
*   Wali santri cukup "Transfer Sekali", sistem yang membagi-bagi uangnya ke pos SPP, Gedung, dll.