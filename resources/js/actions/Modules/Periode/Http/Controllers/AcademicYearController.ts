import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
const index1a9c7c9b8b7c46fddfda07fdf40c5148 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
    method: 'get',
})

index1a9c7c9b8b7c46fddfda07fdf40c5148.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
index1a9c7c9b8b7c46fddfda07fdf40c5148.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index1a9c7c9b8b7c46fddfda07fdf40c5148.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
index1a9c7c9b8b7c46fddfda07fdf40c5148.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
index1a9c7c9b8b7c46fddfda07fdf40c5148.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
    const index1a9c7c9b8b7c46fddfda07fdf40c5148Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
        index1a9c7c9b8b7c46fddfda07fdf40c5148Form.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
        index1a9c7c9b8b7c46fddfda07fdf40c5148Form.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index1a9c7c9b8b7c46fddfda07fdf40c5148.form = index1a9c7c9b8b7c46fddfda07fdf40c5148Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
const index630c532bb7a8b7b5500103ea6f381776 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index630c532bb7a8b7b5500103ea6f381776.url(options),
    method: 'get',
})

index630c532bb7a8b7b5500103ea6f381776.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-years',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index630c532bb7a8b7b5500103ea6f381776.url = (options?: RouteQueryOptions) => {
    return index630c532bb7a8b7b5500103ea6f381776.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index630c532bb7a8b7b5500103ea6f381776.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index630c532bb7a8b7b5500103ea6f381776.url(options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index630c532bb7a8b7b5500103ea6f381776.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index630c532bb7a8b7b5500103ea6f381776.url(options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
    const index630c532bb7a8b7b5500103ea6f381776Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index630c532bb7a8b7b5500103ea6f381776.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
        index630c532bb7a8b7b5500103ea6f381776Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index630c532bb7a8b7b5500103ea6f381776.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
        index630c532bb7a8b7b5500103ea6f381776Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index630c532bb7a8b7b5500103ea6f381776.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index630c532bb7a8b7b5500103ea6f381776.form = index630c532bb7a8b7b5500103ea6f381776Form

export const index = {
    '//app.daraltauhid.test/{institution}/academic-years': index1a9c7c9b8b7c46fddfda07fdf40c5148,
    '/api/v1/academic-years': index630c532bb7a8b7b5500103ea6f381776,
}

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
const store1a9c7c9b8b7c46fddfda07fdf40c5148 = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
    method: 'post',
})

store1a9c7c9b8b7c46fddfda07fdf40c5148.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/academic-years',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
store1a9c7c9b8b7c46fddfda07fdf40c5148.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store1a9c7c9b8b7c46fddfda07fdf40c5148.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
store1a9c7c9b8b7c46fddfda07fdf40c5148.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
    const store1a9c7c9b8b7c46fddfda07fdf40c5148Form = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '//app.daraltauhid.test/{institution}/academic-years'
 */
        store1a9c7c9b8b7c46fddfda07fdf40c5148Form.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store1a9c7c9b8b7c46fddfda07fdf40c5148.url(args, options),
            method: 'post',
        })
    
    store1a9c7c9b8b7c46fddfda07fdf40c5148.form = store1a9c7c9b8b7c46fddfda07fdf40c5148Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
const store630c532bb7a8b7b5500103ea6f381776 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store630c532bb7a8b7b5500103ea6f381776.url(options),
    method: 'post',
})

store630c532bb7a8b7b5500103ea6f381776.definition = {
    methods: ["post"],
    url: '/api/v1/academic-years',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
store630c532bb7a8b7b5500103ea6f381776.url = (options?: RouteQueryOptions) => {
    return store630c532bb7a8b7b5500103ea6f381776.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
store630c532bb7a8b7b5500103ea6f381776.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store630c532bb7a8b7b5500103ea6f381776.url(options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
    const store630c532bb7a8b7b5500103ea6f381776Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store630c532bb7a8b7b5500103ea6f381776.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
        store630c532bb7a8b7b5500103ea6f381776Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store630c532bb7a8b7b5500103ea6f381776.url(options),
            method: 'post',
        })
    
    store630c532bb7a8b7b5500103ea6f381776.form = store630c532bb7a8b7b5500103ea6f381776Form

export const store = {
    '//app.daraltauhid.test/{institution}/academic-years': store1a9c7c9b8b7c46fddfda07fdf40c5148,
    '/api/v1/academic-years': store630c532bb7a8b7b5500103ea6f381776,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
const show1c52de57a3ab9a377902dd5b7bca7a74 = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'get',
})

show1c52de57a3ab9a377902dd5b7bca7a74.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show1c52de57a3ab9a377902dd5b7bca7a74.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
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

    return show1c52de57a3ab9a377902dd5b7bca7a74.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show1c52de57a3ab9a377902dd5b7bca7a74.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
show1c52de57a3ab9a377902dd5b7bca7a74.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const show1c52de57a3ab9a377902dd5b7bca7a74Form = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        show1c52de57a3ab9a377902dd5b7bca7a74Form.get = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
        show1c52de57a3ab9a377902dd5b7bca7a74Form.head = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show1c52de57a3ab9a377902dd5b7bca7a74.form = show1c52de57a3ab9a377902dd5b7bca7a74Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
const show9e44040e6ffa27b3a879caf6e747751e = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'get',
})

show9e44040e6ffa27b3a879caf6e747751e.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show9e44040e6ffa27b3a879caf6e747751e.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_year: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_year: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_year: args.academic_year,
                }

    return show9e44040e6ffa27b3a879caf6e747751e.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show9e44040e6ffa27b3a879caf6e747751e.get = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show9e44040e6ffa27b3a879caf6e747751e.head = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const show9e44040e6ffa27b3a879caf6e747751eForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show9e44040e6ffa27b3a879caf6e747751e.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
        show9e44040e6ffa27b3a879caf6e747751eForm.get = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9e44040e6ffa27b3a879caf6e747751e.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
        show9e44040e6ffa27b3a879caf6e747751eForm.head = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9e44040e6ffa27b3a879caf6e747751e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show9e44040e6ffa27b3a879caf6e747751e.form = show9e44040e6ffa27b3a879caf6e747751eForm

export const show = {
    '//app.daraltauhid.test/{institution}/academic-years/{academic_year}': show1c52de57a3ab9a377902dd5b7bca7a74,
    '/api/v1/academic-years/{academic_year}': show9e44040e6ffa27b3a879caf6e747751e,
}

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
const update1c52de57a3ab9a377902dd5b7bca7a74 = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'put',
})

update1c52de57a3ab9a377902dd5b7bca7a74.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update1c52de57a3ab9a377902dd5b7bca7a74.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
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

    return update1c52de57a3ab9a377902dd5b7bca7a74.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update1c52de57a3ab9a377902dd5b7bca7a74.put = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
update1c52de57a3ab9a377902dd5b7bca7a74.patch = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const update1c52de57a3ab9a377902dd5b7bca7a74Form = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
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
        update1c52de57a3ab9a377902dd5b7bca7a74Form.put = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
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
        update1c52de57a3ab9a377902dd5b7bca7a74Form.patch = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update1c52de57a3ab9a377902dd5b7bca7a74.form = update1c52de57a3ab9a377902dd5b7bca7a74Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
const update9e44040e6ffa27b3a879caf6e747751e = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'put',
})

update9e44040e6ffa27b3a879caf6e747751e.definition = {
    methods: ["put","patch"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update9e44040e6ffa27b3a879caf6e747751e.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_year: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_year: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_year: args.academic_year,
                }

    return update9e44040e6ffa27b3a879caf6e747751e.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update9e44040e6ffa27b3a879caf6e747751e.put = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update9e44040e6ffa27b3a879caf6e747751e.patch = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const update9e44040e6ffa27b3a879caf6e747751eForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update9e44040e6ffa27b3a879caf6e747751e.url(args, {
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        update9e44040e6ffa27b3a879caf6e747751eForm.put = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update9e44040e6ffa27b3a879caf6e747751e.url(args, {
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        update9e44040e6ffa27b3a879caf6e747751eForm.patch = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update9e44040e6ffa27b3a879caf6e747751e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update9e44040e6ffa27b3a879caf6e747751e.form = update9e44040e6ffa27b3a879caf6e747751eForm

export const update = {
    '//app.daraltauhid.test/{institution}/academic-years/{academic_year}': update1c52de57a3ab9a377902dd5b7bca7a74,
    '/api/v1/academic-years/{academic_year}': update9e44040e6ffa27b3a879caf6e747751e,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
const destroy1c52de57a3ab9a377902dd5b7bca7a74 = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'delete',
})

destroy1c52de57a3ab9a377902dd5b7bca7a74.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/academic-years/{academic_year}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
destroy1c52de57a3ab9a377902dd5b7bca7a74.url = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions) => {
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

    return destroy1c52de57a3ab9a377902dd5b7bca7a74.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
destroy1c52de57a3ab9a377902dd5b7bca7a74.delete = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1c52de57a3ab9a377902dd5b7bca7a74.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '//app.daraltauhid.test/{institution}/academic-years/{academic_year}'
 */
    const destroy1c52de57a3ab9a377902dd5b7bca7a74Form = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
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
        destroy1c52de57a3ab9a377902dd5b7bca7a74Form.delete = (args: { institution: string | number, academic_year: string | number } | [institution: string | number, academic_year: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy1c52de57a3ab9a377902dd5b7bca7a74.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy1c52de57a3ab9a377902dd5b7bca7a74.form = destroy1c52de57a3ab9a377902dd5b7bca7a74Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
const destroy9e44040e6ffa27b3a879caf6e747751e = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'delete',
})

destroy9e44040e6ffa27b3a879caf6e747751e.definition = {
    methods: ["delete"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
destroy9e44040e6ffa27b3a879caf6e747751e.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_year: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_year: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_year: args.academic_year,
                }

    return destroy9e44040e6ffa27b3a879caf6e747751e.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
destroy9e44040e6ffa27b3a879caf6e747751e.delete = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9e44040e6ffa27b3a879caf6e747751e.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const destroy9e44040e6ffa27b3a879caf6e747751eForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy9e44040e6ffa27b3a879caf6e747751e.url(args, {
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        destroy9e44040e6ffa27b3a879caf6e747751eForm.delete = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy9e44040e6ffa27b3a879caf6e747751e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy9e44040e6ffa27b3a879caf6e747751e.form = destroy9e44040e6ffa27b3a879caf6e747751eForm

export const destroy = {
    '//app.daraltauhid.test/{institution}/academic-years/{academic_year}': destroy1c52de57a3ab9a377902dd5b7bca7a74,
    '/api/v1/academic-years/{academic_year}': destroy9e44040e6ffa27b3a879caf6e747751e,
}

const AcademicYearController = { index, create, store, show, edit, update, destroy }

export default AcademicYearController