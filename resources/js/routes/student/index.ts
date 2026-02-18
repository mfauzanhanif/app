import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
export const select = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(options),
    method: 'get',
})

select.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/select-student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
select.url = (options?: RouteQueryOptions) => {
    return select.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
select.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
select.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: select.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
    const selectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: select.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
        selectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: select.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:53
 * @route '//app.daraltauhid.test/select-student'
 */
        selectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: select.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    select.form = selectForm
/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
export const switchMethod = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchMethod.url(args, options),
    method: 'get',
})

switchMethod.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/switch-student/{publicId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchMethod.url = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return switchMethod.definition.url
            .replace('{publicId}', parsedArgs.publicId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchMethod.get = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
switchMethod.head = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
    const switchMethodForm = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: switchMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
        switchMethodForm.get = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:129
 * @route '//app.daraltauhid.test/switch-student/{publicId}'
 */
        switchMethodForm.head = (args: { publicId: string | number } | [publicId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    switchMethod.form = switchMethodForm
const student = {
    select: Object.assign(select, select),
switch: Object.assign(switchMethod, switchMethod),
}

export default student