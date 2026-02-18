<?php

namespace Modules\Admission\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetCurrentInstitution;
use App\Http\Middleware\CheckInstitutionAccess;

class RouteServiceProvider extends ServiceProvider
{
    protected string $name = 'Admission';

    /**
     * Called before routes are registered.
     *
     * Register any model bindings or pattern based filters.
     */
    public function boot(): void
    {
        parent::boot();
    }

    /**
     * Define the routes for the application.
     */
    public function map(): void
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes are institution-scoped (admin panel),
     * matching the same pattern as Institution module.
     */
    protected function mapWebRoutes(): void
    {
        Route::middleware([
            'web',
            'auth:sanctum',
            'verified',
            SetCurrentInstitution::class,
            CheckInstitutionAccess::class,
        ])
            ->domain(env('APP_DOMAIN'))
            ->prefix('{institution}')
            ->where(['institution' => '(?!select-|switch-|wali|logout|login|register|forgot-password|reset-password|verify-email|confirm-password|settings)[A-Za-z0-9_-]+$'])
            ->group(module_path($this->name, '/routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     */
    protected function mapApiRoutes(): void
    {
        Route::middleware('api')->prefix('api')->name('api.')->group(module_path($this->name, '/routes/api.php'));
    }
}
