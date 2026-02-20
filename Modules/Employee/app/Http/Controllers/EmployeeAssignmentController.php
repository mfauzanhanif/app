<?php

namespace Modules\Employee\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Employee\Enums\EmploymentStatus;
use Modules\Employee\Models\Employee;
use Modules\Employee\Models\EmployeeAssignment;

class EmployeeAssignmentController extends Controller
{
    /**
     * Store a new assignment for an employee.
     */
    public function store(Request $request, Employee $employee): RedirectResponse
    {
        $institution = current_institution();

        $validated = $request->validate([
            'institution_id' => 'required|exists:institutions,id',
            'position' => 'required|string|max:255',
            'employment_status' => 'required|in:' . implode(',', array_column(EmploymentStatus::cases(), 'value')),
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'basic_salary' => 'nullable|numeric|min:0',
            'allowance_fixed' => 'nullable|numeric|min:0',
        ]);

        $validated['is_active'] = true;
        $validated['basic_salary'] = $validated['basic_salary'] ?? 0;
        $validated['allowance_fixed'] = $validated['allowance_fixed'] ?? 0;

        $employee->assignments()->create($validated);

        return redirect()
            ->route('employee.show', [
            'institution' => $institution->code,
            'employee' => $employee->id,
        ])
            ->with('success', 'Penugasan berhasil ditambahkan.');
    }

    /**
     * Update the specified assignment.
     */
    public function update(Request $request, Employee $employee, EmployeeAssignment $assignment): RedirectResponse
    {
        $institution = current_institution();

        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'employment_status' => 'required|in:' . implode(',', array_column(EmploymentStatus::cases(), 'value')),
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'is_active' => 'required|boolean',
            'basic_salary' => 'nullable|numeric|min:0',
            'allowance_fixed' => 'nullable|numeric|min:0',
        ]);

        $assignment->update($validated);

        return redirect()
            ->route('employee.show', [
            'institution' => $institution->code,
            'employee' => $employee->id,
        ])
            ->with('success', 'Penugasan berhasil diperbarui.');
    }

    /**
     * Remove the specified assignment.
     */
    public function destroy(Employee $employee, EmployeeAssignment $assignment): RedirectResponse
    {
        $institution = current_institution();

        $assignment->delete();

        return redirect()
            ->route('employee.show', [
            'institution' => $institution->code,
            'employee' => $employee->id,
        ])
            ->with('success', 'Penugasan berhasil dihapus.');
    }
}
