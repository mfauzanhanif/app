<?php

namespace Modules\Student\Enums;

enum BloodType: string
{
    case A = 'a';
    case B = 'b';
    case AB = 'ab';
    case O = 'o';
    case TIDAK_DIKETAHUI = 'tidak_diketahui';

    public function label(): string
    {
        return match ($this) {
            self::A => 'A',
            self::B => 'B',
            self::AB => 'AB',
            self::O => 'O',
            self::TIDAK_DIKETAHUI => 'Tidak Diketahui',
        };
    }
}
