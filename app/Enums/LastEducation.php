<?php

namespace App\Enums;

enum LastEducation: string
{
    case SD = 'sd';
    case SMP = 'smp';
    case SMA = 'sma';
    case D1 = 'd1';
    case D2 = 'd2';
    case D3 = 'd3';
    case S1 = 's1';
    case S2 = 's2';
    case S3 = 's3';
    case TIDAK_SEKOLAH = 'tidak_sekolah';

    public function label(): string
    {
        return match ($this) {
            self::SD => 'SD / Sederajat',
            self::SMP => 'SMP / Sederajat',
            self::SMA => 'SMA / Sederajat',
            self::D1 => 'D1',
            self::D2 => 'D2',
            self::D3 => 'D3',
            self::S1 => 'S1',
            self::S2 => 'S2',
            self::S3 => 'S3',
            self::TIDAK_SEKOLAH => 'Tidak Sekolah',
        };
    }

    public function weight(): int
    {
        return match ($this) {
            self::TIDAK_SEKOLAH => 0,
            self::SD => 10,
            self::SMP => 20,
            self::SMA => 30,
            self::D1 => 31,
            self::D2 => 32,
            self::D3 => 33,
            self::S1 => 40,
            self::S2 => 50,
            self::S3 => 60,
        };
    }
}
