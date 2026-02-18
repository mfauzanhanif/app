<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Admission\Enums\InvoiceStatus;
use Modules\Admission\Enums\InvoiceType;

class AdmissionInvoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'code',
        'amount',
        'type',
        'status',
        'payment_method',
        'proof_path',
        'verified_at',
        'verified_by',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'type' => InvoiceType::class,
            'status' => InvoiceStatus::class,
            'verified_at' => 'datetime',
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeUnpaid(Builder $query): Builder
    {
        return $query->where('status', InvoiceStatus::BELUM_LUNAS);
    }

    public function scopePaid(Builder $query): Builder
    {
        return $query->where('status', InvoiceStatus::LUNAS);
    }

    // ========================================
    // HELPERS
    // ========================================

    /**
     * Generate invoice code: INV/PSB/2026/0001
     */
    public static function generateCode(): string
    {
        $year = now()->year;

        $lastInvoice = static::whereYear('created_at', $year)
            ->orderByDesc('id')
            ->first();

        $lastNumber = 0;
        if ($lastInvoice && preg_match('/(\d+)$/', $lastInvoice->code, $matches)) {
            $lastNumber = (int) $matches[1];
        }

        $nextNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);

        return "INV/PSB/{$year}/{$nextNumber}";
    }

    public function isPaid(): bool
    {
        return $this->status === InvoiceStatus::LUNAS;
    }

    public function markAsPaid(int $verifiedBy): void
    {
        $this->update([
            'status' => InvoiceStatus::LUNAS,
            'verified_at' => now(),
            'verified_by' => $verifiedBy,
        ]);
    }
}
