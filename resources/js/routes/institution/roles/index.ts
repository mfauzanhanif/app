import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
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
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\RoleController::index
 * @see Modules/User/app/Http/Controllers/RoleController.php:19
 * @route '//app.daraltauhid.test/{institution}/roles'
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
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
 */
export const create = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
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
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
 */
create.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
 */
create.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
 */
    const createForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
 */
        createForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\RoleController::create
 * @see Modules/User/app/Http/Controllers/RoleController.php:44
 * @route '//app.daraltauhid.test/{institution}/roles/create'
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
* @see \Modules\User\Http\Controllers\RoleController::store
 * @see Modules/User/app/Http/Controllers/RoleController.php:58
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
export const store = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::store
 * @see Modules/User/app/Http/Controllers/RoleController.php:58
 * @route '//app.daraltauhid.test/{institution}/roles'
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
* @see \Modules\User\Http\Controllers\RoleController::store
 * @see Modules/User/app/Http/Controllers/RoleController.php:58
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
store.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::store
 * @see Modules/User/app/Http/Controllers/RoleController.php:58
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
    const storeForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::store
 * @see Modules/User/app/Http/Controllers/RoleController.php:58
 * @route '//app.daraltauhid.test/{institution}/roles'
 */
        storeForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
export const edit = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/roles/{role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
edit.url = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    role: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return edit.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
edit.get = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
edit.head = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
    const editForm = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
        editForm.get = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\RoleController::edit
 * @see Modules/User/app/Http/Controllers/RoleController.php:86
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/edit'
 */
        editForm.head = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
export const update = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/roles/{role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
update.url = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    role: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
update.put = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
update.patch = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
    const updateForm = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
        updateForm.put = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\User\Http\Controllers\RoleController::update
 * @see Modules/User/app/Http/Controllers/RoleController.php:102
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
        updateForm.patch = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\User\Http\Controllers\RoleController::destroy
 * @see Modules/User/app/Http/Controllers/RoleController.php:118
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
export const destroy = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\User\Http\Controllers\RoleController::destroy
 * @see Modules/User/app/Http/Controllers/RoleController.php:118
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
destroy.url = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    role: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                role: typeof args.role === 'object'
                ? args.role.id
                : args.role,
                }

    return destroy.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\RoleController::destroy
 * @see Modules/User/app/Http/Controllers/RoleController.php:118
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
destroy.delete = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\User\Http\Controllers\RoleController::destroy
 * @see Modules/User/app/Http/Controllers/RoleController.php:118
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
    const destroyForm = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\RoleController::destroy
 * @see Modules/User/app/Http/Controllers/RoleController.php:118
 * @route '//app.daraltauhid.test/{institution}/roles/{role}'
 */
        destroyForm.delete = (args: { institution: string | number, role: string | number | { id: string | number } } | [institution: string | number, role: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const roles = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default roles