<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Models\AdmissionWave;
use Modules\Admission\Http\Requests\StoreAdmissionWaveRequest;
use Modules\Admission\Http\Requests\UpdateAdmissionWaveRequest;
use Modules\Periode\Models\AcademicYear;

class AdmissionWaveController extends Controller
{
    /**
     * Display a listing of admission waves.
     */
    public function index(Request $request): Response
    {
        $institution = current_institution();

        $waves = AdmissionWave::forInstitution($institution->id)
            ->with('academicYear')
            ->withCount('candidates')
            ->latest()
            ->paginate(15);

        return Inertia::render('Lembaga/Admission/Waves/Index', [
            'waves' => $waves,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Show the form for creating a new admission wave.
     */
    public function create(): Response
    {
        $institution = current_institution();

        return Inertia::render('Lembaga/Admission/Waves/Create', [
            'institutionCode' => $institution->code,
            'academicYears' => AcademicYear::orderByDesc('start_date')->get(['id', 'name']),
        ]);
    }

    /**
     * Store a newly created admission wave.
     */
    public function store(StoreAdmissionWaveRequest $request): RedirectResponse
    {
        $institution = current_institution();

        AdmissionWave::create([
            ...$request->validated(),
            'institution_id' => $institution->id,
        ]);

        return redirect()
            ->route('admission-waves.index', ['institution' => $institution->code])
            ->with('success', 'Gelombang pendaftaran berhasil dibuat.');
    }

    /**
     * Display the specified admission wave.
     */
    public function show(AdmissionWave $admissionWave): Response
    {
        $institution = current_institution();

        $admissionWave->load(['academicYear', 'candidates' => function ($q) {
            $q->latest()->limit(10);
        }]);
        $admissionWave->loadCount('candidates');

        return Inertia::render('Lembaga/Admission/Waves/Show', [
            'wave' => $admissionWave,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Show the form for editing the specified admission wave.
     */
    public function edit(AdmissionWave $admissionWave): Response
    {
        $institution = current_institution();

        return Inertia::render('Lembaga/Admission/Waves/Edit', [
            'wave' => $admissionWave,
            'institutionCode' => $institution->code,
            'academicYears' => AcademicYear::orderByDesc('start_date')->get(['id', 'name']),
        ]);
    }

    /**
     * Update the specified admission wave.
     */
    public function update(UpdateAdmissionWaveRequest $request, AdmissionWave $admissionWave): RedirectResponse
    {
        $institution = current_institution();

        $admissionWave->update($request->validated());

        return redirect()
            ->route('admission-waves.index', ['institution' => $institution->code])
            ->with('success', 'Gelombang pendaftaran berhasil diperbarui.');
    }

    /**
     * Remove the specified admission wave.
     */
    public function destroy(AdmissionWave $admissionWave): RedirectResponse
    {
        $institution = current_institution();

        $admissionWave->delete();

        return redirect()
            ->route('admission-waves.index', ['institution' => $institution->code])
            ->with('success', 'Gelombang pendaftaran berhasil dihapus.');
    }
}
