---
trigger: always_on
---

---
name: code-quality-standards
description: Standar penulisan kode (Clean Code) yang berlaku global untuk PHP (Laravel) dan JavaScript/TypeScript (React).
---

# Code Quality Standards

1. **Strict Typing (PHP & TS)**: 
   - Di PHP, selalu gunakan deklarasi tipe pada argumen fungsi dan nilai kembalian (Return Types). Contoh: `public function calculate(int $amount): int`.
   - Gunakan `declare(strict_types=1);` di setiap file PHP baru jika memungkinkan.
2. **Clean Up (Pembersihan Kode)**: 
   - Jangan pernah meninggalkan fungsi *debugging* di kode produksi (contoh: hapus semua `dd()`, `dump()`, `console.log()`, `print_r` sebelum menyelesaikan tugas).
   - Jangan tinggalkan *dead code* (kode yang di-comment). Hapus kode lama jika memang diganti.
3. **PSR-12 Compliance**: Semua kode PHP wajib mematuhi standar PSR-12 (spasi, *indentation*, penamaan kelas/metode).
4. **Early Returns (Guard Clauses)**: Hindari *nested if* (if di dalam if) yang terlalu dalam. Gunakan pola *Early Return* untuk membuat kode lebih mudah dibaca.
5. **Komentar Efektif**: Tulis komentar hanya untuk menjelaskan *Mengapa* (Why) kode tersebut ditulis dengan cara tertentu, bukan menjelaskan *Apa* (What) yang dilakukan kode tersebut (biarkan kode menjelaskan dirinya sendiri).