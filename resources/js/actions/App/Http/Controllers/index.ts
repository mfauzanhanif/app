import RegionController from './RegionController'
import LoginController from './LoginController'
import PortalController from './PortalController'
const Controllers = {
    RegionController: Object.assign(RegionController, RegionController),
LoginController: Object.assign(LoginController, LoginController),
PortalController: Object.assign(PortalController, PortalController),
}

export default Controllers