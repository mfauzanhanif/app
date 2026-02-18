import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
const index0cab33d6c4aac6d209632022abf28934 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0cab33d6c4aac6d209632022abf28934.url(args, options),
    method: 'get',
})

index0cab33d6c4aac6d209632022abf28934.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
index0cab33d6c4aac6d209632022abf28934.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index0cab33d6c4aac6d209632022abf28934.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
index0cab33d6c4aac6d209632022abf28934.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0cab33d6c4aac6d209632022abf28934.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
index0cab33d6c4aac6d209632022abf28934.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0cab33d6c4aac6d209632022abf28934.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
    const index0cab33d6c4aac6d209632022abf28934Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index0cab33d6c4aac6d209632022abf28934.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
        index0cab33d6c4aac6d209632022abf28934Form.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0cab33d6c4aac6d209632022abf28934.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
        index0cab33d6c4aac6d209632022abf28934Form.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0cab33d6c4aac6d209632022abf28934.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index0cab33d6c4aac6d209632022abf28934.form = index0cab33d6c4aac6d209632022abf28934Form
    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
const index0113faef69ba4db4892d9c8a75d76b16 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0113faef69ba4db4892d9c8a75d76b16.url(options),
    method: 'get',
})

index0113faef69ba4db4892d9c8a75d76b16.definition = {
    methods: ["get","head"],
    url: '/api/v1/fiscal-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index0113faef69ba4db4892d9c8a75d76b16.url = (options?: RouteQueryOptions) => {
    return index0113faef69ba4db4892d9c8a75d76b16.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index0113faef69ba4db4892d9c8a75d76b16.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0113faef69ba4db4892d9c8a75d76b16.url(options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index0113faef69ba4db4892d9c8a75d76b16.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0113faef69ba4db4892d9c8a75d76b16.url(options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
    const index0113faef69ba4db4892d9c8a75d76b16Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index0113faef69ba4db4892d9c8a75d76b16.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
        index0113faef69ba4db4892d9c8a75d76b16Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0113faef69ba4db4892d9c8a75d76b16.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
        index0113faef69ba4db4892d9c8a75d76b16Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index0113faef69ba4db4892d9c8a75d76b16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index0113faef69ba4db4892d9c8a75d76b16.form = index0113faef69ba4db4892d9c8a75d76b16Form

export const index = {
    '//app.daraltauhid.test/{institution}/fiscal-periods': index0cab33d6c4aac6d209632022abf28934,
    '/api/v1/fiscal-periods': index0113faef69ba4db4892d9c8a75d76b16,
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
create.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:29
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/create'
 */
        createForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
const store0cab33d6c4aac6d209632022abf28934 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0cab33d6c4aac6d209632022abf28934.url(args, options),
    method: 'post',
})

store0cab33d6c4aac6d209632022abf28934.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
store0cab33d6c4aac6d209632022abf28934.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store0cab33d6c4aac6d209632022abf28934.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
store0cab33d6c4aac6d209632022abf28934.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0cab33d6c4aac6d209632022abf28934.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
    const store0cab33d6c4aac6d209632022abf28934Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store0cab33d6c4aac6d209632022abf28934.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
        store0cab33d6c4aac6d209632022abf28934Form.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store0cab33d6c4aac6d209632022abf28934.url(args, options),
            method: 'post',
        })
    
    store0cab33d6c4aac6d209632022abf28934.form = store0cab33d6c4aac6d209632022abf28934Form
    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
const store0113faef69ba4db4892d9c8a75d76b16 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0113faef69ba4db4892d9c8a75d76b16.url(options),
    method: 'post',
})

store0113faef69ba4db4892d9c8a75d76b16.definition = {
    methods: ["post"],
    url: '/api/v1/fiscal-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
store0113faef69ba4db4892d9c8a75d76b16.url = (options?: RouteQueryOptions) => {
    return store0113faef69ba4db4892d9c8a75d76b16.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
store0113faef69ba4db4892d9c8a75d76b16.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0113faef69ba4db4892d9c8a75d76b16.url(options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
    const store0113faef69ba4db4892d9c8a75d76b16Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store0113faef69ba4db4892d9c8a75d76b16.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
        store0113faef69ba4db4892d9c8a75d76b16Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store0113faef69ba4db4892d9c8a75d76b16.url(options),
            method: 'post',
        })
    
    store0113faef69ba4db4892d9c8a75d76b16.form = store0113faef69ba4db4892d9c8a75d76b16Form

export const store = {
    '//app.daraltauhid.test/{institution}/fiscal-periods': store0cab33d6c4aac6d209632022abf28934,
    '/api/v1/fiscal-periods': store0113faef69ba4db4892d9c8a75d76b16,
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
const showb313f70d0bf92d0de01070ec753bf37e = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'get',
})

showb313f70d0bf92d0de01070ec753bf37e.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
showb313f70d0bf92d0de01070ec753bf37e.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    fiscal_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                fiscal_period: args.fiscal_period,
                }

    return showb313f70d0bf92d0de01070ec753bf37e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
showb313f70d0bf92d0de01070ec753bf37e.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
showb313f70d0bf92d0de01070ec753bf37e.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const showb313f70d0bf92d0de01070ec753bf37eForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showb313f70d0bf92d0de01070ec753bf37e.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        showb313f70d0bf92d0de01070ec753bf37eForm.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb313f70d0bf92d0de01070ec753bf37e.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        showb313f70d0bf92d0de01070ec753bf37eForm.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb313f70d0bf92d0de01070ec753bf37e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showb313f70d0bf92d0de01070ec753bf37e.form = showb313f70d0bf92d0de01070ec753bf37eForm
    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
const show2dc799d71cbd794b45a4818d035464ec = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'get',
})

show2dc799d71cbd794b45a4818d035464ec.definition = {
    methods: ["get","head"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show2dc799d71cbd794b45a4818d035464ec.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiscal_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fiscal_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiscal_period: args.fiscal_period,
                }

    return show2dc799d71cbd794b45a4818d035464ec.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show2dc799d71cbd794b45a4818d035464ec.get = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show2dc799d71cbd794b45a4818d035464ec.head = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const show2dc799d71cbd794b45a4818d035464ecForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show2dc799d71cbd794b45a4818d035464ec.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        show2dc799d71cbd794b45a4818d035464ecForm.get = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2dc799d71cbd794b45a4818d035464ec.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        show2dc799d71cbd794b45a4818d035464ecForm.head = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2dc799d71cbd794b45a4818d035464ec.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show2dc799d71cbd794b45a4818d035464ec.form = show2dc799d71cbd794b45a4818d035464ecForm

export const show = {
    '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}': showb313f70d0bf92d0de01070ec753bf37e,
    '/api/v1/fiscal-periods/{fiscal_period}': show2dc799d71cbd794b45a4818d035464ec,
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
export const edit = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
edit.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    fiscal_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                fiscal_period: args.fiscal_period,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
edit.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
edit.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
    const editForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
        editForm.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:63
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}/edit'
 */
        editForm.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
const updateb313f70d0bf92d0de01070ec753bf37e = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'put',
})

updateb313f70d0bf92d0de01070ec753bf37e.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
updateb313f70d0bf92d0de01070ec753bf37e.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    fiscal_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                fiscal_period: args.fiscal_period,
                }

    return updateb313f70d0bf92d0de01070ec753bf37e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
updateb313f70d0bf92d0de01070ec753bf37e.put = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
updateb313f70d0bf92d0de01070ec753bf37e.patch = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const updateb313f70d0bf92d0de01070ec753bf37eForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateb313f70d0bf92d0de01070ec753bf37e.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        updateb313f70d0bf92d0de01070ec753bf37eForm.put = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb313f70d0bf92d0de01070ec753bf37e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        updateb313f70d0bf92d0de01070ec753bf37eForm.patch = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb313f70d0bf92d0de01070ec753bf37e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateb313f70d0bf92d0de01070ec753bf37e.form = updateb313f70d0bf92d0de01070ec753bf37eForm
    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
const update2dc799d71cbd794b45a4818d035464ec = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'put',
})

update2dc799d71cbd794b45a4818d035464ec.definition = {
    methods: ["put","patch"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update2dc799d71cbd794b45a4818d035464ec.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiscal_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fiscal_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiscal_period: args.fiscal_period,
                }

    return update2dc799d71cbd794b45a4818d035464ec.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update2dc799d71cbd794b45a4818d035464ec.put = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update2dc799d71cbd794b45a4818d035464ec.patch = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const update2dc799d71cbd794b45a4818d035464ecForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update2dc799d71cbd794b45a4818d035464ec.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        update2dc799d71cbd794b45a4818d035464ecForm.put = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update2dc799d71cbd794b45a4818d035464ec.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        update2dc799d71cbd794b45a4818d035464ecForm.patch = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update2dc799d71cbd794b45a4818d035464ec.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update2dc799d71cbd794b45a4818d035464ec.form = update2dc799d71cbd794b45a4818d035464ecForm

export const update = {
    '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}': updateb313f70d0bf92d0de01070ec753bf37e,
    '/api/v1/fiscal-periods/{fiscal_period}': update2dc799d71cbd794b45a4818d035464ec,
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
const destroyb313f70d0bf92d0de01070ec753bf37e = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'delete',
})

destroyb313f70d0bf92d0de01070ec753bf37e.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
destroyb313f70d0bf92d0de01070ec753bf37e.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    fiscal_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                fiscal_period: args.fiscal_period,
                }

    return destroyb313f70d0bf92d0de01070ec753bf37e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
destroyb313f70d0bf92d0de01070ec753bf37e.delete = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb313f70d0bf92d0de01070ec753bf37e.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const destroyb313f70d0bf92d0de01070ec753bf37eForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyb313f70d0bf92d0de01070ec753bf37e.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        destroyb313f70d0bf92d0de01070ec753bf37eForm.delete = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyb313f70d0bf92d0de01070ec753bf37e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyb313f70d0bf92d0de01070ec753bf37e.form = destroyb313f70d0bf92d0de01070ec753bf37eForm
    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
const destroy2dc799d71cbd794b45a4818d035464ec = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'delete',
})

destroy2dc799d71cbd794b45a4818d035464ec.definition = {
    methods: ["delete"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
destroy2dc799d71cbd794b45a4818d035464ec.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fiscal_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fiscal_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fiscal_period: args.fiscal_period,
                }

    return destroy2dc799d71cbd794b45a4818d035464ec.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
destroy2dc799d71cbd794b45a4818d035464ec.delete = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2dc799d71cbd794b45a4818d035464ec.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const destroy2dc799d71cbd794b45a4818d035464ecForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy2dc799d71cbd794b45a4818d035464ec.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        destroy2dc799d71cbd794b45a4818d035464ecForm.delete = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy2dc799d71cbd794b45a4818d035464ec.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy2dc799d71cbd794b45a4818d035464ec.form = destroy2dc799d71cbd794b45a4818d035464ecForm

export const destroy = {
    '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}': destroyb313f70d0bf92d0de01070ec753bf37e,
    '/api/v1/fiscal-periods/{fiscal_period}': destroy2dc799d71cbd794b45a4818d035464ec,
}

const FiscalPeriodController = { index, create, store, show, edit, update, destroy }

export default FiscalPeriodController