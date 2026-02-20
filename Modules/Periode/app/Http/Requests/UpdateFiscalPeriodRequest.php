<?php

namespace Modules\Periode\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateFiscalPeriodRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $id = is_object($this->route('fiscal_period')) ? $this->route('fiscal_period')->id : $this->route('fiscal_period');

        return [
            'name' => ['required', 'string', 'max:20', Rule::unique('fiscal_periods', 'name')->ignore($id)],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'is_active' => ['nullable', 'boolean'],
            'status' => ['nullable', 'in:open,closed,audited'],
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
