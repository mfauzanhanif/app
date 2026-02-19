import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
const downloadc41cdbe1240977e4911bc0d44315312d = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadc41cdbe1240977e4911bc0d44315312d.url(args, options),
    method: 'get',
})

downloadc41cdbe1240977e4911bc0d44315312d.definition = {
    methods: ["get","head"],
    url: '//psb.daraltauhid.test/sertifikat/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
downloadc41cdbe1240977e4911bc0d44315312d.url = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return downloadc41cdbe1240977e4911bc0d44315312d.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
downloadc41cdbe1240977e4911bc0d44315312d.get = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadc41cdbe1240977e4911bc0d44315312d.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
downloadc41cdbe1240977e4911bc0d44315312d.head = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadc41cdbe1240977e4911bc0d44315312d.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
    const downloadc41cdbe1240977e4911bc0d44315312dForm = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadc41cdbe1240977e4911bc0d44315312d.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
        downloadc41cdbe1240977e4911bc0d44315312dForm.get = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadc41cdbe1240977e4911bc0d44315312d.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//psb.daraltauhid.test/sertifikat/{candidate}'
 */
        downloadc41cdbe1240977e4911bc0d44315312dForm.head = (args: { candidate: number | { id: number } } | [candidate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadc41cdbe1240977e4911bc0d44315312d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadc41cdbe1240977e4911bc0d44315312d.form = downloadc41cdbe1240977e4911bc0d44315312dForm
    /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
const download0c1c538f2091374b373d1d413610a206 = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download0c1c538f2091374b373d1d413610a206.url(args, options),
    method: 'get',
})

download0c1c538f2091374b373d1d413610a206.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
download0c1c538f2091374b373d1d413610a206.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                }

    return download0c1c538f2091374b373d1d413610a206.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
download0c1c538f2091374b373d1d413610a206.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download0c1c538f2091374b373d1d413610a206.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
download0c1c538f2091374b373d1d413610a206.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download0c1c538f2091374b373d1d413610a206.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
    const download0c1c538f2091374b373d1d413610a206Form = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download0c1c538f2091374b373d1d413610a206.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
        download0c1c538f2091374b373d1d413610a206Form.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download0c1c538f2091374b373d1d413610a206.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateCertificateController::download
 * @see Modules/Admission/app/Http/Controllers/CandidateCertificateController.php:16
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate'
 */
        download0c1c538f2091374b373d1d413610a206Form.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download0c1c538f2091374b373d1d413610a206.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download0c1c538f2091374b373d1d413610a206.form = download0c1c538f2091374b373d1d413610a206Form

export const download = {
    '//psb.daraltauhid.test/sertifikat/{candidate}': downloadc41cdbe1240977e4911bc0d44315312d,
    '//app.daraltauhid.test/{institution}/candidates/{candidate}/certificate': download0c1c538f2091374b373d1d413610a206,
}

const CandidateCertificateController = { download }

export default CandidateCertificateController