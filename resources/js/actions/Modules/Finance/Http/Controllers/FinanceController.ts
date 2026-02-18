import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
const index3dcbc2547c437697f8fe49cf2b8c3012 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3dcbc2547c437697f8fe49cf2b8c3012.url(options),
    method: 'get',
})

index3dcbc2547c437697f8fe49cf2b8c3012.definition = {
    methods: ["get","head"],
    url: '/api/v1/finances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index3dcbc2547c437697f8fe49cf2b8c3012.url = (options?: RouteQueryOptions) => {
    return index3dcbc2547c437697f8fe49cf2b8c3012.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index3dcbc2547c437697f8fe49cf2b8c3012.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3dcbc2547c437697f8fe49cf2b8c3012.url(options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
index3dcbc2547c437697f8fe49cf2b8c3012.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3dcbc2547c437697f8fe49cf2b8c3012.url(options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
    const index3dcbc2547c437697f8fe49cf2b8c3012Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index3dcbc2547c437697f8fe49cf2b8c3012.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
        index3dcbc2547c437697f8fe49cf2b8c3012Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3dcbc2547c437697f8fe49cf2b8c3012.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/api/v1/finances'
 */
        index3dcbc2547c437697f8fe49cf2b8c3012Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3dcbc2547c437697f8fe49cf2b8c3012.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index3dcbc2547c437697f8fe49cf2b8c3012.form = index3dcbc2547c437697f8fe49cf2b8c3012Form
    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
const index8127b88cbe00e83ecb435f3855051918 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8127b88cbe00e83ecb435f3855051918.url(options),
    method: 'get',
})

index8127b88cbe00e83ecb435f3855051918.definition = {
    methods: ["get","head"],
    url: '/finances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
index8127b88cbe00e83ecb435f3855051918.url = (options?: RouteQueryOptions) => {
    return index8127b88cbe00e83ecb435f3855051918.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
index8127b88cbe00e83ecb435f3855051918.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8127b88cbe00e83ecb435f3855051918.url(options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
index8127b88cbe00e83ecb435f3855051918.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8127b88cbe00e83ecb435f3855051918.url(options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
    const index8127b88cbe00e83ecb435f3855051918Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index8127b88cbe00e83ecb435f3855051918.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
        index8127b88cbe00e83ecb435f3855051918Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8127b88cbe00e83ecb435f3855051918.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
 * @route '/finances'
 */
        index8127b88cbe00e83ecb435f3855051918Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8127b88cbe00e83ecb435f3855051918.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index8127b88cbe00e83ecb435f3855051918.form = index8127b88cbe00e83ecb435f3855051918Form

export const index = {
    '/api/v1/finances': index3dcbc2547c437697f8fe49cf2b8c3012,
    '/finances': index8127b88cbe00e83ecb435f3855051918,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
const store3dcbc2547c437697f8fe49cf2b8c3012 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3dcbc2547c437697f8fe49cf2b8c3012.url(options),
    method: 'post',
})

store3dcbc2547c437697f8fe49cf2b8c3012.definition = {
    methods: ["post"],
    url: '/api/v1/finances',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
store3dcbc2547c437697f8fe49cf2b8c3012.url = (options?: RouteQueryOptions) => {
    return store3dcbc2547c437697f8fe49cf2b8c3012.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
store3dcbc2547c437697f8fe49cf2b8c3012.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3dcbc2547c437697f8fe49cf2b8c3012.url(options),
    method: 'post',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
    const store3dcbc2547c437697f8fe49cf2b8c3012Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store3dcbc2547c437697f8fe49cf2b8c3012.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/api/v1/finances'
 */
        store3dcbc2547c437697f8fe49cf2b8c3012Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store3dcbc2547c437697f8fe49cf2b8c3012.url(options),
            method: 'post',
        })
    
    store3dcbc2547c437697f8fe49cf2b8c3012.form = store3dcbc2547c437697f8fe49cf2b8c3012Form
    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/finances'
 */
const store8127b88cbe00e83ecb435f3855051918 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8127b88cbe00e83ecb435f3855051918.url(options),
    method: 'post',
})

store8127b88cbe00e83ecb435f3855051918.definition = {
    methods: ["post"],
    url: '/finances',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/finances'
 */
store8127b88cbe00e83ecb435f3855051918.url = (options?: RouteQueryOptions) => {
    return store8127b88cbe00e83ecb435f3855051918.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/finances'
 */
store8127b88cbe00e83ecb435f3855051918.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8127b88cbe00e83ecb435f3855051918.url(options),
    method: 'post',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/finances'
 */
    const store8127b88cbe00e83ecb435f3855051918Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store8127b88cbe00e83ecb435f3855051918.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
 * @route '/finances'
 */
        store8127b88cbe00e83ecb435f3855051918Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store8127b88cbe00e83ecb435f3855051918.url(options),
            method: 'post',
        })
    
    store8127b88cbe00e83ecb435f3855051918.form = store8127b88cbe00e83ecb435f3855051918Form

export const store = {
    '/api/v1/finances': store3dcbc2547c437697f8fe49cf2b8c3012,
    '/finances': store8127b88cbe00e83ecb435f3855051918,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
const showf90f65ae96c96a9a3a18a42691169552 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'get',
})

showf90f65ae96c96a9a3a18a42691169552.definition = {
    methods: ["get","head"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
showf90f65ae96c96a9a3a18a42691169552.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showf90f65ae96c96a9a3a18a42691169552.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
showf90f65ae96c96a9a3a18a42691169552.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
showf90f65ae96c96a9a3a18a42691169552.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
    const showf90f65ae96c96a9a3a18a42691169552Form = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf90f65ae96c96a9a3a18a42691169552.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
        showf90f65ae96c96a9a3a18a42691169552Form.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf90f65ae96c96a9a3a18a42691169552.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/api/v1/finances/{finance}'
 */
        showf90f65ae96c96a9a3a18a42691169552Form.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf90f65ae96c96a9a3a18a42691169552.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf90f65ae96c96a9a3a18a42691169552.form = showf90f65ae96c96a9a3a18a42691169552Form
    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
const show52094ae33c1d7a7a70e5bca84bfa619b = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'get',
})

show52094ae33c1d7a7a70e5bca84bfa619b.definition = {
    methods: ["get","head"],
    url: '/finances/{finance}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
show52094ae33c1d7a7a70e5bca84bfa619b.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show52094ae33c1d7a7a70e5bca84bfa619b.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
show52094ae33c1d7a7a70e5bca84bfa619b.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
show52094ae33c1d7a7a70e5bca84bfa619b.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
    const show52094ae33c1d7a7a70e5bca84bfa619bForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
        show52094ae33c1d7a7a70e5bca84bfa619bForm.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
 * @route '/finances/{finance}'
 */
        show52094ae33c1d7a7a70e5bca84bfa619bForm.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show52094ae33c1d7a7a70e5bca84bfa619b.form = show52094ae33c1d7a7a70e5bca84bfa619bForm

export const show = {
    '/api/v1/finances/{finance}': showf90f65ae96c96a9a3a18a42691169552,
    '/finances/{finance}': show52094ae33c1d7a7a70e5bca84bfa619b,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
const updatef90f65ae96c96a9a3a18a42691169552 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'put',
})

updatef90f65ae96c96a9a3a18a42691169552.definition = {
    methods: ["put","patch"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
updatef90f65ae96c96a9a3a18a42691169552.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatef90f65ae96c96a9a3a18a42691169552.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
updatef90f65ae96c96a9a3a18a42691169552.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
updatef90f65ae96c96a9a3a18a42691169552.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/api/v1/finances/{finance}'
 */
    const updatef90f65ae96c96a9a3a18a42691169552Form = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef90f65ae96c96a9a3a18a42691169552.url(args, {
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
        updatef90f65ae96c96a9a3a18a42691169552Form.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef90f65ae96c96a9a3a18a42691169552.url(args, {
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
        updatef90f65ae96c96a9a3a18a42691169552Form.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef90f65ae96c96a9a3a18a42691169552.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef90f65ae96c96a9a3a18a42691169552.form = updatef90f65ae96c96a9a3a18a42691169552Form
    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/finances/{finance}'
 */
const update52094ae33c1d7a7a70e5bca84bfa619b = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'put',
})

update52094ae33c1d7a7a70e5bca84bfa619b.definition = {
    methods: ["put","patch"],
    url: '/finances/{finance}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/finances/{finance}'
 */
update52094ae33c1d7a7a70e5bca84bfa619b.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update52094ae33c1d7a7a70e5bca84bfa619b.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/finances/{finance}'
 */
update52094ae33c1d7a7a70e5bca84bfa619b.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/finances/{finance}'
 */
update52094ae33c1d7a7a70e5bca84bfa619b.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
 * @route '/finances/{finance}'
 */
    const update52094ae33c1d7a7a70e5bca84bfa619bForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
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
 * @route '/finances/{finance}'
 */
        update52094ae33c1d7a7a70e5bca84bfa619bForm.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
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
 * @route '/finances/{finance}'
 */
        update52094ae33c1d7a7a70e5bca84bfa619bForm.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update52094ae33c1d7a7a70e5bca84bfa619b.form = update52094ae33c1d7a7a70e5bca84bfa619bForm

export const update = {
    '/api/v1/finances/{finance}': updatef90f65ae96c96a9a3a18a42691169552,
    '/finances/{finance}': update52094ae33c1d7a7a70e5bca84bfa619b,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
const destroyf90f65ae96c96a9a3a18a42691169552 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'delete',
})

destroyf90f65ae96c96a9a3a18a42691169552.definition = {
    methods: ["delete"],
    url: '/api/v1/finances/{finance}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
destroyf90f65ae96c96a9a3a18a42691169552.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyf90f65ae96c96a9a3a18a42691169552.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
destroyf90f65ae96c96a9a3a18a42691169552.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf90f65ae96c96a9a3a18a42691169552.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/api/v1/finances/{finance}'
 */
    const destroyf90f65ae96c96a9a3a18a42691169552Form = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyf90f65ae96c96a9a3a18a42691169552.url(args, {
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
        destroyf90f65ae96c96a9a3a18a42691169552Form.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyf90f65ae96c96a9a3a18a42691169552.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyf90f65ae96c96a9a3a18a42691169552.form = destroyf90f65ae96c96a9a3a18a42691169552Form
    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/finances/{finance}'
 */
const destroy52094ae33c1d7a7a70e5bca84bfa619b = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'delete',
})

destroy52094ae33c1d7a7a70e5bca84bfa619b.definition = {
    methods: ["delete"],
    url: '/finances/{finance}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/finances/{finance}'
 */
destroy52094ae33c1d7a7a70e5bca84bfa619b.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy52094ae33c1d7a7a70e5bca84bfa619b.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/finances/{finance}'
 */
destroy52094ae33c1d7a7a70e5bca84bfa619b.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy52094ae33c1d7a7a70e5bca84bfa619b.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
 * @route '/finances/{finance}'
 */
    const destroy52094ae33c1d7a7a70e5bca84bfa619bForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
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
 * @route '/finances/{finance}'
 */
        destroy52094ae33c1d7a7a70e5bca84bfa619bForm.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy52094ae33c1d7a7a70e5bca84bfa619b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy52094ae33c1d7a7a70e5bca84bfa619b.form = destroy52094ae33c1d7a7a70e5bca84bfa619bForm

export const destroy = {
    '/api/v1/finances/{finance}': destroyf90f65ae96c96a9a3a18a42691169552,
    '/finances/{finance}': destroy52094ae33c1d7a7a70e5bca84bfa619b,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/finances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
 * @route '/finances/create'
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
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
export const edit = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/finances/{finance}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
edit.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
edit.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
edit.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
    const editForm = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
        editForm.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
 * @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
 * @route '/finances/{finance}/edit'
 */
        editForm.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const FinanceController = { index, store, show, update, destroy, create, edit }

export default FinanceController