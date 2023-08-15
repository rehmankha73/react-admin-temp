import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/index.jsx";

function App() {
    console.log('routes: ', routes)

    return <RouterProvider router={routes} />
    // return (
    // <Routes>
    //     {/* Auth Routes*/}
    //     <Route exact path="/login" element={<LogInForm />} />
    //     <Route exact path="/signup" element={<SignUpForm />} />
    //     <Route exact path="/forgot-password" element={<ForgotPassword />} />
    //     <Route exact path="/reset-password" element={<ResetPassword />} />
    //     <Route exact path="/create-first-project" element={<CreateFirstProject />} />
    //
    //     {/*Dashboard Routes*/}
    //     <Route exact path="/" element={<Index />} />
    //     <Route exact path="/jobs" element={<Jobs />} />
    //     <Route exact path="/job" element={<JobForm />} />
    //     <Route exact path="/jobs-details" element={<JobDetail />} />
    //     <Route exact path="/users" element={<Projects />} />
    //     <Route exact path="/settings" element={<Settings />} />
    //
    // </Routes>
    // )
}

export default App
