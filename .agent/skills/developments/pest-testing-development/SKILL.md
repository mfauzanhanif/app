---
name: pest-testing-development
description: >-
    Panduan penulisan pengujian (testing) menggunakan framework Pest PHP v4.
    Gunakan skill ini saat diminta menulis Unit Test, Feature Test, TDD (Test-Driven Development), 
    atau saat mengecek respons Inertia React dan endpoint Wayfinder.
---

# Pest Testing Development

Aplikasi ini **TIDAK MENGGUNAKAN PHPUNIT** secara langsung untuk penulisan _test_. Semua _test_ **WAJIB** ditulis menggunakan sintaks fungsional dari **Pest PHP** (`pestphp/pest` v4).

## 🔴 Cross-References (Penting!)

- Saat menguji _endpoint_ dan navigasi UI, ingat bahwa kita menggunakan Wayfinder (bukan Ziggy) dan Inertia v2. Baca `wayfinder-development` dan `inertia-react-development`.
- File test wajib diletakkan di dalam modul yang sesuai. Baca `laravel-modules-artisan` untuk penempatan folder.

## When to Apply

- Menulis _Unit Test_ untuk _logic_ model atau kalkulasi (misal: Payroll Engine).
- Menulis _Feature Test_ untuk _endpoint_ HTTP, _form submission_, atau _middleware_ akses.
- Menjalankan pengujian regresi (_regression testing_) setelah _refactoring_ kode.

## 🚫 CRITICAL WARNING: NO PHPUNIT CLASSES

DILARANG KERAS menulis _test_ menggunakan gaya _Object-Oriented_ PHPUnit seperti ini:

```php
// SALAH! JANGAN GUNAKAN INI
class InvoiceTest extends TestCase {
    public function test_it_can_create_invoice() { ... }
}
```

## Basic Pest Syntax

Selalu gunakan gaya fungsional Pest (`it`, `test`, `describe`, `beforeEach`):

<code-snippet name="Pest Basic Structure" lang="php">
<?php

use Modules\Finance\Models\Invoice;
use Modules\User\Models\User;

// Gunakan 'describe' untuk mengelompokkan test (Opsional tapi direkomendasikan)
describe('Invoice Generation', function () {

    // Setup sebelum setiap test di blok ini
    beforeEach(function () {
        $this->user = User::factory()->create();
        $this->actingAs($this->user);
    });

    // Gunakan 'it' atau 'test'
    it('can generate a monthly invoice', function () {
        // Arrange
        $invoiceData = ['amount' => 500000];

        // Act
        $response = $this->post('/finance/invoices', $invoiceData);

        // Assert (menggunakan Expectation API Pest)
        $response->assertStatus(201);
        expect(Invoice::count())->toBe(1);
    });

});
</code-snippet>

## Expectation API (Pest Assertion)

Alih-alih menggunakan `$this->assertEquals()`, gunakan `expect()` API milik Pest:

```php
expect($student->name)->toBe('Fauzan');
expect($invoices)->toHaveCount(5);
expect($status)->toBeTrue();
expect($user)->toBeInstanceOf(User::class);
```

## Testing Inertia & HTTP Responses

Saat menguji endpoint yang mengembalikan halaman React (Inertia), pastikan Anda menggunakan assertion Inertia:

<code-snippet name="Pest Inertia Testing" lang="php">
<?php

use Inertia\Testing\AssertableInertia as Assert;

it('renders the dashboard page via Inertia', function () {
$this->get('/app/dashboard')
->assertOk()
->assertInertia(fn (Assert $page) => $page
->component('Dashboard/Index') // Pastikan nama komponen React sesuai
->has('stats.activeUsers')
);
});
</code-snippet>

## Command Generation & Execution

### 1. Membuat File Test Baru di dalam Modul

Jangan gunakan `make:test` bawaan Laravel. Gunakan perintah modular:

```bash
# Membuat Feature Test di Modul Finance
php artisan module:make-test InvoiceFeatureTest Finance

# Membuat Unit Test di Modul Payroll
php artisan module:make-test PayrollCalculationTest Payroll unit
```

### 2. Menjalankan Test

```bash
# Menjalankan seluruh test
php artisan test

# ATAU menggunakan binary pest
./vendor/bin/pest

# Menjalankan test spesifik di dalam satu modul
./vendor/bin/pest Modules/Finance/Tests/
```

## Common Pitfalls

- Menulis kelas `TestCase` PHPUnit klasik alih-alih fungsi `it()`/`test()`.
- Lupa mengimpor trait jika dibutuhkan (misal: `uses(RefreshDatabase::class)` pada file `Pest.php`).
- Salah meletakkan file test (menggunakan `tests/Feature/` bawaan Laravel alih-alih `Modules/NamaModul/Tests/Feature/`).
