<?php

namespace Modules\Admission\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAdmissionWaveRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'academic_year_id' => 'required|exists:academic_years,id',
            'name' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'exam_date' => 'nullable|date|after_or_equal:start_date',
            'announcement_date' => 'nullable|date|after_or_equal:exam_date',
            'registration_fee' => 'required|numeric|min:0',
            'brochure_path' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'description' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'end_date.after' => 'Tanggal tutup harus setelah tanggal buka.',
            'exam_date.after_or_equal' => 'Tanggal tes harus setelah atau sama dengan tanggal buka.',
            'announcement_date.after_or_equal' => 'Tanggal pengumuman harus setelah atau sama dengan tanggal tes.',
        ];
    }
}
