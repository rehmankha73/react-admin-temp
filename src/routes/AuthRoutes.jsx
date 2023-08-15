import {LogInForm} from "../pages/Auth/LogInForm.jsx";
import {SignUpForm} from "../pages/Auth/SignUpForm.jsx";
import {ForgotPassword} from "../pages/Auth/ForgotPassword.jsx";
import {ResetPassword} from "../pages/Auth/ResetPassword.jsx";
import {CreateFirstProject} from "../pages/Auth/CreateFirstProject.jsx";

export const AuthRoutes =  [
    {path: "/login", element: (<LogInForm/>)},
    {path: "/signup", element: (<SignUpForm/>)},
    {path: "/forgot-password", element: (<ForgotPassword/>)},
    {path: "/reset-password", element: (<ResetPassword/>)},
    {path: "/create-first-project", element: (<CreateFirstProject/>)},
];