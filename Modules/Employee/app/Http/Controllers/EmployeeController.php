<?php

namespace Modules\Employee\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use App\Enums\Gender;
use App\Enums\LastEducation;
use Modules\Employee\Enums\EmploymentStatus;
use Modules\Employee\Http\Requests\StoreEmployeeRequest;
use Modules\Employee\Http\Requests\UpdateEmployeeRequest;
use Modules\Employee\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of employees.
     */
    public function index(Request $request): Response
    {
        $institution = current_institution();

        $employees = Employee::forInstitution($institution->id)
            ->with(['assignments' => fn($q) => $q->where('institution_id', $institution->id)->active()])
            ->when($request->search, fn($q, $search) => $q->search($search))
            ->when($request->status, function ($q, $status) use ($institution) {
            $q->whereHas('assignments', function ($query) use ($status, $institution) {
                    $query->where('institution_id', $institution->id)
                        ->where('employment_status', $status);
                }
                );
            })
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Lembaga/Employee/Index', [
            'employees' => $employees,
            'filters' => $request->only(['search', 'status']),
            'employmentStatuses' => collect(EmploymentStatus::cases())
            ->map(fn($s) => ['value' => $s->value, 'label' => $s->label()]),
        ]);
    }

    /**
     * Show the form for creating a new employee.
     */
    public function create(): Response
    {
        return Inertia::render('Lembaga/Employee/Create', [
            'genders' => collect(Gender::cases())
            ->map(fn($g) => ['value' => $g->value, 'label' => $g->label()]),
            'educations' => collect(LastEducation::cases())
            ->map(fn($e) => ['value' => $e->value, 'label' => $e->label()]),
            'employmentStatuses' => collect(EmploymentStatus::cases())
            ->map(fn($s) => ['value' => $s->value, 'label' => $s->label()]),
        ]);
    }

    /**
     * Store a newly created employee.
     */
    public function store(StoreEmployeeRequest $request): RedirectResponse
    {
        $institution = current_institution();
        $validated = $request->validated();

        // Pisahkan data assignment dari data employee
        $assignmentData = [
            'institution_id' => $institution->id,
            'position' => $validated['position'],
            'employment_status' => $validated['employment_status'],
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'] ?? null,
            'is_active' => true,
            'basic_salary' => $validated['basic_salary'] ?? 0,
            'allowance_fixed' => $validated['allowance_fixed'] ?? 0,
        ];

        // Hapus field assignment dari data employee
        $employeeData = collect($validated)->except([
            'position', 'employment_status', 'start_date', 'end_date',
            'basic_salary', 'allowance_fixed',
        ])->toArray();

        $employee = Employee::create($employeeData);
        $employee->assignments()->create($assignmentData);

        return redirect()
            ->route('employee.index', ['institution' => $institution->code])
            ->with('success', 'Pegawai berhasil ditambahkan.');
    }

    /**
     * Display the specified employee.
     */
    public function show(Employee $employee): Response
    {
        $institution = current_institution();

        $employee->load([
            'assignments.institution:id,name,code',
            'documents',
            'user:id,name,email',
        ]);

        return Inertia::render('Lembaga/Employee/Show', [
            'employee' => $employee,
            'institutionCode' => $institution->code,
            'genders' => collect(Gender::cases())
            ->map(fn($g) => ['value' => $g->value, 'label' => $g->label()]),
            'educations' => collect(LastEducation::cases())
            ->map(fn($e) => ['value' => $e->value, 'label' => $e->label()]),
        ]);
    }

    /**
     * Show the form for editing the specified employee.
     */
    public function edit(Employee $employee): Response
    {
        $employee->load(['assignments', 'documents']);

        return Inertia::render('Lembaga/Employee/Edit', [
            'employee' => $employee,
            'genders' => collect(Gender::cases())
            ->map(fn($g) => ['value' => $g->value, 'label' => $g->label()]),
            'educations' => collect(LastEducation::cases())
            ->map(fn($e) => ['value' => $e->value, 'label' => $e->label()]),
            'employmentStatuses' => collect(EmploymentStatus::cases())
            ->map(fn($s) => ['value' => $s->value, 'label' => $s->label()]),
        ]);
    }

    /**
     * Update the specified employee.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee): RedirectResponse
    {
        $institution = current_institution();

        $employee->update($request->validated());

        return redirect()
            ->route('employee.show', [
            'institution' => $institution->code,
            'employee' => $employee->id,
        ])
            ->with('success', 'Data pegawai berhasil diperbarui.');
    }

    /**
     * Remove the specified employee (soft delete).
     */
    public function destroy(Employee $employee): RedirectResponse
    {
        $institution = current_institution();

        $employee->delete();

        return redirect()
            ->route('employee.index', ['institution' => $institution->code])
            ->with('success', 'Pegawai berhasil dihapus.');
    }
}
