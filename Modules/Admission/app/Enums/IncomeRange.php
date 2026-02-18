<?php

namespace Modules\Admission\Enums;

enum IncomeRange: string
{
    case KURANG_1JT = 'kurang_1jt';
    case SATU_TIGA_JT = '1_3jt';
    case TIGA_LIMA_JT = '3_5jt';
    case LIMA_SEPULUH_JT = '5_10jt';
    case LEBIH_10JT = 'lebih_10jt';

    public function label(): string
    {
        return match ($this) {
            self::KURANG_1JT => '< Rp 1.000.000',
            self::SATU_TIGA_JT => 'Rp 1.000.000 - Rp 3.000.000',
            self::TIGA_LIMA_JT => 'Rp 3.000.000 - Rp 5.000.000',
            self::LIMA_SEPULUH_JT => 'Rp 5.000.000 - Rp 10.000.000',
            self::LEBIH_10JT => '> Rp 10.000.000',
        };
    }
}
