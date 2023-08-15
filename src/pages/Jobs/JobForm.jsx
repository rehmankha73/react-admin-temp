import {
  Button,
  Card,
  CardBody,
  Checkbox,
  // Divider,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import { TrashIcon } from "@heroicons/react/20/solid/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileInput } from "../../components/FileInput/FileInput.jsx";

export function JobForm() {
  // TODO: This form will use for both Create and Edit
  const nevigation = useNavigate();

  const [files, setFiles] = useState([{ old_name: "", new_name: "" }]);
  const [locations, setLocations] = useState([{ old_name: "", new_name: "" }]);

  const [sourcePasswordType, setSourcePasswordType] = useState("password");
  const [destinationPasswordType, setDestinationPasswordType] =
    useState("password");

  const handleAddOperationClick = (type) => {
    const newObj = { old_name: "", new_name: "" };
    if (type === "File") {
      setFiles([...files, newObj]);
    } else {
      setLocations([...locations, newObj]);
    }
  };

  const handleRemoveOperationClick = (type, index) => {
    if (type === "File") {
      setFiles((files) => files.filter((_, i) => i !== index));
    } else {
      setLocations((locations) => locations.filter((_, i) => i !== index));
    }
  };

  const onSubmit = () => {
    nevigation("/jobs");
  };

  return (
    <>
      <DashboardLayout>
        <Card className="w-full sm:w-10/12 m-auto" shadow>
          <CardBody>
            <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">
              Create New Job
            </h1>

            <Input
              autoFocus
              label={
                <>
                  Title<span className="text-red-600 ml-2">*</span>
                </>
              }
              placeholder="Job Title here"
              variant="bordered"
              labelPlacement="outside"
              className="my-1 sm:my-2"
            />

            <h3 className="text-lg font-bold mt-4 mb-2">Source Information</h3>
            {/* <Divider className="w-10/12 m-auto" /> */}

            <div className="sm:flex sm:gap-2">
              <Input
                autoFocus
                label={
                  <>
                    Server Address<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="192.168.1.4"
                variant="bordered"
                labelPlacement="outside"
                className="w-full my-1 sm:my-2"
              />

              <Input
                autoFocus
                label={
                  <>
                    Port Number<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="3000"
                variant="bordered"
                labelPlacement="outside"
                className="w-full my-1  sm:my-2"
              />

              <Input
                autoFocus
                label={
                  <>
                    Username<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="Enter your username"
                variant="bordered"
                labelPlacement="outside"
                className="my-1 sm:my-2"
              />
            </div>

            <Tabs
              size="md"
              aria-label="Tabs form"
              selectedKey={sourcePasswordType}
              onSelectionChange={setSourcePasswordType}
              className="my-1 sm:my-2"
            >
              <Tab key="password" title="Password">
                <Input
                  autoFocus
                  label={
                    <>
                      Password<span className="text-red-600 ml-2">*</span>
                    </>
                  }
                  type="password"
                  placeholder="Enter your password"
                  variant="bordered"
                  labelPlacement="outside"
                />
              </Tab>

              <Tab key="ssh" title="SSH Private Key">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FileInput
                      Label={
                        <>
                          Upload File
                          <span className="text-red-600 ml-2">*</span>
                        </>
                      }
                      PlaceHolder="Pick up ssh file"
                      LabelClasses="text-sm font-medium text-gray-900"
                      FieldClasses="p-2 border-2 border-gray-300 hover:border-gray-400 rounded-xl cursor-pointer"
                      ButtonClasses="w-full h-10 p-1.5 border-2 border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer"
                    />
                  </div>

                  <Input
                    autoFocus
                    label={
                      <>
                        Passphrase<span className="text-red-600 ml-2">*</span>
                      </>
                    }
                    placeholder="Enter your password"
                    variant="bordered"
                    labelPlacement="outside"
                  />
                </div>
              </Tab>
            </Tabs>

            <Input
              autoFocus
              label={
                <>
                  Source Directory<span className="text-red-600 ml-2">*</span>
                </>
              }
              placeholder="/path-to-save-files/"
              variant="bordered"
              labelPlacement="outside"
              className="my-1 sm:my-2"
            />

            <h3 className="text-lg font-bold mt-4 mb-2">
              Destination Information
            </h3>
            {/* <Divider /> */}

            <div className="sm:flex sm:gap-2">
              <Input
                autoFocus
                label={
                  <>
                    Server Address<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="192.168.1.4"
                variant="bordered"
                labelPlacement="outside"
              />

              <Input
                autoFocus
                label={
                  <>
                    Port Number<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="3000"
                variant="bordered"
                labelPlacement="outside"
              />

              <Input
                autoFocus
                label={
                  <>
                    Username<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="Enter your username"
                variant="bordered"
                labelPlacement="outside"
              />
            </div>

            <Tabs
              size="md"
              aria-label="Tabs form"
              selectedKey={destinationPasswordType}
              onSelectionChange={setDestinationPasswordType}
              className="my-1 sm:my-2"
            >
              <Tab key="password" title="Password">
                <Input
                  autoFocus
                  label={
                    <>
                      Password<span className="text-red-600 ml-2">*</span>
                    </>
                  }
                  type="password"
                  placeholder="Enter your password"
                  variant="bordered"
                  labelPlacement="outside"
                  className="my-1 sm:my-2"
                />
              </Tab>

              <Tab key="ssh" title="SSH Private Key">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FileInput
                      Label={
                        <>
                          Upload File
                          <span className="text-red-600 ml-2">*</span>
                        </>
                      }
                      PlaceHolder="Pick up ssh file"
                      LabelClasses="text-sm font-medium text-gray-900"
                      FieldClasses="p-2 border-2 border-gray-300 hover:border-gray-400 rounded-xl cursor-pointer"
                      ButtonClasses="w-full h-10 p-1.5 border-2 border-gray-300 hover:border-gray-400 rounded-lg cursor-pointer"
                    />
                  </div>

                  <Input
                    autoFocus
                    label={
                      <>
                        Passphrase<span className="text-red-600 ml-2">*</span>
                      </>
                    }
                    placeholder="Enter your password"
                    variant="bordered"
                    labelPlacement="outside"
                  />
                </div>
              </Tab>
            </Tabs>

            <Input
              autoFocus
              label={
                <>
                  Destination Directory
                  <span className="text-red-600 ml-2">*</span>
                </>
              }
              placeholder="/path-to-save-files/"
              variant="bordered"
              labelPlacement="outside"
              className="my-1 sm:my-2"
            />

            <h3 className="text-lg font-bold mt-4 mb-2">
              Manipulation Operations
            </h3>
            {/* <Divider className="mb-4" /> */}

            <div className="my-4">
              {operationComponent(
                files,
                "File",
                handleAddOperationClick,
                handleRemoveOperationClick
              )}
              {/* <Divider className="my-2" /> */}
              {operationComponent(
                locations,
                "Location",
                handleAddOperationClick,
                handleRemoveOperationClick
              )}
            </div>

            <Checkbox className="mb-1" defaultSelected>
              Check for Duplicate files
            </Checkbox>
            <Checkbox className="mb-1" defaultSelected>
              Compress files
            </Checkbox>
            <Checkbox className="mb-1" defaultSelected>
              Archive files
            </Checkbox>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Input
                autoFocus
                label={
                  <>
                    Clean file Older than these days
                    <span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="30"
                variant="bordered"
                labelPlacement="outside"
              />

              <Input
                autoFocus
                label={
                  <>
                    Location<span className="text-red-600 ml-2">*</span>
                  </>
                }
                placeholder="Enter your Location"
                variant="bordered"
                labelPlacement="outside"
              />
            </div>

            <div className="flex justify-end mt-8">
              <Button
                onClick={() => {
                  onSubmit();
                }}
              >
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </DashboardLayout>
    </>
  );
}

function operationComponent(
  items,
  type,
  handleAddOperationClick,
  handleRemoveOperationClick
) {
  return (
    <>
      <div className="flex justify-between items-center">
        <Checkbox className="mb-1" defaultSelected>
          Change {type}(s) Name
        </Checkbox>
        <Button onClick={() => handleAddOperationClick(type)}>Add</Button>
      </div>

      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 my-3"
          >
            <Input
              autoFocus
              label="Old File Name"
              placeholder="Enter old file name"
              variant="bordered"
              labelPlacement="outside"
            />

            <Input
              autoFocus
              label="New File Name"
              placeholder="Enter new file name"
              variant="bordered"
              labelPlacement="outside"
            />

            <Button
              onClick={() => handleRemoveOperationClick(type, index)}
              isIconOnly
              color="danger"
              aria-label="Like"
            >
              <TrashIcon width={25} />
            </Button>
          </div>
        ))}
    </>
  );
}
