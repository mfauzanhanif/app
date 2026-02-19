<?php

namespace Modules\Student\Enums;

enum IncomeRange: string
{
    case KURANG_500RB = '<_500rb';
    case RANGE_500RB_1JT = 'Rp. 500.000 - Rp. 1.000.000';
    case RANGE_1JT_3JT = 'Rp. 1.000.000 - Rp. 3.000.000';
    case RANGE_3JT_5JT = 'Rp. 3.000.000 - Rp. 5.000.000';
    case RANGE_5JT_10JT = 'Rp. 5.000.000 - Rp. 10.000.000';
    case LEBIH_10JT = 'Rp. 10.000.000_>';

    public function label(): string
    {
        return match ($this) {
            self::KURANG_500RB => '< Rp 500.000',
            self::RANGE_500RB_1JT => 'Rp 500.000 - Rp 1.000.000',
            self::RANGE_1JT_3JT => 'Rp 1.000.000 - Rp 3.000.000',
            self::RANGE_3JT_5JT => 'Rp 3.000.000 - Rp 5.000.000',
            self::RANGE_5JT_10JT => 'Rp 5.000.000 - Rp 10.000.000',
            self::LEBIH_10JT => '> Rp 10.000.000',
        };
    }
}
