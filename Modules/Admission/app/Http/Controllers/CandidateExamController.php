<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Enums\ExamType;
use Modules\Admission\Models\Candidate;
use Modules\Admission\Models\CandidateExam;
use Modules\Admission\Http\Requests\StoreCandidateExamRequest;

class CandidateExamController extends Controller
{
    /**
     * Display exams for a candidate.
     */
    public function index(Candidate $candidate): Response
    {
        $institution = current_institution();

        $exams = $candidate->exams()->latest()->get();

        return Inertia::render('Lembaga/Admission/Exams/Index', [
            'candidate' => $candidate->only('id', 'name', 'registration_number'),
            'exams' => $exams,
            'examTypes' => collect(ExamType::cases())
                ->map(fn ($t) => ['value' => $t->value, 'label' => $t->label()]),
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Store a new exam record.
     */
    public function store(StoreCandidateExamRequest $request, Candidate $candidate): RedirectResponse
    {
        $institution = current_institution();

        $candidate->exams()->create($request->validated());

        return redirect()
            ->route('candidates.show', [
                'institution' => $institution->code,
                'candidate' => $candidate->id,
            ])
            ->with('success', 'Data tes berhasil disimpan.');
    }

    /**
     * Update an exam record.
     */
    public function update(Request $request, Candidate $candidate, CandidateExam $exam): RedirectResponse
    {
        $institution = current_institution();

        $validated = $request->validate([
            'schedule' => 'nullable|date',
            'score' => 'nullable|numeric|min:0|max:100',
            'result' => 'nullable|in:direkomendasikan,tidak_direkomendasikan',
            'notes' => 'nullable|string|max:1000',
        ]);

        $exam->update($validated);

        return redirect()
            ->route('candidates.show', [
                'institution' => $institution->code,
                'candidate' => $candidate->id,
            ])
            ->with('success', 'Data tes berhasil diperbarui.');
    }
}
