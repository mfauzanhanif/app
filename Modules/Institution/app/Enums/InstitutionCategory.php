<?php

namespace Modules\Institution\Enums;

enum InstitutionCategory: string
{
    case YAYASAN = 'yayasan';
    case PONDOK = 'pondok';
    case FORMAL = 'formal';
    case NON_FORMAL = 'non_formal';
    case SOSIAL = 'sosial';

    public function label(): string
    {
        return match ($this) {
            self::YAYASAN => 'yayasan',
            self::PONDOK => 'pondok',
            self::FORMAL => 'formal',
            self::NON_FORMAL => 'non_formal',
            self::SOSIAL => 'sosial',
        };
    }
}
