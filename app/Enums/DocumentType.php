<?php

namespace App\Enums;

enum DocumentType
{
    // Personal
    case FOTO = 'foto';
    case KK = 'kk';
    case KTP = 'ktp';
    case KTP_ORTU = 'ktp_ortu';
    case AKTA_LAHIR = 'akta_lahir';
    case IJAZAH = 'ijazah';
    case SKL = 'skl';
    case KIP = 'kip';
    case NPWP = 'npwp';
    case SERTIFIKAT = 'sertifikat';
    case SKTM = 'sktm';
    case CV = 'cv';
    case AKTA_PENDIRIAN = 'akta_pendirian';
    case STATUS = 'status';
    case SK_OPERASIONAL = 'sk_operasional';
    case IJOP = 'ijop';
    case SK_AKREDITASI = 'sk_akreditasi';
    case LAINNYA = 'lainnya';

    public function label(): string
    {
        return match ($this) {
            self::FOTO => 'Pas Foto',
            self::KK => 'Kartu Keluarga',
            self::KTP => 'KTP',
            self::KTP_ORTU => 'KTP Orang Tua',
            self::AKTA_LAHIR => 'Akta Kelahiran',
            self::IJAZAH => 'Ijazah',
            self::SKL => 'Surat Keterangan Lulus',
            self::KIP => 'Kartu Indonesia Pintar',
            self::NPWP => 'NPWP',
            self::SERTIFIKAT => 'Sertifikat',
            self::SKTM => 'SKTM',
            self::CV => 'CV',
            self::AKTA_PENDIRIAN => 'Akta Pendirian',
            self::STATUS => 'Status',
            self::SK_OPERASIONAL => 'SK Operasional',
            self::IJOP => 'IJOP',
            self::SK_AKREDITASI => 'SK Akreditasi',
            self::LAINNYA => 'Lainnya',
        };
    }
}
