import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '//daraltauhid.test/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\PPDTController::home
 * @see app/Http/Controllers/Web/PPDTController.php:13
 * @route '//daraltauhid.test/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
const ppdt = {
    home: Object.assign(home, home),
}

export default ppdt