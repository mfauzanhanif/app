import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::index
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:16
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        indexForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/institutions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
store.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::store
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:48
 * @route '//app.daraltauhid.test/{institution}/institutions'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
export const show = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
show.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const showForm = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        showForm.get = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::show
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:60
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        showForm.head = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
export const update = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update.put = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
update.patch = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::update
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:91
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const updateForm = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        updateForm.put = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        updateForm.patch = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
export const destroy = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/institutions/{inst}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
destroy.url = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{inst}', parsedArgs.inst.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
destroy.delete = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Institution\Http\Controllers\InstitutionController::destroy
 * @see Modules/Institution/app/Http/Controllers/InstitutionController.php:103
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
    const destroyForm = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/institutions/{inst}'
 */
        destroyForm.delete = (args: { institution: string | { code: string }, inst: string | number } | [institution: string | { code: string }, inst: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const institutions = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default institutions