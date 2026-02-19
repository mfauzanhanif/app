import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::lookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
export const lookup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lookup.url(options),
    method: 'post',
})

lookup.definition = {
    methods: ["post"],
    url: '//psb.daraltauhid.test/status',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::lookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
lookup.url = (options?: RouteQueryOptions) => {
    return lookup.definition.url + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionController::lookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
lookup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: lookup.url(options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::lookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
    const lookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: lookup.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionController::lookup
 * @see Modules/Admission/app/Http/Controllers/AdmissionController.php:0
 * @route '//psb.daraltauhid.test/status'
 */
        lookupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: lookup.url(options),
            method: 'post',
        })
    
    lookup.form = lookupForm
const status = {
    lookup: Object.assign(lookup, lookup),
}

export default status