<?php

namespace Modules\Institution\Enums;

enum InstitutionType: string
{
    case YAYASAN = 'yayasan';
    case PONDOK = 'pondok';
    case TK = 'tk';
    case SD = 'sd';
    case MI = 'mi';
    case SMP = 'smp';
    case MTS = 'mts';
    case SMA = 'sma';
    case MA = 'ma';
    case SMK = 'smk';
    case SLB = 'slb';
    case MDTA = 'mdta';
    case TPQ = 'tpq';
    case MADRASAH = 'madrasah';
    case LKSA = 'lksa';

    public function label(): string
    {
        return match ($this) {
            self::YAYASAN => 'yayasan',
            self::PONDOK => 'pondok',
            self::TK => 'tk',
            self::SD => 'sd',
            self::MI => 'mi',
            self::SMP => 'smp',
            self::MTS => 'mts',
            self::SMA => 'sma',
            self::MA => 'ma',
            self::SMK => 'smk',
            self::SLB => 'slb',
            self::MDTA => 'mdta',
            self::TPQ => 'tpq',
            self::MADRASAH => 'madrasah',
            self::LKSA => 'lksa',
        };
    }
}

