import {Jobs} from "../pages/Jobs/Jobs.jsx";
import {JobForm} from "../pages/Jobs/JobForm.jsx";
import {JobDetail} from "../pages/Jobs/JobDetail.jsx";

export const JobRoutes =  [
    {path: '/jobs', element: (<Jobs/>)},
    {path: '/job', element: (<JobForm/>)},
    {path: '/jobs-details', element: (<JobDetail/>)},
];