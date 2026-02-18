import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:29
 * @route '//app.daraltauhid.test/{institution}/academic-years/create'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/academic-years',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
export const show = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_year: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_year: args.academic_year,
                }

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const showForm = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        showForm.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        showForm.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
export const edit = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
edit.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_year: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_year: args.academic_year,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
edit.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
edit.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
    const editForm = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
        editForm.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:61
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}/edit'
 */
        editForm.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
export const update = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_year: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_year: args.academic_year,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update.put = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update.patch = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const updateForm = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        updateForm.put = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        updateForm.patch = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
export const destroy = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
destroy.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    academic_year: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                academic_year: args.academic_year,
                }

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
destroy.delete = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const destroyForm = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        destroyForm.delete = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const academicYear = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default academicYear