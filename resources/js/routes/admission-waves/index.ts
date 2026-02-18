import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/admission-waves',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:20
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/admission-waves/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::create
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:39
 * @route '//app.daraltauhid.test/{institution}/admission-waves/create'
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::store
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:52
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/admission-waves',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::store
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:52
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::store
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:52
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::store
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:52
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::store
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:52
 * @route '//app.daraltauhid.test/{institution}/admission-waves'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
export const show = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
show.url = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    admission_wafe: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                admission_wafe: args.admission_wafe,
                }

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{admission_wafe}', parsedArgs.admission_wafe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
show.get = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
show.head = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
    const showForm = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
        showForm.get = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::show
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:69
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
        showForm.head = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
export const edit = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
edit.url = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    admission_wafe: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                admission_wafe: args.admission_wafe,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{admission_wafe}', parsedArgs.admission_wafe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
edit.get = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
edit.head = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
    const editForm = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
        editForm.get = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::edit
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:87
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}/edit'
 */
        editForm.head = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
export const update = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
update.url = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    admission_wafe: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                admission_wafe: args.admission_wafe,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{admission_wafe}', parsedArgs.admission_wafe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
update.put = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
update.patch = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
    const updateForm = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
        updateForm.put = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::update
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:101
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
        updateForm.patch = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::destroy
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:115
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
export const destroy = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::destroy
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:115
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
destroy.url = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    admission_wafe: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                admission_wafe: args.admission_wafe,
                }

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{admission_wafe}', parsedArgs.admission_wafe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::destroy
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:115
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
destroy.delete = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::destroy
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:115
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
    const destroyForm = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionWaveController::destroy
 * @see Modules/Admission/app/Http/Controllers/AdmissionWaveController.php:115
 * @route '//app.daraltauhid.test/{institution}/admission-waves/{admission_wafe}'
 */
        destroyForm.delete = (args: { institution: string | number, admission_wafe: string | number } | [institution: string | number, admission_wafe: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const admissionWaves = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default admissionWaves