import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
export const index = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
index.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
index.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
index.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
    const indexForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
        indexForm.get = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::index
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:20
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
        indexForm.head = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::store
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:38
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
export const store = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::store
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:38
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
store.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::store
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:38
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
store.post = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::store
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:38
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
    const storeForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::store
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:38
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams'
 */
        storeForm.post = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::update
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:55
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}'
 */
export const update = (args: { institution: string | number, candidate: number | { id: number }, exam: number | { id: number } } | [institution: string | number, candidate: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::update
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:55
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}'
 */
update.url = (args: { institution: string | number, candidate: number | { id: number }, exam: number | { id: number } } | [institution: string | number, candidate: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    candidate: args[1],
                    exam: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                candidate: typeof args.candidate === 'object'
                ? args.candidate.id
                : args.candidate,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return update.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::update
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:55
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}'
 */
update.put = (args: { institution: string | number, candidate: number | { id: number }, exam: number | { id: number } } | [institution: string | number, candidate: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::update
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:55
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}'
 */
    const updateForm = (args: { institution: string | number, candidate: number | { id: number }, exam: number | { id: number } } | [institution: string | number, candidate: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\CandidateExamController::update
 * @see Modules/Admission/app/Http/Controllers/CandidateExamController.php:55
 * @route '//app.daraltauhid.test/{institution}/candidates/{candidate}/exams/{exam}'
 */
        updateForm.put = (args: { institution: string | number, candidate: number | { id: number }, exam: number | { id: number } } | [institution: string | number, candidate: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const candidateExams = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
}

export default candidateExams