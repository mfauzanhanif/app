<?php

namespace Modules\Student\Enums;

enum StudentStatus: string
{
    case AKTIF = 'aktif';
    case LULUS = 'lulus';
    case PINDAH = 'pindah';
    case DIKELUARKAN = 'dikeluarkan';
    case MENINGGAL = 'meninggal';
    case DISKORS = 'diskors';

    public function label(): string
    {
        return match ($this) {
            self::AKTIF => 'Aktif',
            self::LULUS => 'Lulus',
            self::PINDAH => 'Pindah',
            self::DIKELUARKAN => 'Dikeluarkan',
            self::MENINGGAL => 'Meninggal',
            self::DISKORS => 'Diskors',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::AKTIF => 'green',
            self::LULUS => 'blue',
            self::PINDAH => 'yellow',
            self::DIKELUARKAN => 'red',
            self::MENINGGAL => 'gray',
            self::DISKORS => 'orange',
        };
    }
}
