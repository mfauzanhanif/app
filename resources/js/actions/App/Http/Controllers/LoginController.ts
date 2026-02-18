import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
export const selectInstitution = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectInstitution.url(options),
    method: 'get',
})

selectInstitution.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/select-institution',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
selectInstitution.url = (options?: RouteQueryOptions) => {
    return selectInstitution.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
selectInstitution.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectInstitution.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
selectInstitution.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: selectInstitution.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
    const selectInstitutionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: selectInstitution.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
        selectInstitutionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectInstitution.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::selectInstitution
 * @see app/Http/Controllers/LoginController.php:17
 * @route '//app.daraltauhid.test/select-institution'
 */
        selectInstitutionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectInstitution.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    selectInstitution.form = selectInstitutionForm
/**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
export const selectStudent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectStudent.url(options),
    method: 'get',
})

selectStudent.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/select-student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
selectStudent.url = (options?: RouteQueryOptions) => {
    return selectStudent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
selectStudent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: selectStudent.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
selectStudent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: selectStudent.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
    const selectStudentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: selectStudent.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
        selectStudentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectStudent.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::selectStudent
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
        selectStudentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: selectStudent.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    selectStudent.form = selectStudentForm
/**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
export const switchInstitution = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchInstitution.url(args, options),
    method: 'get',
})

switchInstitution.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/switch-institution/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchInstitution.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    code: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        code: args.code,
                }

    return switchInstitution.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchInstitution.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchInstitution.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchInstitution.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchInstitution.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
    const switchInstitutionForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: switchInstitution.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
        switchInstitutionForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchInstitution.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::switchInstitution
 * @see app/Http/Controllers/LoginController.php:106
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
        switchInstitutionForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchInstitution.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    switchInstitution.form = switchInstitutionForm
/**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
export const switchStudent = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchStudent.url(args, options),
    method: 'get',
})

switchStudent.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/switch-student/{publicId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchStudent.url = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { publicId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    publicId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        publicId: args.publicId,
                }

    return switchStudent.definition.url
            .replace('{publicId}', parsedArgs.publicId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchStudent.get = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchStudent.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchStudent.head = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchStudent.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
    const switchStudentForm = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: switchStudent.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
        switchStudentForm.get = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchStudent.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::switchStudent
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
        switchStudentForm.head = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchStudent.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    switchStudent.form = switchStudentForm
/**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
export const switchInstitutionPage = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchInstitutionPage.url(args, options),
    method: 'get',
})

switchInstitutionPage.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/switch-institution',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
switchInstitutionPage.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return switchInstitutionPage.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
switchInstitutionPage.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchInstitutionPage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
switchInstitutionPage.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchInstitutionPage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
    const switchInstitutionPageForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: switchInstitutionPage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
        switchInstitutionPageForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchInstitutionPage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::switchInstitutionPage
 * @see app/Http/Controllers/LoginController.php:82
 * @route '//app.daraltauhid.test/{institution}/switch-institution'
 */
        switchInstitutionPageForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchInstitutionPage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    switchInstitutionPage.form = switchInstitutionPageForm
const LoginController = { selectInstitution, selectStudent, switchInstitution, switchStudent, switchInstitutionPage }

export default LoginController