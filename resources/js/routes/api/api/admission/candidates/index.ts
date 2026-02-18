import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/admission/candidates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:22
 * @route '/api/v1/admission/candidates'
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
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
export const show = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/admission/candidates/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show.url = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { candidate: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    candidate: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return show.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show.get = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
show.head = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
    const showForm = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
        showForm.get = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateController::show
 * @see Modules/Admission/app/Http/Controllers/CandidateController.php:57
 * @route '/api/v1/admission/candidates/{candidate}'
 */
        showForm.head = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const candidates = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default candidates