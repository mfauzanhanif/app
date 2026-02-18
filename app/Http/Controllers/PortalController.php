<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortalController extends Controller
{
    /**
     * Display the institution dashboard.
     * Route: /{institution}/dashboard
     */
    public function dashboard(): Response
    {
        $institution = current_institution();

        if ($institution && $institution->code === config('app.root_institution_code')) {
            return Inertia::render('yayasan/dashboard', [
                'institution' => $institution,
            ]);
        }

        return Inertia::render('lembaga/dashboard', [
            'institution' => $institution ? [
                'id' => $institution->id,
                'code' => $institution->code,
                'name' => $institution->name,
                'type' => $institution->type,
                'category' => $institution->category,
                'logo_path' => $institution->logo_path,
            ] : null,
        ]);
    }

    /**
     * Display the institution settings page.
     * Route: /{institution}/settings
     */
    public function settings(): Response
    {
        $institution = current_institution();

        return Inertia::render('lembaga/settings', [
            'institution' => $institution,
        ]);
    }
}
