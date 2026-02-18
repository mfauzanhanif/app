import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
const index6c0ade04d7693173d327757d45675b9a = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6c0ade04d7693173d327757d45675b9a.url(args, options),
    method: 'get',
})

index6c0ade04d7693173d327757d45675b9a.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/semesters',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
index6c0ade04d7693173d327757d45675b9a.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index6c0ade04d7693173d327757d45675b9a.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
index6c0ade04d7693173d327757d45675b9a.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6c0ade04d7693173d327757d45675b9a.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
index6c0ade04d7693173d327757d45675b9a.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6c0ade04d7693173d327757d45675b9a.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
    const index6c0ade04d7693173d327757d45675b9aForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6c0ade04d7693173d327757d45675b9a.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
        index6c0ade04d7693173d327757d45675b9aForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6c0ade04d7693173d327757d45675b9a.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
        index6c0ade04d7693173d327757d45675b9aForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6c0ade04d7693173d327757d45675b9a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6c0ade04d7693173d327757d45675b9a.form = index6c0ade04d7693173d327757d45675b9aForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
const index431fea43d6d4085eff007f9831797ec7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index431fea43d6d4085eff007f9831797ec7.url(options),
    method: 'get',
})

index431fea43d6d4085eff007f9831797ec7.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
index431fea43d6d4085eff007f9831797ec7.url = (options?: RouteQueryOptions) => {
    return index431fea43d6d4085eff007f9831797ec7.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
index431fea43d6d4085eff007f9831797ec7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index431fea43d6d4085eff007f9831797ec7.url(options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
index431fea43d6d4085eff007f9831797ec7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index431fea43d6d4085eff007f9831797ec7.url(options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
    const index431fea43d6d4085eff007f9831797ec7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index431fea43d6d4085eff007f9831797ec7.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
        index431fea43d6d4085eff007f9831797ec7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index431fea43d6d4085eff007f9831797ec7.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '/api/v1/academic-periods'
 */
        index431fea43d6d4085eff007f9831797ec7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index431fea43d6d4085eff007f9831797ec7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index431fea43d6d4085eff007f9831797ec7.form = index431fea43d6d4085eff007f9831797ec7Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
const indexd231020e6446f5555e184f15137c8a8e = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd231020e6446f5555e184f15137c8a8e.url(args, options),
    method: 'get',
})

indexd231020e6446f5555e184f15137c8a8e.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
indexd231020e6446f5555e184f15137c8a8e.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return indexd231020e6446f5555e184f15137c8a8e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
indexd231020e6446f5555e184f15137c8a8e.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd231020e6446f5555e184f15137c8a8e.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
indexd231020e6446f5555e184f15137c8a8e.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd231020e6446f5555e184f15137c8a8e.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
    const indexd231020e6446f5555e184f15137c8a8eForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexd231020e6446f5555e184f15137c8a8e.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
        indexd231020e6446f5555e184f15137c8a8eForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd231020e6446f5555e184f15137c8a8e.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:18
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
        indexd231020e6446f5555e184f15137c8a8eForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexd231020e6446f5555e184f15137c8a8e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexd231020e6446f5555e184f15137c8a8e.form = indexd231020e6446f5555e184f15137c8a8eForm

export const index = {
    '//app.daraltauhid.test/{institution}/semesters': index6c0ade04d7693173d327757d45675b9a,
    '/api/v1/academic-periods': index431fea43d6d4085eff007f9831797ec7,
    '//app.daraltauhid.test/{institution}/academic-periods': indexd231020e6446f5555e184f15137c8a8e,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
const create880df158c956eb1dbd902ade81aadd1b = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create880df158c956eb1dbd902ade81aadd1b.url(args, options),
    method: 'get',
})

create880df158c956eb1dbd902ade81aadd1b.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/semesters/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
create880df158c956eb1dbd902ade81aadd1b.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create880df158c956eb1dbd902ade81aadd1b.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
create880df158c956eb1dbd902ade81aadd1b.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create880df158c956eb1dbd902ade81aadd1b.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
create880df158c956eb1dbd902ade81aadd1b.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create880df158c956eb1dbd902ade81aadd1b.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
    const create880df158c956eb1dbd902ade81aadd1bForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create880df158c956eb1dbd902ade81aadd1b.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
        create880df158c956eb1dbd902ade81aadd1bForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create880df158c956eb1dbd902ade81aadd1b.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/semesters/create'
 */
        create880df158c956eb1dbd902ade81aadd1bForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create880df158c956eb1dbd902ade81aadd1b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create880df158c956eb1dbd902ade81aadd1b.form = create880df158c956eb1dbd902ade81aadd1bForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
const createded2646ebe264ed3c4c378153bf6348f = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createded2646ebe264ed3c4c378153bf6348f.url(args, options),
    method: 'get',
})

createded2646ebe264ed3c4c378153bf6348f.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
createded2646ebe264ed3c4c378153bf6348f.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return createded2646ebe264ed3c4c378153bf6348f.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
createded2646ebe264ed3c4c378153bf6348f.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createded2646ebe264ed3c4c378153bf6348f.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
createded2646ebe264ed3c4c378153bf6348f.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createded2646ebe264ed3c4c378153bf6348f.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
    const createded2646ebe264ed3c4c378153bf6348fForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: createded2646ebe264ed3c4c378153bf6348f.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
        createded2646ebe264ed3c4c378153bf6348fForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: createded2646ebe264ed3c4c378153bf6348f.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::create
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:32
 * @route '//app.daraltauhid.test/{institution}/academic-periods/create'
 */
        createded2646ebe264ed3c4c378153bf6348fForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: createded2646ebe264ed3c4c378153bf6348f.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    createded2646ebe264ed3c4c378153bf6348f.form = createded2646ebe264ed3c4c378153bf6348fForm

export const create = {
    '//app.daraltauhid.test/{institution}/semesters/create': create880df158c956eb1dbd902ade81aadd1b,
    '//app.daraltauhid.test/{institution}/academic-periods/create': createded2646ebe264ed3c4c378153bf6348f,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
const store6c0ade04d7693173d327757d45675b9a = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6c0ade04d7693173d327757d45675b9a.url(args, options),
    method: 'post',
})

store6c0ade04d7693173d327757d45675b9a.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/semesters',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
store6c0ade04d7693173d327757d45675b9a.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store6c0ade04d7693173d327757d45675b9a.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
store6c0ade04d7693173d327757d45675b9a.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6c0ade04d7693173d327757d45675b9a.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
    const store6c0ade04d7693173d327757d45675b9aForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store6c0ade04d7693173d327757d45675b9a.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/semesters'
 */
        store6c0ade04d7693173d327757d45675b9aForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store6c0ade04d7693173d327757d45675b9a.url(args, options),
            method: 'post',
        })
    
    store6c0ade04d7693173d327757d45675b9a.form = store6c0ade04d7693173d327757d45675b9aForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '/api/v1/academic-periods'
 */
const store431fea43d6d4085eff007f9831797ec7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store431fea43d6d4085eff007f9831797ec7.url(options),
    method: 'post',
})

store431fea43d6d4085eff007f9831797ec7.definition = {
    methods: ["post"],
    url: '/api/v1/academic-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '/api/v1/academic-periods'
 */
store431fea43d6d4085eff007f9831797ec7.url = (options?: RouteQueryOptions) => {
    return store431fea43d6d4085eff007f9831797ec7.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '/api/v1/academic-periods'
 */
store431fea43d6d4085eff007f9831797ec7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store431fea43d6d4085eff007f9831797ec7.url(options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '/api/v1/academic-periods'
 */
    const store431fea43d6d4085eff007f9831797ec7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store431fea43d6d4085eff007f9831797ec7.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '/api/v1/academic-periods'
 */
        store431fea43d6d4085eff007f9831797ec7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store431fea43d6d4085eff007f9831797ec7.url(options),
            method: 'post',
        })
    
    store431fea43d6d4085eff007f9831797ec7.form = store431fea43d6d4085eff007f9831797ec7Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
const stored231020e6446f5555e184f15137c8a8e = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored231020e6446f5555e184f15137c8a8e.url(args, options),
    method: 'post',
})

stored231020e6446f5555e184f15137c8a8e.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/academic-periods',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
stored231020e6446f5555e184f15137c8a8e.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stored231020e6446f5555e184f15137c8a8e.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
stored231020e6446f5555e184f15137c8a8e.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored231020e6446f5555e184f15137c8a8e.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
    const stored231020e6446f5555e184f15137c8a8eForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stored231020e6446f5555e184f15137c8a8e.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:44
 * @route '//app.daraltauhid.test/{institution}/academic-periods'
 */
        stored231020e6446f5555e184f15137c8a8eForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stored231020e6446f5555e184f15137c8a8e.url(args, options),
            method: 'post',
        })
    
    stored231020e6446f5555e184f15137c8a8e.form = stored231020e6446f5555e184f15137c8a8eForm

export const store = {
    '//app.daraltauhid.test/{institution}/semesters': store6c0ade04d7693173d327757d45675b9a,
    '/api/v1/academic-periods': store431fea43d6d4085eff007f9831797ec7,
    '//app.daraltauhid.test/{institution}/academic-periods': stored231020e6446f5555e184f15137c8a8e,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
const show74d8c1d1bd2cd44a681466250e97cb0c = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'get',
})

show74d8c1d1bd2cd44a681466250e97cb0c.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/semesters/{semester}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
show74d8c1d1bd2cd44a681466250e97cb0c.url = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    semester: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                semester: args.semester,
                }

    return show74d8c1d1bd2cd44a681466250e97cb0c.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{semester}', parsedArgs.semester.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
show74d8c1d1bd2cd44a681466250e97cb0c.get = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
show74d8c1d1bd2cd44a681466250e97cb0c.head = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
    const show74d8c1d1bd2cd44a681466250e97cb0cForm = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
        show74d8c1d1bd2cd44a681466250e97cb0cForm.get = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
        show74d8c1d1bd2cd44a681466250e97cb0cForm.head = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show74d8c1d1bd2cd44a681466250e97cb0c.form = show74d8c1d1bd2cd44a681466250e97cb0cForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
const show2e6337ea9463d433715cbbfd4114608a = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'get',
})

show2e6337ea9463d433715cbbfd4114608a.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-periods/{academic_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
show2e6337ea9463d433715cbbfd4114608a.url = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_period: args.academic_period,
                }

    return show2e6337ea9463d433715cbbfd4114608a.definition.url
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
show2e6337ea9463d433715cbbfd4114608a.get = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
show2e6337ea9463d433715cbbfd4114608a.head = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
    const show2e6337ea9463d433715cbbfd4114608aForm = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show2e6337ea9463d433715cbbfd4114608a.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
        show2e6337ea9463d433715cbbfd4114608aForm.get = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2e6337ea9463d433715cbbfd4114608a.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '/api/v1/academic-periods/{academic_period}'
 */
        show2e6337ea9463d433715cbbfd4114608aForm.head = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2e6337ea9463d433715cbbfd4114608a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show2e6337ea9463d433715cbbfd4114608a.form = show2e6337ea9463d433715cbbfd4114608aForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
const showf3d40c08942455ddbcb86c9397829b09 = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'get',
})

showf3d40c08942455ddbcb86c9397829b09.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
showf3d40c08942455ddbcb86c9397829b09.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
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

    return showf3d40c08942455ddbcb86c9397829b09.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
showf3d40c08942455ddbcb86c9397829b09.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
showf3d40c08942455ddbcb86c9397829b09.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const showf3d40c08942455ddbcb86c9397829b09Form = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf3d40c08942455ddbcb86c9397829b09.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        showf3d40c08942455ddbcb86c9397829b09Form.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf3d40c08942455ddbcb86c9397829b09.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:67
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
        showf3d40c08942455ddbcb86c9397829b09Form.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf3d40c08942455ddbcb86c9397829b09.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf3d40c08942455ddbcb86c9397829b09.form = showf3d40c08942455ddbcb86c9397829b09Form

export const show = {
    '//app.daraltauhid.test/{institution}/semesters/{semester}': show74d8c1d1bd2cd44a681466250e97cb0c,
    '/api/v1/academic-periods/{academic_period}': show2e6337ea9463d433715cbbfd4114608a,
    '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}': showf3d40c08942455ddbcb86c9397829b09,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
const edit62da35ff488dfea9b6cf5084d3b3cdc2 = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, options),
    method: 'get',
})

edit62da35ff488dfea9b6cf5084d3b3cdc2.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/semesters/{semester}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
edit62da35ff488dfea9b6cf5084d3b3cdc2.url = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    semester: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                semester: args.semester,
                }

    return edit62da35ff488dfea9b6cf5084d3b3cdc2.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{semester}', parsedArgs.semester.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
edit62da35ff488dfea9b6cf5084d3b3cdc2.get = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
edit62da35ff488dfea9b6cf5084d3b3cdc2.head = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
    const edit62da35ff488dfea9b6cf5084d3b3cdc2Form = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
        edit62da35ff488dfea9b6cf5084d3b3cdc2Form.get = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}/edit'
 */
        edit62da35ff488dfea9b6cf5084d3b3cdc2Form.head = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit62da35ff488dfea9b6cf5084d3b3cdc2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit62da35ff488dfea9b6cf5084d3b3cdc2.form = edit62da35ff488dfea9b6cf5084d3b3cdc2Form
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
const edit9d584dbc91c28d355f61cf13dafec182 = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9d584dbc91c28d355f61cf13dafec182.url(args, options),
    method: 'get',
})

edit9d584dbc91c28d355f61cf13dafec182.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit9d584dbc91c28d355f61cf13dafec182.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
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

    return edit9d584dbc91c28d355f61cf13dafec182.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit9d584dbc91c28d355f61cf13dafec182.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9d584dbc91c28d355f61cf13dafec182.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
edit9d584dbc91c28d355f61cf13dafec182.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit9d584dbc91c28d355f61cf13dafec182.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
    const edit9d584dbc91c28d355f61cf13dafec182Form = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit9d584dbc91c28d355f61cf13dafec182.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
        edit9d584dbc91c28d355f61cf13dafec182Form.get = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit9d584dbc91c28d355f61cf13dafec182.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::edit
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:75
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit'
 */
        edit9d584dbc91c28d355f61cf13dafec182Form.head = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit9d584dbc91c28d355f61cf13dafec182.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit9d584dbc91c28d355f61cf13dafec182.form = edit9d584dbc91c28d355f61cf13dafec182Form

export const edit = {
    '//app.daraltauhid.test/{institution}/semesters/{semester}/edit': edit62da35ff488dfea9b6cf5084d3b3cdc2,
    '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}/edit': edit9d584dbc91c28d355f61cf13dafec182,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
const update74d8c1d1bd2cd44a681466250e97cb0c = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'put',
})

update74d8c1d1bd2cd44a681466250e97cb0c.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/semesters/{semester}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
update74d8c1d1bd2cd44a681466250e97cb0c.url = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    semester: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                semester: args.semester,
                }

    return update74d8c1d1bd2cd44a681466250e97cb0c.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{semester}', parsedArgs.semester.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
update74d8c1d1bd2cd44a681466250e97cb0c.put = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
update74d8c1d1bd2cd44a681466250e97cb0c.patch = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
    const update74d8c1d1bd2cd44a681466250e97cb0cForm = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
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
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
        update74d8c1d1bd2cd44a681466250e97cb0cForm.put = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
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
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
        update74d8c1d1bd2cd44a681466250e97cb0cForm.patch = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update74d8c1d1bd2cd44a681466250e97cb0c.form = update74d8c1d1bd2cd44a681466250e97cb0cForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '/api/v1/academic-periods/{academic_period}'
 */
const update2e6337ea9463d433715cbbfd4114608a = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'put',
})

update2e6337ea9463d433715cbbfd4114608a.definition = {
    methods: ["put","patch"],
    url: '/api/v1/academic-periods/{academic_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '/api/v1/academic-periods/{academic_period}'
 */
update2e6337ea9463d433715cbbfd4114608a.url = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_period: args.academic_period,
                }

    return update2e6337ea9463d433715cbbfd4114608a.definition.url
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '/api/v1/academic-periods/{academic_period}'
 */
update2e6337ea9463d433715cbbfd4114608a.put = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '/api/v1/academic-periods/{academic_period}'
 */
update2e6337ea9463d433715cbbfd4114608a.patch = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '/api/v1/academic-periods/{academic_period}'
 */
    const update2e6337ea9463d433715cbbfd4114608aForm = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update2e6337ea9463d433715cbbfd4114608a.url(args, {
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
 * @route '/api/v1/academic-periods/{academic_period}'
 */
        update2e6337ea9463d433715cbbfd4114608aForm.put = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update2e6337ea9463d433715cbbfd4114608a.url(args, {
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
 * @route '/api/v1/academic-periods/{academic_period}'
 */
        update2e6337ea9463d433715cbbfd4114608aForm.patch = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update2e6337ea9463d433715cbbfd4114608a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update2e6337ea9463d433715cbbfd4114608a.form = update2e6337ea9463d433715cbbfd4114608aForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
const updatef3d40c08942455ddbcb86c9397829b09 = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'put',
})

updatef3d40c08942455ddbcb86c9397829b09.definition = {
    methods: ["put","patch"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
updatef3d40c08942455ddbcb86c9397829b09.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
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

    return updatef3d40c08942455ddbcb86c9397829b09.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
updatef3d40c08942455ddbcb86c9397829b09.put = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
updatef3d40c08942455ddbcb86c9397829b09.patch = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:88
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const updatef3d40c08942455ddbcb86c9397829b09Form = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef3d40c08942455ddbcb86c9397829b09.url(args, {
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
        updatef3d40c08942455ddbcb86c9397829b09Form.put = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef3d40c08942455ddbcb86c9397829b09.url(args, {
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
        updatef3d40c08942455ddbcb86c9397829b09Form.patch = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef3d40c08942455ddbcb86c9397829b09.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef3d40c08942455ddbcb86c9397829b09.form = updatef3d40c08942455ddbcb86c9397829b09Form

export const update = {
    '//app.daraltauhid.test/{institution}/semesters/{semester}': update74d8c1d1bd2cd44a681466250e97cb0c,
    '/api/v1/academic-periods/{academic_period}': update2e6337ea9463d433715cbbfd4114608a,
    '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}': updatef3d40c08942455ddbcb86c9397829b09,
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
const destroy74d8c1d1bd2cd44a681466250e97cb0c = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'delete',
})

destroy74d8c1d1bd2cd44a681466250e97cb0c.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/semesters/{semester}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
destroy74d8c1d1bd2cd44a681466250e97cb0c.url = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    semester: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                semester: args.semester,
                }

    return destroy74d8c1d1bd2cd44a681466250e97cb0c.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{semester}', parsedArgs.semester.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
destroy74d8c1d1bd2cd44a681466250e97cb0c.delete = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy74d8c1d1bd2cd44a681466250e97cb0c.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
    const destroy74d8c1d1bd2cd44a681466250e97cb0cForm = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
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
 * @route '//app.daraltauhid.test/{institution}/semesters/{semester}'
 */
        destroy74d8c1d1bd2cd44a681466250e97cb0cForm.delete = (args: { institution: string | number, semester: string | number } | [institution: string | number, semester: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy74d8c1d1bd2cd44a681466250e97cb0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy74d8c1d1bd2cd44a681466250e97cb0c.form = destroy74d8c1d1bd2cd44a681466250e97cb0cForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '/api/v1/academic-periods/{academic_period}'
 */
const destroy2e6337ea9463d433715cbbfd4114608a = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'delete',
})

destroy2e6337ea9463d433715cbbfd4114608a.definition = {
    methods: ["delete"],
    url: '/api/v1/academic-periods/{academic_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '/api/v1/academic-periods/{academic_period}'
 */
destroy2e6337ea9463d433715cbbfd4114608a.url = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_period: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    academic_period: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        academic_period: args.academic_period,
                }

    return destroy2e6337ea9463d433715cbbfd4114608a.definition.url
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '/api/v1/academic-periods/{academic_period}'
 */
destroy2e6337ea9463d433715cbbfd4114608a.delete = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2e6337ea9463d433715cbbfd4114608a.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '/api/v1/academic-periods/{academic_period}'
 */
    const destroy2e6337ea9463d433715cbbfd4114608aForm = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy2e6337ea9463d433715cbbfd4114608a.url(args, {
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
 * @route '/api/v1/academic-periods/{academic_period}'
 */
        destroy2e6337ea9463d433715cbbfd4114608aForm.delete = (args: { academic_period: string | number } | [academic_period: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy2e6337ea9463d433715cbbfd4114608a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy2e6337ea9463d433715cbbfd4114608a.form = destroy2e6337ea9463d433715cbbfd4114608aForm
    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
const destroyf3d40c08942455ddbcb86c9397829b09 = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'delete',
})

destroyf3d40c08942455ddbcb86c9397829b09.definition = {
    methods: ["delete"],
    url: '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
destroyf3d40c08942455ddbcb86c9397829b09.url = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions) => {
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

    return destroyf3d40c08942455ddbcb86c9397829b09.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{academic_period}', parsedArgs.academic_period.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
destroyf3d40c08942455ddbcb86c9397829b09.delete = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf3d40c08942455ddbcb86c9397829b09.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicPeriodController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicPeriodController.php:109
 * @route '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}'
 */
    const destroyf3d40c08942455ddbcb86c9397829b09Form = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyf3d40c08942455ddbcb86c9397829b09.url(args, {
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
        destroyf3d40c08942455ddbcb86c9397829b09Form.delete = (args: { institution: string | number, academic_period: string | number } | [institution: string | number, academic_period: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyf3d40c08942455ddbcb86c9397829b09.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyf3d40c08942455ddbcb86c9397829b09.form = destroyf3d40c08942455ddbcb86c9397829b09Form

export const destroy = {
    '//app.daraltauhid.test/{institution}/semesters/{semester}': destroy74d8c1d1bd2cd44a681466250e97cb0c,
    '/api/v1/academic-periods/{academic_period}': destroy2e6337ea9463d433715cbbfd4114608a,
    '//app.daraltauhid.test/{institution}/academic-periods/{academic_period}': destroyf3d40c08942455ddbcb86c9397829b09,
}

const AcademicPeriodController = { index, create, store, show, edit, update, destroy }

export default AcademicPeriodController