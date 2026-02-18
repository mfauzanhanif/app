import api from './api'
import finance from './finance'
import institution from './institution'
import academicPeriod from './academic-period'
import academicYear from './academic-year'
import fiscalPeriod from './fiscal-period'
import user from './user'
const apiNamespace = {
    api: Object.assign(api, api),
finance: Object.assign(finance, finance),
institution: Object.assign(institution, institution),
academicPeriod: Object.assign(academicPeriod, academicPeriod),
academicYear: Object.assign(academicYear, academicYear),
fiscalPeriod: Object.assign(fiscalPeriod, fiscalPeriod),
user: Object.assign(user, user),
}

export default apiNamespace