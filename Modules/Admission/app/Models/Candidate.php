<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Enums\Gender;
use Modules\Institution\Models\Institution;
use Modules\User\Models\User;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'institution_id',
        'admission_wave_id',
        'registration_number',
        'internal_student_id',
        'nik',
        'name',
        'gender',
        'pob',
        'dob',
        'previous_school',
        'nisn',
        'address',
        'status',
        'student_id',
    ];

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'status' => CandidateStatus::class,
            'gender' => Gender::class,
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }

    public function admissionWave(): BelongsTo
    {
        return $this->belongsTo(AdmissionWave::class);
    }

    public function documents(): HasMany
    {
        return $this->hasMany(CandidateDocument::class);
    }

    public function families(): HasMany
    {
        return $this->hasMany(CandidateFamily::class);
    }

    public function exams(): HasMany
    {
        return $this->hasMany(CandidateExam::class);
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(AdmissionInvoice::class);
    }

    public function father(): HasOne
    {
        return $this->hasOne(CandidateFamily::class)->where('type', 'ayah');
    }

    public function mother(): HasOne
    {
        return $this->hasOne(CandidateFamily::class)->where('type', 'ibu');
    }

    public function guardian(): HasOne
    {
        return $this->hasOne(CandidateFamily::class)->where('type', 'wali');
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeForInstitution(Builder $query, int $institutionId): Builder
    {
        return $query->where('institution_id', $institutionId);
    }

    public function scopeForWave(Builder $query, int $waveId): Builder
    {
        return $query->where('admission_wave_id', $waveId);
    }

    public function scopeStatus(Builder $query, CandidateStatus $status): Builder
    {
        return $query->where('status', $status);
    }

    public function scopeByUser(Builder $query, int $userId): Builder
    {
        return $query->where('user_id', $userId);
    }

    // ========================================
    // HELPERS
    // ========================================

    /**
     * Generate registration number: PSB/2026/MI/001
     */
    public static function generateRegistrationNumber(int $institutionId, int $waveId): string
    {
        $institution = Institution::find($institutionId);
        $year = now()->year;
        $code = strtoupper($institution->code ?? 'PSB');

        $lastCandidate = static::where('institution_id', $institutionId)
            ->where('admission_wave_id', $waveId)
            ->orderByDesc('id')
            ->first();

        $lastNumber = 0;
        if ($lastCandidate && preg_match('/(\d+)$/', $lastCandidate->registration_number, $matches)) {
            $lastNumber = (int) $matches[1];
        }

        $nextNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);

        return "PSB/{$year}/{$code}/{$nextNumber}";
    }

    /**
     * Check if all required documents are verified.
     */
    public function allDocumentsVerified(): bool
    {
        $docs = $this->documents;
        if ($docs->isEmpty()) {
            return false;
        }

        return $docs->every(fn ($doc) => $doc->is_valid === true);
    }

    /**
     * Check if candidate has paid the registration fee.
     */
    public function hasRegistrationFeePaid(): bool
    {
        return $this->invoices()
            ->where('type', 'biaya_formulir')
            ->where('status', 'lunas')
            ->exists();
    }

    /**
     * Check if candidate has paid the enrollment fee.
     */
    public function hasEnrollmentFeePaid(): bool
    {
        return $this->invoices()
            ->where('type', 'biaya_daftar_ulang')
            ->where('status', 'lunas')
            ->exists();
    }
}
