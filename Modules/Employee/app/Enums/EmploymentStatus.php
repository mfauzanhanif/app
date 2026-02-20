<?php

namespace Modules\Employee\Enums;

enum EmploymentStatus {
    case TETAP = 'tetap';
    case TIDAK_TETAP = 'tidak_tetap';
    case PNS = 'pns';
    case PENGABDIAN = 'pengabdian';
    case KONTRAK = 'kontrak';
    case MAGANG = 'magang';

    public function label(): string
    {
        return match ($this) {
            self::TETAP => 'Tetap',
            self::TIDAK_TETAP => 'Tidak Tetap',
            self::PNS => 'PNS',
            self::PENGABDIAN => 'Pengabdian',
            self::KONTRAK => 'Kontrak',
            self::MAGANG => 'Magang',
        };
    }
}

