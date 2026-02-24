import api from './api'
import employee from './employee'
import finance from './finance'
import guardian from './guardian'
import institution from './institution'
import academicPeriod from './academic-period'
import academicYear from './academic-year'
import fiscalPeriod from './fiscal-period'
import student from './student'
import user from './user'
const apiNamespace = {
    api: Object.assign(api, api),
employee: Object.assign(employee, employee),
finance: Object.assign(finance, finance),
guardian: Object.assign(guardian, guardian),
institution: Object.assign(institution, institution),
academicPeriod: Object.assign(academicPeriod, academicPeriod),
academicYear: Object.assign(academicYear, academicYear),
fiscalPeriod: Object.assign(fiscalPeriod, fiscalPeriod),
student: Object.assign(student, student),
user: Object.assign(user, user),
}

export default apiNamespace