import {Users} from "../pages/Users/Users.jsx";
import {UserForm} from "../pages/Users/UserForm.jsx";

export const UserRoutes = [
    {path: '/users', element: (<Users />)},
    {path: '/user', element: (<UserForm />) }
];