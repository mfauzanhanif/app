import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
const indexfd7e2e0f2dfef0033c9c46712f7a8ec8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url(options),
    method: 'get',
})

indexfd7e2e0f2dfef0033c9c46712f7a8ec8.definition = {
    methods: ["get","head"],
    url: '/api/v1/admission/candidates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url = (options?: RouteQueryOptions) => {
    return indexfd7e2e0f2dfef0033c9c46712f7a8ec8.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
indexfd7e2e0f2dfef0033c9c46712f7a8ec8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
indexfd7e2e0f2dfef0033c9c46712f7a8ec8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
    const indexfd7e2e0f2dfef0033c9c46712f7a8ec8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
        indexfd7e2e0f2dfef0033c9c46712f7a8ec8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
        indexfd7e2e0f2dfef0033c9c46712f7a8ec8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexfd7e2e0f2dfef0033c9c46712f7a8ec8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexfd7e2e0f2dfef0033c9c46712f7a8ec8.form = indexfd7e2e0f2dfef0033c9c46712f7a8ec8Form
    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
const index6d39997dab489a460f58f9d32988a007 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6d39997dab489a460f58f9d32988a007.url(args, options),
    method: 'get',
})

index6d39997dab489a460f58f9d32988a007.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index6d39997dab489a460f58f9d32988a007.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index6d39997dab489a460f58f9d32988a007.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index6d39997dab489a460f58f9d32988a007.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6d39997dab489a460f58f9d32988a007.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
index6d39997dab489a460f58f9d32988a007.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6d39997dab489a460f58f9d32988a007.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
    const index6d39997dab489a460f58f9d32988a007Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6d39997dab489a460f58f9d32988a007.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
        index6d39997dab489a460f58f9d32988a007Form.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6d39997dab489a460f58f9d32988a007.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '//app.daraltauhid.test/{institution}/candidates'
 */
        index6d39997dab489a460f58f9d32988a007Form.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6d39997dab489a460f58f9d32988a007.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6d39997dab489a460f58f9d32988a007.form = index6d39997dab489a460f58f9d32988a007Form

export const index = {
    '/api/v1/admission/candidates': indexfd7e2e0f2dfef0033c9c46712f7a8ec8,
    '//app.daraltauhid.test/{institution}/candidates': index6d39997dab489a460f58f9d32988a007,
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
const show84a226803f5cdad7e1e217b182e77931 = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show84a226803f5cdad7e1e217b182e77931.url(args, options),
    method: 'get',
})

show84a226803f5cdad7e1e217b182e77931.definition = {
    methods: ["get","head"],
    url: '/api/v1/admission/candidates/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show84a226803f5cdad7e1e217b182e77931.url = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show84a226803f5cdad7e1e217b182e77931.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show84a226803f5cdad7e1e217b182e77931.get = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show84a226803f5cdad7e1e217b182e77931.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show84a226803f5cdad7e1e217b182e77931.head = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show84a226803f5cdad7e1e217b182e77931.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
    const show84a226803f5cdad7e1e217b182e77931Form = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show84a226803f5cdad7e1e217b182e77931.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
        show84a226803f5cdad7e1e217b182e77931Form.get = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show84a226803f5cdad7e1e217b182e77931.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '/api/v1/admission/candidates/{candidate}'
 */
        show84a226803f5cdad7e1e217b182e77931Form.head = (args: { candidate: string | number | { id: string | number } } | [candidate: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show84a226803f5cdad7e1e217b182e77931.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show84a226803f5cdad7e1e217b182e77931.form = show84a226803f5cdad7e1e217b182e77931Form
    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
const show5e16edc6cf4761bccb4ba7b4c85732f6 = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, options),
    method: 'get',
})

show5e16edc6cf4761bccb4ba7b4c85732f6.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show5e16edc6cf4761bccb4ba7b4c85732f6.url = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return show5e16edc6cf4761bccb4ba7b4c85732f6.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show5e16edc6cf4761bccb4ba7b4c85732f6.get = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
show5e16edc6cf4761bccb4ba7b4c85732f6.head = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
    const show5e16edc6cf4761bccb4ba7b4c85732f6Form = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
        show5e16edc6cf4761bccb4ba7b4c85732f6Form.get = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:58
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}'
 */
        show5e16edc6cf4761bccb4ba7b4c85732f6Form.head = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show5e16edc6cf4761bccb4ba7b4c85732f6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show5e16edc6cf4761bccb4ba7b4c85732f6.form = show5e16edc6cf4761bccb4ba7b4c85732f6Form

export const show = {
    '/api/v1/admission/candidates/{candidate}': show84a226803f5cdad7e1e217b182e77931,
    '//app.daraltauhid.test/{institution}/candidates/{candidate}': show5e16edc6cf4761bccb4ba7b4c85732f6,
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
export const updateStatus = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
updateStatus.url = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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
updateStatus.put = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateStatus.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::updateStatus
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:82
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/status'
 */
    const updateStatusForm = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
        updateStatusForm.put = (args: { institution: string | number, candidate: string | number | { id: string | number } } | [institution: string | number, candidate: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const verifyDocument = (args: { institution: string | number, candidate: string | number | { id: string | number }, document: string | number } | [institution: string | number, candidate: string | number | { id: string | number }, document: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
verifyDocument.url = (args: { institution: string | number, candidate: string | number | { id: string | number }, document: string | number } | [institution: string | number, candidate: string | number | { id: string | number }, document: string | number ], options?: RouteQueryOptions) => {
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
verifyDocument.put = (args: { institution: string | number, candidate: string | number | { id: string | number }, document: string | number } | [institution: string | number, candidate: string | number | { id: string | number }, document: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: verifyDocument.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::verifyDocument
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:120
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/documents/{document}/verify'
 */
    const verifyDocumentForm = (args: { institution: string | number, candidate: string | number | { id: string | number }, document: string | number } | [institution: string | number, candidate: string | number | { id: string | number }, document: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
        verifyDocumentForm.put = (args: { institution: string | number, candidate: string | number | { id: string | number }, document: string | number } | [institution: string | number, candidate: string | number | { id: string | number }, document: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verifyDocument.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    verifyDocument.form = verifyDocumentForm
const CandidateController = { index, show, updateStatus, verifyDocument }

export default CandidateController