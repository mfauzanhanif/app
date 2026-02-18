import AcademicYearController from './AcademicYearController'
import AcademicPeriodController from './AcademicPeriodController'
import FiscalPeriodController from './FiscalPeriodController'
const Controllers = {
    AcademicYearController: Object.assign(AcademicYearController, AcademicYearController),
AcademicPeriodController: Object.assign(AcademicPeriodController, AcademicPeriodController),
FiscalPeriodController: Object.assign(FiscalPeriodController, FiscalPeriodController),
}

export default Controllers