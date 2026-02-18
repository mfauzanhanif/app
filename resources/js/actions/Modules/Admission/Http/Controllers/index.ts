import PsbRegistrationController from './PsbRegistrationController'
import CandidateController from './CandidateController'
import AdmissionWaveController from './AdmissionWaveController'
import CandidateExamController from './CandidateExamController'
import AdmissionInvoiceController from './AdmissionInvoiceController'
const Controllers = {
    PsbRegistrationController: Object.assign(PsbRegistrationController, PsbRegistrationController),
CandidateController: Object.assign(CandidateController, CandidateController),
AdmissionWaveController: Object.assign(AdmissionWaveController, AdmissionWaveController),
CandidateExamController: Object.assign(CandidateExamController, CandidateExamController),
AdmissionInvoiceController: Object.assign(AdmissionInvoiceController, AdmissionInvoiceController),
}

export default Controllers