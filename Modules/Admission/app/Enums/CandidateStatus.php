<?php

namespace Modules\Admission\Enums;

enum CandidateStatus: string
{
    case DRAFT = 'draft';
    case DIAJUKAN = 'diajukan';
    case DIVERIFIKASI = 'diverifikasi';
    case JADWAL_TES_ADA = 'jadwal_tes_ada';
    case LULUS = 'lulus';
    case TIDAK_LULUS = 'tidak_lulus';
    case DITERIMA = 'diterima';

    public function label(): string
    {
        return match ($this) {
            self::DRAFT => 'Draft',
            self::DIAJUKAN => 'Diajukan',
            self::DIVERIFIKASI => 'Diverifikasi',
            self::JADWAL_TES_ADA => 'Jadwal Tes Ada',
            self::LULUS => 'Lulus',
            self::TIDAK_LULUS => 'Tidak Lulus',
            self::DITERIMA => 'Diterima',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::DRAFT => 'gray',
            self::DIAJUKAN => 'blue',
            self::DIVERIFIKASI => 'indigo',
            self::JADWAL_TES_ADA => 'yellow',
            self::LULUS => 'green',
            self::TIDAK_LULUS => 'red',
            self::DITERIMA => 'emerald',
        };
    }
}
