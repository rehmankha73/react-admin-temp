import {Projects} from "../pages/Projects/Projects.jsx";
import {ProjectForm} from "../pages/Projects/ProjectForm.jsx";

export const ProjectRoutes = [
    {path: '/projects', element: (<Projects />)},
    {path: '/project', element: (<ProjectForm />) }
];