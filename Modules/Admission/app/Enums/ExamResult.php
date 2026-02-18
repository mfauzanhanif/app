<?php

namespace Modules\Admission\Enums;

enum ExamResult: string
{
    case DIREKOMENDASIKAN = 'direkomendasikan';
    case TIDAK_DIREKOMENDASIKAN = 'tidak_direkomendasikan';

    public function label(): string
    {
        return match ($this) {
            self::DIREKOMENDASIKAN => 'Direkomendasikan',
            self::TIDAK_DIREKOMENDASIKAN => 'Tidak Direkomendasikan',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::DIREKOMENDASIKAN => 'green',
            self::TIDAK_DIREKOMENDASIKAN => 'red',
        };
    }
}
