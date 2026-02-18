import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/academic-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
export const show = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
show.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_period: args.academic_period,
                }

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
show.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
show.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const showForm = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        showForm.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        showForm.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
export const edit = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_period: args.academic_period,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
    const editForm = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
        editForm.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
        editForm.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
export const update = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
update.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_period: args.academic_period,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
update.put = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
update.patch = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const updateForm = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        updateForm.put = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        updateForm.patch = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
export const destroy = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
destroy.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_period: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_period: args.academic_period,
                }

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
destroy.delete = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const destroyForm = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        destroyForm.delete = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const academicPeriod = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default academicPeriod