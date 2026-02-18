<?php

namespace Modules\Admission\Enums;

enum InvoiceType: string
{
    case BIAYA_FORMULIR = 'biaya_formulir';
    case BIAYA_DAFTAR_ULANG = 'biaya_daftar_ulang';

    public function label(): string
    {
        return match ($this) {
            self::BIAYA_FORMULIR => 'Biaya Formulir',
            self::BIAYA_DAFTAR_ULANG => 'Biaya Daftar Ulang',
        };
    }
}
