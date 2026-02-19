import api from './api'
import finance from './finance'
import institution from './institution'
import academicPeriod from './academic-period'
import academicYear from './academic-year'
import fiscalPeriod from './fiscal-period'
import user from './user'
import web from './web'
const apiNamespace = {
    api: Object.assign(api, api),
finance: Object.assign(finance, finance),
institution: Object.assign(institution, institution),
academicPeriod: Object.assign(academicPeriod, academicPeriod),
academicYear: Object.assign(academicYear, academicYear),
fiscalPeriod: Object.assign(fiscalPeriod, fiscalPeriod),
user: Object.assign(user, user),
web: Object.assign(web, web),
}

export default apiNamespace