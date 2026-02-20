import User from './User'
import Admission from './Admission'
import Employee from './Employee'
import Finance from './Finance'
import Guardian from './Guardian'
import Institution from './Institution'
import Periode from './Periode'
import Student from './Student'
import Web from './Web'
const Modules = {
    User: Object.assign(User, User),
Admission: Object.assign(Admission, Admission),
Employee: Object.assign(Employee, Employee),
Finance: Object.assign(Finance, Finance),
Guardian: Object.assign(Guardian, Guardian),
Institution: Object.assign(Institution, Institution),
Periode: Object.assign(Periode, Periode),
Student: Object.assign(Student, Student),
Web: Object.assign(Web, Web),
}

export default Modules