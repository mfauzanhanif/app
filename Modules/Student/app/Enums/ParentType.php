<?php

namespace Modules\Student\Enums;

enum ParentType: string
{
    case AYAH = 'ayah';
    case IBU = 'ibu';

    public function label(): string
    {
        return match ($this) {
            self::AYAH => 'Ayah',
            self::IBU => 'Ibu',
        };
    }
}
