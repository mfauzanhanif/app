<?php

namespace Modules\Admission\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAdmissionWaveRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'academic_year_id' => 'sometimes|required|exists:academic_years,id',
            'name' => 'sometimes|required|string|max:255',
            'start_date' => 'sometimes|required|date',
            'end_date' => 'sometimes|required|date|after:start_date',
            'exam_date' => 'nullable|date',
            'announcement_date' => 'nullable|date',
            'registration_fee' => 'sometimes|required|numeric|min:0',
            'brochure_path' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'description' => 'nullable|string',
        ];
    }
}
