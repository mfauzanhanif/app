<?php

namespace Modules\Admission\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCandidateExamRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'type' => 'required|in:wawancara_santri,wawancara_wali,tes_tulis,tes_alquran',
            'schedule' => 'nullable|date',
            'score' => 'nullable|numeric|min:0|max:100',
            'result' => 'nullable|in:direkomendasikan,tidak_direkomendasikan',
            'notes' => 'nullable|string|max:1000',
        ];
    }
}
