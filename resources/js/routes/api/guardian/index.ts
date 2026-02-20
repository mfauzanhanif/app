import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/guardians',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
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
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/guardians',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
export const show = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
show.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guardian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    guardian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        guardian: args.guardian,
                }

    return show.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
show.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
show.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
    const showForm = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
        showForm.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
        showForm.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
export const update = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
update.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guardian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    guardian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        guardian: args.guardian,
                }

    return update.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
update.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
update.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
    const updateForm = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
        updateForm.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
        updateForm.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
export const destroy = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
destroy.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guardian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    guardian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        guardian: args.guardian,
                }

    return destroy.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
destroy.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
    const destroyForm = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
        destroyForm.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const guardian = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default guardian