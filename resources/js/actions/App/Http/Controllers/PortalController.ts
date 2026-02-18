import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
export const dashboard = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
dashboard.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dashboard.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
dashboard.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
dashboard.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
    const dashboardForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
        dashboardForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalController::dashboard
 * @see app/Http/Controllers/PortalController.php:15
 * @route '//app.daraltauhid.test/{institution}/dashboard'
 */
        dashboardForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
export const settings = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
settings.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return settings.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
settings.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
settings.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
    const settingsForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settings.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
        settingsForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalController::settings
 * @see app/Http/Controllers/PortalController.php:41
 * @route '//app.daraltauhid.test/{institution}/settings'
 */
        settingsForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settings.form = settingsForm
const PortalController = { dashboard, settings }

export default PortalController