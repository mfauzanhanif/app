import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
export const getProvinces = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProvinces.url(options),
    method: 'get',
})

getProvinces.definition = {
    methods: ["get","head"],
    url: '/api/v1/location/provinces',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
getProvinces.url = (options?: RouteQueryOptions) => {
    return getProvinces.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
getProvinces.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProvinces.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
getProvinces.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProvinces.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
    const getProvincesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getProvinces.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
        getProvincesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProvinces.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RegionController::getProvinces
 * @see app/Http/Controllers/RegionController.php:18
 * @route '/api/v1/location/provinces'
 */
        getProvincesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProvinces.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getProvinces.form = getProvincesForm
/**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
export const getCities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCities.url(options),
    method: 'get',
})

getCities.definition = {
    methods: ["get","head"],
    url: '/api/v1/location/cities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
getCities.url = (options?: RouteQueryOptions) => {
    return getCities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
getCities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCities.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
getCities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCities.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
    const getCitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCities.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
        getCitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCities.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RegionController::getCities
 * @see app/Http/Controllers/RegionController.php:28
 * @route '/api/v1/location/cities'
 */
        getCitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCities.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCities.form = getCitiesForm
/**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
export const getDistricts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDistricts.url(options),
    method: 'get',
})

getDistricts.definition = {
    methods: ["get","head"],
    url: '/api/v1/location/districts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
getDistricts.url = (options?: RouteQueryOptions) => {
    return getDistricts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
getDistricts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDistricts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
getDistricts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDistricts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
    const getDistrictsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDistricts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
        getDistrictsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDistricts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RegionController::getDistricts
 * @see app/Http/Controllers/RegionController.php:46
 * @route '/api/v1/location/districts'
 */
        getDistrictsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDistricts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDistricts.form = getDistrictsForm
/**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
export const getVillages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVillages.url(options),
    method: 'get',
})

getVillages.definition = {
    methods: ["get","head"],
    url: '/api/v1/location/villages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
getVillages.url = (options?: RouteQueryOptions) => {
    return getVillages.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
getVillages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVillages.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
getVillages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getVillages.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
    const getVillagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getVillages.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
        getVillagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getVillages.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RegionController::getVillages
 * @see app/Http/Controllers/RegionController.php:64
 * @route '/api/v1/location/villages'
 */
        getVillagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getVillages.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getVillages.form = getVillagesForm
const RegionController = { getProvinces, getCities, getDistricts, getVillages }

export default RegionController