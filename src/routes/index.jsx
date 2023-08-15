import { Index } from "../pages/Index/Index.jsx";
import { createBrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes.jsx";
import { UserRoutes } from "./UserRoutes.jsx";
import { JobRoutes } from "./JobRoutes.jsx";
import { DepartmentRoutes } from "./DepartmentRoutes.jsx";
import { SettingRoutes } from "./SettingRoutes.jsx";
import { ProjectRoutes } from "./ProjectRoutes.jsx";
import { RecentRunsDetailsRoute } from "./RecentRunsDetail.jsx";

export const routes = createBrowserRouter([
  // Auth Routes
  ...AuthRoutes,

  // Dashboard
  ...ProjectRoutes,
  ...JobRoutes,
  ...UserRoutes,
  ...DepartmentRoutes,
  ...SettingRoutes,
  ...RecentRunsDetailsRoute,

  { path: "/", element: <Index /> },
]);
