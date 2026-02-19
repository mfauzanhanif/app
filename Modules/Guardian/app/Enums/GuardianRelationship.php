<?php

namespace Modules\Guardian\Enums;

enum GuardianRelationship: string
{
    case AYAH_KANDUNG = 'ayah_kandung';
    case IBU_KANDUNG = 'ibu_kandung';
    case WALI = 'wali';
    case AYAH_TIRI = 'ayah_tiri';
    case IBU_TIRI = 'ibu_tiri';
    case KERABAT = 'kerabat';

    public function label(): string
    {
        return match ($this) {
            self::AYAH_KANDUNG => 'Ayah Kandung',
            self::IBU_KANDUNG => 'Ibu Kandung',
            self::WALI => 'Wali',
            self::AYAH_TIRI => 'Ayah Tiri',
            self::IBU_TIRI => 'Ibu Tiri',
            self::KERABAT => 'Kerabat',
        };
    }
}
