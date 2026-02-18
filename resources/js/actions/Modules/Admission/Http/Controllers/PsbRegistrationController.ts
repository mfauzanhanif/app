import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
export const landing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})

landing.definition = {
    methods: ["get","head"],
    url: '//psb.app.daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
landing.url = (options?: RouteQueryOptions) => {
    return landing.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
landing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
landing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: landing.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
    const landingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: landing.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
        landingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: landing.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::landing
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:27
 * @route '//psb.app.daraltauhid.test/'
 */
        landingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: landing.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    landing.form = landingForm
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
export const showForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})

showForm.definition = {
    methods: ["get","head"],
    url: '//psb.app.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
showForm.url = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wave: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { wave: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    wave: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        wave: typeof args.wave === 'object'
                ? args.wave.id
                : args.wave,
                }

    return showForm.definition.url
            .replace('{wave}', parsedArgs.wave.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
showForm.get = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
showForm.head = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showForm.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
    const showFormForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showForm.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
        showFormForm.get = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showForm.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::showForm
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:42
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
        showFormForm.head = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showForm.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showForm.form = showFormForm
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::register
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:58
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
export const register = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '//psb.app.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::register
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:58
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
register.url = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wave: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { wave: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    wave: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        wave: typeof args.wave === 'object'
                ? args.wave.id
                : args.wave,
                }

    return register.definition.url
            .replace('{wave}', parsedArgs.wave.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::register
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:58
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
register.post = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::register
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:58
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
    const registerForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::register
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:58
 * @route '//psb.app.daraltauhid.test/daftar/{wave}'
 */
        registerForm.post = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(args, options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
export const status = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '//psb.app.daraltauhid.test/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
status.url = (options?: RouteQueryOptions) => {
    return status.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
    const statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
        statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::status
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:133
 * @route '//psb.app.daraltauhid.test/status'
 */
        statusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    status.form = statusForm
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:181
 * @route '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
export const uploadProof = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

uploadProof.definition = {
    methods: ["post"],
    url: '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:181
 * @route '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
uploadProof.url = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { invoice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { invoice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    invoice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        invoice: typeof args.invoice === 'object'
                ? args.invoice.id
                : args.invoice,
                }

    return uploadProof.definition.url
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:181
 * @route '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
uploadProof.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:181
 * @route '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
    const uploadProofForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadProof.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:181
 * @route '//psb.app.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
        uploadProofForm.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadProof.url(args, options),
            method: 'post',
        })
    
    uploadProof.form = uploadProofForm
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
export const announcement = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: announcement.url(options),
    method: 'get',
})

announcement.definition = {
    methods: ["get","head"],
    url: '//psb.app.daraltauhid.test/pengumuman',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
announcement.url = (options?: RouteQueryOptions) => {
    return announcement.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
announcement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: announcement.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
announcement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: announcement.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
    const announcementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: announcement.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
        announcementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: announcement.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\PsbRegistrationController::announcement
 * @see Modules/Admission/app/Http/Controllers/PsbRegistrationController.php:155
 * @route '//psb.app.daraltauhid.test/pengumuman'
 */
        announcementForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: announcement.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    announcement.form = announcementForm
const PsbRegistrationController = { landing, showForm, register, status, uploadProof, announcement }

export default PsbRegistrationController