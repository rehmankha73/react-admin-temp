import AppBar from "./AppBar.jsx";
// import {Outlet} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AuthLayout({ children }) {
    return (
        <>
            <AppBar />
            { children }
        </>
    )
}