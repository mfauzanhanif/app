# ROADMAP SUPER APP DAR AL TAUHID

## PHASE 1: Foundation & PSB Release (Target: 1 - 2 Bulan)
**Tujuan**: Sistem siap digunakan untuk menerima pendaftaran santri baru secara online, pembayaran formulir, dan seleksi.

### Sprint 1: Core Architecture & System Setup
**Fokus**: Menyiapkan "Wadah" aplikasi dan routing multi-domain.

#### Setup Project
- Install Laravel 12, Inertia.js (React), dan Tailwind CSS v4.
- Install & Config nwidart/laravel-modules.
- Install spatie/laravel-permission.

#### Routing & Domain Configuration
- Setup routes/web.php untuk memisahkan domain psb.daraltauhid.com dan app.daraltauhid.com.

#### Module 1: Institution (Fondasi Data)
- Buat CRUD institutions (Yayasan, MI, Pondok, dll).
- Set kolom code (misal: misdt, ppdt) untuk keperluan slug URL nanti.

#### Module 2: Periode (Waktu)
- Buat tabel academic_years. Set Aktif: "2026/2027" (untuk target PSB).
- Validasi: Hanya satu tahun ajaran yang boleh aktif.

### Sprint 2: USER & Authentication (User Management)
**Fokus**: Agar Calon Wali dan Panitia PSB bisa login.

#### Module 3: USER
- Implementasi Login & Register menggunakan Laravel/Breeze.
- Setup [Roles](./RolesAndPermissions.md)
> **Penting**: Pastikan user Calon Wali terisolasi, belum boleh akses dashboard internal yayasan.

### Sprint 3: Admission Module (Inti Permintaan)
**Fokus**: Alur pendaftaran di psb.daraltauhid.com.

#### Landing Page PSB
- Halaman depan yang menampilkan Informasi Gelombang & Alur.

#### Registration Flow
- Formulir Biodata Calon Santri (Data disimpan di tabel candidates, bukan students).
- Upload Dokumen (KK, Akta) menggunakan spatie/laravel-medialibrary.

#### Admin Panel PSB
- Fitur untuk Panitia melihat data pendaftar masuk.
- Fitur verifikasi berkas.

### Sprint 4: Finance Lite (Khusus PSB)
**Fokus**: Menangani pembayaran uang pendaftaran.

#### Module 14: Finance (Versi Terbatas)
- Setup tabel fees (Biaya Formulir, Uang Pangkal).
- Billing PSB: Generate invoice otomatis saat calon santri mendaftar.
- Payment: Halaman upload bukti transfer sederhana. jangan dulu gunakan payment gateway.

### Sprint 5: Selection & Announcement
**Fokus**: Proses seleksi dan pengumuman kelulusan.

#### Selection Logic
- Input nilai tes/wawancara oleh panitia.
- Tombol "Luluskan" atau "Tolak".

#### Pengumuman
- Halaman bagi wali untuk cek status kelulusan di portal PSB.
- Cetak Kartu Bukti Lulus (PDF).

---

## PHASE 2: Academic Preparation (Target: Sebelum Ajaran Baru Dimulai)
**Tujuan**: Migrasi data dari PSB ke data Siswa Aktif dan persiapan KBM.

### Module 5: Admission (Migration Feature)
- **One Click Migration**: Memindahkan data candidates (yang lulus & daftar ulang) ke tabel students dan guardians.

### Module 6 & 7: Student & Guardian
- Finalisasi profil siswa (NIS, NISN).
- Linking akun Wali Santri agar bisa login ke app.daraltauhid.com.

### Module 4: Asset (Room Management)
- Data Gedung dan Ruang Kelas untuk penempatan siswa.

### Module 10: Academic
- Pembagian Kelas (Class Placement).
- Setup Kalender Akademik.

---

## PHASE 3: Operational KBM & Finance (Target: Awal Tahun Ajaran)
**Tujuan**: Aplikasi digunakan sehari-hari oleh Guru, Tata Usaha, dan Keuangan.

### Module 3: Employee
- Input data Guru & Tendik.
- Penugasan Jabatan & Wali Kelas.

### Module 11: Curriculum
- Setup Mata Pelajaran & Jadwal Pelajaran (Roster).

### Module 14: Finance (Full Version)
- Tagihan Bulanan (SPP).
- Pencatatan Pemasukan & Pengeluaran Rutin.

### Module 12: Journal
- Guru mulai mengisi Jurnal Mengajar & Absensi Siswa harian.

---

## PHASE 4: HR, Payroll & Advanced Features (Target: Pertengahan Semester 1)
**Tujuan**: Manajemen SDM dan pelaporan canggih.

### Module 2: USER (upgrade)
- Update Auth agara bisa menggunakan google via laravel/socialite.

### Module 14: FINANCE (upgrade)
- Implementasi Payment gateway (Flip for Business).
- Implementasi Fixed Virtual Account (Flip for Business).

### Module 15: Payroll
- Hitung gaji guru otomatis berdasarkan kehadiran & jurnal mengajar.
- Slip Gaji Digital.

### Module 9: Boarding
- Manajemen Kamar Santri & Perizinan Pulang.

### Module 13: Grading
- Persiapan Rapor Tengah Semester (PTS).

### Module 17: Audit & Log
- Monitoring keamanan sistem secara penuh.