import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
const indexb106b7b44fdc684d8c5daf8b3ee57434 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb106b7b44fdc684d8c5daf8b3ee57434.url(options),
    method: 'get',
})

indexb106b7b44fdc684d8c5daf8b3ee57434.definition = {
    methods: ["get","head"],
    url: '/api/v1/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
indexb106b7b44fdc684d8c5daf8b3ee57434.url = (options?: RouteQueryOptions) => {
    return indexb106b7b44fdc684d8c5daf8b3ee57434.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
indexb106b7b44fdc684d8c5daf8b3ee57434.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb106b7b44fdc684d8c5daf8b3ee57434.url(options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
indexb106b7b44fdc684d8c5daf8b3ee57434.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb106b7b44fdc684d8c5daf8b3ee57434.url(options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
    const indexb106b7b44fdc684d8c5daf8b3ee57434Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexb106b7b44fdc684d8c5daf8b3ee57434.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
        indexb106b7b44fdc684d8c5daf8b3ee57434Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb106b7b44fdc684d8c5daf8b3ee57434.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/api/v1/students'
 */
        indexb106b7b44fdc684d8c5daf8b3ee57434Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb106b7b44fdc684d8c5daf8b3ee57434.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexb106b7b44fdc684d8c5daf8b3ee57434.form = indexb106b7b44fdc684d8c5daf8b3ee57434Form
    /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
const index256bd316da50b30bb240fb5d05a8acc0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index256bd316da50b30bb240fb5d05a8acc0.url(options),
    method: 'get',
})

index256bd316da50b30bb240fb5d05a8acc0.definition = {
    methods: ["get","head"],
    url: '/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
index256bd316da50b30bb240fb5d05a8acc0.url = (options?: RouteQueryOptions) => {
    return index256bd316da50b30bb240fb5d05a8acc0.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
index256bd316da50b30bb240fb5d05a8acc0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index256bd316da50b30bb240fb5d05a8acc0.url(options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
index256bd316da50b30bb240fb5d05a8acc0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index256bd316da50b30bb240fb5d05a8acc0.url(options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
    const index256bd316da50b30bb240fb5d05a8acc0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index256bd316da50b30bb240fb5d05a8acc0.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
        index256bd316da50b30bb240fb5d05a8acc0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index256bd316da50b30bb240fb5d05a8acc0.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::index
 * @see Modules/Student/app/Http/Controllers/StudentController.php:13
 * @route '/students'
 */
        index256bd316da50b30bb240fb5d05a8acc0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index256bd316da50b30bb240fb5d05a8acc0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index256bd316da50b30bb240fb5d05a8acc0.form = index256bd316da50b30bb240fb5d05a8acc0Form

export const index = {
    '/api/v1/students': indexb106b7b44fdc684d8c5daf8b3ee57434,
    '/students': index256bd316da50b30bb240fb5d05a8acc0,
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
const storeb106b7b44fdc684d8c5daf8b3ee57434 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb106b7b44fdc684d8c5daf8b3ee57434.url(options),
    method: 'post',
})

storeb106b7b44fdc684d8c5daf8b3ee57434.definition = {
    methods: ["post"],
    url: '/api/v1/students',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
storeb106b7b44fdc684d8c5daf8b3ee57434.url = (options?: RouteQueryOptions) => {
    return storeb106b7b44fdc684d8c5daf8b3ee57434.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
storeb106b7b44fdc684d8c5daf8b3ee57434.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb106b7b44fdc684d8c5daf8b3ee57434.url(options),
    method: 'post',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
    const storeb106b7b44fdc684d8c5daf8b3ee57434Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeb106b7b44fdc684d8c5daf8b3ee57434.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/api/v1/students'
 */
        storeb106b7b44fdc684d8c5daf8b3ee57434Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeb106b7b44fdc684d8c5daf8b3ee57434.url(options),
            method: 'post',
        })
    
    storeb106b7b44fdc684d8c5daf8b3ee57434.form = storeb106b7b44fdc684d8c5daf8b3ee57434Form
    /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/students'
 */
const store256bd316da50b30bb240fb5d05a8acc0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store256bd316da50b30bb240fb5d05a8acc0.url(options),
    method: 'post',
})

store256bd316da50b30bb240fb5d05a8acc0.definition = {
    methods: ["post"],
    url: '/students',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/students'
 */
store256bd316da50b30bb240fb5d05a8acc0.url = (options?: RouteQueryOptions) => {
    return store256bd316da50b30bb240fb5d05a8acc0.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/students'
 */
store256bd316da50b30bb240fb5d05a8acc0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store256bd316da50b30bb240fb5d05a8acc0.url(options),
    method: 'post',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/students'
 */
    const store256bd316da50b30bb240fb5d05a8acc0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store256bd316da50b30bb240fb5d05a8acc0.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::store
 * @see Modules/Student/app/Http/Controllers/StudentController.php:29
 * @route '/students'
 */
        store256bd316da50b30bb240fb5d05a8acc0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store256bd316da50b30bb240fb5d05a8acc0.url(options),
            method: 'post',
        })
    
    store256bd316da50b30bb240fb5d05a8acc0.form = store256bd316da50b30bb240fb5d05a8acc0Form

export const store = {
    '/api/v1/students': storeb106b7b44fdc684d8c5daf8b3ee57434,
    '/students': store256bd316da50b30bb240fb5d05a8acc0,
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
const showfbe265040b410c359c96d80dd896c7a6 = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'get',
})

showfbe265040b410c359c96d80dd896c7a6.definition = {
    methods: ["get","head"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
showfbe265040b410c359c96d80dd896c7a6.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showfbe265040b410c359c96d80dd896c7a6.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
showfbe265040b410c359c96d80dd896c7a6.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
showfbe265040b410c359c96d80dd896c7a6.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showfbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
    const showfbe265040b410c359c96d80dd896c7a6Form = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showfbe265040b410c359c96d80dd896c7a6.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
        showfbe265040b410c359c96d80dd896c7a6Form.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfbe265040b410c359c96d80dd896c7a6.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/api/v1/students/{student}'
 */
        showfbe265040b410c359c96d80dd896c7a6Form.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfbe265040b410c359c96d80dd896c7a6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showfbe265040b410c359c96d80dd896c7a6.form = showfbe265040b410c359c96d80dd896c7a6Form
    /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
const show855f2187c8111b00ba1bc043928bd87a = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'get',
})

show855f2187c8111b00ba1bc043928bd87a.definition = {
    methods: ["get","head"],
    url: '/students/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
show855f2187c8111b00ba1bc043928bd87a.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show855f2187c8111b00ba1bc043928bd87a.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
show855f2187c8111b00ba1bc043928bd87a.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
show855f2187c8111b00ba1bc043928bd87a.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
    const show855f2187c8111b00ba1bc043928bd87aForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show855f2187c8111b00ba1bc043928bd87a.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
        show855f2187c8111b00ba1bc043928bd87aForm.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show855f2187c8111b00ba1bc043928bd87a.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::show
 * @see Modules/Student/app/Http/Controllers/StudentController.php:34
 * @route '/students/{student}'
 */
        show855f2187c8111b00ba1bc043928bd87aForm.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show855f2187c8111b00ba1bc043928bd87a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show855f2187c8111b00ba1bc043928bd87a.form = show855f2187c8111b00ba1bc043928bd87aForm

export const show = {
    '/api/v1/students/{student}': showfbe265040b410c359c96d80dd896c7a6,
    '/students/{student}': show855f2187c8111b00ba1bc043928bd87a,
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
const updatefbe265040b410c359c96d80dd896c7a6 = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'put',
})

updatefbe265040b410c359c96d80dd896c7a6.definition = {
    methods: ["put","patch"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
updatefbe265040b410c359c96d80dd896c7a6.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatefbe265040b410c359c96d80dd896c7a6.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
updatefbe265040b410c359c96d80dd896c7a6.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
updatefbe265040b410c359c96d80dd896c7a6.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatefbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/api/v1/students/{student}'
 */
    const updatefbe265040b410c359c96d80dd896c7a6Form = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatefbe265040b410c359c96d80dd896c7a6.url(args, {
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
        updatefbe265040b410c359c96d80dd896c7a6Form.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefbe265040b410c359c96d80dd896c7a6.url(args, {
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
        updatefbe265040b410c359c96d80dd896c7a6Form.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefbe265040b410c359c96d80dd896c7a6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatefbe265040b410c359c96d80dd896c7a6.form = updatefbe265040b410c359c96d80dd896c7a6Form
    /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/students/{student}'
 */
const update855f2187c8111b00ba1bc043928bd87a = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'put',
})

update855f2187c8111b00ba1bc043928bd87a.definition = {
    methods: ["put","patch"],
    url: '/students/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/students/{student}'
 */
update855f2187c8111b00ba1bc043928bd87a.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update855f2187c8111b00ba1bc043928bd87a.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/students/{student}'
 */
update855f2187c8111b00ba1bc043928bd87a.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/students/{student}'
 */
update855f2187c8111b00ba1bc043928bd87a.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::update
 * @see Modules/Student/app/Http/Controllers/StudentController.php:50
 * @route '/students/{student}'
 */
    const update855f2187c8111b00ba1bc043928bd87aForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update855f2187c8111b00ba1bc043928bd87a.url(args, {
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
 * @route '/students/{student}'
 */
        update855f2187c8111b00ba1bc043928bd87aForm.put = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update855f2187c8111b00ba1bc043928bd87a.url(args, {
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
 * @route '/students/{student}'
 */
        update855f2187c8111b00ba1bc043928bd87aForm.patch = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update855f2187c8111b00ba1bc043928bd87a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update855f2187c8111b00ba1bc043928bd87a.form = update855f2187c8111b00ba1bc043928bd87aForm

export const update = {
    '/api/v1/students/{student}': updatefbe265040b410c359c96d80dd896c7a6,
    '/students/{student}': update855f2187c8111b00ba1bc043928bd87a,
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
const destroyfbe265040b410c359c96d80dd896c7a6 = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'delete',
})

destroyfbe265040b410c359c96d80dd896c7a6.definition = {
    methods: ["delete"],
    url: '/api/v1/students/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
destroyfbe265040b410c359c96d80dd896c7a6.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyfbe265040b410c359c96d80dd896c7a6.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
destroyfbe265040b410c359c96d80dd896c7a6.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfbe265040b410c359c96d80dd896c7a6.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/api/v1/students/{student}'
 */
    const destroyfbe265040b410c359c96d80dd896c7a6Form = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyfbe265040b410c359c96d80dd896c7a6.url(args, {
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
        destroyfbe265040b410c359c96d80dd896c7a6Form.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyfbe265040b410c359c96d80dd896c7a6.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyfbe265040b410c359c96d80dd896c7a6.form = destroyfbe265040b410c359c96d80dd896c7a6Form
    /**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/students/{student}'
 */
const destroy855f2187c8111b00ba1bc043928bd87a = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'delete',
})

destroy855f2187c8111b00ba1bc043928bd87a.definition = {
    methods: ["delete"],
    url: '/students/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/students/{student}'
 */
destroy855f2187c8111b00ba1bc043928bd87a.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy855f2187c8111b00ba1bc043928bd87a.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/students/{student}'
 */
destroy855f2187c8111b00ba1bc043928bd87a.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy855f2187c8111b00ba1bc043928bd87a.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::destroy
 * @see Modules/Student/app/Http/Controllers/StudentController.php:55
 * @route '/students/{student}'
 */
    const destroy855f2187c8111b00ba1bc043928bd87aForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy855f2187c8111b00ba1bc043928bd87a.url(args, {
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
 * @route '/students/{student}'
 */
        destroy855f2187c8111b00ba1bc043928bd87aForm.delete = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy855f2187c8111b00ba1bc043928bd87a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy855f2187c8111b00ba1bc043928bd87a.form = destroy855f2187c8111b00ba1bc043928bd87aForm

export const destroy = {
    '/api/v1/students/{student}': destroyfbe265040b410c359c96d80dd896c7a6,
    '/students/{student}': destroy855f2187c8111b00ba1bc043928bd87a,
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/students/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::create
 * @see Modules/Student/app/Http/Controllers/StudentController.php:21
 * @route '/students/create'
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
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
export const edit = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/students/{student}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
edit.url = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
edit.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
edit.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
    const editForm = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
        editForm.get = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Student\Http\Controllers\StudentController::edit
 * @see Modules/Student/app/Http/Controllers/StudentController.php:42
 * @route '/students/{student}/edit'
 */
        editForm.head = (args: { student: string | number } | [student: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const StudentController = { index, store, show, update, destroy, create, edit }

export default StudentController