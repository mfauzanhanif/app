import AdmissionController from './AdmissionController'
import CandidateCertificateController from './CandidateCertificateController'
import CandidateController from './CandidateController'
import AdmissionWaveController from './AdmissionWaveController'
import CandidateExamController from './CandidateExamController'
import AdmissionInvoiceController from './AdmissionInvoiceController'
import EnrollmentController from './EnrollmentController'
const Controllers = {
    AdmissionController: Object.assign(AdmissionController, AdmissionController),
CandidateCertificateController: Object.assign(CandidateCertificateController, CandidateCertificateController),
CandidateController: Object.assign(CandidateController, CandidateController),
AdmissionWaveController: Object.assign(AdmissionWaveController, AdmissionWaveController),
CandidateExamController: Object.assign(CandidateExamController, CandidateExamController),
AdmissionInvoiceController: Object.assign(AdmissionInvoiceController, AdmissionInvoiceController),
EnrollmentController: Object.assign(EnrollmentController, EnrollmentController),
}

export default Controllers