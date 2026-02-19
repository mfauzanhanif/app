import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
const indexea890e63d8c7c872d37d42ab835eadf1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea890e63d8c7c872d37d42ab835eadf1.url(options),
    method: 'get',
})

indexea890e63d8c7c872d37d42ab835eadf1.definition = {
    methods: ["get","head"],
    url: '/api/v1/webs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
indexea890e63d8c7c872d37d42ab835eadf1.url = (options?: RouteQueryOptions) => {
    return indexea890e63d8c7c872d37d42ab835eadf1.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
indexea890e63d8c7c872d37d42ab835eadf1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea890e63d8c7c872d37d42ab835eadf1.url(options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
indexea890e63d8c7c872d37d42ab835eadf1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexea890e63d8c7c872d37d42ab835eadf1.url(options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
    const indexea890e63d8c7c872d37d42ab835eadf1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexea890e63d8c7c872d37d42ab835eadf1.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
        indexea890e63d8c7c872d37d42ab835eadf1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexea890e63d8c7c872d37d42ab835eadf1.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/api/v1/webs'
 */
        indexea890e63d8c7c872d37d42ab835eadf1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexea890e63d8c7c872d37d42ab835eadf1.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexea890e63d8c7c872d37d42ab835eadf1.form = indexea890e63d8c7c872d37d42ab835eadf1Form
    /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
const index4c274776a2218af7d1a53b918d254ac7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4c274776a2218af7d1a53b918d254ac7.url(options),
    method: 'get',
})

index4c274776a2218af7d1a53b918d254ac7.definition = {
    methods: ["get","head"],
    url: '/webs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index4c274776a2218af7d1a53b918d254ac7.url = (options?: RouteQueryOptions) => {
    return index4c274776a2218af7d1a53b918d254ac7.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index4c274776a2218af7d1a53b918d254ac7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4c274776a2218af7d1a53b918d254ac7.url(options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index4c274776a2218af7d1a53b918d254ac7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4c274776a2218af7d1a53b918d254ac7.url(options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
    const index4c274776a2218af7d1a53b918d254ac7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index4c274776a2218af7d1a53b918d254ac7.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
        index4c274776a2218af7d1a53b918d254ac7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index4c274776a2218af7d1a53b918d254ac7.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
        index4c274776a2218af7d1a53b918d254ac7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index4c274776a2218af7d1a53b918d254ac7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index4c274776a2218af7d1a53b918d254ac7.form = index4c274776a2218af7d1a53b918d254ac7Form

export const index = {
    '/api/v1/webs': indexea890e63d8c7c872d37d42ab835eadf1,
    '/webs': index4c274776a2218af7d1a53b918d254ac7,
}

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/api/v1/webs'
 */
const storeea890e63d8c7c872d37d42ab835eadf1 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeea890e63d8c7c872d37d42ab835eadf1.url(options),
    method: 'post',
})

storeea890e63d8c7c872d37d42ab835eadf1.definition = {
    methods: ["post"],
    url: '/api/v1/webs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/api/v1/webs'
 */
storeea890e63d8c7c872d37d42ab835eadf1.url = (options?: RouteQueryOptions) => {
    return storeea890e63d8c7c872d37d42ab835eadf1.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/api/v1/webs'
 */
storeea890e63d8c7c872d37d42ab835eadf1.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeea890e63d8c7c872d37d42ab835eadf1.url(options),
    method: 'post',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/api/v1/webs'
 */
    const storeea890e63d8c7c872d37d42ab835eadf1Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeea890e63d8c7c872d37d42ab835eadf1.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/api/v1/webs'
 */
        storeea890e63d8c7c872d37d42ab835eadf1Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeea890e63d8c7c872d37d42ab835eadf1.url(options),
            method: 'post',
        })
    
    storeea890e63d8c7c872d37d42ab835eadf1.form = storeea890e63d8c7c872d37d42ab835eadf1Form
    /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
const store4c274776a2218af7d1a53b918d254ac7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4c274776a2218af7d1a53b918d254ac7.url(options),
    method: 'post',
})

store4c274776a2218af7d1a53b918d254ac7.definition = {
    methods: ["post"],
    url: '/webs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
store4c274776a2218af7d1a53b918d254ac7.url = (options?: RouteQueryOptions) => {
    return store4c274776a2218af7d1a53b918d254ac7.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
store4c274776a2218af7d1a53b918d254ac7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4c274776a2218af7d1a53b918d254ac7.url(options),
    method: 'post',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
    const store4c274776a2218af7d1a53b918d254ac7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store4c274776a2218af7d1a53b918d254ac7.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
        store4c274776a2218af7d1a53b918d254ac7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store4c274776a2218af7d1a53b918d254ac7.url(options),
            method: 'post',
        })
    
    store4c274776a2218af7d1a53b918d254ac7.form = store4c274776a2218af7d1a53b918d254ac7Form

export const store = {
    '/api/v1/webs': storeea890e63d8c7c872d37d42ab835eadf1,
    '/webs': store4c274776a2218af7d1a53b918d254ac7,
}

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
const showed75ee5c888b14e70425dbf4b32edb34 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'get',
})

showed75ee5c888b14e70425dbf4b32edb34.definition = {
    methods: ["get","head"],
    url: '/api/v1/webs/{web}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
showed75ee5c888b14e70425dbf4b32edb34.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return showed75ee5c888b14e70425dbf4b32edb34.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
showed75ee5c888b14e70425dbf4b32edb34.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
showed75ee5c888b14e70425dbf4b32edb34.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
    const showed75ee5c888b14e70425dbf4b32edb34Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showed75ee5c888b14e70425dbf4b32edb34.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
        showed75ee5c888b14e70425dbf4b32edb34Form.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showed75ee5c888b14e70425dbf4b32edb34.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/api/v1/webs/{web}'
 */
        showed75ee5c888b14e70425dbf4b32edb34Form.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showed75ee5c888b14e70425dbf4b32edb34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showed75ee5c888b14e70425dbf4b32edb34.form = showed75ee5c888b14e70425dbf4b32edb34Form
    /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
const show88e69ee8c5de929a501a600a29600082 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'get',
})

show88e69ee8c5de929a501a600a29600082.definition = {
    methods: ["get","head"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show88e69ee8c5de929a501a600a29600082.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return show88e69ee8c5de929a501a600a29600082.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show88e69ee8c5de929a501a600a29600082.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show88e69ee8c5de929a501a600a29600082.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
    const show88e69ee8c5de929a501a600a29600082Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show88e69ee8c5de929a501a600a29600082.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
        show88e69ee8c5de929a501a600a29600082Form.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show88e69ee8c5de929a501a600a29600082.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
        show88e69ee8c5de929a501a600a29600082Form.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show88e69ee8c5de929a501a600a29600082.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show88e69ee8c5de929a501a600a29600082.form = show88e69ee8c5de929a501a600a29600082Form

export const show = {
    '/api/v1/webs/{web}': showed75ee5c888b14e70425dbf4b32edb34,
    '/webs/{web}': show88e69ee8c5de929a501a600a29600082,
}

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
const updateed75ee5c888b14e70425dbf4b32edb34 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'put',
})

updateed75ee5c888b14e70425dbf4b32edb34.definition = {
    methods: ["put","patch"],
    url: '/api/v1/webs/{web}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
updateed75ee5c888b14e70425dbf4b32edb34.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return updateed75ee5c888b14e70425dbf4b32edb34.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
updateed75ee5c888b14e70425dbf4b32edb34.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
updateed75ee5c888b14e70425dbf4b32edb34.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
    const updateed75ee5c888b14e70425dbf4b32edb34Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateed75ee5c888b14e70425dbf4b32edb34.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
        updateed75ee5c888b14e70425dbf4b32edb34Form.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateed75ee5c888b14e70425dbf4b32edb34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/api/v1/webs/{web}'
 */
        updateed75ee5c888b14e70425dbf4b32edb34Form.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateed75ee5c888b14e70425dbf4b32edb34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateed75ee5c888b14e70425dbf4b32edb34.form = updateed75ee5c888b14e70425dbf4b32edb34Form
    /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
const update88e69ee8c5de929a501a600a29600082 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'put',
})

update88e69ee8c5de929a501a600a29600082.definition = {
    methods: ["put","patch"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update88e69ee8c5de929a501a600a29600082.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return update88e69ee8c5de929a501a600a29600082.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update88e69ee8c5de929a501a600a29600082.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update88e69ee8c5de929a501a600a29600082.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
    const update88e69ee8c5de929a501a600a29600082Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update88e69ee8c5de929a501a600a29600082.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
        update88e69ee8c5de929a501a600a29600082Form.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update88e69ee8c5de929a501a600a29600082.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
        update88e69ee8c5de929a501a600a29600082Form.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update88e69ee8c5de929a501a600a29600082.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update88e69ee8c5de929a501a600a29600082.form = update88e69ee8c5de929a501a600a29600082Form

export const update = {
    '/api/v1/webs/{web}': updateed75ee5c888b14e70425dbf4b32edb34,
    '/webs/{web}': update88e69ee8c5de929a501a600a29600082,
}

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/api/v1/webs/{web}'
 */
const destroyed75ee5c888b14e70425dbf4b32edb34 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'delete',
})

destroyed75ee5c888b14e70425dbf4b32edb34.definition = {
    methods: ["delete"],
    url: '/api/v1/webs/{web}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/api/v1/webs/{web}'
 */
destroyed75ee5c888b14e70425dbf4b32edb34.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return destroyed75ee5c888b14e70425dbf4b32edb34.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/api/v1/webs/{web}'
 */
destroyed75ee5c888b14e70425dbf4b32edb34.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyed75ee5c888b14e70425dbf4b32edb34.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/api/v1/webs/{web}'
 */
    const destroyed75ee5c888b14e70425dbf4b32edb34Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyed75ee5c888b14e70425dbf4b32edb34.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/api/v1/webs/{web}'
 */
        destroyed75ee5c888b14e70425dbf4b32edb34Form.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyed75ee5c888b14e70425dbf4b32edb34.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyed75ee5c888b14e70425dbf4b32edb34.form = destroyed75ee5c888b14e70425dbf4b32edb34Form
    /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
const destroy88e69ee8c5de929a501a600a29600082 = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'delete',
})

destroy88e69ee8c5de929a501a600a29600082.definition = {
    methods: ["delete"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
destroy88e69ee8c5de929a501a600a29600082.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return destroy88e69ee8c5de929a501a600a29600082.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
destroy88e69ee8c5de929a501a600a29600082.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy88e69ee8c5de929a501a600a29600082.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
    const destroy88e69ee8c5de929a501a600a29600082Form = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy88e69ee8c5de929a501a600a29600082.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
        destroy88e69ee8c5de929a501a600a29600082Form.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy88e69ee8c5de929a501a600a29600082.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy88e69ee8c5de929a501a600a29600082.form = destroy88e69ee8c5de929a501a600a29600082Form

export const destroy = {
    '/api/v1/webs/{web}': destroyed75ee5c888b14e70425dbf4b32edb34,
    '/webs/{web}': destroy88e69ee8c5de929a501a600a29600082,
}

/**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/webs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::create
 * @see Modules/Web/app/Http/Controllers/WebController.php:21
 * @route '/webs/create'
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
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
export const edit = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/webs/{web}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
edit.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { web: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    web: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        web: args.web,
                }

    return edit.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
edit.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
edit.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
    const editForm = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
        editForm.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::edit
 * @see Modules/Web/app/Http/Controllers/WebController.php:42
 * @route '/webs/{web}/edit'
 */
        editForm.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const WebController = { index, store, show, update, destroy, create, edit }

export default WebController