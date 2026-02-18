<?php

namespace Modules\Admission\Enums;

enum ExamType: string
{
    case WAWANCARA_SANTRI = 'wawancara_santri';
    case WAWANCARA_WALI = 'wawancara_wali';
    case TES_TULIS = 'tes_tulis';
    case TES_ALQURAN = 'tes_alquran';

    public function label(): string
    {
        return match ($this) {
            self::WAWANCARA_SANTRI => 'Wawancara Santri',
            self::WAWANCARA_WALI => 'Wawancara Wali',
            self::TES_TULIS => 'Tes Tulis',
            self::TES_ALQURAN => 'Tes Al-Quran',
        };
    }
}
