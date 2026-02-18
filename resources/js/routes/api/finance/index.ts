import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/finances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
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
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/finances',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
export const show = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
show.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    finance: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        finance: args.finance,
                }

    return show.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
show.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
show.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
    const showForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
        showForm.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
        showForm.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
export const update = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
update.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    finance: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        finance: args.finance,
                }

    return update.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
update.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
update.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
    const updateForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
        updateForm.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
        updateForm.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
export const destroy = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
destroy.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    finance: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        finance: args.finance,
                }

    return destroy.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
destroy.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
    const destroyForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
        destroyForm.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const finance = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default finance