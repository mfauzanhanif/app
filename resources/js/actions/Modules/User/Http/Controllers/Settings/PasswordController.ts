import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//app.daraltauhid.test/settings/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::edit
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:16
 * @route '//app.daraltauhid.test/settings/password'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::update
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:24
 * @route '//app.daraltauhid.test/settings/password'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '//app.daraltauhid.test/settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::update
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:24
 * @route '//app.daraltauhid.test/settings/password'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::update
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:24
 * @route '//app.daraltauhid.test/settings/password'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::update
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:24
 * @route '//app.daraltauhid.test/settings/password'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\Settings\PasswordController::update
 * @see Modules/User/app/Http/Controllers/Settings/PasswordController.php:24
 * @route '//app.daraltauhid.test/settings/password'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const PasswordController = { edit, update }

export default PasswordController