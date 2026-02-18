<?php

namespace Modules\Admission\Enums;

enum InvoiceStatus: string
{
    case BELUM_LUNAS = 'belum_lunas';
    case LUNAS = 'lunas';
    case DIBATALKAN = 'dibatalkan';

    public function label(): string
    {
        return match ($this) {
            self::BELUM_LUNAS => 'Belum Lunas',
            self::LUNAS => 'Lunas',
            self::DIBATALKAN => 'Dibatalkan',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::BELUM_LUNAS => 'yellow',
            self::LUNAS => 'green',
            self::DIBATALKAN => 'red',
        };
    }
}
