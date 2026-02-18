import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/permissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
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
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\PermissionController::index
 * @see Modules/User/app/Http/Controllers/PermissionController.php:16
 * @route '//app.daraltauhid.test/{institution}/permissions'
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
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/permissions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
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
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\PermissionController::create
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/create'
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
* @see \Modules\User\Http\Controllers\PermissionController::store
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/permissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::store
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions'
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
* @see \Modules\User\Http\Controllers\PermissionController::store
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::store
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::store
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
export const show = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/permissions/{permission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
show.url = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    permission: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                permission: args.permission,
                }

    return show.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
show.get = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
show.head = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
    const showForm = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
        showForm.get = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\PermissionController::show
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
        showForm.head = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
export const edit = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/permissions/{permission}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
edit.url = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    permission: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                permission: args.permission,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
edit.get = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
edit.head = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
    const editForm = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
        editForm.get = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\PermissionController::edit
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}/edit'
 */
        editForm.head = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
export const update = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/permissions/{permission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
update.url = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    permission: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                permission: args.permission,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
update.put = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
update.patch = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
    const updateForm = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
        updateForm.put = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\User\Http\Controllers\PermissionController::update
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
        updateForm.patch = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\User\Http\Controllers\PermissionController::destroy
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
export const destroy = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/permissions/{permission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::destroy
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
destroy.url = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    permission: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                permission: args.permission,
                }

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{permission}', parsedArgs.permission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\PermissionController::destroy
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
destroy.delete = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::destroy
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
    const destroyForm = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::destroy
 * @see Modules/User/app/Http/Controllers/PermissionController.php:0
 * @route '//app.daraltauhid.test/{institution}/permissions/{permission}'
 */
        destroyForm.delete = (args: { institution: string | number, permission: string | number } | [institution: string | number, permission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const permissions = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default permissions