import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::home
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:26
 * @route '//psb.daraltauhid.test/'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
export const showForm = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})

showForm.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
showForm.url = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
showForm.get = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showForm.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
showForm.head = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showForm.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
    const showFormForm = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showForm.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        showFormForm.get = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showForm.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::showForm
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        showFormForm.head = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:57
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
export const register = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:57
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
register.url = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:57
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
register.post = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:57
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
    const registerForm = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::register
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:57
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        registerForm.post = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(args, options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
 * @route '//psb.daraltauhid.test/status'
 */
status.url = (options?: RouteQueryOptions) => {
    return status.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
 * @route '//psb.daraltauhid.test/status'
 */
status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
 * @route '//psb.daraltauhid.test/status'
 */
status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
 * @route '//psb.daraltauhid.test/status'
 */
    const statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
 * @route '//psb.daraltauhid.test/status'
 */
        statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::status
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:137
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:148
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:148
 * @route '//psb.daraltauhid.test/status'
 */
statusLookup.url = (options?: RouteQueryOptions) => {
    return statusLookup.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:148
 * @route '//psb.daraltauhid.test/status'
 */
statusLookup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: statusLookup.url(options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:148
 * @route '//psb.daraltauhid.test/status'
 */
    const statusLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: statusLookup.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::statusLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:148
 * @route '//psb.daraltauhid.test/status'
 */
        statusLookupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: statusLookup.url(options),
            method: 'post',
        })
    
    statusLookup.form = statusLookupForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.url = (options?: RouteQueryOptions) => {
    return announcement.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: announcement.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: announcement.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
 * @route '//psb.daraltauhid.test/pengumuman'
 */
    const announcementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: announcement.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
 * @route '//psb.daraltauhid.test/pengumuman'
 */
        announcementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: announcement.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcement
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:175
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:186
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:186
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcementLookup.url = (options?: RouteQueryOptions) => {
    return announcementLookup.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:186
 * @route '//psb.daraltauhid.test/pengumuman'
 */
announcementLookup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: announcementLookup.url(options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:186
 * @route '//psb.daraltauhid.test/pengumuman'
 */
    const announcementLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: announcementLookup.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::announcementLookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:186
 * @route '//psb.daraltauhid.test/pengumuman'
 */
        announcementLookupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: announcementLookup.url(options),
            method: 'post',
        })
    
    announcementLookup.form = announcementLookupForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:217
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
export const uploadProof = (args: { invoice: string | number | { id: string | number } } | [invoice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

uploadProof.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/invoices/{invoice}/upload-proof',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:217
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
uploadProof.url = (args: { invoice: string | number | { id: string | number } } | [invoice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:217
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
uploadProof.post = (args: { invoice: string | number | { id: string | number } } | [invoice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProof.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:217
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
    const uploadProofForm = (args: { invoice: string | number | { id: string | number } } | [invoice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadProof.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::uploadProof
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:217
 * @route '//psb.daraltauhid.test/invoices/{invoice}/upload-proof'
 */
        uploadProofForm.post = (args: { invoice: string | number | { id: string | number } } | [invoice: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadProof.url(args, options),
            method: 'post',
        })
    
    uploadProof.form = uploadProofForm
const AdmissionController = { home, showForm, register, status, statusLookup, announcement, announcementLookup, uploadProof }

export default AdmissionController