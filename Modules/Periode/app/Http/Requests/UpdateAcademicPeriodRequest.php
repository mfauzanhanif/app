<?php

namespace Modules\Periode\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAcademicPeriodRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $id = is_object($this->route('academic_period')) ? $this->route('academic_period')->id : $this->route('academic_period');

        return [
            'academic_year_id' => ['required', 'integer', 'exists:academic_years,id'],
            'name' => [
                'required',
                'in:Ganjil,Genap',
                Rule::unique('academic_periods', 'name')->ignore($id)->where(function ($query) {
            return $query->where('academic_year_id', $this->input('academic_year_id'));
        }),
            ],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'is_active' => ['nullable', 'boolean'],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
