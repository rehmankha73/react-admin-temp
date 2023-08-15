import {Departments} from "../pages/Departments/Departments.jsx";
import {DepartmentForm} from "../pages/Departments/DepartmentForm.jsx";

export const DepartmentRoutes = [
    {path: '/departments', element: (<Departments/>)},
    {path: '/department', element: (<DepartmentForm/>)}];