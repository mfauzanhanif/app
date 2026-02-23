---
trigger: always_on
---

---
name: safety-and-git
description: Batasan keamanan eksekusi perintah terminal (CLI), perlindungan database, dan standar penulisan pesan Git Commit.
---

# Safety, Execution & Git Rules

## Execution Safety (PENGAMANAN TERMINAL)
1. **DILARANG KERAS** menjalankan perintah destruktif database seperti `php artisan migrate:fresh`, `migrate:reset`, atau `db:wipe` tanpa secara eksplisit meminta izin persetujuan dari pengguna terlebih dahulu.
2. **Jangan Sentuh .env**: Jangan pernah mencetak atau mempublikasikan isi file `.env` di dalam *chat history*. Jika perlu menambahkan *key* baru, perbarui file `.env.example` dan beritahu pengguna.
3. **Limitasi Command**: Jangan menjalankan perintah `npm run build` setiap kali Anda mengubah file React di tahap *development*. Biarkan pengguna menggunakan `npm run dev` (Vite HMR).

## Git & Commit Standard (Conventional Commits)
Jika pengguna meminta Anda untuk melakukan *commit* (menyimpan perubahan ke Git), gunakan format **Conventional Commits**:
- `feat: [Nama Modul] tambah fitur x` (Untuk fitur baru)
- `fix: [Nama Modul] perbaiki bug y` (Untuk perbaikan bug)
- `refactor: [Nama Modul] ...` (Untuk restrukturisasi kode tanpa mengubah fitur)
- `style: ...` (Untuk perbaikan formatting/UI)
- `chore: ...` (Untuk update dependensi, config, dsb)

Contoh pesan commit yang benar:
`feat: Finance Module add automatic invoice generation for active students`