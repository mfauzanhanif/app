<?php

namespace Modules\Periode\Enums;

enum FiscalPeriodStatus: string
{
    case OPEN = 'open';
    case CLOSED = 'closed';
    case AUDITED = 'audited';

    /**
     * Get label for display.
     */
    public function label(): string
    {
        return match ($this) {
            self::OPEN => 'buka',
            self::CLOSED => 'tutup',
            self::AUDITED => 'teraudit',
        };
    }
}
