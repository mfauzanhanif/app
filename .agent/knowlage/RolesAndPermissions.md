# ROLE & PERMISSION SUPER APP DAR AL TAUHID

Skema ini menggunakan pendekatan **RBAC (Role-Based Access Control)** yang mendukung *Multi-Role-Institution* (satu user bisa punya banyak role di lembaga berbeda).

> [!NOTE]
> **Role dan Permission bersifat dinamis.** Administrator memiliki hak akses penuh untuk melakukan CRUD (Create, Read, Update, Delete) terhadap data Role dan Permission melalui dashboard.

## 1. DAFTAR ROLE (PERAN)

### A. Global Roles (Tingkat Yayasan)
Role ini melekat pada user tanpa memandang lembaga, atau memiliki akses lintas lembaga.

| Name | Display Name | Deskripsi & Tanggung Jawab |
| :--- | :--- | :--- |
| `administrator` | Administrator | Akses penuh ke seluruh modul, log audit, konfigurasi sistem, manajemen user, role & permission, data master lembaga, periode akademik, dan kepegawaian (HR). |
| `foundation_head` | Ketua Yayasan | Penyetuju akhir (Final Approver) untuk Anggaran, Payroll, dan Cuti. Akses Dashboard Eksekutif. |
| `ppdb_committee` | Panitia PPDB | Mengelola data pendaftaran siswa baru tingkat yayasan. |
| `treasurer` | Bendahara | Mengelola keuangan tingkat yayasan. |
| `cashier` | Kasir | Menerima pembayaran tingkat yayasan. |

### B. Scoped Roles (Tingkat Lembaga)
Role ini **hanya berlaku** ketika user sedang mengakses lembaga tertentu (misal: saat switch ke Dashboard MI).

| Name | Display Name | Deskripsi & Tanggung Jawab |
| :--- | :--- | :--- |
| `institution_head` | Kepala Lembaga | Penanggung jawab lembaga. Validasi Jurnal Guru, Approval Cuti level 1, Monitoring KBM. |
| `school_operator` | Operator Sekolah/TU | Mengelola data siswa, mutasi siswa, cetak surat, dan administrasi harian. |
| `curriculum_admin` | Waka Kurikulum | Mengatur Jadwal Pelajaran, Plotting Guru, Kalender Akademik, dan setting Penilaian (Rapor). |
| `vice_principal_facilities` | Waka Sarpras | Mengelola inventaris, stok opname, dan tiket perbaikan aset di lembaga tersebut. |
| `vice_principal_student_affairs` | Waka Kesiswaan | Menangani kesiswaan serta bertindak sebagai Panitia PSB (Verifikasi berkas, seleksi, dll). |
| `treasurer` | Bendahara | Mengelola tagihan siswa dan input pengeluaran operasional lembaga. |
| `cashier` | Kasir | Menerima pembayaran dari wali santri/siswa di lembaga. |
| `teacher` | Guru Mapel | Input Jurnal Mengajar, Absensi Mapel, dan Input Nilai Siswa. |
| `class_teacher` | Guru Kelas | Guru dengan tanggung jawab kelas tertentu (seperti Wali Kelas di SD/MI). |
| `homeroom_teacher` | Wali Kelas | Input Absensi Harian (Apel), Catatan Rapor, dan monitoring siswa perwalian. |
| `project_coordinator`| Koordinator P5 | Mengelola tema projek, tim fasilitator, dan jadwal projek (Kurikulum Merdeka). |
| `boarding_mentor` | Musyrif/Pengasuh | Mengelola kamar santri, perizinan pulang, dan disiplin santri (Pondok). |

### C. End-User Roles
Role untuk pengguna eksternal atau konsumen layanan.

| Name | Display Name | Deskripsi & Tanggung Jawab |
| :--- | :--- | :--- |
| `guardian` | Wali Santri | Melihat tagihan, riwayat pembayaran, nilai anak, presensi, serta fitur pendaftaran (Calon Santri). |

---

## 2. DAFTAR PERMISSION (HAK AKSES)

Permission dikelompokkan berdasarkan Modul untuk memudahkan mapping di `spatie/laravel-permission`.

### Module: Institution & User
- `institution.create`: Membuat lembaga baru (Yayasan).
- `institution.edit`: Mengedit profil lembaga/yayasan.
- `user.create`: Menambah user baru.
- `user.assign-role`: Memberikan role kepada user.
- `role.manage`: Mengatur role dan permission matrix (CRUD Role & Permission).

### Module: Employee (Kepegawaian)
- `employee.view-all`: Melihat seluruh data pegawai.
- `employee.manage`: CRUD data pegawai (Biodata, SK).
- `employee.verify-attendance`: Memvalidasi data kehadiran fingerprint.
- `leave.request`: Mengajukan cuti (Semua Pegawai).
- `leave.approve`: Menyetujui cuti bawahan.

### Module: Asset (Sarana Prasarana)
- `asset.create`: Input barang baru.
- `asset.move`: Melakukan mutasi aset antar ruangan.
- `asset.dispose`: Mengajukan penghapusan aset.
- `asset.audit`: Melakukan stok opname.
- `ticket.create`: Melapor kerusakan (Semua User).
- `ticket.resolve`: Menandai perbaikan selesai.
- `procurement.approve`: Menyetujui pengadaan barang.

### Module: Admission (PSB)
- `candidate.view`: Melihat data pendaftar.
- `candidate.verify`: Memvalidasi dokumen pendaftar.
- `candidate.decide`: Menentukan status Lulus/Tidak Lulus.
- `candidate.migrate`: Menjalankan "One Click Migration" ke data siswa aktif.

### Module: Student & Guardian
- `student.create`: Input siswa manual.
- `student.edit`: Update data profil siswa.
- `student.promote`: Memproses kenaikan kelas/kelulusan.
- `guardian.link`: Menghubungkan akun wali dengan siswa (Family Mapping).

### Module: Academic & Curriculum
- `curriculum.manage`: Mengatur mapel dan struktur kurikulum.
- `roster.manage`: Membuat jadwal pelajaran.
- `class.assign`: Menempatkan siswa ke dalam kelas (Rombel).
- `calendar.manage`: Mengatur kalender akademik.

### Module: Journal (KBM)
- `journal.create`: Input jurnal mengajar harian.
- `attendance.homeroom`: Input absensi wali kelas (Pagi).
- `attendance.subject`: Input absensi per jam pelajaran.
- `journal.approve`: Menyetujui jurnal guru.

### Module: Grading (Penilaian)
- `grade.setup`: Mengatur bobot nilai dan KKM/KKTP.
- `grade.input`: Memasukkan nilai siswa.
- `report.generate`: Generate dan cetak rapor/leger.

### Module: Finance (Keuangan)
- `fee.manage`: Mengatur komponen biaya (SPP, Uang Gedung).
- `invoice.generate`: Menerbitkan tagihan massal.
- `payment.receive`: Menerima pembayaran (Kasir).
- `expense.create`: Mencatat pengeluaran operasional.
- `budget.approve`: Menyetujui anggaran/RAB.
- `finance.report`: Melihat laporan neraca/arus kas.

### Module: Payroll (Penggajian)
- `payroll.config`: Mengatur gaji pokok dan tunjangan.
- `payroll.calculate`: Menghitung gaji bulanan (Draft).
- `payroll.approve`: Menyetujui pencairan gaji.
- `payroll.print`: Mencetak slip gaji.

### Module: Boarding (Kepesantrenan)
- `dorm.manage`: Mengatur penempatan kamar santri.
- `permission.approve`: Menyetujui izin pulang santri.
- `discipline.record`: Mencatat poin pelanggaran/prestasi.

---

## 3. CONTOH MAPPING ROLE-TO-PERMISSION

Berikut adalah contoh bagaimana permission diterapkan pada role kunci:

**Role: `teacher` (Guru Mapel)**
- `journal.create`
- `attendance.subject`
- `grade.input`
- `leave.request`
- `ticket.create`
- `student.view-profile` (Hanya siswa di kelas yang diajar)

**Role: `treasurer` (Bendahara Scoped)**
- `fee.manage`
- `invoice.generate`
- `payment.receive`
- `expense.create`
- `student.view-bills`

**Role: `vice_principal_student_affairs` (Waka Kesiswaan)**
- `candidate.view`
- `candidate.verify`
- `candidate.decide`
- `discipline.record`
- `student.promote`