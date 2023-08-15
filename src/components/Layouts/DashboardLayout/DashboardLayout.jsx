import { NameAndTitle } from "./NameAndTitle.jsx";
import { SideNav } from "./SideNav.jsx";
import { Bars3Icon } from "@heroicons/react/20/solid/index.js";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/20/solid/index.js";

// import {
//     MenuIcon
// } from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export default function DashboardLayout({ children }) {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  let mobileSideBarClasses;
  if (isMenuOpen) {
    mobileSideBarClasses = "block";
  } else {
    mobileSideBarClasses = "hidden";
  }

  const toggleMobileSideBar = (from) => {
    setIsMenuOpen((isMenuOpen = !isMenuOpen));
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/*Mobile Navbar*/}
      <div
        className={`${mobileSideBarClasses} absolute z-50 bg-gradient-to-b from-sftpDarkStart to-sftpDarkEnd w-full h-screen md:hidden p-6`}
      >
        <NameAndTitle
          isMobile={true}
          onClose={() => toggleMobileSideBar("from close ICon")}
        />
        <Divider className="mt-6" />
        <SideNav onClose={() => toggleMobileSideBar("from sidebar")} />
      </div>

      <div className="flex flex-wrap w-full h-screen">
        {/*{isMenuOpen &&*/}
        {sidebarOpen && (
          <aside
            className={`h-screen py-6 px-4 bg-gradient-to-b from-sftpDarkStart to-sftpDarkEnd md:block md:w-[25%] lg:w-[20%] max-w-2xl 
            }`}
          >
            <NameAndTitle />
            <Divider className="mt-6" />
            <SideNav />
          </aside>
        )}
        {/*}*/}

        <main
          className={`h-full px-10 py-4 mx-0 sm:mx-auto ${
            sidebarOpen ? "md:w-[75%] lg:w-[80%]" : "w-full"
          } overflow-y-auto`}
        >
          <div className="flex items-center justify-between mt-2 mb-6">
            <Button
              onClick={() => toggleMobileSideBar("burger button")}
              isIconOnly
              color="danger"
              aria-label="Like"
              className="block md:hidden"
            >
              <Bars3Icon className="mx-auto" width={20} />
            </Button>
            <Button
              isIconOnly
              aria-label="Like"
              onClick={() => toggleSidebar()}
              className="hidden md:block bg-transparent"
            >
              <Bars3Icon className="mx-auto" width={20} />
            </Button>

            {/* Notification icon */}
            <div className="flex items-center ">
              <BellIcon
                onClick={() => setShowNotification(!showNotification)}
                className="mr-4 cursor-pointer"
                width={28}
              />
              <div className="flex items-center justify-center w-5 h-5 text-xs -ml-5 -mt-5 text-white bg-sftpRoseStart rounded-full ">
                3
              </div>
            </div>

            {/* Notification popup */}
            {showNotification && (
              <div className="absolute top-14 right-10 z-50 w-70 h-70 bg-white rounded-lg shadow-xl">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-2xl font-bold">Notifications</h3>
                  <button>
                    <svg
                      onClick={() => setShowNotification(!showNotification)}
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />{" "}
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col p-4">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      {/* <span className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span> */}
                      <div className="flex flex-col ml-2">
                        <span className="font-bold">John Doe</span>
                        <span className="text-sm text-gray-400">
                          Commented on your photo
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 -mt-5">3:44pm</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <div className="flex flex-col ml-2">
                        <span className="font-bold">John Doe</span>
                        <span className="text-sm text-gray-400">
                          Commented on your photo
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 -mt-5">3:44pm</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <div className="flex flex-col ml-2">
                        <span className="font-bold">John Doe</span>
                        <span className="text-sm text-gray-400">
                          Commented on your photo
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 -mt-5">3:44pm</span>
                  </div>
                </div>
              </div>
            )}
            {/* <div>
              <Button
                className="mr-4 text-white bg-gradient-to-b bg-sftpDarkStart "
                color="success"
                auto
                size="small"
                rounded
                shadow
              >
                Send Email
              </Button>
              <Button
                className="mr-4 text-white bg-gradient-to-b bg-sftpRoseStart"
                color="success"
                auto
                size="small"
                rounded
                shadow
              >
                View Logs
              </Button>
            </div> */}
          </div>

          {children}

          {/* <div className="flex flex-col">
            <Link to="/login">Login Page</Link>
            <Link to="/signup">SignUp Page</Link>
            <Link to="/forgot-password">ForgotPassword Page</Link>
            <Link to="/reset-password">ResetPassword Page</Link>
            <Link to="/create-first-project">First Project Page</Link>

            <Link to="/job">JobCreateForm Page</Link>
            <Link to="/jobs-details">JobDetail Page</Link>
          </div> */}
        </main>
      </div>
    </>
  );
}
