# 15. PAYROLL DATABASES

## 15.1. Configuration & Master Data

### 15.1.1. Tabel `payroll_periods` (Periode Gaji)
Mengatur siklus penggajian (Cut-off).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Nullable (Jika penggajian terpusat Yayasan). |
| `name` | VARCHAR | Nama Periode (misal: "Januari 2026"). |
| `start_date` | DATE | Tanggal awal cut-off (misal: 26 Des). |
| `end_date` | DATE | Tanggal akhir cut-off (misal: 25 Jan). |
| `payout_date` | DATE | Rencana tanggal cair (misal: 01 Feb). |
| `is_thr` | BOOLEAN | Default false. Penanda jika ini periode khusus THR. |
| `status` | ENUM | `buka`, `sedang_diproses`, `tutup`. |
| `created_at` | TIMESTAMP | |

### 15.1.2. Tabel `payroll_components` (Master Komponen)
Mendefinisikan jenis-jenis uang (Gaji Pokok, Tunjangan, Potongan).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `name` | VARCHAR | Nama Komponen (misal: "Honor Mengajar", "Kasbon"). |
| `type` | ENUM | `tunjangan` (Penambah), `potongan` (Pengurang). |
| `calculation_type` | ENUM | `tetap`, `per_jp` (Dikali Jam Ajar), `per_kehadiran` (Dikali Hadir), `rumus`. |
| `default_amount` | DECIMAL | Nominal standar (jika ada). |
| `is_taxable` | BOOLEAN | Apakah kena pajak PPh 21? (Opsional). |

### 15.1.3. Tabel `payroll_component_rates` (Tarif Variabel)
Menyimpan tarif spesifik per jenjang/jabatan.
Contoh: Tarif JP di MA = 50rb, di MI = 30rb.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `component_id` | BIGINT | FK ke payroll_components.id. |
| `group_level` | VARCHAR | Kategori (misal: GURU_MA, GURU_MI, STAFF). |
| `rate_amount` | DECIMAL | Nominal (Rp). |

## 15.2. Employee Settings (Pengaturan Pegawai)

### 15.2.1. Tabel `employee_salary_settings` (Gaji Tetap Personal)
Mengatur gaji pokok spesifik per orang (Override default).

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `employee_id` | BIGINT | Foreign Key. |
| `component_id` | BIGINT | FK ke payroll_components.id (Biasanya Gaji Pokok/Tunjangan Jabatan). |
| `amount` | DECIMAL | Nominal Gaji Tetap orang ini. |

## 15.3. Loan Management (Kasbon)

### 15.3.1. Tabel `employee_loans` (Header Pinjaman)

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `employee_id` | BIGINT | Foreign Key. |
| `loan_date` | DATE | Tanggal pinjam. |
| `amount` | DECIMAL | Total pinjaman. |
| `tenor_months` | INT | Lama cicilan (bulan). |
| `monthly_installment` | DECIMAL | Cicilan per bulan. |
| `reason` | TEXT | Keperluan. |
| `status` | ENUM | `diajukan`, `disetujui`, `ditolak`, `lunas`. |
| `approved_by` | BIGINT | User ID Ketua Yayasan. |

### 15.3.2. Tabel `employee_loan_records` (Kartu Cicilan)
Mencatat sejarah pemotongan gaji untuk kasbon.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `loan_id` | BIGINT | Foreign Key. |
| `payroll_id` | BIGINT | FK ke tabel payrolls (Gaji bulan apa yang dipotong). |
| `amount_paid` | DECIMAL | Nominal yang dipotong. |
| `date` | DATE | Tanggal potong. |

## 15.4. Payroll Processing (Transaksi Gaji)

### 15.4.1. Tabel `payrolls` (Slip Gaji Header)
Satu baris per pegawai per periode.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `institution_id` | BIGINT | Foreign Key. |
| `period_id` | BIGINT | FK ke payroll_periods.id. |
| `employee_id` | BIGINT | Foreign Key. |
| `bank_name` | VARCHAR | Snapshot nama bank saat generate. |
| `account_number` | VARCHAR | Snapshot no rek saat generate. |
| `total_allowance` | DECIMAL | Total Pendapatan. |
| `total_deduction` | DECIMAL | Total Potongan. |
| `net_salary` | DECIMAL | Gaji Bersih (Take Home Pay). |
| `status` | ENUM | `draft`, `diverifikasi`, `disetujui`, `dibayar`. |
| `paid_at` | TIMESTAMP | Waktu transfer sukses (integrasi Flip). |
| `disbursement_transaction_id` | BIGINT | Link ke tabel finance_disbursements (Modul 14). |

**Index**: `period_id`, `employee_id`, `status`.

### 15.4.2. Tabel `payroll_details` (Rincian Slip)
Menyimpan detail baris per baris di slip gaji.
**PENTING**: Kolom `name` dan `amount` di sini bersifat **Snapshot**. Jangan me-relasikan ke master data saat cetak slip, agar data historis tidak berubah jika tarif master berubah tahun depan.

| Field | Type | Deskripsi |
|---|---|---|
| `id` | BIGINT | Primary Key. |
| `payroll_id` | BIGINT | Foreign Key. |
| `component_id` | BIGINT | FK ke payroll_components.id (untuk tracking). |
| `name` | VARCHAR | Nama Komponen (Snapshot). |
| `type` | ENUM | `tunjangan`, `potongan`. |
| `multiplier` | DECIMAL | Jumlah pengali (misal: 24 Jam Mengajar). |
| `amount` | DECIMAL | Total Nominal (24 x Tarif). |
| `is_manual` | BOOLEAN | Default false. True jika ini adalah adjustment manual bendahara. |
| `notes` | VARCHAR | Catatan (misal: "Bonus Prestasi Lomba"). |

### 💡 Logic Kalkulasi & Integrasi (Developer Note)

1.  **Logic "Hitung Gaji Otomatis" (The Brain)**:
    *   Saat tombol generate ditekan, sistem backend melakukan:
        *   **Gaji Tetap**: Ambil dari `employee_salary_settings`.
        *   **Honor Mengajar**: Query `SUM(total_jp)` dari tabel journals (Modul 12) `WHERE status='disetujui' AND date BETWEEN [CutOffStart] AND [CutOffEnd]`. Kalikan dengan tarif per jenjang.
        *   **Transport/Makan**: Query `COUNT(id)` dari presensi Fingerprint (Modul 3) `WHERE time_in IS NOT NULL`. Kalikan tarif harian.
        *   **Kasbon**: Cek tabel `employee_loans` yang `status='disetujui'` dan belum lunas. Ambil nilai `monthly_installment`. Masukkan sebagai Deduction.

2.  **Logic "Cairkan Gaji" (Integrasi Flip)**:
    *   Saat status Payroll diubah jadi `disetujui` oleh Ketua Yayasan.
    *   Bendahara klik "Disburse via Flip".
    *   Sistem mengambil semua row `payrolls` periode tersebut.
    *   Sistem membuat Batch Transfer ke Modul 14 (`finance_disbursements`).
    *   Setelah sukses callback dari Flip, update status `payrolls` jadi `dibayar` dan update `employee_loans` (kurangi sisa hutang).

3.  **Inval (Guru Pengganti)**:
    *   Di Modul 12 (Jurnal), ada kolom `original_teacher_id` dan `teacher_id` (pengganti).
    *   Logic Payroll harus menghitung JP untuk `teacher_id` yang real mengajar saat itu, bukan guru yang namanya ada di jadwal tapi berhalangan hadir.