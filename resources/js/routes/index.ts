import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '//app.daraltauhid.test/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '//app.daraltauhid.test/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '//app.daraltauhid.test/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '//app.daraltauhid.test/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '//app.daraltauhid.test/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '//app.daraltauhid.test/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '//app.daraltauhid.test/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '//app.daraltauhid.test/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
export const beranda = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: beranda.url(options),
    method: 'get',
})

beranda.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
beranda.url = (options?: RouteQueryOptions) => {
    return beranda.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
beranda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: beranda.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
beranda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: beranda.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
    const berandaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: beranda.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
        berandaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: beranda.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::beranda
 * @see app/Http/Controllers/Web/MISDTController.php:16
 * @route '//mis.daraltauhid.test/'
 */
        berandaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: beranda.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    beranda.form = berandaForm
/**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
export const profil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(options),
    method: 'get',
})

profil.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/profil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
profil.url = (options?: RouteQueryOptions) => {
    return profil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
profil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
profil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profil.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
    const profilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profil.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
        profilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::profil
 * @see app/Http/Controllers/Web/MISDTController.php:22
 * @route '//mis.daraltauhid.test/profil'
 */
        profilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profil.form = profilForm
/**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
export const program = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: program.url(options),
    method: 'get',
})

program.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/program',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
program.url = (options?: RouteQueryOptions) => {
    return program.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
program.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: program.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
program.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: program.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
    const programForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: program.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
        programForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: program.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::program
 * @see app/Http/Controllers/Web/MISDTController.php:27
 * @route '//mis.daraltauhid.test/program'
 */
        programForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: program.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    program.form = programForm
/**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
export const fasilitas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fasilitas.url(options),
    method: 'get',
})

fasilitas.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/fasilitas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
fasilitas.url = (options?: RouteQueryOptions) => {
    return fasilitas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
fasilitas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fasilitas.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
fasilitas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fasilitas.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
    const fasilitasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: fasilitas.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
        fasilitasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fasilitas.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::fasilitas
 * @see app/Http/Controllers/Web/MISDTController.php:32
 * @route '//mis.daraltauhid.test/fasilitas'
 */
        fasilitasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fasilitas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    fasilitas.form = fasilitasForm
/**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
export const ppdb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(options),
    method: 'get',
})

ppdb.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/ppdb',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
ppdb.url = (options?: RouteQueryOptions) => {
    return ppdb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
ppdb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
ppdb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ppdb.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
    const ppdbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ppdb.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
        ppdbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ppdb.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::ppdb
 * @see app/Http/Controllers/Web/MISDTController.php:37
 * @route '//mis.daraltauhid.test/ppdb'
 */
        ppdbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ppdb.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ppdb.form = ppdbForm
/**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
export const kontak = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontak.url(options),
    method: 'get',
})

kontak.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/kontak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
kontak.url = (options?: RouteQueryOptions) => {
    return kontak.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
kontak.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontak.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
kontak.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kontak.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
    const kontakForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kontak.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
        kontakForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontak.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::kontak
 * @see app/Http/Controllers/Web/MISDTController.php:42
 * @route '//mis.daraltauhid.test/kontak'
 */
        kontakForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontak.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kontak.form = kontakForm
/**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
export const bio = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bio.url(options),
    method: 'get',
})

bio.definition = {
    methods: ["get","head"],
    url: '//mis.daraltauhid.test/bio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
bio.url = (options?: RouteQueryOptions) => {
    return bio.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
bio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bio.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
bio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bio.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
    const bioForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: bio.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
        bioForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bio.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\MISDTController::bio
 * @see app/Http/Controllers/Web/MISDTController.php:47
 * @route '//mis.daraltauhid.test/bio'
 */
        bioForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bio.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    bio.form = bioForm