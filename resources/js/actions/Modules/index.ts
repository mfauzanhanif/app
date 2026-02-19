import User from './User'
import Admission from './Admission'
import Finance from './Finance'
import Institution from './Institution'
import Periode from './Periode'
import Web from './Web'
const Modules = {
    User: Object.assign(User, User),
Admission: Object.assign(Admission, Admission),
Finance: Object.assign(Finance, Finance),
Institution: Object.assign(Institution, Institution),
Periode: Object.assign(Periode, Periode),
Web: Object.assign(Web, Web),
}

export default Modules