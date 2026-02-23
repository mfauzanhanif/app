---
name: wayfinder-development
description: >-
    Activates whenever referencing backend routes in frontend components. Use when
    importing from @/actions or @/routes, calling Laravel routes from TypeScript,
    or working with Wayfinder route functions. CRITICAL: This project DOES NOT use Ziggy.
---

# Wayfinder Development

## 🔴 Cross-References (Penting!)

- Jika Anda sedang mengimplementasikan form atau navigasi di React, Anda **WAJIB** membaca panduan `inertia-react-development`.
- Jika Anda tidak tahu di mana letak Controller yang harus di-import, ingat bahwa aplikasi ini menggunakan `nwidart/laravel-modules`. Baca `modules-index` untuk mengetahui struktur domain.

## When to Apply

Activate whenever referencing backend routes in frontend components:

- Importing from `@/actions/` or `@/routes/`
- Calling Laravel routes from TypeScript/JavaScript/React
- Creating links or navigation to backend endpoints

## 🚫 CRITICAL WARNING: NO ZIGGY

Aplikasi ini **TIDAK MENGGUNAKAN ZIGGY**.
**DILARANG KERAS** menggunakan helper `route('nama.route')` atau meng-import apapun dari `ziggy-js`. Selalu gunakan _Named Imports_ dari Wayfinder.

## Documentation

Use `search-docs` for detailed Wayfinder patterns and documentation.

## Quick Reference

### Generate Routes

Run after route changes if Vite plugin isn't installed or if you just created a new controller inside a Module:

```bash
php artisan wayfinder:generate --no-interaction
```

For form helpers, use --with-form flag:

```bash
php artisan wayfinder:generate --with-form --no-interaction
```

### Import Patterns (Modular Architecture)

Karena aplikasi ini menggunakan nwidart/laravel-modules, perhatikan path import untuk Controller yang berada di dalam folder Modules/:

<code-snippet name="Controller Action Imports" lang="typescript">

// Named imports for tree-shaking (preferred)...

// 1. For Core Controllers (in app/):
import { show } from '@/actions/App/Http/Controllers/ProfileController'

// 2. For Modular Controllers (in Modules/):
import { store, update } from '@/actions/Modules/Admission/Http/Controllers/CandidateController'

// Named route imports (Alternative, but action imports are preferred)...
import { show as candidateShow } from '@/routes/candidate'

</code-snippet>

### Common Methods

<code-snippet name="Wayfinder Methods" lang="typescript">

// Get route object...
show(1) // { url: "/candidates/1", method: "get" }

// Get URL string...
show.url(1) // "/candidates/1"

// Specific HTTP methods...
show.get(1)
store.post()
update.patch(1)
destroy.delete(1)

// Form attributes for HTML forms or Inertia Form...
store.form() // { action: "/candidates", method: "post" }

// Query parameters...
show(1, { query: { page: 1 } }) // "/candidates/1?page=1"

</code-snippet>

### Wayfinder + Inertia v2

Use Wayfinder with the Inertia `<Form>` component. This is the Standard Pattern for form submissions in this project:

<code-snippet name="Wayfinder Form (React)" lang="tsx">

import { Form } from '@inertiajs/react'
import { store } from '@/actions/Modules/Finance/Http/Controllers/InvoiceController'

export default function CreateInvoice() {
return (
// store.form() injects { action: "/invoices", method: "post" }
<Form {...store.form()}>
<input name="amount" type="number" />
<button type="submit">Submit</button>
</Form>
)
}

</code-snippet>

## Verification

- Run `php artisan wayfinder:generate` to regenerate routes if Vite plugin isn't installed.
- Check TypeScript imports resolve correctly (especially check if the Controller is in `App/` or `Modules/`).
- Verify route URLs match expected paths.

## Common Pitfalls

- Using Ziggy's `route()` helper (Will cause ReferenceError).
- Using default imports instead of named imports (breaks tree-shaking).
- Forgetting to regenerate after route changes (`php artisan wayfinder:generate`).
- Incorrectly guessing the import path for a Modular Controller (always check the actual path in `Modules/`).
- Not using type-safe parameter objects for route model binding.
