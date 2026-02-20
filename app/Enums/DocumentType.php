<?php

namespace App\Enums;

enum DocumentType
{
    case KK = 'kk';
    case AKTA_LAHIR = 'akta_lahir';
    case AKTA_PENDIRIAN = 'akta_pendirian';
    case KTP = 'ktp';
    case IJAZAH = 'ijazah';
    case FOTO = 'foto';
    case SKL = 'skl';
    case KIP = 'kip';
    case NPWP = 'npwp';
    case SERTIFIKAT = 'sertifikat';
    case SKTM = 'sktm';

    case LAINNYA = 'lainnya';

    public function label(): string
    {
        return match ($this) {
            self::KK => 'Kartu Keluarga',
            self::AKTA_LAHIR => 'Akta Kelahiran',
            self::AKTA_PENDIRIAN => 'Akta Pendirian',
            self::KTP => 'KTP',
            self::IJAZAH => 'Ijazah',
            self::FOTO => 'Pas Foto',
            self::SKL => 'Surat Keterangan Lulus',
            self::KIP => 'Kartu Indonesia Pintar',
            self::NPWP => 'NPWP',
            self::SERTIFIKAT => 'Sertifikat',
            self::SKTM => 'SKTM',
            self::LAINNYA => 'Lainnya',
        };
    }
}
