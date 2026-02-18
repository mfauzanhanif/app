<?php

namespace Modules\Admission\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Admission\Enums\CandidateStatus;

class UpdateCandidateStatusRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $validStatuses = collect(CandidateStatus::cases())
            ->pluck('value')
            ->implode(',');

        return [
            'status' => "required|in:{$validStatuses}",
        ];
    }
}
