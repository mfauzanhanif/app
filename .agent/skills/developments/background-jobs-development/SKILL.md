---
name: background-jobs-development
description: >-
  Panduan pengembangan Background Jobs (Laravel Queue) yang dioptimalkan untuk lingkungan Shared Hosting.
  Gunakan skill ini saat menangani proses berat seperti Generate PDF Rapor, Export/Import Excel massal, 
  kalkulasi gaji, pembuatan tagihan massal, atau pengiriman notifikasi (Email/WA).
---

# Background Jobs Development (Shared Hosting)

Aplikasi ini di-deploy di infrastruktur **Shared Hosting (hPanel)**. Oleh karena itu, semua proses yang berpotensi memakan waktu lebih dari 3 detik atau memakan memori besar **WAJIB** dieksekusi di latar belakang menggunakan Laravel Queue/Jobs.

## 🔴 Cross-References (Penting!)
- Untuk membuat file Job baru, Anda **WAJIB** menggunakan perintah Artisan dari `nwidart/laravel-modules`. Baca panduan `laravel-modules-artisan`.
- Jika Job ini terkait dengan pembuatan laporan Excel atau Rapor PDF, baca juga aturan di `techstacks-development`.

## When to Apply
- Membangun fitur *Mass Generation* (Contoh: Generate Tagihan SPP Bulanan untuk seluruh siswa aktif).
- Membangun fitur pencetakan PDF massal (`barryvdh/laravel-dompdf`).
- Membangun fitur Import/Export Excel (`maatwebsite/excel`).
- Membangun pengiriman *Broadcast/Notification*.

## Core Rules for Shared Hosting

### 1. Dilarang Memuat Semua Data ke Memori (Gunakan Chunking)
- **JANGAN PERNAH** menggunakan `Model::all()` atau `Model::get()` jika datanya berpotensi ribuan (seperti data siswa atau jurnal).
- **WAJIB** menggunakan `chunk()` atau `chunkById()` untuk memproses data sedikit demi sedikit.

### 2. Timeouts dan Retries (Wajib Didefinisikan)
Shared hosting sering memiliki proses yang dihentikan mendadak (*killed*).
- Setiap *Job class* wajib mendefinisikan properti `$timeout` dan `$tries` secara eksplisit.
- Gunakan `ShouldBeUnique` jika *Job* tersebut tidak boleh berjalan ganda pada waktu yang sama (misal: *Job* Kalkulasi Gaji).

### 3. Database Transactions
- Bungkus operasi *insert/update* massal ke dalam `DB::transaction()`. Jika proses *chunk* terhenti di tengah jalan, data tidak boleh rusak (*corrupted*).

## Job Class Pattern (Standard Template)

Gunakan pola di bawah ini saat menulis kelas Job:

<code-snippet name="Optimized Shared Hosting Job" lang="php">
<?php

namespace Modules\Finance\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Support\Facades\DB;
use Modules\Student\Models\Student;

class GenerateMonthlyInvoicesJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // Batasi waktu eksekusi agar tidak dibunuh oleh server hosting
    public $timeout = 120;
    
    // Batasi percobaan ulang jika gagal
    public $tries = 3;

    public function __construct(
        public int $fiscalPeriodId
    ) {}

    // Kunci unik untuk ShouldBeUnique (mencegah duplicate job)
    public function uniqueId(): string
    {
        return 'generate_invoice_' . $this->fiscalPeriodId;
    }

    public function handle(): void
    {
        // 1. WAJIB GUNAKAN CHUNKING
        Student::where('status', 'aktif')
            ->chunkById(100, function ($students) {
                
                // 2. WAJIB GUNAKAN TRANSACTION UNTUK DATA SENSITIF
                DB::transaction(function () use ($students) {
                    $invoices = [];
                    
                    foreach ($students as $student) {
                        $invoices[] = [
                            'student_id' => $student->id,
                            'fiscal_period_id' => $this->fiscalPeriodId,
                            'amount' => 500000,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }

                    // 3. BULK INSERT LEBIH RINGAN DARI INSERT SATU-SATU
                    DB::table('finance_invoices')->insert($invoices);
                });
            });
    }
}
</code-snippet>

## Command Generation (Reminder)
Untuk membuat Job di atas, ingatlah untuk menggunakan *command* modular:
```bash
php artisan module:make-job GenerateMonthlyInvoicesJob Finance
```

## Common Pitfalls

- Menulis logika berat di Controller secara sinkronus (menyebabkan layar loading terus dan berakhir 504 Gateway Timeout).
- Lupa mendefinisikan Foreign Key atau batasan relasi saat melakukan penghapusan massal di Job.
- Menyimpan file/instance besar ke dalam memori tanpa mengosongkannya `(unset())` di setiap siklus perulangan/chunk.