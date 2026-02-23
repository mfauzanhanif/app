---
name: modules-index
description: Peta navigasi (Index) untuk seluruh aturan bisnis Modul Super App Dar Al Tauhid. Gunakan skill ini PERTAMA KALI ketika Anda bingung harus menggunakan skill modul mana untuk menyelesaikan sebuah tugas.
---

# Modules Index & Router

Super App Yayasan Dar Al Tauhid menggunakan arsitektur **Modular Monolith** yang terdiri dari 18 modul utama. Aturan bisnis untuk masing-masing modul telah dipisah ke dalam *skill* yang spesifik agar lebih fokus.

**ATURAN UNTUK AGENT:**
Jangan menebak-nebak aturan bisnis! Jika Anda diminta membuat fitur atau memperbaiki *bug*, cari kategori yang sesuai di bawah ini, lalu baca file `SKILL.md` di dalam folder modul tersebut sebelum menulis kode.

## 🏛️ 1. Foundation & Access (Pondasi & Akses)
Modul-modul ini adalah inti dari aplikasi, mengatur siapa, di mana, dan kapan sistem beroperasi.
- **`institution-module`**: Baca ini untuk urusan hirarki Yayasan, multi-tenant, dan *domain routing*.
- **`periode-module`**: Baca ini untuk urusan Tahun Ajaran, Semester, dan Tahun Buku Keuangan.
- **`user-module`**: Baca ini untuk urusan Login, Otorisasi RBAC (Spatie), dan *Institution/Student Switcher*.

## 👥 2. Human Resources & Assets (SDM & Aset)
Modul untuk mengelola sumber daya Yayasan.
- **`employee-module`**: Baca ini untuk urusan data Pegawai/Guru, penugasan lintas lembaga, *auto-sync role* jabatan, absensi kerja, dan cuti.
- **`asset-module`**: Baca ini untuk urusan inventaris barang, ruangan kelas/asrama, peminjaman, dan tiket perbaikan/maintenance.

## 🎓 3. Santri Lifecycle (Siklus Hidup Santri)
Modul yang mengurus data siswa dari mendaftar hingga lulus.
- **`admission-module`**: Baca ini untuk urusan Portal PSB, tagihan daftar ulang, seleksi, dan fitur "One Click Migration".
- **`student-module`**: Baca ini untuk urusan data riwayat pendidikan santri (profil), `public_id` (NanoID), dan status aktif/pindah.
- **`guardian-module`**: Baca ini untuk urusan akun Wali Santri, *Family Mapping* (relasi anak-orangtua), dan deduplikasi data wali.
- **`student-affairs-module`**: Baca ini untuk urusan Mutasi Siswa (keluar/masuk) dan pelanggaran di jam sekolah.
- **`boarding-module`**: Baca ini untuk urusan kamar asrama/pondok, perizinan pulang santri, dan poin pelanggaran pondok.

## 📚 4. Academic Core (Inti KBM & Pendidikan)
Modul yang saling berkaitan untuk operasional sekolah.
- **`academic-module`**: Baca ini untuk urusan Kalender Pendidikan, pembuatan Kelas/Rombel, penempatan siswa, dan Kenaikan Kelas.
- **`curriculum-module`**: Baca ini untuk urusan Jadwal Pelajaran (Roster), Mapel, RPP/TP, serta perencanaan Projek P5 dan Ekskul.
- **`journal-module`**: Baca ini untuk urusan Presensi Siswa (Apel & per Mapel), input log KBM Guru, Guru Inval, dan persetujuan Kepsek.
- **`grading-module`**: Baca ini untuk urusan input nilai ujian, KKM/KKTP, kalkulasi leger rapor, dan *generate* PDF Rapor.

## 💰 5. Finance & Payroll (Keuangan)
Modul dengan tingkat isolasi dan kalkulasi paling ketat.
- **`finance-module`**: Baca ini untuk urusan Tagihan (Invoice), Dompet Santri (*Wallet*), *Payment Gateway* (Virtual Account), dan Jurnal Akuntansi otomatis.
- **`payroll-module`**: Baca ini untuk urusan Hitung Gaji Guru otomatis, Manajemen Kasbon, dan cetak PDF Slip Gaji.

## 🌐 6. Support & Security (Pendukung)
- **`publishing-module`**: Baca ini untuk urusan CMS Berita, Halaman Statis Web, *News Aggregator*, dan Pengumuman Popup.
- **`audit-log-module`**: Baca ini untuk urusan jejak aktivitas user (*Activity Log*), riwayat sesi login, *error tracker*, dan *auto-pruning* data lama.