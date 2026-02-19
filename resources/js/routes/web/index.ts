import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/webs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::index
 * @see Modules/Web/app/Http/Controllers/WebController.php:13
 * @route '/webs'
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
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/webs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::store
 * @see Modules/Web/app/Http/Controllers/WebController.php:29
 * @route '/webs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
export const show = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
show.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
    const showForm = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
        showForm.get = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Web\Http\Controllers\WebController::show
 * @see Modules/Web/app/Http/Controllers/WebController.php:34
 * @route '/webs/{web}'
 */
        showForm.head = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
export const update = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
update.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::update
 * @see Modules/Web/app/Http/Controllers/WebController.php:50
 * @route '/webs/{web}'
 */
    const updateForm = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
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
        updateForm.put = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
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
        updateForm.patch = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
export const destroy = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/webs/{web}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
destroy.url = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{web}', parsedArgs.web.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
destroy.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Web\Http\Controllers\WebController::destroy
 * @see Modules/Web/app/Http/Controllers/WebController.php:55
 * @route '/webs/{web}'
 */
    const destroyForm = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
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
        destroyForm.delete = (args: { web: string | number } | [web: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const web = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default web