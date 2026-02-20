import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
const indexe52a29d8365e38fe4b22b98347809557 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe52a29d8365e38fe4b22b98347809557.url(options),
    method: 'get',
})

indexe52a29d8365e38fe4b22b98347809557.definition = {
    methods: ["get","head"],
    url: '/api/v1/employees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
indexe52a29d8365e38fe4b22b98347809557.url = (options?: RouteQueryOptions) => {
    return indexe52a29d8365e38fe4b22b98347809557.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
indexe52a29d8365e38fe4b22b98347809557.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe52a29d8365e38fe4b22b98347809557.url(options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
indexe52a29d8365e38fe4b22b98347809557.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe52a29d8365e38fe4b22b98347809557.url(options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
    const indexe52a29d8365e38fe4b22b98347809557Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexe52a29d8365e38fe4b22b98347809557.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
        indexe52a29d8365e38fe4b22b98347809557Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe52a29d8365e38fe4b22b98347809557.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/api/v1/employees'
 */
        indexe52a29d8365e38fe4b22b98347809557Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe52a29d8365e38fe4b22b98347809557.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexe52a29d8365e38fe4b22b98347809557.form = indexe52a29d8365e38fe4b22b98347809557Form
    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
const indexc354eed709c24260c12dd5a68c7824df = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc354eed709c24260c12dd5a68c7824df.url(options),
    method: 'get',
})

indexc354eed709c24260c12dd5a68c7824df.definition = {
    methods: ["get","head"],
    url: '/employees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
indexc354eed709c24260c12dd5a68c7824df.url = (options?: RouteQueryOptions) => {
    return indexc354eed709c24260c12dd5a68c7824df.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
indexc354eed709c24260c12dd5a68c7824df.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc354eed709c24260c12dd5a68c7824df.url(options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
indexc354eed709c24260c12dd5a68c7824df.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc354eed709c24260c12dd5a68c7824df.url(options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
    const indexc354eed709c24260c12dd5a68c7824dfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc354eed709c24260c12dd5a68c7824df.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
        indexc354eed709c24260c12dd5a68c7824dfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc354eed709c24260c12dd5a68c7824df.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::index
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:22
 * @route '/employees'
 */
        indexc354eed709c24260c12dd5a68c7824dfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc354eed709c24260c12dd5a68c7824df.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc354eed709c24260c12dd5a68c7824df.form = indexc354eed709c24260c12dd5a68c7824dfForm

export const index = {
    '/api/v1/employees': indexe52a29d8365e38fe4b22b98347809557,
    '/employees': indexc354eed709c24260c12dd5a68c7824df,
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/api/v1/employees'
 */
const storee52a29d8365e38fe4b22b98347809557 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee52a29d8365e38fe4b22b98347809557.url(options),
    method: 'post',
})

storee52a29d8365e38fe4b22b98347809557.definition = {
    methods: ["post"],
    url: '/api/v1/employees',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/api/v1/employees'
 */
storee52a29d8365e38fe4b22b98347809557.url = (options?: RouteQueryOptions) => {
    return storee52a29d8365e38fe4b22b98347809557.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/api/v1/employees'
 */
storee52a29d8365e38fe4b22b98347809557.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee52a29d8365e38fe4b22b98347809557.url(options),
    method: 'post',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/api/v1/employees'
 */
    const storee52a29d8365e38fe4b22b98347809557Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storee52a29d8365e38fe4b22b98347809557.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/api/v1/employees'
 */
        storee52a29d8365e38fe4b22b98347809557Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storee52a29d8365e38fe4b22b98347809557.url(options),
            method: 'post',
        })
    
    storee52a29d8365e38fe4b22b98347809557.form = storee52a29d8365e38fe4b22b98347809557Form
    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/employees'
 */
const storec354eed709c24260c12dd5a68c7824df = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec354eed709c24260c12dd5a68c7824df.url(options),
    method: 'post',
})

storec354eed709c24260c12dd5a68c7824df.definition = {
    methods: ["post"],
    url: '/employees',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/employees'
 */
storec354eed709c24260c12dd5a68c7824df.url = (options?: RouteQueryOptions) => {
    return storec354eed709c24260c12dd5a68c7824df.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/employees'
 */
storec354eed709c24260c12dd5a68c7824df.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec354eed709c24260c12dd5a68c7824df.url(options),
    method: 'post',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/employees'
 */
    const storec354eed709c24260c12dd5a68c7824dfForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storec354eed709c24260c12dd5a68c7824df.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:66
 * @route '/employees'
 */
        storec354eed709c24260c12dd5a68c7824dfForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storec354eed709c24260c12dd5a68c7824df.url(options),
            method: 'post',
        })
    
    storec354eed709c24260c12dd5a68c7824df.form = storec354eed709c24260c12dd5a68c7824dfForm

export const store = {
    '/api/v1/employees': storee52a29d8365e38fe4b22b98347809557,
    '/employees': storec354eed709c24260c12dd5a68c7824df,
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
const showb5b285b87c4e81ab607e63e320995896 = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'get',
})

showb5b285b87c4e81ab607e63e320995896.definition = {
    methods: ["get","head"],
    url: '/api/v1/employees/{employee}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
showb5b285b87c4e81ab607e63e320995896.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return showb5b285b87c4e81ab607e63e320995896.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
showb5b285b87c4e81ab607e63e320995896.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
showb5b285b87c4e81ab607e63e320995896.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
    const showb5b285b87c4e81ab607e63e320995896Form = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showb5b285b87c4e81ab607e63e320995896.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
        showb5b285b87c4e81ab607e63e320995896Form.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb5b285b87c4e81ab607e63e320995896.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/api/v1/employees/{employee}'
 */
        showb5b285b87c4e81ab607e63e320995896Form.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb5b285b87c4e81ab607e63e320995896.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showb5b285b87c4e81ab607e63e320995896.form = showb5b285b87c4e81ab607e63e320995896Form
    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
const show1727a7cab5a76543b8b1186d01f2420a = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'get',
})

show1727a7cab5a76543b8b1186d01f2420a.definition = {
    methods: ["get","head"],
    url: '/employees/{employee}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
show1727a7cab5a76543b8b1186d01f2420a.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return show1727a7cab5a76543b8b1186d01f2420a.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
show1727a7cab5a76543b8b1186d01f2420a.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
show1727a7cab5a76543b8b1186d01f2420a.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
    const show1727a7cab5a76543b8b1186d01f2420aForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show1727a7cab5a76543b8b1186d01f2420a.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
        show1727a7cab5a76543b8b1186d01f2420aForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show1727a7cab5a76543b8b1186d01f2420a.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::show
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:100
 * @route '/employees/{employee}'
 */
        show1727a7cab5a76543b8b1186d01f2420aForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show1727a7cab5a76543b8b1186d01f2420a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show1727a7cab5a76543b8b1186d01f2420a.form = show1727a7cab5a76543b8b1186d01f2420aForm

export const show = {
    '/api/v1/employees/{employee}': showb5b285b87c4e81ab607e63e320995896,
    '/employees/{employee}': show1727a7cab5a76543b8b1186d01f2420a,
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
const updateb5b285b87c4e81ab607e63e320995896 = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'put',
})

updateb5b285b87c4e81ab607e63e320995896.definition = {
    methods: ["put","patch"],
    url: '/api/v1/employees/{employee}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
updateb5b285b87c4e81ab607e63e320995896.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return updateb5b285b87c4e81ab607e63e320995896.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
updateb5b285b87c4e81ab607e63e320995896.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
updateb5b285b87c4e81ab607e63e320995896.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
    const updateb5b285b87c4e81ab607e63e320995896Form = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateb5b285b87c4e81ab607e63e320995896.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
        updateb5b285b87c4e81ab607e63e320995896Form.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb5b285b87c4e81ab607e63e320995896.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/api/v1/employees/{employee}'
 */
        updateb5b285b87c4e81ab607e63e320995896Form.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb5b285b87c4e81ab607e63e320995896.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateb5b285b87c4e81ab607e63e320995896.form = updateb5b285b87c4e81ab607e63e320995896Form
    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
const update1727a7cab5a76543b8b1186d01f2420a = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'put',
})

update1727a7cab5a76543b8b1186d01f2420a.definition = {
    methods: ["put","patch"],
    url: '/employees/{employee}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
update1727a7cab5a76543b8b1186d01f2420a.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return update1727a7cab5a76543b8b1186d01f2420a.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
update1727a7cab5a76543b8b1186d01f2420a.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
update1727a7cab5a76543b8b1186d01f2420a.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
    const update1727a7cab5a76543b8b1186d01f2420aForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update1727a7cab5a76543b8b1186d01f2420a.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
        update1727a7cab5a76543b8b1186d01f2420aForm.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update1727a7cab5a76543b8b1186d01f2420a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:141
 * @route '/employees/{employee}'
 */
        update1727a7cab5a76543b8b1186d01f2420aForm.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update1727a7cab5a76543b8b1186d01f2420a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update1727a7cab5a76543b8b1186d01f2420a.form = update1727a7cab5a76543b8b1186d01f2420aForm

export const update = {
    '/api/v1/employees/{employee}': updateb5b285b87c4e81ab607e63e320995896,
    '/employees/{employee}': update1727a7cab5a76543b8b1186d01f2420a,
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/api/v1/employees/{employee}'
 */
const destroyb5b285b87c4e81ab607e63e320995896 = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'delete',
})

destroyb5b285b87c4e81ab607e63e320995896.definition = {
    methods: ["delete"],
    url: '/api/v1/employees/{employee}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/api/v1/employees/{employee}'
 */
destroyb5b285b87c4e81ab607e63e320995896.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return destroyb5b285b87c4e81ab607e63e320995896.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/api/v1/employees/{employee}'
 */
destroyb5b285b87c4e81ab607e63e320995896.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb5b285b87c4e81ab607e63e320995896.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/api/v1/employees/{employee}'
 */
    const destroyb5b285b87c4e81ab607e63e320995896Form = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyb5b285b87c4e81ab607e63e320995896.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/api/v1/employees/{employee}'
 */
        destroyb5b285b87c4e81ab607e63e320995896Form.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyb5b285b87c4e81ab607e63e320995896.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyb5b285b87c4e81ab607e63e320995896.form = destroyb5b285b87c4e81ab607e63e320995896Form
    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/employees/{employee}'
 */
const destroy1727a7cab5a76543b8b1186d01f2420a = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'delete',
})

destroy1727a7cab5a76543b8b1186d01f2420a.definition = {
    methods: ["delete"],
    url: '/employees/{employee}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/employees/{employee}'
 */
destroy1727a7cab5a76543b8b1186d01f2420a.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return destroy1727a7cab5a76543b8b1186d01f2420a.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/employees/{employee}'
 */
destroy1727a7cab5a76543b8b1186d01f2420a.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1727a7cab5a76543b8b1186d01f2420a.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/employees/{employee}'
 */
    const destroy1727a7cab5a76543b8b1186d01f2420aForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy1727a7cab5a76543b8b1186d01f2420a.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:158
 * @route '/employees/{employee}'
 */
        destroy1727a7cab5a76543b8b1186d01f2420aForm.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy1727a7cab5a76543b8b1186d01f2420a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy1727a7cab5a76543b8b1186d01f2420a.form = destroy1727a7cab5a76543b8b1186d01f2420aForm

export const destroy = {
    '/api/v1/employees/{employee}': destroyb5b285b87c4e81ab607e63e320995896,
    '/employees/{employee}': destroy1727a7cab5a76543b8b1186d01f2420a,
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/employees/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::create
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:51
 * @route '/employees/create'
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
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
export const edit = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/employees/{employee}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
edit.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { employee: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                }

    return edit.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
edit.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
edit.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
    const editForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
        editForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Employee\Http\Controllers\EmployeeController::edit
 * @see Modules/Employee/app/Http/Controllers/EmployeeController.php:123
 * @route '/employees/{employee}/edit'
 */
        editForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const EmployeeController = { index, store, show, update, destroy, create, edit }

export default EmployeeController