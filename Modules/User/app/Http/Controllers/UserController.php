<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\User\Models\User;
use Modules\User\Models\Role;
use Modules\Institution\Models\Institution;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of users for the current institution.
     */
    public function index(Request $request): Response
    {
        $institution = current_institution();

        // Get users who have roles in this institution
        $users = User::whereHas('roles', function ($query) use ($institution) {
            $query->where('institution_id', $institution->id);
        })
            ->with(['roles' => function ($query) use ($institution) {
                $query->where('institution_id', $institution->id);
            }])
            ->orderBy('name')
            ->get();

        return Inertia::render('Lembaga/User/Index', [
            'users' => $users,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Show the form for creating a new user.
     */
    public function create(): Response
    {
        $institution = current_institution();

        $roles = Role::where('institution_id', $institution->id)
            ->orderBy('name')
            ->get(['id', 'name']);

        return Inertia::render('Lembaga/User/Create', [
            'roles' => $roles,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Store a newly created user in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $institution = current_institution();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'phone_number' => ['nullable', 'string', 'max:20'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'roles' => ['required', 'array', 'min:1'],
            'roles.*' => ['exists:roles,id'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'] ?? null,
            'password' => Hash::make($validated['password']),
        ]);

        // Assign selected roles (must belong to this institution)
        $roles = Role::where('institution_id', $institution->id)
            ->whereIn('id', $validated['roles'])
            ->get();

        foreach ($roles as $role) {
            $user->assignRole($role);
        }

        return redirect()
            ->route('institution.users.index')
            ->with('success', 'User berhasil ditambahkan.');
    }

    /**
     * Display the specified user.
     */
    public function show(User $user): Response
    {
        $institution = current_institution();

        $user->load(['roles' => function ($query) use ($institution) {
            $query->where('institution_id', $institution->id);
        }]);

        return Inertia::render('Lembaga/User/Show', [
            'user' => $user,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Show the form for editing the specified user.
     */
    public function edit(User $user): Response
    {
        $institution = current_institution();

        $user->load(['roles' => function ($query) use ($institution) {
            $query->where('institution_id', $institution->id);
        }]);

        $roles = Role::where('institution_id', $institution->id)
            ->orderBy('name')
            ->get(['id', 'name']);

        return Inertia::render('Lembaga/User/Edit', [
            'user' => $user,
            'roles' => $roles,
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Update the specified user in storage.
     */
    public function update(Request $request, User $user): RedirectResponse
    {
        $institution = current_institution();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'phone_number' => ['nullable', 'string', 'max:20'],
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            'roles' => ['required', 'array', 'min:1'],
            'roles.*' => ['exists:roles,id'],
        ]);

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'] ?? null,
        ]);

        // Update password only if provided
        if (! empty($validated['password'])) {
            $user->update([
                'password' => Hash::make($validated['password']),
            ]);
        }

        // Sync roles for this institution only
        $currentInstitutionRoleIds = $user->roles()
            ->where('institution_id', $institution->id)
            ->pluck('id')
            ->toArray();

        // Remove old institution roles
        $user->roles()->detach($currentInstitutionRoleIds);

        // Assign new institution roles
        $newRoles = Role::where('institution_id', $institution->id)
            ->whereIn('id', $validated['roles'])
            ->get();

        foreach ($newRoles as $role) {
            $user->assignRole($role);
        }

        return redirect()
            ->route('institution.users.index')
            ->with('success', 'User berhasil diperbarui.');
    }

    /**
     * Remove the specified user from storage.
     * Note: This only removes the user's roles in the current institution,
     * not the user account itself (soft-delete only if no roles remain).
     */
    public function destroy(User $user): RedirectResponse
    {
        $institution = current_institution();

        // Remove roles for this institution only
        $institutionRoles = $user->roles()
            ->where('institution_id', $institution->id)
            ->get();

        foreach ($institutionRoles as $role) {
            $user->removeRole($role);
        }

        // If user has no roles remaining in any institution, soft-delete the account
        if ($user->roles()->count() === 0) {
            $user->delete();
        }

        return redirect()
            ->route('institution.users.index')
            ->with('success', 'User berhasil dihapus dari lembaga ini.');
    }
}
