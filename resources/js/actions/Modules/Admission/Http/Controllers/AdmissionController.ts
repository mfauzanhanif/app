import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
export const landing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})

landing.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
landing.url = (options?: RouteQueryOptions) => {
    return landing.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
landing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
landing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: landing.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
    const landingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: landing.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
 */
        landingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: landing.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::landing
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:27
 * @route '//psb.daraltauhid.test/'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
export const showForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})

showForm.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
showForm.get = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
showForm.head = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showForm.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
    const showFormForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showForm.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        showFormForm.get = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showForm.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:42
 * @route '//psb.daraltauhid.test/daftar/{wave}'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:58
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
export const register = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:58
 * @route '//psb.daraltauhid.test/daftar/{wave}'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:58
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
register.post = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:58
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
    const registerForm = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:58
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        registerForm.post = (args: { wave: number | { id: number } } | [wave: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(args, options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
export const status = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
status.url = (options?: RouteQueryOptions) => {
    return status.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
    const statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
 */
        statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:133
 * @route '//psb.daraltauhid.test/status'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
export const statusLookup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: statusLookup.url(options),
    method: 'post',
})

statusLookup.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/status',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
statusLookup.url = (options?: RouteQueryOptions) => {
    return statusLookup.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
statusLookup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: statusLookup.url(options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
    const statusLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: statusLookup.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
        statusLookupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: statusLookup.url(options),
            method: 'post',
        })
    
    statusLookup.form = statusLookupForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
export const announcement = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: announcement.url(options),
    method: 'get',
})

announcement.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/pengumuman',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.url = (options?: RouteQueryOptions) => {
    return announcement.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: announcement.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: announcement.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
    const announcementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: announcement.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
 */
        announcementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: announcement.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:155
 * @route '//psb.daraltauhid.test/pengumuman'
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
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/pengumuman'
 */
export const announcementLookup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: announcementLookup.url(options),
    method: 'post',
})

announcementLookup.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/pengumuman',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcementLookup.url = (options?: RouteQueryOptions) => {
    return announcementLookup.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcementLookup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: announcementLookup.url(options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/pengumuman'
 */
    const announcementLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: announcementLookup.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/pengumuman'
 */
        announcementLookupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: announcementLookup.url(options),
            method: 'post',
        })
    
    announcementLookup.form = announcementLookupForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:181
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
export const uploadProof = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

uploadProof.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/invoices/{invoice}/upload-proof',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:181
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:181
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
uploadProof.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:181
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
    const uploadProofForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadProof.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:181
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
        uploadProofForm.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadProof.url(args, options),
            method: 'post',
        })
    
    uploadProof.form = uploadProofForm
const AdmissionController = { landing, showForm, register, status, statusLookup, announcement, announcementLookup, uploadProof }

export default AdmissionController