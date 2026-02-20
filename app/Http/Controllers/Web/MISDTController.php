<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MISDTController extends Controller
{
    public function __construct()
    {
        Inertia::setRootView('misdt');
    }
    public function beranda(): Response
    {
        // View components usually map directly to the location assuming resolvePageComponent handles it.
        return Inertia::render('beranda');
    }

    public function profil(): Response
    {
        return Inertia::render('profil');
    }

    public function program(): Response
    {
        return Inertia::render('program');
    }

    public function fasilitas(): Response
    {
        return Inertia::render('fasilitas');
    }

    public function ppdb(): Response
    {
        return Inertia::render('ppdb');
    }

    public function kontak(): Response
    {
        return Inertia::render('kontak');
    }

    public function bio(): Response
    {
        return Inertia::render('bio');
    }
}
