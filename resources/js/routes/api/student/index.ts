import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
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
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/students',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
export const show = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
show.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    student: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        student: args.student,
                }

    return show.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
show.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
show.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
    const showForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
        showForm.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
        showForm.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
export const update = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
update.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    student: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        student: args.student,
                }

    return update.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
update.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
update.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
    const updateForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
        updateForm.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
        updateForm.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
export const destroy = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
destroy.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    student: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        student: args.student,
                }

    return destroy.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
destroy.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
    const destroyForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
        destroyForm.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const student = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default student