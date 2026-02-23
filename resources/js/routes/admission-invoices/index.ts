import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
export const index = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/{institution}/admission-invoices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
index.url = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
index.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
index.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
    const indexForm = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
        indexForm.get = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::index
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:19
 * @route '//app.daraltauhid.test/{institution}/admission-invoices'
 */
        indexForm.head = (args: { institution: string | number } | [institution: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::verify
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:42
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify'
 */
export const verify = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: verify.url(args, options),
    method: 'put',
})

verify.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::verify
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:42
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify'
 */
verify.url = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    invoice: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                invoice: typeof args.invoice === 'object'
                ? args.invoice.id
                : args.invoice,
                }

    return verify.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::verify
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:42
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify'
 */
verify.put = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: verify.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::verify
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:42
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify'
 */
    const verifyForm = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verify.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::verify
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:42
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/verify'
 */
        verifyForm.put = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verify.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    verify.form = verifyForm
/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::cancel
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:54
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel'
 */
export const cancel = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: cancel.url(args, options),
    method: 'put',
})

cancel.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::cancel
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:54
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel'
 */
cancel.url = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    invoice: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                invoice: typeof args.invoice === 'object'
                ? args.invoice.id
                : args.invoice,
                }

    return cancel.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::cancel
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:54
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel'
 */
cancel.put = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: cancel.url(args, options),
    method: 'put',
})

    /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::cancel
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:54
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel'
 */
    const cancelForm = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Admission\Http\Controllers\AdmissionInvoiceController::cancel
 * @see Modules/Admission/app/Http/Controllers/AdmissionInvoiceController.php:54
 * @route '//app.daraltauhid.test/{institution}/admission-invoices/{invoice}/cancel'
 */
        cancelForm.put = (args: { institution: string | number, invoice: string | number | { id: string | number } } | [institution: string | number, invoice: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    cancel.form = cancelForm
const admissionInvoices = {
    index: Object.assign(index, index),
verify: Object.assign(verify, verify),
cancel: Object.assign(cancel, cancel),
}

export default admissionInvoices