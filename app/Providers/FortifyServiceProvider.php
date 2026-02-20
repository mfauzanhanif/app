<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Modules\User\Models\User;
use Laravel\Fortify\Fortify;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use App\Http\Responses\LoginResponse;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(
            LoginResponseContract::class,
            LoginResponse::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Mendefinisikan Tampilan (View) untuk halaman Login
        Fortify::loginView(function () {
            // Sesuaikan dengan letak dan nama komponen React/Inertia Anda untuk halaman login
            return Inertia::render('auth/login');
        });

        // Kustomisasi logika Autentikasi (Bisa menggunakan 'email' ATAU 'username'/'nipy')
        Fortify::authenticateUsing(function (Request $request) {
            $identifier = $request->input(config('fortify.username')); // field 'username' atau 'email' dari form
            $password = $request->input('password');

            $user = User::where('email', $identifier)
                ->orWhere('username', $identifier)
                ->first();

            // 1. Jika User (Username atau Email) tidak ditemukan di database
            if (! $user) {
                throw ValidationException::withMessages([
                    config('fortify.username') => ['Akun dengan Email atau Username tersebut tidak ditemukan.'],
                ]);
            }

            // 2. Jika Password Salah
            if (! Hash::check($password, $user->password)) {
                throw ValidationException::withMessages([
                    'password' => ['Password yang Anda masukkan salah.'],
                ]);
            }

            // 3. Jika Akun dinonaktifkan
            if (! $user->is_active) {
                throw ValidationException::withMessages([
                    config('fortify.username') => ['Akun Anda sedang dinonaktifkan. Silakan hubungi Administrator.'],
                ]);
            }

            // Jika semua lolos, kembalikan data user untuk di-login-kan
            return $user;
        });

        // Config tambahan yang standar untuk limit login
        RateLimiter::for('login', function (Request $request) {
            $email = (string) $request->identifier ?? (string) $request->email;
            return Limit::perMinute(5)->by($email . $request->ip());
        });
    }
}
