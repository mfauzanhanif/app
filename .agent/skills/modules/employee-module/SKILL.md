---
name: employee-module
description: Panduan logika bisnis untuk Modul Kepegawaian (Employee Module) di Super App Dar Al Tauhid. Gunakan skill ini saat menangani master data pegawai, penugasan lintas lembaga (Multi-Institution), sinkronisasi jabatan dengan role, absensi sidik jari/GPS, pengajuan cuti, dan konfigurasi master gaji.
---

# Employee Module Logic

Modul Kepegawaian mengelola seluruh siklus hidup Sumber Daya Manusia (SDM) di Yayasan Dar Al Tauhid, mulai dari rekrutmen, penugasan di berbagai lembaga, manajemen Surat Keputusan (SK), hingga presensi kerja.

## 🔴 Cross-References (Penting!)
Jika tugas yang sedang Anda kerjakan menyentuh area berikut, **WAJIB** baca skill lain:
- Jika mengurus sinkronisasi Jabatan ke Role Spatie, panggil skill: `user-module`.
- Jika mengurus kalkulasi pemotongan gaji akibat cuti/alpha, panggil skill: `payroll-module`.
- Jika mengurus jadwal *shift* fleksibel untuk Guru, panggil skill: `curriculum-module` atau `journal-module`.

## When to use this skill
- Membuat atau memodifikasi fitur CRUD profil pegawai (Guru, Staf, Struktural).
- Menangani *upload* dokumen sensitif pegawai (KTP, Ijazah, SK).
- Mengimplementasikan *logic* absensi kerja pegawai (bukan siswa) via mesin *fingerprint* atau GPS *geotagging*.
- Membangun fitur pengajuan dan *approval* cuti berjenjang.

## Core Business Logic

### 1. Single Identity & Penugasan Lintas Lembaga (The Two Hats Rule)
- **Single Identity**: Setiap pegawai HANYA memiliki satu baris data identitas utama di tabel `employees` (berdasarkan NIK KTP atau NIPY), tidak peduli di berapa lembaga ia mengajar.
- **Institution Mapping**: Pegawai ditugaskan ke lembaga melalui *Pivot Table* (misal: `employee_assignments`).
- **Status Penugasan**: Sistem harus bisa membedakan mana lembaga *Homebase* (Satmingkal) dan mana lembaga *Assigned* (Tugas Tambahan).

### 2. Role Synchronization (Sinkronisasi Otomatis Jabatan)
Fitur ini sangat krusial untuk keamanan dan kemudahan administrasi.
- **Auto-Grant**: Jika seorang pegawai di-assign ke jabatan struktural tertentu di sebuah lembaga (contoh: diangkat menjadi "Bendahara MI"), sistem **wajib** otomatis menyuntikkan (memberikan) *Role* `treasurer` pada *scope* `institution_id` MI tersebut.
- **Auto-Revoke**: Jika masa jabatan (`end_date` pada SK) habis atau dicabut, sistem harus otomatis menarik kembali *role* tersebut dari *user*.

### 3. Presensi Kerja (Attendance) & Cuti
Absensi pegawai berbeda dengan absensi KBM siswa.
- **Work Shifts**: 
  - *Shift Tendik/Staf*: Jam kerja *Fixed* (tetap), misal 07:00 - 14:00.
  - *Shift Guru*: Jam kerja *Fleksibel* bergantung pada jadwal mengajar (Roster) yang ada di Modul Kurikulum.
- **Leave Management (Cuti)**: Pengajuan cuti membutuhkan *approval* berjenjang (Kepala Lembaga -> Ketua Yayasan). Status absen/cuti/alpha di sini akan langsung dikirim ke `payroll-module` untuk kalkulasi pemotongan gaji.

### 4. Privasi & Keamanan Dokumen
- **Arsip Digital**: Berkas sensitif pegawai seperti scan KTP, Ijazah, KK, dan SK Pengangkatan wajib disimpan di `private storage` (tidak bisa diakses langsung lewat URL publik `storage/`) demi keamanan data.
- Gunakan `spatie/laravel-medialibrary` untuk manajemen berkas ini jika diperlukan.

## Database Permissions (Akses Spatie)
Dalam mengatur otorisasi fitur di modul ini, gunakan *permission* standar berikut:
- `employee.view-all`: Melihat seluruh data pegawai.
- `employee.manage`: CRUD data pegawai (Biodata, SK).
- `employee.verify-attendance`: Memvalidasi data kehadiran *fingerprint*.
- `leave.request`: Mengajukan cuti (Semua Pegawai).
- `leave.approve`: Menyetujui cuti bawahan.

## Panduan Database (Knowledge Base)
Jika Anda membutuhkan detail tabel untuk `employees`, `employee_assignments`, atau `employee_documents`, rujuklah pada file dokumentasi database `4_EMPLOYEE.md`.