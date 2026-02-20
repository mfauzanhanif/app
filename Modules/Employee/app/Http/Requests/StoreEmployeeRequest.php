<?php

namespace Modules\Employee\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Modules\Employee\Enums\EmploymentStatus;
use Modules\Employee\Enums\Gender;
use Modules\Employee\Enums\LastEducation;

class StoreEmployeeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Identitas Nasional
            'nik' => ['required', 'string', 'size:16', 'unique:employees,nik'],
            'nipy' => ['nullable', 'string', 'max:30', 'unique:employees,nipy'],
            'nuptk' => ['nullable', 'string', 'max:30'],
            'npwp' => ['nullable', 'string', 'max:30'],

            // Biodata
            'name' => ['required', 'string', 'max:255'],
            'place_of_birth' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['required', 'date'],
            'gender' => ['required', Rule::enum(Gender::class)],

            // Alamat (FK ke Laravolt Indonesia)
            'address' => ['nullable', 'string'],
            'rt' => ['nullable', 'string', 'max:5'],
            'rw' => ['nullable', 'string', 'max:5'],
            'province_code' => ['nullable', 'string', 'size:2', 'exists:indonesia_provinces,code'],
            'city_code' => ['nullable', 'string', 'size:4', 'exists:indonesia_cities,code'],
            'district_code' => ['nullable', 'string', 'size:7', 'exists:indonesia_districts,code'],
            'village_code' => ['nullable', 'string', 'size:10', 'exists:indonesia_villages,code'],
            'postal_code' => ['nullable', 'string', 'max:10'],

            // Kontak
            'phone' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email', 'max:255', 'unique:employees,email'],

            // Pendidikan
            'last_education' => ['nullable', Rule::enum(LastEducation::class)],
            'major' => ['nullable', 'string', 'max:255'],
            'university' => ['nullable', 'string', 'max:255'],

            // Bank
            'bank_name' => ['nullable', 'string', 'max:255'],
            'bank_account' => ['nullable', 'string', 'max:255'],
            'bank_account_holder' => ['nullable', 'string', 'max:255'],

            // Assignment (untuk penugasan pertama saat pembuatan)
            'position' => ['required', 'string', 'max:255'],
            'employment_status' => ['required', Rule::enum(EmploymentStatus::class)],
            'start_date' => ['required', 'date'],
            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'basic_salary' => ['nullable', 'numeric', 'min:0'],
            'allowance_fixed' => ['nullable', 'numeric', 'min:0'],
        ];
    }

    public function messages(): array
    {
        return [
            'nik.required' => 'NIK wajib diisi.',
            'nik.size' => 'NIK harus tepat 16 digit.',
            'nik.unique' => 'NIK sudah terdaftar di sistem.',
            'nipy.unique' => 'NIPY sudah terdaftar di sistem.',
            'name.required' => 'Nama lengkap wajib diisi.',
            'place_of_birth.required' => 'Tempat lahir wajib diisi.',
            'date_of_birth.required' => 'Tanggal lahir wajib diisi.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'phone.required' => 'Nomor telepon wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.unique' => 'Email sudah terdaftar di sistem.',
            'position.required' => 'Jabatan/posisi wajib diisi.',
            'employment_status.required' => 'Status kepegawaian wajib dipilih.',
            'start_date.required' => 'Tanggal mulai tugas wajib diisi.',
        ];
    }
}
