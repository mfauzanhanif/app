# 2. USER DATABASES

## 2.1 `users` - User Admin

| Field                       | Type      | Deskripsi                                                           |
| --------------------------- | --------- | ------------------------------------------------------------------- |
| `id`                        | BIGINT    | Primary key                                                         |
| `name`                      | VARCHAR   | Nama                                                                |
| `username`                  | VARCHAR   | Nullable. Menggunakan NIPY untuk employee dan Guardian ID untuk Wali (unique)|
| `email`                     | VARCHAR   | Email (unique)                                                      |
| `email_verified_at`         | TIMESTAMP | Nullable. Waktu verifikasi email                                    |
| `password`                  | VARCHAR   | Password (hashed)                                                   |
| `two_factor_secret`         | TEXT      | Nullable. Secret key 2FA (Fortify)                                  |
| `two_factor_recovery_codes` | TEXT      | Nullable. Kode recovery 2FA                                         |
| `two_factor_confirmed_at`   | TIMESTAMP | Nullable. Waktu konfirmasi 2FA                                      |
| `role_type`                 | ENUM      | Nullable. Pilihan: `employee`, `guardian`                           |
| `is_active`                 | BOOLEAN   | Default Aktif (true)                                                |
| `remember_token`            | VARCHAR   | Token remember me                                                   |
| `deleted_at`                | TIMESTAMP | Soft delete                                                         |

**Unique**: `email`, `username`  
**Index**: `email`  
**Primary Key**: `id`  
**Relasi**:

- `users` 1:N `guardians` (User sebagai Wali Murid)
- `users` 1:N `employees` (User sebagai Pegawai)

---

## 2.2. `permissions` - by spatie

| Field        | Type      | Deskripsi                                 |
| ------------ | --------- | ----------------------------------------- |
| `id`         | BIGINT    | Primary key                               |
| `name`       | VARCHAR   | Nama permission                           |
| `guard_name` | VARCHAR   | Guard name (web, api, dll)                |
| `group_name` | VARCHAR   | Default 'Uncategorized'. Kategori/Group.  |
| `created_at` | TIMESTAMP | Waktu dibuat                              |
| `updated_at` | TIMESTAMP | Waktu diupdate                            |

**Unique**: `name`, `guard_name`  
**Primary Key**: `id`

---

## 2.3. `roles` - by spatie

| Field            | Type      | Deskripsi                  |
| ---------------- | --------- | -------------------------- |
| `id`             | BIGINT    | Primary key                |
| `institution_id` | BIGINT    | Nullable. ID Lembaga       |
| `name`           | VARCHAR   | Nama role                  |
| `display_name`   | VARCHAR   | Nullable. Nama tampilan    |
| `guard_name`     | VARCHAR   | Guard name (web, api, dll) |
| `created_at`     | TIMESTAMP | Waktu dibuat               |
| `updated_at`     | TIMESTAMP | Waktu diupdate             |

**Unique**: `institution_id`, `name`, `guard_name`  
**Index**: `institution_id`  
**Primary Key**: `id`  

---

## 2.4. `model_has_permissions` - by spatie

| Field            | Type    | Deskripsi                                      |
| ---------------- | ------- | ---------------------------------------------- |
| `id`             | BIGINT  | Primary key (Surrogate Key)                    |
| `permission_id`  | BIGINT  | Foreign key ke permissions.id                  |
| `model_type`     | VARCHAR | Tipe model (App\\Models\\User)                 |
| `model_id`       | BIGINT  | ID model                                       |
| `institution_id` | BIGINT  | Nullable. Foreign key ke institutions.id       |

**Foreign Key**: `permission_id` -> `permissions.id` (cascade delete), `institution_id` -> `institutions.id` (cascade delete)  
**Index**: `model_id`, `model_type`, `institution_id`  
**Primary Key**: `id`

---

## 2.5. `model_has_roles` - by spatie

| Field            | Type    | Deskripsi                                      |
| ---------------- | ------- | ---------------------------------------------- |
| `id`             | BIGINT  | Primary key (Surrogate Key)                    |
| `role_id`        | BIGINT  | Foreign key ke roles.id                        |
| `model_type`     | VARCHAR | Tipe model (App\\Models\\User)                 |
| `model_id`       | BIGINT  | ID model                                       |
| `institution_id` | BIGINT  | Nullable. Foreign key ke institutions.id       |

**Foreign Key**: `role_id` -> `roles.id` (cascade delete), `institution_id` -> `institutions.id` (cascade delete)  
**Index**: `model_id`, `model_type`, `institution_id`, `role_id`  
**Primary Key**: `id`

---

## 2.6. `role_has_permissions` - by spatie

| Field           | Type   | Deskripsi                     |
| --------------- | ------ | ----------------------------- |
| `permission_id` | BIGINT | Foreign key ke permissions.id |
| `role_id`       | BIGINT | Foreign key ke roles.id       |

**Foreign Key**: `permission_id` -> `permissions.id` (cascade delete)  
**Foreign Key**: `role_id` -> `roles.id` (cascade delete)  
**Primary Key**: `permission_id`, `role_id`
