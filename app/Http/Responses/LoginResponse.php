<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Illuminate\Support\Facades\Auth;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $user = Auth::user();

        // Check if the user is a guardian/wali.
        // Assuming the logic is based on having roles or students.
        // Since we can check students count or specific role, let's look at how LoginController checks it.
        // $user->getStudents() is available. But if a user is both PTK and Wali, we might need a distinct check.
        // For now, if the user has students and no institutions (unless global admin), redirect to student selection.

        $institutions = tap(collect(), function (&$coll) use ($user) {
            if (method_exists($user, 'getInstitutions')) {
                $coll = $user->getInstitutions();
            }
        });

        $students = tap(collect(), function (&$coll) use ($user) {
            if (method_exists($user, 'getStudents')) {
                $coll = $user->getStudents();
            }
        });

        $isGlobalAdmin = method_exists($user, 'isGlobalAdmin') ? $user->isGlobalAdmin() : false;

        // If user is a Wali (has students) and doesn't belong to any institution, go to select student
        if ($students->count() > 0 && $institutions->isEmpty() && !$isGlobalAdmin) {
            return redirect()->intended('/select-student');
        }

        // Default: redirect staff/admin/teachers to select institution
        return redirect()->intended('/select-institution');
    }
}
