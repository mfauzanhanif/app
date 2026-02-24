import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
const index098cfda014f63a7f75da8e90fd50a239 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index098cfda014f63a7f75da8e90fd50a239.url(options),
    method: 'get',
})

index098cfda014f63a7f75da8e90fd50a239.definition = {
    methods: ["get","head"],
    url: '/api/v1/institutions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index098cfda014f63a7f75da8e90fd50a239.url = (options?: RouteQueryOptions) => {
    return index098cfda014f63a7f75da8e90fd50a239.definition.url + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index098cfda014f63a7f75da8e90fd50a239.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index098cfda014f63a7f75da8e90fd50a239.url(options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index098cfda014f63a7f75da8e90fd50a239.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index098cfda014f63a7f75da8e90fd50a239.url(options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
    const index098cfda014f63a7f75da8e90fd50a239Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index098cfda014f63a7f75da8e90fd50a239.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
        index098cfda014f63a7f75da8e90fd50a239Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index098cfda014f63a7f75da8e90fd50a239.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
        index098cfda014f63a7f75da8e90fd50a239Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index098cfda014f63a7f75da8e90fd50a239.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index098cfda014f63a7f75da8e90fd50a239.form = index098cfda014f63a7f75da8e90fd50a239Form
    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
const index513c0e26e2a3194c0bdc235210637aa5 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index513c0e26e2a3194c0bdc235210637aa5.url(args, options),
    method: 'get',
})

index513c0e26e2a3194c0bdc235210637aa5.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index513c0e26e2a3194c0bdc235210637aa5.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index513c0e26e2a3194c0bdc235210637aa5.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index513c0e26e2a3194c0bdc235210637aa5.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index513c0e26e2a3194c0bdc235210637aa5.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index513c0e26e2a3194c0bdc235210637aa5.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index513c0e26e2a3194c0bdc235210637aa5.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
    const index513c0e26e2a3194c0bdc235210637aa5Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index513c0e26e2a3194c0bdc235210637aa5.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        index513c0e26e2a3194c0bdc235210637aa5Form.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index513c0e26e2a3194c0bdc235210637aa5.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        index513c0e26e2a3194c0bdc235210637aa5Form.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index513c0e26e2a3194c0bdc235210637aa5.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index513c0e26e2a3194c0bdc235210637aa5.form = index513c0e26e2a3194c0bdc235210637aa5Form

export const index = {
    '/api/v1/institutions': index098cfda014f63a7f75da8e90fd50a239,
    '//app.daraltauhid.test/{institution}/institutions': index513c0e26e2a3194c0bdc235210637aa5,
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
const store098cfda014f63a7f75da8e90fd50a239 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store098cfda014f63a7f75da8e90fd50a239.url(options),
    method: 'post',
})

store098cfda014f63a7f75da8e90fd50a239.definition = {
    methods: ["post"],
    url: '/api/v1/institutions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
store098cfda014f63a7f75da8e90fd50a239.url = (options?: RouteQueryOptions) => {
    return store098cfda014f63a7f75da8e90fd50a239.definition.url + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
store098cfda014f63a7f75da8e90fd50a239.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store098cfda014f63a7f75da8e90fd50a239.url(options),
    method: 'post',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
    const store098cfda014f63a7f75da8e90fd50a239Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store098cfda014f63a7f75da8e90fd50a239.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
        store098cfda014f63a7f75da8e90fd50a239Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store098cfda014f63a7f75da8e90fd50a239.url(options),
            method: 'post',
        })
    
    store098cfda014f63a7f75da8e90fd50a239.form = store098cfda014f63a7f75da8e90fd50a239Form
    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
const store513c0e26e2a3194c0bdc235210637aa5 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store513c0e26e2a3194c0bdc235210637aa5.url(args, options),
    method: 'post',
})

store513c0e26e2a3194c0bdc235210637aa5.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/institutions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
store513c0e26e2a3194c0bdc235210637aa5.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store513c0e26e2a3194c0bdc235210637aa5.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
store513c0e26e2a3194c0bdc235210637aa5.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store513c0e26e2a3194c0bdc235210637aa5.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
    const store513c0e26e2a3194c0bdc235210637aa5Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store513c0e26e2a3194c0bdc235210637aa5.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        store513c0e26e2a3194c0bdc235210637aa5Form.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store513c0e26e2a3194c0bdc235210637aa5.url(args, options),
            method: 'post',
        })
    
    store513c0e26e2a3194c0bdc235210637aa5.form = store513c0e26e2a3194c0bdc235210637aa5Form

export const store = {
    '/api/v1/institutions': store098cfda014f63a7f75da8e90fd50a239,
    '//app.daraltauhid.test/{institution}/institutions': store513c0e26e2a3194c0bdc235210637aa5,
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
const showf247ea6641e6e7b3fd674c5f9959f91e = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'get',
})

showf247ea6641e6e7b3fd674c5f9959f91e.definition = {
    methods: ["get","head"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
showf247ea6641e6e7b3fd674c5f9959f91e.url = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { institution: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'code' in args) {
            args = { institution: args.code }
        }
    
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                }

    return showf247ea6641e6e7b3fd674c5f9959f91e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
showf247ea6641e6e7b3fd674c5f9959f91e.get = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
showf247ea6641e6e7b3fd674c5f9959f91e.head = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
    const showf247ea6641e6e7b3fd674c5f9959f91eForm = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
        showf247ea6641e6e7b3fd674c5f9959f91eForm.get = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
        showf247ea6641e6e7b3fd674c5f9959f91eForm.head = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf247ea6641e6e7b3fd674c5f9959f91e.form = showf247ea6641e6e7b3fd674c5f9959f91eForm
    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
const show07e8d969e1a6a5f0c5e5e32ee55138b6 = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'get',
})

show07e8d969e1a6a5f0c5e5e32ee55138b6.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show07e8d969e1a6a5f0c5e5e32ee55138b6.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    inst: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                                inst: args.inst,
                }

    return show07e8d969e1a6a5f0c5e5e32ee55138b6.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show07e8d969e1a6a5f0c5e5e32ee55138b6.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show07e8d969e1a6a5f0c5e5e32ee55138b6.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const show07e8d969e1a6a5f0c5e5e32ee55138b6Form = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        show07e8d969e1a6a5f0c5e5e32ee55138b6Form.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        show07e8d969e1a6a5f0c5e5e32ee55138b6Form.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show07e8d969e1a6a5f0c5e5e32ee55138b6.form = show07e8d969e1a6a5f0c5e5e32ee55138b6Form

export const show = {
    '/api/v1/institutions/{institution}': showf247ea6641e6e7b3fd674c5f9959f91e,
    '//app.daraltauhid.test/{institution}/institutions/{inst}': show07e8d969e1a6a5f0c5e5e32ee55138b6,
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
const updatef247ea6641e6e7b3fd674c5f9959f91e = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'put',
})

updatef247ea6641e6e7b3fd674c5f9959f91e.definition = {
    methods: ["put","patch"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
updatef247ea6641e6e7b3fd674c5f9959f91e.url = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { institution: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'code' in args) {
            args = { institution: args.code }
        }
    
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                }

    return updatef247ea6641e6e7b3fd674c5f9959f91e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
updatef247ea6641e6e7b3fd674c5f9959f91e.put = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
updatef247ea6641e6e7b3fd674c5f9959f91e.patch = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
    const updatef247ea6641e6e7b3fd674c5f9959f91eForm = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
        updatef247ea6641e6e7b3fd674c5f9959f91eForm.put = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
        updatef247ea6641e6e7b3fd674c5f9959f91eForm.patch = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef247ea6641e6e7b3fd674c5f9959f91e.form = updatef247ea6641e6e7b3fd674c5f9959f91eForm
    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
const update07e8d969e1a6a5f0c5e5e32ee55138b6 = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'put',
})

update07e8d969e1a6a5f0c5e5e32ee55138b6.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update07e8d969e1a6a5f0c5e5e32ee55138b6.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    inst: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                                inst: args.inst,
                }

    return update07e8d969e1a6a5f0c5e5e32ee55138b6.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update07e8d969e1a6a5f0c5e5e32ee55138b6.put = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update07e8d969e1a6a5f0c5e5e32ee55138b6.patch = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const update07e8d969e1a6a5f0c5e5e32ee55138b6Form = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        update07e8d969e1a6a5f0c5e5e32ee55138b6Form.put = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        update07e8d969e1a6a5f0c5e5e32ee55138b6Form.patch = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update07e8d969e1a6a5f0c5e5e32ee55138b6.form = update07e8d969e1a6a5f0c5e5e32ee55138b6Form

export const update = {
    '/api/v1/institutions/{institution}': updatef247ea6641e6e7b3fd674c5f9959f91e,
    '//app.daraltauhid.test/{institution}/institutions/{inst}': update07e8d969e1a6a5f0c5e5e32ee55138b6,
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
const destroyf247ea6641e6e7b3fd674c5f9959f91e = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'delete',
})

destroyf247ea6641e6e7b3fd674c5f9959f91e.definition = {
    methods: ["delete"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
destroyf247ea6641e6e7b3fd674c5f9959f91e.url = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { institution: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'code' in args) {
            args = { institution: args.code }
        }
    
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                }

    return destroyf247ea6641e6e7b3fd674c5f9959f91e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
destroyf247ea6641e6e7b3fd674c5f9959f91e.delete = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf247ea6641e6e7b3fd674c5f9959f91e.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
    const destroyf247ea6641e6e7b3fd674c5f9959f91eForm = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyf247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
        destroyf247ea6641e6e7b3fd674c5f9959f91eForm.delete = (args: { institution: string | { code: string } } | [institution: string | { code: string } ] | string | { code: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyf247ea6641e6e7b3fd674c5f9959f91e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyf247ea6641e6e7b3fd674c5f9959f91e.form = destroyf247ea6641e6e7b3fd674c5f9959f91eForm
    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
const destroy07e8d969e1a6a5f0c5e5e32ee55138b6 = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'delete',
})

destroy07e8d969e1a6a5f0c5e5e32ee55138b6.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
destroy07e8d969e1a6a5f0c5e5e32ee55138b6.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    inst: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                                inst: args.inst,
                }

    return destroy07e8d969e1a6a5f0c5e5e32ee55138b6.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
destroy07e8d969e1a6a5f0c5e5e32ee55138b6.delete = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const destroy07e8d969e1a6a5f0c5e5e32ee55138b6Form = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        destroy07e8d969e1a6a5f0c5e5e32ee55138b6Form.delete = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy07e8d969e1a6a5f0c5e5e32ee55138b6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy07e8d969e1a6a5f0c5e5e32ee55138b6.form = destroy07e8d969e1a6a5f0c5e5e32ee55138b6Form

export const destroy = {
    '/api/v1/institutions/{institution}': destroyf247ea6641e6e7b3fd674c5f9959f91e,
    '//app.daraltauhid.test/{institution}/institutions/{inst}': destroy07e8d969e1a6a5f0c5e5e32ee55138b6,
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::create
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:34
 * @route '//app.daraltauhid.test/{institution}/institutions/create'
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
export const edit = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
edit.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    inst: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: typeof args.institution === 'object'
                ? args.institution.code
                : args.institution,
                                inst: args.inst,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
edit.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
edit.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
    const editForm = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
        editForm.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::edit
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:72
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}/edit'
 */
        editForm.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const InstitutionController = { index, store, show, update, destroy, create, edit }

export default InstitutionController