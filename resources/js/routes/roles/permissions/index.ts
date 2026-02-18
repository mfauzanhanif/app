import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\User\Http\Controllers\PermissionController::assign
 * @see Modules/User/app/Http/Controllers/PermissionController.php:28
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/permissions'
 */
export const assign = (args: { institution: string | number, role: string | number } | [institution: string | number, role: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

assign.definition = {
    methods: ["post"],
    url: '//app.daraltauhid.test/{institution}/roles/{role}/permissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\User\Http\Controllers\PermissionController::assign
 * @see Modules/User/app/Http/Controllers/PermissionController.php:28
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/permissions'
 */
assign.url = (args: { institution: string | number, role: string | number } | [institution: string | number, role: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    institution: args[0],
                    role: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        institution: args.institution,
                                role: args.role,
                }

    return assign.definition.url
            .replace('{institution}', parsedArgs.institution.toString())
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\PermissionController::assign
 * @see Modules/User/app/Http/Controllers/PermissionController.php:28
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/permissions'
 */
assign.post = (args: { institution: string | number, role: string | number } | [institution: string | number, role: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\User\Http\Controllers\PermissionController::assign
 * @see Modules/User/app/Http/Controllers/PermissionController.php:28
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/permissions'
 */
    const assignForm = (args: { institution: string | number, role: string | number } | [institution: string | number, role: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: assign.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\PermissionController::assign
 * @see Modules/User/app/Http/Controllers/PermissionController.php:28
 * @route '//app.daraltauhid.test/{institution}/roles/{role}/permissions'
 */
        assignForm.post = (args: { institution: string | number, role: string | number } | [institution: string | number, role: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: assign.url(args, options),
            method: 'post',
        })
    
    assign.form = assignForm
const permissions = {
    assign: Object.assign(assign, assign),
}

export default permissions