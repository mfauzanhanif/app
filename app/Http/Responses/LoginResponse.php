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

        $institutions = method_exists($user, 'getInstitutions')
            ? $user->getInstitutions()
            : collect();

        $students = method_exists($user, 'getStudents')
            ? $user->getStudents()
            : collect();

        $isGlobalAdmin = method_exists($user, 'isGlobalAdmin') ? $user->isGlobalAdmin() : false;

        // If user is a Wali (has students) and doesn't belong to any institution, go to select student
        if ($students->count() > 0 && $institutions->isEmpty() && !$isGlobalAdmin) {
            return redirect()->intended('/select-student');
        }

        // Default: redirect staff/admin/teachers to select institution
        return redirect()->intended('/select-institution');
    }
}
