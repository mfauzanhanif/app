<?php

namespace Modules\Admission\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCandidateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Biodata Calon Santri
            'nik' => 'required|string|size:16',
            'name' => 'required|string|max:255',
            'gender' => 'required|in:l,p',
            'pob' => 'required|string|max:100',
            'dob' => 'required|date|before:today',
            'previous_school' => 'nullable|string|max:255',
            'nisn' => 'nullable|string|max:20',
            'address' => 'required|string|max:1000',

            // Family Data (minimal ayah atau ibu)
            'families' => 'required|array|min:1',
            'families.*.type' => 'required|in:ayah,ibu,wali',
            'families.*.nik' => 'nullable|string|size:16',
            'families.*.name' => 'required|string|max:255',
            'families.*.phone' => 'nullable|string|max:20',
            'families.*.job' => 'nullable|string|max:100',
            'families.*.income' => 'nullable|in:kurang_1jt,1_3jt,3_5jt,5_10jt,lebih_10jt',

            // Documents (file upload)
            'documents' => 'nullable|array',
            'documents.kk' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.akta' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.ktp_wali' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.ijazah' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.foto' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'documents.skl' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.kip' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
        ];
    }

    public function messages(): array
    {
        return [
            'nik.size' => 'NIK harus 16 digit.',
            'dob.before' => 'Tanggal lahir harus sebelum hari ini.',
            'families.required' => 'Data keluarga wajib diisi.',
            'families.min' => 'Minimal 1 data keluarga (ayah/ibu/wali).',
            'families.*.name.required' => 'Nama orang tua/wali wajib diisi.',
            'documents.*.max' => 'Ukuran file maksimal 5MB.',
            'documents.foto.max' => 'Ukuran foto maksimal 2MB.',
        ];
    }
}
