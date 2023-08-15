import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Image,
  Input,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import { UserIcon } from "./assets/UserIcon.jsx";
import { BellIcon } from "./assets/BellIcon.jsx";
import { LockIcon } from "./assets/LockIcon.jsx";
import { EyeSlashFilledIcon } from "../Auth/assets/EyeSlashFilledIcon.jsx";
import { EyeFilledIcon } from "../Auth/assets/EyeFilledIcon.jsx";
import { FileInput } from "../../components/FileInput/FileInput.jsx";

export function Settings() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <DashboardLayout>
      <div className="w-full mx-0">
        <Tabs aria-label="Options" color="primary" variant="bordered" fullWidth>
          {/*Profile*/}
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <UserIcon />
                <span>Profile</span>
              </div>
            }
          >
            <Card fullWidth shadow="none">
              <CardBody>
                <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">
                  Edit Profile
                </h1>

                <h3 className="text-xs sm:text-sm font-bold my-2  text-center sm:text-left">
                  Upload Profile Pic
                </h3>
                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4 my-2">
                  <Image
                    isZoomed
                    width={200}
                    height={200}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />

                  <div className="my-2 text-center sm:text-left">
                    <p>Upload your photo</p>
                    <span>Your photo should be in PNG or JPG format</span>

                    <FileInput
                      PlaceHolder="Choose Profile Pic"
                      FieldClasses="mt-4 py-2 border-2 border-gray-300 hover:border-gray-400 rounded-xl cursor-pointer"
                      ButtonClasses="mt-4 bg-gray-300 w-fit h-full py-2 px-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <Input
                    radius="sm"
                    label="Full Name"
                    placeholder="Enter your Full Name"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-2"
                  />

                  <Input
                    radius="sm"
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-2"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <Input
                    radius="sm"
                    label="Phone"
                    placeholder="Enter your phone"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-2"
                  />

                  <Input
                    radius="sm"
                    label="Location"
                    placeholder="Enter your Location"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-2"
                  />
                </div>

                <Textarea
                  radius="sm"
                  label="Address"
                  labelPlacement="outside"
                  placeholder="Enter your Address"
                  variant="bordered"
                  className="my-2"
                />

                <div className="flex justify-end mt-8">
                  <Button className="w-full sm:w-fit rounded-md">
                    Save Changes
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>

          {/*Notification*/}
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <BellIcon />
                <span>Notification</span>
              </div>
            }
          >
            <Card fullWidth shadow="none">
              <CardBody>
                <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">
                  Notification Settings
                </h1>

                <h3 className="text-sm text-center sm:text-left sm:text-lg font-bold my-4">
                  Email
                </h3>

                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  New Job
                </Checkbox>
                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  Job Run
                </Checkbox>
                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  Job Logs
                </Checkbox>
                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  Job Summary
                </Checkbox>

                <h3 className="text-sm sm:text-lg font-bold my-4">
                  Email Report
                </h3>

                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  Weekly
                </Checkbox>
                <Checkbox radius="sm" className="mb-1" defaultSelected>
                  Monthly
                </Checkbox>

                <div className="flex justify-end mt-2">
                  <Button radius="sm" className="w-full sm:w-fit">
                    {" "}
                    Save Changes
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>

          {/*Security*/}
          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2">
                <LockIcon />
                <span>Security</span>
              </div>
            }
          >
            <Card fullWidth shadow="none">
              <CardBody>
                <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">
                  Update Security
                </h1>

                <Input
                  radius="sm"
                  label="Current Password"
                  placeholder="Enter current password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  labelPlacement="outside"
                  className="my-2"
                />

                <Input
                  radius="sm"
                  label="New Password"
                  placeholder="Enter new password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  labelPlacement="outside"
                  className="my-2"
                />

                <Input
                  radius="sm"
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  labelPlacement="outside"
                  className="my-2"
                />

                <div className="flex justify-end mt-8">
                  <Button className="w-full sm:w-fit rounded-md">
                    Update Password
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
