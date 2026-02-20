import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:17
 * @route '/employees/{employee}/assignments'
 */
export const store = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/employees/{employee}/assignments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:17
 * @route '/employees/{employee}/assignments'
 */
store.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:17
 * @route '/employees/{employee}/assignments'
 */
store.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:17
 * @route '/employees/{employee}/assignments'
 */
    const storeForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::store
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:17
 * @route '/employees/{employee}/assignments'
 */
        storeForm.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:48
 * @route '/employees/{employee}/assignments/{assignment}'
 */
export const update = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/employees/{employee}/assignments/{assignment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:48
 * @route '/employees/{employee}/assignments/{assignment}'
 */
update.url = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                    assignment: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                                assignment: typeof args.assignment === 'object'
                ? args.assignment.id
                : args.assignment,
                }

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:48
 * @route '/employees/{employee}/assignments/{assignment}'
 */
update.put = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:48
 * @route '/employees/{employee}/assignments/{assignment}'
 */
    const updateForm = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::update
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:48
 * @route '/employees/{employee}/assignments/{assignment}'
 */
        updateForm.put = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:75
 * @route '/employees/{employee}/assignments/{assignment}'
 */
export const destroy = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/employees/{employee}/assignments/{assignment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:75
 * @route '/employees/{employee}/assignments/{assignment}'
 */
destroy.url = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    employee: args[0],
                    assignment: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        employee: typeof args.employee === 'object'
                ? args.employee.id
                : args.employee,
                                assignment: typeof args.assignment === 'object'
                ? args.assignment.id
                : args.assignment,
                }

    return destroy.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:75
 * @route '/employees/{employee}/assignments/{assignment}'
 */
destroy.delete = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:75
 * @route '/employees/{employee}/assignments/{assignment}'
 */
    const destroyForm = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Employee\Http\Controllers\EmployeeAssignmentController::destroy
 * @see Modules/Employee/app/Http/Controllers/EmployeeAssignmentController.php:75
 * @route '/employees/{employee}/assignments/{assignment}'
 */
        destroyForm.delete = (args: { employee: number | { id: number }, assignment: number | { id: number } } | [employee: number | { id: number }, assignment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const EmployeeAssignmentController = { store, update, destroy }

export default EmployeeAssignmentController