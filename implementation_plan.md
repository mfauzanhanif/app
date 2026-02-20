# DocumentType Enum + Module Completion

## 1. Fix Yellow IDE Warnings

| File | Line | Penyebab | Fix |
|---|---|---|---|
| [User.php](file:///c:/laragon/www/app/Modules/User/app/Models/User.php) L424 | `return app('current_institution')` | [app()](file:///c:/laragon/www/app/resources/js/app/pages/lembaga/admission/candidates/index.tsx#56-62) returns `mixed`, bukan [Institution](file:///c:/laragon/www/app/resources/js/psb/types/index.ts#5-11) | Tambah `@var` cast |
| [Student.php](file:///c:/laragon/www/app/Modules/Student/app/Models/Student.php) L196 | `$search` interpolation | Intelephense flag string variable in `like` | Ini false positive — **abaikan** atau tambah `@phpstan-ignore` |
| [Guardian.php](file:///c:/laragon/www/app/Modules/Guardian/app/Models/Guardian.php) L133 | Sama | Sama | Sama |

---

## 2. Centralized `App\Enums\DocumentType`

### Union semua `file_type` dari 4 migrasi:

| Sumber | Values |
|---|---|
| candidates | `foto, kk, akta_lahir, ijazah, skl, kip, ktp_ortu, lainnya` |
| students | `foto, kk, akta_lahir, ijazah, skl, kip, ktp_ortu, lainnya` |
| employees | `foto, cv, ktp, kk, akta_lahir, ijazah, npwp, sertifikat, lainnya` |
| institutions | `akta_pendirian, status, sk_operasional, ijop, sk_akreditasi, npwp, lainnya` |

#### [MODIFY] [DocumentType.php](file:///c:/laragon/www/app/app/Enums/DocumentType.php)

Ubah jadi `string` backed enum + tambah semua values yang missing:

```php
enum DocumentType: string
{
    // Personal
    case FOTO = 'foto';
    case KK = 'kk';
    case KTP = 'ktp';
    case KTP_ORTU = 'ktp_ortu';
    case AKTA_LAHIR = 'akta_lahir';
    case IJAZAH = 'ijazah';
    case SKL = 'skl';
    case KIP = 'kip';
    case NPWP = 'npwp';
    case SERTIFIKAT = 'sertifikat';
    case SKTM = 'sktm';
    case CV = 'cv';
    // Institution
    case AKTA_PENDIRIAN = 'akta_pendirian';
    case STATUS = 'status';
    case SK_OPERASIONAL = 'sk_operasional';
    case IJOP = 'ijop';
    case SK_AKREDITASI = 'sk_akreditasi';
    // Catch-all
    case LAINNYA = 'lainnya';
}
```

#### [DELETE] Duplicate enums:
- [Modules/Institution/app/Enums/DocumentType.php](file:///c:/laragon/www/app/Modules/Institution/app/Enums/DocumentType.php)
- [Modules/Student/app/Enums/DocumentType.php](file:///c:/laragon/www/app/Modules/Student/app/Enums/DocumentType.php)

---

## 3. Complete Modules

### Employee Module

#### [MODIFY] [Employee.php](file:///c:/laragon/www/app/Modules/Employee/app/Models/Employee.php)

> **KRITIS**: File ini berisi class [EmployeeAssignment](file:///c:/laragon/www/app/Modules/Employee/app/Models/Employee.php#11-65) — **bukan [Employee](file:///c:/laragon/www/app/Modules/Employee/app/Models/EmployeeDocument.php#10-87)!** User salah paste. Perlu ditulis ulang dari migrasi `employees` table.

Buat model [Employee](file:///c:/laragon/www/app/Modules/Employee/app/Models/EmployeeDocument.php#10-87) yang benar:
- `$fillable`: semua kolom dari migrasi (`nik`, `nipy`, `nuptk`, `name`, `gender`, dll)
- Relations: [user()](file:///c:/laragon/www/app/Modules/Admission/app/Models/Candidate.php#63-67), `assignments()`, [documents()](file:///c:/laragon/www/app/Modules/Admission/app/Models/Candidate.php#78-82)
- Scopes: `search()`, [active()](file:///c:/laragon/www/app/Modules/Employee/app/Models/Employee.php#55-59)

#### [MODIFY] [EmployeeAssignment.php](file:///c:/laragon/www/app/Modules/Employee/app/Models/EmployeeAssignment.php)

Model ini punya import `App\Enums\AssignmentType` dan `AssignmentStatus` yang **belum ada**. Fix: pakai inline cast sesuai migrasi (`employment_status` enum).

---

### Guardian Module

#### [MODIFY] [Guardian.php](file:///c:/laragon/www/app/Modules/Guardian/app/Models/Guardian.php) L104

[students()](file:///c:/laragon/www/app/Modules/Guardian/app/Models/Guardian.php#98-107) pivot: migrasi hanya punya `relationship` column. Tapi Student model expects `is_legal_guardian`, `is_financial_guardian`. Sesuaikan pivot columns agar match migrasi.

---

### Admission + Student Module

Sudah lengkap secara model. Hanya perlu pastikan semua `DocumentType` references pakai `App\Enums\DocumentType`.

## Verification Plan
- `php artisan migrate:fresh --seed`
- Cek semua model tidak error saat di-load
