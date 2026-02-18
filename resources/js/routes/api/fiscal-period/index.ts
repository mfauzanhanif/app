import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/fiscal-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '/api/v1/fiscal-periods'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/fiscal-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '/api/v1/fiscal-periods'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
export const show = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show.get = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
show.head = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const showForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        showForm.get = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
        showForm.head = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
export const update = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update.put = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
update.patch = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const updateForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
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
        updateForm.put = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
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
        updateForm.patch = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
export const destroy = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
destroy.url = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
destroy.delete = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '/api/v1/fiscal-periods/{fiscal_period}'
 */
    const destroyForm = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
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
        destroyForm.delete = (args: { fiscal_period: string | number } | [fiscal_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const fiscalPeriod = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default fiscalPeriod