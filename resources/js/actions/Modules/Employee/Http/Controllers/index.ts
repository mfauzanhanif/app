import EmployeeController from './EmployeeController'
import EmployeeAssignmentController from './EmployeeAssignmentController'
const Controllers = {
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
EmployeeAssignmentController: Object.assign(EmployeeAssignmentController, EmployeeAssignmentController),
}

export default Controllers