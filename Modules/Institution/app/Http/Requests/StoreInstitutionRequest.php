<?php

namespace Modules\Institution\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInstitutionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'code' => ['required', 'string', 'max:20', 'unique:institutions,code'],
            'slug' => ['required', 'string', 'max:100', 'unique:institutions,slug'],
            'domain' => ['nullable', 'string', 'max:100', 'unique:institutions,domain'],
            'name' => ['required', 'string', 'max:255'],

            'no_statistic' => ['nullable', 'string', 'max:50'],
            'npsn' => ['nullable', 'string', 'max:20'],

            'is_internal' => ['nullable', 'boolean'],
            'category' => ['required', 'in:yayasan,pondok,formal,non_formal,sosial'],
            'type' => ['required', 'in:yayasan,pondok,tk,sd,mi,smp,mts,sma,ma,smk,slb,mdta,tpq,madrasah,lksa'],

            'headmaster_id' => ['nullable', 'integer', 'exists:employees,id'],

            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],

            'address' => ['nullable', 'string'],
            'rt' => ['nullable', 'string', 'max:5'],
            'rw' => ['nullable', 'string', 'max:5'],
            'province_code' => ['nullable', 'string', 'size:2', 'exists:provinces,code'],
            'city_code' => ['nullable', 'string', 'size:4', 'exists:cities,code'],
            'district_code' => ['nullable', 'string', 'size:7', 'exists:districts,code'],
            'village_code' => ['nullable', 'string', 'size:10', 'exists:villages,code'],
            'postal_code' => ['nullable', 'string', 'max:10'],

            'logo_path' => ['nullable', 'string', 'max:255'],
            'letterhead_path' => ['nullable', 'string', 'max:255'],

            'parent_id' => ['nullable', 'integer', 'exists:institutions,id'],
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
