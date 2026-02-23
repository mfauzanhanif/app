import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/institutions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '/api/v1/institutions'
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/institutions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '/api/v1/institutions'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
export const show = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
show.url = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
show.get = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
show.head = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
    const showForm = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
        showForm.get = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '/api/v1/institutions/{institution}'
 */
        showForm.head = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
export const update = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
update.url = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
update.put = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
update.patch = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '/api/v1/institutions/{institution}'
 */
    const updateForm = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
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
        updateForm.put = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
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
        updateForm.patch = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
export const destroy = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/institutions/{institution}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
destroy.url = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
destroy.delete = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '/api/v1/institutions/{institution}'
 */
    const destroyForm = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
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
        destroyForm.delete = (args: { institution: string | number | { code: string | number } } | [institution: string | number | { code: string | number } ] | string | number | { code: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const institution = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default institution