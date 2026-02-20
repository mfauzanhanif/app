import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import users from './users'
import roles from './roles'
/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
export const select = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(options),
    method: 'get',
})

select.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/select-institution',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
select.url = (options?: RouteQueryOptions) => {
    return select.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
select.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
select.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: select.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
    const selectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: select.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
 */
        selectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: select.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::select
 * @see app/Http/Controllers/LoginController.php:19
 * @route '//app.daraltauhid.test/select-institution'
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
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
export const switchMethod = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchMethod.url(args, options),
    method: 'get',
})

switchMethod.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/switch-institution/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchMethod.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return switchMethod.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchMethod.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
switchMethod.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
    const switchMethodForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: switchMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
        switchMethodForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::switchMethod
 * @see app/Http/Controllers/LoginController.php:108
 * @route '//app.daraltauhid.test/switch-institution/{code}'
 */
        switchMethodForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: switchMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    switchMethod.form = switchMethodForm
const institution = {
    select: Object.assign(select, select),
switch: Object.assign(switchMethod, switchMethod),
users: Object.assign(users, users),
roles: Object.assign(roles, roles),
}

export default institution