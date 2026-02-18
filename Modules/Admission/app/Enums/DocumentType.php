<?php

namespace Modules\Admission\Enums;

enum DocumentType: string
{
    case KK = 'kk';
    case AKTA = 'akta';
    case KTP_WALI = 'ktp_wali';
    case IJAZAH = 'ijazah';
    case FOTO = 'foto';
    case SKL = 'skl';
    case KIP = 'kip';

    public function label(): string
    {
        return match ($this) {
            self::KK => 'Kartu Keluarga',
            self::AKTA => 'Akta Kelahiran',
            self::KTP_WALI => 'KTP Wali',
            self::IJAZAH => 'Ijazah',
            self::FOTO => 'Pas Foto',
            self::SKL => 'Surat Keterangan Lulus',
            self::KIP => 'Kartu Indonesia Pintar',
        };
    }
}
