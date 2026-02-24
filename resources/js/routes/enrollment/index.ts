import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::migrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:21
 * @route '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate'
 */
export const migrate = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: migrate.url(args, options),
    method: 'post',
})

migrate.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::migrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:21
 * @route '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate'
 */
migrate.url = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return migrate.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::migrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:21
 * @route '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate'
 */
migrate.post = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: migrate.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::migrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:21
 * @route '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate'
 */
    const migrateForm = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: migrate.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::migrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:21
 * @route '//app.daraltauhid.test/{institution}/enrollment/{candidate}/migrate'
 */
        migrateForm.post = (args: { institution: string | number, candidate: number | { id: number } } | [institution: string | number, candidate: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: migrate.url(args, options),
            method: 'post',
        })
    
    migrate.form = migrateForm
/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::batchMigrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:43
 * @route '//app.daraltauhid.test/{institution}/enrollment/batch-migrate'
 */
export const batchMigrate = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchMigrate.url(args, options),
    method: 'post',
})

batchMigrate.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/enrollment/batch-migrate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::batchMigrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:43
 * @route '//app.daraltauhid.test/{institution}/enrollment/batch-migrate'
 */
batchMigrate.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return batchMigrate.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::batchMigrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:43
 * @route '//app.daraltauhid.test/{institution}/enrollment/batch-migrate'
 */
batchMigrate.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchMigrate.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::batchMigrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:43
 * @route '//app.daraltauhid.test/{institution}/enrollment/batch-migrate'
 */
    const batchMigrateForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: batchMigrate.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\EnrollmentController::batchMigrate
 * @see Modules/Admission/app/Http/Controllers/EnrollmentController.php:43
 * @route '//app.daraltauhid.test/{institution}/enrollment/batch-migrate'
 */
        batchMigrateForm.post = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: batchMigrate.url(args, options),
            method: 'post',
        })
    
    batchMigrate.form = batchMigrateForm
const enrollment = {
    migrate: Object.assign(migrate, migrate),
batchMigrate: Object.assign(batchMigrate, batchMigrate),
}

export default enrollment