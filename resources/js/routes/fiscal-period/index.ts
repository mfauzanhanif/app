import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
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
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:17
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
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
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
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
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:37
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
export const show = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
show.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
show.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
show.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const showForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        showForm.get = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:55
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        showForm.head = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
export const update = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
update.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
update.put = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
update.patch = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:73
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const updateForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        updateForm.put = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        updateForm.patch = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
export const destroy = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
destroy.url = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{fiscal_period}', parsedArgs.fiscal_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
destroy.delete = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\FiscalPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/FiscalPeriodController.php:91
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
    const destroyForm = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '//app.daraltauhid.test/{institution}/fiscal-periods/{fiscal_period}'
 */
        destroyForm.delete = (args: { institution: string | number, fiscal_period: string | number } | [institution: string | number, fiscal_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default fiscalPeriod