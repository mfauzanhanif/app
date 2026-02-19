<?php

namespace Modules\Student\Enums;

enum ResidenceType: string
{
    case DENGAN_ORANG_TUA = 'dengan_orang_tua';
    case PONDOK = 'pondok';
    case WALI_LAIN = 'wali_lain';
    case KOST = 'kost';

    public function label(): string
    {
        return match ($this) {
            self::DENGAN_ORANG_TUA => 'Dengan Orang Tua',
            self::PONDOK => 'Pondok',
            self::WALI_LAIN => 'Wali Lain',
            self::KOST => 'Kost',
        };
    }
}
