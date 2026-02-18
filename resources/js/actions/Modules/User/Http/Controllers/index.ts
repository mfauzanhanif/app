import Settings from './Settings'
import UserController from './UserController'
import PermissionController from './PermissionController'
import RoleController from './RoleController'
const Controllers = {
    Settings: Object.assign(Settings, Settings),
UserController: Object.assign(UserController, UserController),
PermissionController: Object.assign(PermissionController, PermissionController),
RoleController: Object.assign(RoleController, RoleController),
}

export default Controllers