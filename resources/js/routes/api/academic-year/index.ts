import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-years',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::index
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:17
 * @route '/api/v1/academic-years'
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/academic-years',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::store
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:37
 * @route '/api/v1/academic-years'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
export const show = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show.get = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
show.head = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const showForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
        showForm.get = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::show
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:52
 * @route '/api/v1/academic-years/{academic_year}'
 */
        showForm.head = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
export const update = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update.put = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
update.patch = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::update
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:71
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const updateForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        updateForm.put = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        updateForm.patch = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
export const destroy = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/academic-years/{academic_year}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
destroy.url = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
destroy.delete = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Periode\Http\Controllers\AcademicYearController::destroy
 * @see Modules/Periode/app/Http/Controllers/AcademicYearController.php:86
 * @route '/api/v1/academic-years/{academic_year}'
 */
    const destroyForm = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/v1/academic-years/{academic_year}'
 */
        destroyForm.delete = (args: { academic_year: string | number } | [academic_year: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default academicYear