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

            // Parent Data (minimal ayah atau ibu)
            'parents' => 'required|array|min:1',
            'parents.*.type' => 'required|in:ayah,ibu,wali',
            'parents.*.nik' => 'nullable|string|size:16',
            'parents.*.name' => 'required|string|max:255',
            'parents.*.phone' => 'nullable|string|max:20',
            'parents.*.email' => 'nullable|email|max:255',
            'parents.*.last_education' => 'nullable|in:sd,smp,sma,d1,d2,d3,s1,s2,s3,tidak_sekolah',
            'parents.*.job' => 'nullable|in:Akuntan,Apoteker,Arsitek,Bidan,Buruh,Buruh Harian Lepas,Dokter,Dosen,Guru,IRT,Karyawan BUMN/BUMD,Karyawan Swasta,Kepala/Perangkat Desa,Nelayan,Pedagang,Pelaut,Pensiunan,Perawat,Petani,Peternak,PNS,Polri,Seniman,Sopir,TNI,Wartawan,Wiraswasta,Tidak Bekerja,Lainnya',
            'parents.*.income' => 'nullable|in:<_500rb,Rp. 500.000 - Rp. 1.000.000,Rp. 1.000.000 - Rp. 3.000.000,Rp. 3.000.000 - Rp. 5.000.000,Rp. 5.000.000 - Rp. 10.000.000,Rp. 10.000.000_>',
            'parents.*.is_alive' => 'nullable|boolean',
            'parents.*.is_guardian' => 'nullable|boolean',

            // Documents (file upload)
            'documents' => 'nullable|array',
            'documents.kk' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.akta_lahir' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
            'documents.ktp_ortu' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
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
            'parents.required' => 'Data orang tua/wali wajib diisi.',
            'parents.min' => 'Minimal 1 data orang tua (ayah/ibu/wali).',
            'parents.*.name.required' => 'Nama orang tua/wali wajib diisi.',
            'documents.*.max' => 'Ukuran file maksimal 5MB.',
            'documents.foto.max' => 'Ukuran foto maksimal 2MB.',
        ];
    }
}
