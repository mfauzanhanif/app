import RegionController from './RegionController'
import LoginController from './LoginController'
import PortalController from './PortalController'
import Web from './Web'
const Controllers = {
    RegionController: Object.assign(RegionController, RegionController),
LoginController: Object.assign(LoginController, LoginController),
PortalController: Object.assign(PortalController, PortalController),
Web: Object.assign(Web, Web),
}

export default Controllers