# ARSITEKTUR MODUL SUPER APP DAR AL TAUHID

## 1. INSTITUTION MODULE (Fondasi)

### 1.1. Institution Registry (Pusat Data Lembaga)

Fitur ini mencatat struktur organisasi Yayasan Dar Al Tauhid yang cukup kompleks (Internal/Eksternal, Pondok/Formal/Non-Formal/Sosial).

- **Hierarki Lembaga:** Sistem membedakan Yayasan Pusat (*Parent*) dengan lembaga di bawahnya seperti MI, Pondok, atau Masjid (*Children*).
- **domain mapping:**
  1. [daraltauhid.com](https://daraltauhid.com) (Landing Page Pondok Pesantren Dar Al Tauhid)
  2. [psb.daraltauhid.com](https://psb.daraltauhid.com) (Portal Penerimaan Santri Baru)
  3. [app.daraltauhid.com](https://app.daraltauhid.com) (Super App)
  4. [sarung.daraltauhid.com](https://news.daraltauhid.com) (Halaman berita)
  5. [yayasan.daraltauhid.com](https://yayasan.daraltauhid.com) (Landing Page Yayasan Dar Al Tauhid Pusat)
  6. [tk-islam.wathaniyah.sch.id](https://tk-islam.wathaniyah.sch.id) (Landing Page TK Islam Wathaniyah)
  7. [mis.daraltauhid.com](https://mis.daraltauhid.com) (Landing Page MI Dar Al Tauhid)
  8. [smp-plus.daraltauhid.com](https://smp-plus.daraltauhid.com) (Landing Page SMP Plus Dar Al Tauhid)
  9. [manuscirebon.com](https://manuscirebon.com) (Landing Page MA Nusantara)
  10. [slb-abc.wathaniyah.sch.id](https://slb-abc.wathaniyah.sch.id) (Landing Page SLB ABC Wathaniyah)
  11. [madrasah.daraltauhid.com](https://mdarasah.daraltauhid.com) (Landing Page Madrasah Dar Al Tauhid)
  12. [tpq.daraltauhid.com](https://tpq.daraltauhid.com) (Landing Page TPQ Dar Al Tauhid)
  13. [mdta.daraltauhid.com](https://mdta.daraltauhid.com) (Landing Page MDTA Dar Al Tauhid)
  14. [lksa.daraltauhid.com](https://lksa.daraltauhid.com) (Landing Page LKSA Dar Al Tauhid)
  15. [alumni.daraltauhid.com](https://alumni.daraltauhid.com) (Landing Page Alumni Dar Al Tauhid)

  > Pastikan di routes/web.php Anda menggunakan Domain Routing yang ketat untuk Landing Page, sebelum masuk ke logic app.daraltauhid.com

```
  // Group App Utama
  Route::domain('app.daraltauhid.com')->group(...);

  // Group Portal Pendaftaran Santri Baru
  Route::domain('psb.daraltauhid.com')->group(...);

  // Group Portal Berita
  Route::domain('sarung.daraltauhid.com')->group(...);
  
  // Group Landing Pages
  Route::domain('daraltauhid.com')->group(...);
  Route::domain('manuscirebon.com')->group(...);
  Route::domain('mis.daraltauhid.com')->group(...);
  Route::domain('smp-plus.daraltauhid.com')->group(...);
  Route::domain('tk-islam.wathaniyah.sch.id')->group(...);
  Route::domain('slb-abc.wathaniyah.sch.id')->group(...);
  Route::domain('madrasah.daraltauhid.com')->group(...);
  Route::domain('tpq.daraltauhid.com')->group(...);
  Route::domain('mdta.daraltauhid.com')->group(...);
  Route::domain('lksa.daraltauhid.com')->group(...);
  Route::domain('alumni.daraltauhid.com')->group(...);
  Route::domain('yayasan.daraltauhid.com')->group(...);
```

- **Path-Based Multi-Tenancy:**
  - Sistem menggunakan **Satu Domain Utama** (`app.daraltauhid.com`) untuk seluruh operasional dashboard.
  - Pembedaan tenant menggunakan **Slug URL**. Slug diambil dari kolom `code` pada tabel `institutions`. Contoh:
    - Dashboard Yayasan (global scope): `app.daraltauhid.com/ydtp/dashboard`
    - Dashboard MI: `app.daraltauhid.com/misdt/dashboard`
    - Dashboard Pondok: `app.daraltauhid.com/ppdt/dashboard`
  - Path Wali Santri/Siswa: `app.daraltauhid.com/wali/{student_id}/dashboard`
- **Kategorisasi:** Memisahkan lembaga Internal (Milik Sendiri) dan Eksternal (Mitra/Binaan). Lembaga Eksternal tidak memiliki akses ke aplikasi.

## 2. PERIODE MODULE (Pengaturan Waktu)

Sesuai standar pendidikan dan keuangan:

- **Academic Year Control:** Mengatur Tahun Ajaran (Juli - Juni). Wajib ada validasi hanya satu tahun ajaran yang aktif dalam satu waktu (dikendalikan Yayasan).
- **Semester Control:** Mengatur Ganjil/Genap di dalam rentang tahun ajaran tersebut.
- **Fiscal Year Control:** Mengatur Tahun Buku Keuangan (Januari - Desember) untuk keperluan laporan pajak dan audit yayasan.

---

## 3. USER MODULE (Identity & Access Management)

### 2.1. Authentication (Autentikasi)

- **Unified Login (SSO):** User hanya perlu login satu kali di `app.daraltauhid.com` untuk mengakses seluruh layanan. (tidak perlu login lagi, ketika switch lembaga).
- **Multi-Role-Institution User:** Satu akun user dapat memiliki banyak peran di berbagai lembaga sekaligus.
  > *Contoh: Seorang user tercatat sebagai "Kepala" di MA, sekaligus "Guru" di Pondok, dan "Wali Santri" di MI.*
- **Institution Selection:** jika user adalah internal employee, maka setelah login akan diarahkan ke halaman pilih lembaga untuk memilih masuk ke lembaga mana (misal: Pondok, MI, MA).
- **Student Selection:** jika user adalah wali santri, maka setelah login akan diarahkan ke halaman pilih siswa untuk memilih masuk ke siswa mana (misal: Pondok, MI, MA).

### 2.2. Authorization (Otorisasi)

- **RBAC (Role-Based Access Control):**
  - **Global Roles:** Peran tingkat tinggi yang tidak terikat lembaga (contoh: *Operator Yayasan*).
  - **Scoped Roles:** Peran yang terbatas pada lembaga tertentu (contoh: *Operator Sekolah*, *Kepala Lembaga*).

- **Session Injection Logic:**
  Ketika login dan memilih lembaga (atau mengakses URL lembaga), sistem mengecek kepemilikan *scoped role*. Jika valid, sistem menyuntikkan konteks lembaga tersebut ke dalam session user.

- **Permission Matrix:** Konfigurasi granular hak akses (CRUD) per modul dan per role.

- **Institution Switcher:** Fitur bagi user (selain wali santri) untuk berpindah konteks antar lembaga yang menjadi hak aksesnya tanpa perlu login ulang.
  > Middleware `CheckInstitutionAccess` wajib berjalan setiap kali request switch lembaga atau mengakses URL lembaga secara manual, bukan hanya saat login awal. Pastikan logicnya: "User ini mengakses URL /ppdt/. Apakah User punya role di Institution ID milik ppdt? Jika TIDAK -> Abort 403."
- **Student Switcher:** Fitur bagi wali santri untuk berpindah konteks antar siswa yang menjadi hak aksesnya tanpa perlu login ulang.
  > Gunakan NanoID (public_id) 10 digit pada tabel siswa dan pastikan Middleware `CheckStudentAccess` sangat ketat (memastikan public_id siswa tersebut benar-benar anak dari user yang sedang login).

- **Ketentuan Khusus (The Two Hats Rule):**
  > Admin Yayasan (Global Role) tetap dapat mengakses *Scoped Role* jika akun tersebut memang memiliki penugasan spesifik di lembaga.
  > Contoh: Akun user Fauzan adalah **Operator Yayasan**. Namun, user Fauzan juga memiliki role **Guru** di MI. Maka, user Fauzan bisa melakukan *switch* ke Portal MI dan bertindak sebagai **Guru MI** (bukan sebagai Operator Yayasan).

---

## 3. EMPLOYEE MODULE (Kepegawaian)

Modul ini mengelola siklus hidup SDM, mulai dari rekrutmen, penugasan lintas lembaga, manajemen SK, hingga data dasar penggajian.

### 3.1. Employee Master Data (Database Pegawai)

Pusat data tunggal untuk seluruh SDM Yayasan (Guru & Tenaga Kependidikan).

- **Single Identity:** Setiap pegawai hanya memiliki satu baris data di tabel employees, terlepas dari berapa banyak lembaga tempat dia mengajar.
- **Biodata Lengkap:**
  - Data Pribadi: NIK (KTP), Nama Lengkap, Gelar Depan/Belakang, Alamat, Kontak.
  - Data Kependidikan (Khusus Guru): NUPTK, NRG (Nomor Registrasi Guru), Ijazah Terakhir, Jurusan.
  - Data Yayasan: NIPY (Nomor Induk Pegawai Yayasan), Tanggal Bergabung (TMT Yayasan).
- **Arsip Digital:** Upload scan KTP, Ijazah, KK, dan SK Pengangkatan dalam format PDF (disimpan di private storage demi keamanan).

### 3.2. Multi-Institution Assignments (Penugasan Lintas Lembaga)

Fitur ini menangani logika "The Two Hats Rule" secara database.

- **Institution Mapping (Pivot Table):**
  - Menghubungkan employee_id dengan institution_id.
- **Status Per Lembaga:**
  - Homebase (Satmingkal): Lembaga induk (misal: MI).
  - Assigned (Tugas Tambahan): Lembaga tambahan (misal: Mengajar Sore di Pondok).
  - Status Kepegawaian: GTY (Guru Tetap Yayasan), GTT (Guru Tidak Tetap), atau Honorer per lembaga.
- **Job Description (Tupoksi):**
  - Mencatat apa tugas utama pegawai di lembaga tersebut (Guru Mapel / Staff TU / Kebersihan).

### 3.3. Structural Positions (Manajemen Jabatan)

Mengelola jabatan struktural yang memiliki implikasi pada Tunjangan Jabatan dan Hak Akses (Role) di aplikasi.

- **Structural History:** Mencatat riwayat jabatan (Contoh: Tahun 2024 menjabat Kepala Madrasah, Tahun 2026 menjabat Ketua Yayasan).
- **SK Jabatan:** Input Nomor SK, TMT (Terhitung Mulai Tanggal), dan TST (Terhitung Selesai Tanggal).
- **Role Synchronization:**
  - Logic Otomatis: Jika pegawai diangkat menjadi "Bendahara MI", sistem otomatis memberikan Role Treasurer pada scope institution_id: MI di Modul User.
  - Jika masa jabatan habis, role otomatis dicabut.

### 3.4. Employee Attendance (Presensi Kerja)

Berbeda dengan presensi siswa, ini adalah presensi jam kerja pegawai (Fingerprint/Geotagging).

- **Work Shift Management:**
  - Mengatur jam kerja (Jam Datang & Jam Pulang).
  - Shift Guru: Fleksibel berdasarkan jadwal mengajar (Integrasi Modul 11 Curriculum).
  - Shift Tendik/Staff: Fixed (07:00 - 14:00).
- **Attendance Machine Integration:**
  - Import data dari mesin fingerprint (X100C/Solution) atau fitur Check-in GPS via HP (Radius 50m dari titik koordinat lembaga).
- **Leave Management (Cuti & Izin):**
  - Pengajuan Cuti (Tahunan, Melahirkan, Ibadah Haji/Umroh).
  - Approval berjenjang (Kepala Lembaga -> Ketua Yayasan).
  - Integrasi Payroll: Potongan gaji otomatis jika Izin/Alpha melebihi kuota.

### 3.5. Payroll Master Data (Data Dasar Gaji)

Modul ini HANYA menyimpan konfigurasi dan tarif. Perhitungan (Kalkulator Gaji) ada di Modul 15.

- **Salary Components (Komponen Gaji):**
  - Gaji Pokok: Berdasarkan jenjang pendidikan atau masa kerja (Berkala).
  - Tunjangan Tetap: Tunjangan Istri/Suami, Tunjangan Anak, Tunjangan Jabatan.
  - Tunjangan Variabel: Tarif per Jam Mengajar (Rate JP), Uang Makan Harian, Transport.
- **Bank Account Info:**
  - Rekening Bank untuk transfer gaji (Logic Payroll Bank Transfer).

### 3.6. Performance & Mutation (Kinerja & Mutasi)

- **Mutation History:** Mencatat sejarah perpindahan homebase antar lembaga.
- **Warning Letters (SP):** Pencatatan Surat Peringatan (SP1, SP2, SP3) sebagai bahan evaluasi perpanjangan kontrak.
- **PKG (Penilaian Kinerja Guru):** Input skor evaluasi tahunan (Integrasi ke nominal Insentif Kinerja).

## 4. ASSET MODULE (Sarana Prasarana)

Modul ini berfungsi untuk manajemen aset fisik secara menyeluruh (Lifecycle), mulai dari pengadaan, operasional harian, perawatan, hingga penghapusan aset.

### 4.1. Inventory Management (Inventaris)

Menangani pencatatan master data aset.

- **Asset Registry (CRUD)**
  - Pencatatan barang fisik (Meja, Kursi, Proyektor, Kendaraan, AC).
  - Data Points: Nama, Kode (Auto-generated), Kategori, Tanggal Beli, Harga Perolehan, Sumber Dana.
  - Tagging: Support QR Code (UUID) untuk identifikasi unik.

- **Stock Opname (Audit)**
  - Fitur audit berkala (Bulanan/Tahunan).
  - Proses: Scan fisik barang di ruangan -> Bandingkan dengan data sistem -> Flagging barang hilang/tidak sesuai lokasi.

### 4.2. Room Management (Manajemen Ruangan)

Master Data lokasi fisik.

- **Hierarki Lokasi**
  - Mendata Gedung -> Lantai -> Ruangan.
- **Atribut Ruangan**
  - Kapasitas, Fasilitas Default, dan PIC Ruangan.

### 4.3. Asset Operations (Operasional Aset)

Menangani dinamika pergerakan aset sehari-hari.

- **Asset Mutation (Mutasi Lokasi)**
  - Mencatat perpindahan aset dari satu ruangan ke ruangan lain.
  - History Log: Melacak riwayat perjalanan aset (siapa yang memindahkan, kapan, dan alasan pindah).
  - Contoh: Memindahkan Kursi dari Aula ke Kelas A.

- **Asset Lending (Peminjaman)**
  - Fitur untuk santri/guru meminjam aset jangka pendek.
  - Flow: Request Pinjam -> Approval Sarpras -> Serah Terima -> Pengembalian.
  - Contoh: Peminjaman Proyektor untuk kegiatan OSIS/Ekskul.

### 4.4. Maintenance & Repair (Perawatan & Perbaikan)

Menangani kesehatan aset dan biaya perbaikan.

- **Ticketing System (Lapor Kerusakan)**
  - User (Guru/Santri) scan QR -> Klik "Lapor Rusak" -> Tiket masuk ke Admin Sarpras.
  - Status Flow: Reported -> In Review -> In Repair -> Resolved.

- **Repair Execution**
  - Pencatatan tindakan perbaikan (Teknisi Internal vs Vendor Luar).
  - Cost Tracking: Input biaya perbaikan (Sparepart + Jasa).
  - Integrasi Finance: Biaya perbaikan otomatis tercatat sebagai pengeluaran di pos anggaran pemeliharaan.

### 4.5. Procurement (Pengadaan)

Menangani pembelian aset baru.

- **Purchase Request (PR)**
  - Unit mengajukan kebutuhan barang.
- **Budget Check & Approval**
  - Integrasi otomatis dengan Modul Finance untuk validasi sisa pagu anggaran.
  - Workflow persetujuan berjenjang (Kepala Bagian -> Bendahara -> Ketua Yayasan).

---

### 4.6. Asset Disposal (Penghapusan Aset)

Menangani aset yang sudah habis masa pakainya atau rusak total.

- **Disposal Request**
  - Mengubah status aset menjadi "Disposed" (Dihapuskan) agar tidak muncul di stok aktif, namun data *history*-nya tetap tersimpan.
  - Alasan: Rusak Total, Hilang, Dijual/Lelang, Hibah.
- **Asset Value Adjustment**
  - Pencatatan nilai akhir aset (Nilai Residu) jika aset dijual (Pemasukan Kas).

## 5. ADMISSION MODULE (Penerimaan Peserta Didik Baru)

Pintu gerbang data siswa. Modul ini sering memiliki siklus hidup yang berbeda (musiman).

### 5.1. Registration Portals

- Multi-Channel: Menangani pendaftaran via psb.daraltauhid.com (Pondok) dan halaman dari subdomain sekolah (/ppdb).
- Data Collection: Formulir biodata, upload berkas (KK, Akta), dan validasi dokumen.
- Registration Flow: Formulir & Upload Berkas.
- Admission Settings (Informasi PSB):
  - Pengaturan Gelombang Pendaftaran (Tanggal Buka/Tutup).
  - Informasi Alur & Prosedur (Tampil di Frontend).

### 5.2. Enrollment

- Candidate Database: Tabel terpisah dari users atau students. Isinya data mentah pendaftar.
- Billing PSB: Generate tagihan formulir & uang pangkal otomatis.
- Selection Process (Manual):
  - Input Jadwal Wawancara/Tes Fisik.
  - Input Hasil Seleksi (Lulus/Tidak) secara manual oleh admin.
- Migration (Lanjut Jenjang): Fitur untuk memindahkan data siswa internal (misal: dari MI ke SMP) tanpa input ulang.
- One Click Migration: Fitur untuk memindahkan data dari candidates ke students + guardians secara otomatis saat dinyatakan LULUS dan DAFTAR ULANG. Yang perlu diperhatikan:
  - Saat migrasi candidate → student (One Click Migration), NISN akan di-copy. Karena keduanya unique(), tidak akan ada konflik selama NISN di candidates tidak bentrok dengan NISN di students yang sudah ada sebelumnya — ini aman selama logika migrasi benar.
  - unique() + nullable() — Di MySQL, NULL tidak dihitung dalam unique constraint (multiple NULL dibolehkan). Jadi ini aman untuk siswa yang belum punya NISN. ✅
  - Potensi masalah: Jika satu anak mendaftar ulang (misal pindah jenjang), NISN yang sama bisa masuk ke candidates lagi padahal sudah ada di students. Pastikan ada validasi di application level untuk cek duplikat NISN lintas kedua tabel.

## 6. STUDENT MODULE (Siswa)

### 6.1. Student Profile (The Golden Record)

- NISY (Yayasan), NIS (Sekolah), NISN (Nomor Induk Santri - Nasional).
- Data Pribadi yang statis (Lahir, NIK, Gol Darah).
- Relation: BelongsTo Institution (Siswa MI beda dengan Siswa MA).

## 7. GUARDIAN MODULE (Wali)

Wali adalah entitas yang berdiri sendiri, bukan sekadar "kolom pelengkap" di tabel siswa.

### 7.1 Guardian Master Data

- Data Ayah/Ibu/Wali (NIK, No HP/WA, Alamat).
- User Account untuk login ke aplikasi (Role: guardian).

### 7.2 Family Mapping (Many-to-Many)

- Tabel pivot guardian_student.
- Skenario: Pak Budi (Guardian ID: 101) punya anak:
  - Ahmad (Santri Pondok)
  - Siti (Siswi MI)
  - Pak Budi cukup login sekali untuk melihat tagihan dan nilai kedua anaknya.

### 7.3 Communication Hub

- Fitur Broadcast WA Gateway yang menargetkan guardian_id.
- Logic: Saat Enrollment Migration, sistem harus cerdas mengecek via NIK/No HP: "Apakah Bapak ini sudah ada di database?". Jika sudah, link saja ke anak baru. Jangan buat data ganda.

## 8. STUDENT AFFAIRS MODULE (Kesiswaan)

- Mutasi Siswa: Kuhusus Pindah sekolah (Keluar/Masuk).
- Prestasi Siswa.
- Integrasi mutasi:
  - saat siswa dimutasi "Keluar/Pindah", status tagihan di Modul Finance otomatis berhenti (freeze).
  - saat siswa dimutasi "Masuk", status tagihan di Modul Finance otomatis aktif (unfreeze).

## 9. BOARDING MODULE (Pondok)

- Dormitory: Manajemen kamar asrama dan penempatan santri.
- Permission: Perizinan (pulang/sakit)
  - Integrasi izin: Jika santri dapat Izin Pulang (Boarding Module), sistem harus otomatis menandai Izin pada Absensi KBM (Academic Module).
- Discipline: Pencatatan poin pelanggaran/prestasi.

## 10. ACADEMIC MODULE (Akademik)

Modul inti operasional pendidikan.

### 10.1. Academic Year & Semester

- Mengambil referensi dari App Settings Module 1.2.
- Menjadi Global Scope untuk seluruh query di modul Curriculum, Journal, dan Grading.

### 10.2. Class Management

- Data ruang kelas diambil dari Modul Assets.
- Classroom Master: Nama Kelas (misal: VII-A), Tingkat (7), dan Kuota.
- Student Placement: Menempatkan siswa ke dalam kelas (History tercatat per tahun).
- Homeroom Assignment: Menentukan Wali Kelas untuk setiap rombel.

### 10.3. Academic Calendar

- Input jadwal kegiatan akademik (UTS, UAS, Pembagian Rapor).
- Integrasi jadwal keggiatan antar lembaga.

### 10.4. Movements/Mutations

- Kenaikan Kelas & Kelulusan.

## 11. CURRICULUM MODULE (Kurikulum)

Modul ini berfungsi sebagai "Otak Perencanaan". Di sinilah Admin Kurikulum menentukan apa yang akan diajarkan, siapa yang mengajar, dan kapan diajarkan. Modul Jurnal dan Grading akan sangat bergantung pada data di sini.

### 11.1. Intrakurikuler

Kegiatan belajar mengajar tatap muka rutin di kelas.

- **Subject Management** (Master Mata Pelajaran):
  - Data Mapel: Kode, Nama Mapel, Kelompok (Wajib A, Wajib B, Mulok, Peminatan, Diniyah).
  - Subject Allocation (Struktur Kurikulum): Mengatur alokasi Jam Pelajaran (JP) per minggu untuk setiap tingkat kelas.
    - Contoh: Kelas 7 -> Matematika (4 JP), B. Arab (3 JP).
  - Curriculum Mapping: Menentukan kurikulum yang dipakai per angkatan (K13 vs Merdeka).

- **Learning Planning** (Perangkat Ajar):
  - CP/KD Management: Database Capaian Pembelajaran (Merdeka) atau Kompetensi Dasar (K13).
  - TP/ATP & Materi: Guru menginput Tujuan Pembelajaran dan Alur Tujuan Pembelajaran.
    > Fungsi: Data ini akan muncul sebagai dropdown di Modul Jurnal saat guru mengisi jurnal mengajar ("Hari ini mengajar TP 1.2 tentang Pecahan").

- **Roster Management** (Jadwal Pelajaran):
- Timetable Generator: Mapping (Hari + Jam Ke + Kelas + Mapel + Guru + Ruangan).
- Conflict Checker: Validasi otomatis agar guru tidak mengajar di dua kelas pada jam yang sama.

### 11.2. Kokurikuler

- **Project Master Data**:
  - Themes (Tema Besar): (Misal: Gaya Hidup Berkelanjutan, Bangunlah Jiwa Raganya).
  - Dimensions & Elements: Database Dimensi Profil Pelajar Pancasila (Beriman, Mandiri, Gotong Royong, dst).

- **Project Setup** (Perencanaan Projek):
  - Project Definition: Membuat satu entitas projek (Misal: "Projek Sampahku Tanggung Jawabku").
  - Fasilitator Team: Menunjuk Koordinator Projek dan Tim Fasilitator (Guru). Bedanya dengan Intra, satu projek bisa diampu oleh tim guru lintas mapel.
  - Student Grouping: Pengelompokan siswa untuk projek (bisa per kelas atau diacak lintas kelas).

- **Project Schedule**:
- Block System: Mengatur jadwal projek, apakah sistem Reguler (1 jam/minggu) atau di tanggal tertentu.

### 11.3. Ekstrakurikuler

Kegiatan pengembangan bakat di luar jam akademik.

- **Activity Master** (Master Ekskul):
  - Data Ekskul: Nama (Pramuka, Futsal, Coding, Hadroh), Kategori (Wajib/Pilihan).
  - Coach/Trainer: Menunjuk pembina (bisa Guru Internal atau Pelatih Eksternal).

- **Membership** (Keanggotaan):
  - Open Recruitment: Membuka periode pendaftaran ekskul bagi santri.
  - Enrollment: Mapping student_id ke extracurricular_id.
  - Quota Management: Membatasi jumlah peserta per ekskul (jika perlu).

- **Schedule & Venue**:
  - Mengatur jadwal latihan rutin (Hari & Jam) dan lokasi latihan (Lapangan, Lab Komputer).

## 12. JOURNAL MODULE (Jurnal)

Modul ini mencatat realisasi dari perencanaan yang ada di Curriculum Module. Data dari modul ini menjadi dasar pembayaran honor (Payroll) dan pelaporan akademik (Grading).

### 12.1. Attendance System (Presensi Siswa)

Sistem pencatatan kehadiran yang terintegrasi (Boarding -> Sekolah -> Mapel).

- **Homeroom Attendance** (Presensi Wali Kelas):
  - Aktor: Wali Kelas.
  - Waktu: Pagi hari (07:00 - 08:00).
  - Logic:
    - Auto-Fetch: Mengambil data Izin/Sakit dari Modul Boarding (jika santri pondok).
    - Manual Input: Wali kelas menginput status siswa non-pondok.
  - Output: Status H/S/I/A harian ini menjadi Master Status untuk hari tersebut.

- **Subject Attendance** (Presensi per Jam Pelajaran):
  - Aktor: Guru Pengajar di kelas.
  - Logic Inheritance:
    - Saat Guru Mapel membuka jurnal jam ke-1, daftar hadir siswa otomatis terisi sesuai status Homeroom Attendance.
    - > Contoh: Jika Budi "Sakit" di absen Wali Kelas, maka di absen Matematika jam ke-1 statusnya otomatis "Sakit" (Locked/Read-only).
  - Logic Override:
    - Guru Mapel hanya bisa mengubah status siswa yang Homeroom-nya "Hadir".
    - > Contoh: Budi "Hadir" saat apel pagi. Tapi saat jam Matematika (jam ke-5), Budi tidak ada. Guru Matematika mengubah status Budi menjadi "Alpha" (Bolos).

### 12.2. Intracurricular Journal (Jurnal KBM Reguler)

Mencatat kegiatan belajar mengajar rutin sesuai Jadwal Pelajaran (Timetable) dari Modul Kurikulum.

- **Journal Entry** (Form Input Guru):
  - Realisasi Waktu: Jam Ke-berapa s.d. Jam Ke-berapa (Durasi JP).
Materi Ajar:
  - Link to Curriculum: Dropdown memilih TP/ATP/KD yang sudah diinput di Modul Kurikulum.
    - Topik: Input teks bebas untuk detail sub-bab.
    - Metode & Media: (Diskusi, Ceramah, Praktek).
  - Catatan Kejadian/Kendala: (Misal: LCD mati, Siswa kurang kondusif).
  - Foto Kegiatan: (Opsional, sebagai bukti fisik).

- **Teacher Mode Logic**:
  - **Mode Guru Kelas**: Form input disesuaikan dengan pembelajaran Tematik (Satu jurnal untuk durasi panjang 4-5 jam).
  - **Mode Guru Mapel**: Form input spesifik per mata pelajaran dan per pergantian jam.

- **Substitute Teacher** (Guru Inval):
  - Fitur untuk mencatat jika guru asli berhalangan hadir.
  - Logic Payroll: Honor jam mengajar akan masuk ke Guru Pengganti, bukan Guru Asli.

### 12.3. Co-curricular Journal (Jurnal Kokurikuler)

Mencatat kegiatan Projek Penguatan Profil Pelajar Pancasila. Struktur datanya berbeda karena tidak berbasis Mapel, melainkan Tema & Aktivitas.

- **Project Log**:
  - Aktor: Fasilitator Projek.
  - Project Reference: Memilih Projek yang sedang berjalan (dari Modul Kurikulum).
  - Activity Phase: Tahap kegiatan (Pengenalan, Kontekstualisasi, Aksi, Refleksi).
  - Dimensions Targeted: Checklist dimensi profil pelajar Pancasila yang diobservasi hari itu (Gotong Royong, Kreatif, dll).
  - Notes: Catatan perkembangan karakter siswa atau dinamika kelompok.

### 12.4. Extracurricular Journal (Jurnal Ekskul)

Mencatat kegiatan pengembangan minat bakat di luar jam sekolah.

- **Activity Log**:
  - Aktor: Pembina/Pelatih Ekskul.
  - Data: Tanggal Latihan, Materi Latihan (Misal: Latihan Passing Bawah untuk Futsal), Lokasi.

- **Attendance**:
  - Presensi kehadiran anggota ekskul (Hadir/Izin/Alpha).
  - Data ini penting untuk penilaian nilai Ekskul di Rapor (Modul Grading).

### 12.5. Validation & Approval (Validasi Kepala Sekolah)

Mekanisme kontrol kualitas ("Quality Assurance") sebelum data jurnal menjadi dasar penggajian.

- **Approval Workflow**:
  - Status Jurnal: Draft -> Submitted -> Approved (oleh Kepsek/Waka Kurikulum) -> Locked (Sudah cair gaji).
  - Batch Approval: Kepala Sekolah bisa menyetujui jurnal guru dalam sekali klik (per minggu atau per bulan) untuk efisiensi waktu.

- **Feedback Loop**: Kepala Sekolah bisa memberikan komentar/revisi pada jurnal guru (misal: "Materi kurang detail, tolong lengkapi").

### 12.6. Reporting & Integrations

Output data dari jurnal untuk modul lain.

- **Monitoring Dashboard** (Real-time):
  - Untuk Kepsek: Melihat grafik "Siapa guru yang belum mengisi jurnal hari ini?".
  - Untuk Kurikulum: Melihat progres ketuntasan materi (Berapa % TP yang sudah diajarkan).

- **Payroll Feed** (Ke Modul Employee):
  - Mengirim data: Teacher ID, Total JP Approved, Function (Guru Mapel/Inval/Ekskul).
  - Rumus: Honor = Total JP x Rate.

- **Grading Feed** (Ke Modul Grading):
  - Mengirim rekapitulasi Absensi Siswa (Jumlah S/I/A) per Semester untuk dicetak di Rapor.

## 13 GRADING MODULE (Penilaian)

Modul ini menangani konfigurasi penilaian, input nilai, kalkulasi predikat, hingga pencetakan Rapor dan Leger.

### 13.1. Assessment Configuration (Konfigurasi Penilaian)
Sebelum guru bisa input nilai, admin/kurikulum harus menetapkan "Aturan Main" terlebih dahulu.

- **Assessment Plans** (Rencana Penilaian):
  - Mengatur jenis penilaian yang aktif untuk semester ini.
  - Kurikulum Merdeka: Formatif, Sumatif Lingkup Materi (Harian), Sumatif Tengah Semester (STS), Sumatif Akhir Semester (SAS).
  - K13: Penilaian Harian (PH), PTS, PAS.
  - Madrasah: Imtihan Syafahi (Lisan), Imtihan Tahriri (Tulis).

- **Weighting System** (Pembobotan):
  - Mengatur rumus kalkulasi Nilai Akhir (NA).
  - Contoh: NA = (Rata2 Harian * 40%) + (PTS * 30%) + (PAS * 30%).
  - Setting ini bisa diatur per Tingkat Kelas atau per Mata Pelajaran.

- **Grade Thresholds** (KKM / KKTP):
  - K13: KKM (Kriteria Ketuntasan Minimal) berupa angka tunggal (misal: 75).
  - Merdeka: KKTP (Kriteria Ketercapaian Tujuan Pembelajaran) berupa interval/deskripsi (Perlu Bimbingan, Cukup, Baik, Sangat Baik).

- **Predicate Mapping**:
  - Konversi Angka ke Huruf.
  - Contoh: 90-100 = A, 80-89 = B.

### 13.2. Score Entry (Input Nilai)
Antarmuka bagi guru untuk memasukkan data nilai.

#### 13.2.1. Academic Scores (Nilai Mapel)

- Input Grid: Tampilan seperti Excel (Siswa di baris, Jenis Penilaian di kolom).
- Auto-Save: Fitur simpan otomatis saat guru mengetik (mencegah data hilang jika koneksi putus).
- Import/Export: Fitur download template Excel kosong dan upload kembali setelah diisi (untuk guru yang lebih nyaman kerja offline).
- Description Generator:
  - Fitur opsional untuk men-generate deskripsi rapor otomatis berdasarkan nilai.
  - Logic: Jika nilai TP 1 > 90, maka deskripsi: "Ananda sangat menguasai [Materi TP 1]...".

#### 13.2.2. Project Assessment (Nilai P5 - Ko-kurikuler)

- Input: Bukan angka, melainkan Ceklis Capaian.
- Dimensi: Beriman, Berkebinekaan Global, Gotong Royong, dll.
- Predikat: MB (Mulai Berkembang), SB (Sedang Berkembang), BSH (Berkembang Sesuai Harapan), SAB (Sangat Berkembang).

#### 13.2.3. Non-Academic Scores (Nilai Penunjang)

- Extracurricular: Input nilai (A/B/C) dan deskripsi untuk ekskul yang diikuti siswa (Data ekskul diambil dari Modul 11/12).
- Attendance Recap:
  - Auto-Fetch: Mengambil rekap S/I/A dari Modul Journal (12).
  - Manual Override: Wali kelas bisa mengoreksi jika ada kesalahan rekap sistem.
- Character/Attitude: Nilai Sikap Spiritual & Sosial (Jurnal Sikap).
- Homeroom Notes: Catatan Wali Kelas (Motivasi/Saran).

### 13.3. Result Processing (Leger)
Tahap validasi sebelum rapor dicetak.
  
- Leger Generator:
  - Menampilkan rekapitulasi nilai seluruh siswa dalam satu kelas untuk semua mapel dalam satu tabel raksasa.
  - Fitur ini krusial untuk Rapat Pleno Kenaikan Kelas.
- Ranking System:
  - Mengurutkan siswa berdasarkan total nilai atau rata-rata (Bisa di-disable jika sekolah menganut sistem tanpa ranking).
- Promotion Status (Kenaikan Kelas):
  - Tombol aksi untuk menetapkan status: Naik Kelas, Tinggal Kelas, atau Lulus.
  - Integrasi ke Modul Academic: Jika status "Naik Kelas" di-finalisasi, sistem otomatis memindahkan siswa ke tingkat selanjutnya di database tahun ajaran baru.

### 13.4. Reporting (Cetak Rapor)
Output fisik untuk wali santri.

- Template Engine:
  - Mendukung multiple format:
    - Rapor Akademik (Sekolah): Format standar Diknas/Kemenag.
    - Rapor P5 (Projek): Format deskriptif kualitatif.
    - Rapor Pondok/Kepesantrenan: Format khas kitab kuning/hafalan (Syafahi/Tahriri).
    - Rapor Tahfidz: Khusus setoran hafalan Quran.
- Batch Generation (Queue Job):
  - Masalah: Generate 300 PDF Rapor on-the-fly pasti timeout di shared hosting.
  - Solusi: User klik "Generate Rapor Kelas 7A". Sistem memasukkan ke antrian (Queue). User bisa menutup tab. Saat selesai, muncul notifikasi "Rapor Kelas 7A Siap Download (ZIP)".
- Digital Report Card (Rapor Digital):
  - Wali santri bisa melihat nilai via Dashboard Wali (View Only) tanpa harus menunggu cetak fisik.

## 14. FINANCE MODULE (Keuangan & Akuntansi)

Modul dengan logika paling ketat dan kompleks. Wajib terisolasi untuk keamanan data.

### 14.1. Billing (Tagihan)
- **Fee Components**: Manajemen komponen biaya (SPP, Uang Gedung, Katering) dengan frekuensi (Bulanan/Tahunan/Sekali).
- **Invoice Generator**: Job otomatis untuk menerbitkan tagihan massal.

### 14.2. Wallet System (Dompet Digital)
- **Tuition Wallet**: Dompet deposit pendidikan (Restricted: hanya untuk bayar tagihan).
- **Pocket Money**: Dompet uang saku santri (Transactional: limit harian, pin protection).

### 14.3. Treasury (Kasir & Pembayaran)
- **Payment Processor**: Input pembayaran manual (Tunai/Transfer) dan verifikasi bukti transfer.
- **Payment Allocation**: Algoritma prioritas pelunasan otomatis (Prioritas: Madrasah -> Sekolah/Pondok).
- **Payment Gateway Integrated**: Mendukung Virtual Account(Midtrans/Xendit Ready).

### 14.4. Accounting (Akuntansi)
- **Automated Journaling**: Sistem jurnal otomatis (Event-driven) saat transaksi terjadi (Tagihan terbit -> Piutang bertambah).
- **Budget Control**: Kontrol anggaran (RAB) dengan fitur Soft Limit Alert.
- **Reporting**: Laporan Neraca, Arus Kas, dan Realisasi Anggaran.
- **Integrated Payroll**: Menerima tagihan gaji dari Modul Human Resources untuk dicairkan.

## 15. PAYROLL MODULE (Penggajian)

Modul ini mengotomatisasi perhitungan gaji yang kompleks (Gaji Pokok + Tunjangan + Honor Mengajar - Potongan), menangani Kasbon, dan mencetak Slip Gaji.

### 15.1. Payroll Configuration (Konfigurasi Gaji)

Mengatur parameter dasar agar sistem tahu cara menghitung uang.

- **Salary Components Master (Master Komponen):**
  - Fixed (Tetap): Gaji Pokok, Tunjangan Jabatan (Struktural), Tunjangan Keluarga.
  - Variable (Variabel):
    - Teaching Rate (Tarif JP): Nominal per jam pelajaran (Beda jenjang bisa beda tarif, misal: MA > MI).
    - Attendance Rate (Uang Transport/Makan): Nominal per kehadiran fisik (Fingerprint).
    - Extra Duty (Tugas Tambahan): Tarif untuk Piket, Pembina Ekskul, atau Wali Kelas.
  - Deductions (Potongan): BPJS, Simpanan Wajib Koperasi, Infaq Yayasan.
- **Payroll Period (Periode Gaji):**
  - Mengatur tanggal Cut-off.
  - Contoh: Periode Gaji Januari (dihitung dari tanggal 26 Desember s.d. 25 Januari). Data absensi dan jurnal di luar tanggal ini akan masuk ke periode bulan depan.

### 15.2. Variable Calculation Engine (Kalkulator Otomatis)

"Otak" dari modul payroll yang menarik data dari modul operasional.

- **Teaching Fee Calculator (Honor Mengajar):**
  - Input: Mengambil data dari Modul Journal (12) dengan filter: status = 'Approved' & date in Current Period.
  - Logic: SUM(Total JP) * Tarif per Jenjang.
  - Substitute Logic (Inval): Jika di jurnal tercatat sebagai "Guru Pengganti", maka honor masuk ke pengganti, bukan guru asli.
- **Attendance Allowance (Tunjangan Kehadiran):**
  - Input: Mengambil data dari Modul Employee (3.4) (Fingerprint/Presensi Kerja).
  - Logic: Jumlah Hari Masuk * Tarif Transport Harian.
  - Penalty: Mengurangi tunjangan jika ada keterlambatan (misal: Telat > 15 menit = Potong 50% transport).
- **Structural Allowance:**
  - Input: Mengambil data dari Modul Employee (3.3) (Jabatan Struktural yang aktif).

### 15.3. Loan Management (Manajemen Kasbon)

Fitur untuk menangani pinjaman karyawan ke Yayasan/Koperasi.

- **Loan Request:** Pegawai mengajukan kasbon via aplikasi -> Approval Kepala Yayasan/Bendahara.
- **Installment Plan:**
  - Mengatur tenor (misal: dicicil 3 bulan).
  - Auto-Deduction: Sistem otomatis memotong gaji bulan berjalan sesuai nominal cicilan. Jika gaji tidak cukup, sistem memberi alert.

### 15.4. Payroll Run (Proses Generate Gaji)

Proses bulanan yang dilakukan oleh Bendahara/HRD.

- **Draft Generation:**
  - Tombol "Hitung Gaji Bulan Ini". Sistem akan mengkalkulasi seluruh komponen untuk seluruh pegawai. Hasilnya berstatus Draft.
- **Review & Adjustment:**
  - Bendahara bisa memeriksa hasil hitungan sistem.
  - Manual Adjustment: Fitur untuk menambah/mengurangi nominal secara manual jika ada kasus khusus (misal: Bonus Prestasi dadakan, atau Denda kerusakan barang).
- **Approval Workflow:**
  - Draft -> Verified (HRD) -> Approved (Ketua Yayasan) -> Ready to Pay.

### 15.5. Disbursement & Slip (Pencairan & Laporan)

Tahap akhir pembayaran.

- **Digital Payslip (Slip Gaji):**
  - Generate PDF Slip Gaji yang terpassword (biasanya pakai Tanggal Lahir/NIK).
  - Distribusi via WhatsApp Gateway atau Email.
  - Slip mencakup detail: Pendapatan (Rinci), Potongan (Rinci), dan Take Home Pay.
- **Bank Transfer List:**
  - Export file Excel/CSV format Mass Transfer (KlikBCA Bisnis / Mandiri MCM) berisi: No Rekening, Nama, Nominal.
- **Finance Integration (Jurnal Akuntansi):**
  - Saat status gaji berubah menjadi Paid (Dibayar), modul ini otomatis mengirim data ke Modul Finance (14.4) untuk mencatat pengeluaran kas.
  - Jurnal Otomatis: (Debit) Beban Gaji Pegawai / (Kredit) Kas Yayasan.

### 15.6. THR & Bonus (Tunjangan Hari Raya)

- **THR Generator:** Fitur khusus untuk menghitung THR (biasanya 1x Gaji Pokok + Tunjangan Tetap) berdasarkan masa kerja (Pro-rata).

## 16. PUBLISHING MODULE (Publikasi)

Wajah depan aplikasi untuk publik.

- News Manager:
  - CRUD Berita/Artikel/Pengumuman.
  - Tagging: Global (Tampil di semua), Institution Specific (Hanya lembaga tertentu).
- News Aggregator (sarung.daraltauhid.com):
  - Menampilkan feed berita gabungan dari semua lembaga.
- Institution Pages: Menyediakan konten dinamis untuk subdomain (misal: mis.daraltauhid.com mengambil data Identitas dari Institution + Berita dari News Manager difilter where institution_id = MI).
- Internal Announcements (Informasi Insidentil):
  - Fitur pengumuman yang bisa di-set targetnya: Public (Web) atau Internal (Dashboard Guru/Wali). Contoh: "Himbauan Sholat Gerhana", "Rapat Koordinasi Yayasan".

## 17. AUDIT & LOG MODULE (Keamanan & Jejak Digital)

Modul ini bekerja secara background process untuk mencatat perubahan data, aktivitas login, dan kesehatan sistem.

### 17.1. User Activity Log (Jejak Aktivitas Data)
Fitur ini merekam "Siapa melakukan Apa, Kapan, dan Bagaimana" terhadap data sensitif.
- **Data Change Tracking**: Mencatat aksi CREATE, UPDATE, DELETE, dan RESTORE. Menyimpan Snapshot Data (Old vs New).
- **Actor Identification**: Mencatat User ID pelaku, IP Address, dan Device (Browser/HP).
- **Contextual Logging**: Mencatat URL dan Input Data saat aksi dilakukan.
- **Search & Filter**: Fitur pencarian log berdasarkan User, Tanggal, atau Jenis Data.

### 17.2. Authentication History (Riwayat Keamanan)
Fitur ini fokus memantau akses masuk ke dalam aplikasi untuk mendeteksi penyusupan.
- **Session Tracking**: Mencatat Login (Berhasil/Gagal), Logout, IP Address, Browser, dan OS.
- **Anomaly Detection**: Deteksi Brute Force (5x gagal/menit) dan Impossible Travel (Login beda lokasi drastis).
- **User Dashboard**: Menampilkan "Riwayat Login Terakhir" di dashboard user.

### 17.3. System Health & Error Monitoring (Pemantauan Sistem)
Fitur teknis untuk Developer agar bisa memperbaiki bug sebelum user komplain.
- **Error Logger**: Menangkap Exception/Crash (Error 500) beserta Stack Trace.
- **Performance Monitor**: Mencatat Slow Query database yang memperlambat aplikasi.
- **Job Monitoring**: Memantau status Queue Job (Email/WA/Rapor) dan alert jika Failed.

### 17.4. Data Retention (Kebijakan Penyimpanan)
Mengatur siklus hidup data log agar database tidak meledak.
- **Auto-Pruning**: Scheduler otomatis menghapus log kedaluwarsa (misal: > 1 Tahun).
- **Log Archiving**: Ekspor log lama ke Cloud Storage (S3/Drive) sebelum dihapus dari database utama.

## Catatan

### Hirarki Absensi

- Level 1 (Pondok): jika siswa adalah santri pondok, maka Izin Pulang/Sakit di Asrama -> Otomatis update Absensi Wali Kelas.
- Level 2 (Wali Kelas): Absensi Pagi -> Otomatis menjadi default value Absensi Guru Mapel.
- Level 3 (Guru Mapel): Hanya mengubah status siswa yang statusnya berubah di tengah hari (misal: bolos kantin).

### Koneksi ke Payroll

Pastikan tabel teaching_journals memiliki kolom status (Draft/Submitted/Approved). Hanya jurnal yang Approved atau Submitted yang dihitung sebagai jam kerja untuk penggajian.
