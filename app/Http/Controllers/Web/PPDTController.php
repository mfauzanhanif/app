<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PPDTController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('home');
    }
}
