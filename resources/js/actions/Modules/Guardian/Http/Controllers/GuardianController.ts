import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
const indexbe255272a506459c9a9310be345eafd0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbe255272a506459c9a9310be345eafd0.url(options),
    method: 'get',
})

indexbe255272a506459c9a9310be345eafd0.definition = {
    methods: ["get","head"],
    url: '/api/v1/guardians',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
indexbe255272a506459c9a9310be345eafd0.url = (options?: RouteQueryOptions) => {
    return indexbe255272a506459c9a9310be345eafd0.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
indexbe255272a506459c9a9310be345eafd0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbe255272a506459c9a9310be345eafd0.url(options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
indexbe255272a506459c9a9310be345eafd0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbe255272a506459c9a9310be345eafd0.url(options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
    const indexbe255272a506459c9a9310be345eafd0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexbe255272a506459c9a9310be345eafd0.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
        indexbe255272a506459c9a9310be345eafd0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbe255272a506459c9a9310be345eafd0.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/api/v1/guardians'
 */
        indexbe255272a506459c9a9310be345eafd0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbe255272a506459c9a9310be345eafd0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexbe255272a506459c9a9310be345eafd0.form = indexbe255272a506459c9a9310be345eafd0Form
    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
const indexaf12d269e61023f92e07d62ffe9ad113 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaf12d269e61023f92e07d62ffe9ad113.url(options),
    method: 'get',
})

indexaf12d269e61023f92e07d62ffe9ad113.definition = {
    methods: ["get","head"],
    url: '/guardians',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
indexaf12d269e61023f92e07d62ffe9ad113.url = (options?: RouteQueryOptions) => {
    return indexaf12d269e61023f92e07d62ffe9ad113.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
indexaf12d269e61023f92e07d62ffe9ad113.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaf12d269e61023f92e07d62ffe9ad113.url(options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
indexaf12d269e61023f92e07d62ffe9ad113.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexaf12d269e61023f92e07d62ffe9ad113.url(options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
    const indexaf12d269e61023f92e07d62ffe9ad113Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexaf12d269e61023f92e07d62ffe9ad113.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
        indexaf12d269e61023f92e07d62ffe9ad113Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexaf12d269e61023f92e07d62ffe9ad113.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::index
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:13
 * @route '/guardians'
 */
        indexaf12d269e61023f92e07d62ffe9ad113Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexaf12d269e61023f92e07d62ffe9ad113.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexaf12d269e61023f92e07d62ffe9ad113.form = indexaf12d269e61023f92e07d62ffe9ad113Form

export const index = {
    '/api/v1/guardians': indexbe255272a506459c9a9310be345eafd0,
    '/guardians': indexaf12d269e61023f92e07d62ffe9ad113,
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
const storebe255272a506459c9a9310be345eafd0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebe255272a506459c9a9310be345eafd0.url(options),
    method: 'post',
})

storebe255272a506459c9a9310be345eafd0.definition = {
    methods: ["post"],
    url: '/api/v1/guardians',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
storebe255272a506459c9a9310be345eafd0.url = (options?: RouteQueryOptions) => {
    return storebe255272a506459c9a9310be345eafd0.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
storebe255272a506459c9a9310be345eafd0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebe255272a506459c9a9310be345eafd0.url(options),
    method: 'post',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
    const storebe255272a506459c9a9310be345eafd0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storebe255272a506459c9a9310be345eafd0.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/api/v1/guardians'
 */
        storebe255272a506459c9a9310be345eafd0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storebe255272a506459c9a9310be345eafd0.url(options),
            method: 'post',
        })
    
    storebe255272a506459c9a9310be345eafd0.form = storebe255272a506459c9a9310be345eafd0Form
    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/guardians'
 */
const storeaf12d269e61023f92e07d62ffe9ad113 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeaf12d269e61023f92e07d62ffe9ad113.url(options),
    method: 'post',
})

storeaf12d269e61023f92e07d62ffe9ad113.definition = {
    methods: ["post"],
    url: '/guardians',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/guardians'
 */
storeaf12d269e61023f92e07d62ffe9ad113.url = (options?: RouteQueryOptions) => {
    return storeaf12d269e61023f92e07d62ffe9ad113.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/guardians'
 */
storeaf12d269e61023f92e07d62ffe9ad113.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeaf12d269e61023f92e07d62ffe9ad113.url(options),
    method: 'post',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/guardians'
 */
    const storeaf12d269e61023f92e07d62ffe9ad113Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeaf12d269e61023f92e07d62ffe9ad113.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::store
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:29
 * @route '/guardians'
 */
        storeaf12d269e61023f92e07d62ffe9ad113Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeaf12d269e61023f92e07d62ffe9ad113.url(options),
            method: 'post',
        })
    
    storeaf12d269e61023f92e07d62ffe9ad113.form = storeaf12d269e61023f92e07d62ffe9ad113Form

export const store = {
    '/api/v1/guardians': storebe255272a506459c9a9310be345eafd0,
    '/guardians': storeaf12d269e61023f92e07d62ffe9ad113,
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
const showfb56bda897f53bdaf4434ad6f1672ef9 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'get',
})

showfb56bda897f53bdaf4434ad6f1672ef9.definition = {
    methods: ["get","head"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
showfb56bda897f53bdaf4434ad6f1672ef9.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showfb56bda897f53bdaf4434ad6f1672ef9.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
showfb56bda897f53bdaf4434ad6f1672ef9.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
showfb56bda897f53bdaf4434ad6f1672ef9.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
    const showfb56bda897f53bdaf4434ad6f1672ef9Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
        showfb56bda897f53bdaf4434ad6f1672ef9Form.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/api/v1/guardians/{guardian}'
 */
        showfb56bda897f53bdaf4434ad6f1672ef9Form.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfb56bda897f53bdaf4434ad6f1672ef9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showfb56bda897f53bdaf4434ad6f1672ef9.form = showfb56bda897f53bdaf4434ad6f1672ef9Form
    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
const show246d0d2ec1d90a91e9547764726be0f8 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'get',
})

show246d0d2ec1d90a91e9547764726be0f8.definition = {
    methods: ["get","head"],
    url: '/guardians/{guardian}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
show246d0d2ec1d90a91e9547764726be0f8.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show246d0d2ec1d90a91e9547764726be0f8.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
show246d0d2ec1d90a91e9547764726be0f8.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
show246d0d2ec1d90a91e9547764726be0f8.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
    const show246d0d2ec1d90a91e9547764726be0f8Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show246d0d2ec1d90a91e9547764726be0f8.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
        show246d0d2ec1d90a91e9547764726be0f8Form.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show246d0d2ec1d90a91e9547764726be0f8.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::show
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:34
 * @route '/guardians/{guardian}'
 */
        show246d0d2ec1d90a91e9547764726be0f8Form.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show246d0d2ec1d90a91e9547764726be0f8.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show246d0d2ec1d90a91e9547764726be0f8.form = show246d0d2ec1d90a91e9547764726be0f8Form

export const show = {
    '/api/v1/guardians/{guardian}': showfb56bda897f53bdaf4434ad6f1672ef9,
    '/guardians/{guardian}': show246d0d2ec1d90a91e9547764726be0f8,
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
const updatefb56bda897f53bdaf4434ad6f1672ef9 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'put',
})

updatefb56bda897f53bdaf4434ad6f1672ef9.definition = {
    methods: ["put","patch"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
updatefb56bda897f53bdaf4434ad6f1672ef9.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatefb56bda897f53bdaf4434ad6f1672ef9.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
updatefb56bda897f53bdaf4434ad6f1672ef9.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
updatefb56bda897f53bdaf4434ad6f1672ef9.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/api/v1/guardians/{guardian}'
 */
    const updatefb56bda897f53bdaf4434ad6f1672ef9Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, {
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
        updatefb56bda897f53bdaf4434ad6f1672ef9Form.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, {
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
        updatefb56bda897f53bdaf4434ad6f1672ef9Form.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefb56bda897f53bdaf4434ad6f1672ef9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatefb56bda897f53bdaf4434ad6f1672ef9.form = updatefb56bda897f53bdaf4434ad6f1672ef9Form
    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/guardians/{guardian}'
 */
const update246d0d2ec1d90a91e9547764726be0f8 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'put',
})

update246d0d2ec1d90a91e9547764726be0f8.definition = {
    methods: ["put","patch"],
    url: '/guardians/{guardian}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/guardians/{guardian}'
 */
update246d0d2ec1d90a91e9547764726be0f8.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update246d0d2ec1d90a91e9547764726be0f8.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/guardians/{guardian}'
 */
update246d0d2ec1d90a91e9547764726be0f8.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/guardians/{guardian}'
 */
update246d0d2ec1d90a91e9547764726be0f8.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::update
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:50
 * @route '/guardians/{guardian}'
 */
    const update246d0d2ec1d90a91e9547764726be0f8Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update246d0d2ec1d90a91e9547764726be0f8.url(args, {
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
 * @route '/guardians/{guardian}'
 */
        update246d0d2ec1d90a91e9547764726be0f8Form.put = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update246d0d2ec1d90a91e9547764726be0f8.url(args, {
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
 * @route '/guardians/{guardian}'
 */
        update246d0d2ec1d90a91e9547764726be0f8Form.patch = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update246d0d2ec1d90a91e9547764726be0f8.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update246d0d2ec1d90a91e9547764726be0f8.form = update246d0d2ec1d90a91e9547764726be0f8Form

export const update = {
    '/api/v1/guardians/{guardian}': updatefb56bda897f53bdaf4434ad6f1672ef9,
    '/guardians/{guardian}': update246d0d2ec1d90a91e9547764726be0f8,
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
const destroyfb56bda897f53bdaf4434ad6f1672ef9 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'delete',
})

destroyfb56bda897f53bdaf4434ad6f1672ef9.definition = {
    methods: ["delete"],
    url: '/api/v1/guardians/{guardian}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
destroyfb56bda897f53bdaf4434ad6f1672ef9.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyfb56bda897f53bdaf4434ad6f1672ef9.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
destroyfb56bda897f53bdaf4434ad6f1672ef9.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfb56bda897f53bdaf4434ad6f1672ef9.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/api/v1/guardians/{guardian}'
 */
    const destroyfb56bda897f53bdaf4434ad6f1672ef9Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyfb56bda897f53bdaf4434ad6f1672ef9.url(args, {
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
        destroyfb56bda897f53bdaf4434ad6f1672ef9Form.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyfb56bda897f53bdaf4434ad6f1672ef9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyfb56bda897f53bdaf4434ad6f1672ef9.form = destroyfb56bda897f53bdaf4434ad6f1672ef9Form
    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/guardians/{guardian}'
 */
const destroy246d0d2ec1d90a91e9547764726be0f8 = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'delete',
})

destroy246d0d2ec1d90a91e9547764726be0f8.definition = {
    methods: ["delete"],
    url: '/guardians/{guardian}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/guardians/{guardian}'
 */
destroy246d0d2ec1d90a91e9547764726be0f8.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy246d0d2ec1d90a91e9547764726be0f8.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/guardians/{guardian}'
 */
destroy246d0d2ec1d90a91e9547764726be0f8.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy246d0d2ec1d90a91e9547764726be0f8.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::destroy
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:55
 * @route '/guardians/{guardian}'
 */
    const destroy246d0d2ec1d90a91e9547764726be0f8Form = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy246d0d2ec1d90a91e9547764726be0f8.url(args, {
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
 * @route '/guardians/{guardian}'
 */
        destroy246d0d2ec1d90a91e9547764726be0f8Form.delete = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy246d0d2ec1d90a91e9547764726be0f8.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy246d0d2ec1d90a91e9547764726be0f8.form = destroy246d0d2ec1d90a91e9547764726be0f8Form

export const destroy = {
    '/api/v1/guardians/{guardian}': destroyfb56bda897f53bdaf4434ad6f1672ef9,
    '/guardians/{guardian}': destroy246d0d2ec1d90a91e9547764726be0f8,
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/guardians/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::create
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:21
 * @route '/guardians/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
export const edit = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/guardians/{guardian}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
edit.url = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{guardian}', parsedArgs.guardian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
edit.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
edit.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
    const editForm = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
        editForm.get = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Guardian\Http\Controllers\GuardianController::edit
 * @see Modules/Guardian/app/Http/Controllers/GuardianController.php:42
 * @route '/guardians/{guardian}/edit'
 */
        editForm.head = (args: { guardian: string | number } | [guardian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const GuardianController = { index, store, show, update, destroy, create, edit }

export default GuardianController