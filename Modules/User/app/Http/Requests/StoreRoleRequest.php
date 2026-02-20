<?php

namespace Modules\User\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRoleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
                // Spatie Teams/Institution Unique Constraint
                Rule::unique('roles', 'name')->where(function ($query) {
            return $query->where('institution_id', $this->input('institution_id'))
                    ->where('guard_name', $this->input('guard_name', 'web'));
        }),
            ],
            'display_name' => ['nullable', 'string', 'max:255'],
            'guard_name' => ['nullable', 'string', 'max:255'],
            'institution_id' => ['nullable', 'integer', 'exists:institutions,id'],
            'permissions' => ['nullable', 'array'],
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
