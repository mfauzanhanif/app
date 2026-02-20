<?php

namespace Modules\User\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        // Mendapatkan ID role dari URL (bisa berupa object Model atau integer)
        $roleId = is_object($this->route('role')) ? $this->route('role')->id : $this->route('role');

        return [
            'name' => [
                'required',
                'string',
                'max:255',
                // Pastikan unique mengecek tabel roles, abaikan role_id yang diupdate
                Rule::unique('roles', 'name')->ignore($roleId)->where(function ($query) {
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
