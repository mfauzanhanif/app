import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { institution: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                }

    return index.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
        indexForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
export const show = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
    const showForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
        showForm.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
        showForm.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
export const updateStatus = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateStatus.url(args, options),
    method: 'put',
})

updateStatus.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
updateStatus.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return updateStatus.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
updateStatus.put = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateStatus.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
    const updateStatusForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateStatus.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
        updateStatusForm.put = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateStatus.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateStatus.form = updateStatusForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
export const verifyDocument = (args: { institution: string | number, candidate: number | { id: number }, document: string | number } | [institution: string | number, candidate: number | { id: number }, document: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: verifyDocument.url(args, options),
    method: 'put',
})

verifyDocument.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
verifyDocument.url = (args: { institution: string | number, candidate: number | { id: number }, document: string | number } | [institution: string | number, candidate: number | { id: number }, document: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                    document: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                                document: args.document,
                }

    return verifyDocument.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
verifyDocument.put = (args: { institution: string | number, candidate: number | { id: number }, document: string | number } | [institution: string | number, candidate: number | { id: number }, document: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: verifyDocument.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
    const verifyDocumentForm = (args: { institution: string | number, candidate: number | { id: number }, document: string | number } | [institution: string | number, candidate: number | { id: number }, document: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verifyDocument.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
        verifyDocumentForm.put = (args: { institution: string | number, candidate: number | { id: number }, document: string | number } | [institution: string | number, candidate: number | { id: number }, document: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verifyDocument.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    verifyDocument.form = verifyDocumentForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
export const certificate = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificate.url(args, options),
    method: 'get',
})

certificate.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
certificate.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return certificate.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
certificate.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificate.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
certificate.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certificate.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
    const certificateForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certificate.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
        certificateForm.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificate.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::certificate
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
        certificateForm.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certificate.form = certificateForm
const candidates = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
updateStatus: Object.assign(updateStatus, updateStatus),
verifyDocument: Object.assign(verifyDocument, verifyDocument),
certificate: Object.assign(certificate, certificate),
}

export default candidates