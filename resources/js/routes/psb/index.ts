import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import status14a815 from './status'
import announcementBe194f from './announcement'
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
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
export const form = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(args, options),
    method: 'get',
})

form.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/daftar/{wave}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
form.url = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return form.definition.url
            .replace('{wave}', parsedArgs.wave.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
form.get = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
form.head = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: form.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
    const formForm = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: form.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        formForm.get = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: form.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::form
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:41
 * @route '//psb.daraltauhid.test/daftar/{wave}'
 */
        formForm.head = (args: { wave: string | number | { id: string | number } } | [wave: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: form.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    form.form = formForm
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
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
export const certificate = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificate.url(args, options),
    method: 'get',
})

certificate.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/sertifikat/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
certificate.url = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { candidate: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    candidate: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return certificate.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
certificate.get = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificate.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
certificate.head = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certificate.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
    const certificateForm = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certificate.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
        certificateForm.get = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificate.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
        certificateForm.head = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certificate.form = certificateForm
const psb = {
    home: Object.assign(home, home),
form: Object.assign(form, form),
register: Object.assign(register, register),
status: Object.assign(status, status14a815),
announcement: Object.assign(announcement, announcementBe194f),
uploadProof: Object.assign(uploadProof, uploadProof),
certificate: Object.assign(certificate, certificate),
}

export default psb