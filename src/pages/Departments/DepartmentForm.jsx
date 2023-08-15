import { Button, Card, CardBody, Input } from "@nextui-org/react";
import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import { TrashIcon } from "@heroicons/react/20/solid/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectDropdown } from "../../components/SelectDropdown/SelectDropdown.jsx";

export function DepartmentForm() {
  // TODO: This form will use for both Create and Edit
  const nevigation = useNavigate();

  const [files, setFiles] = useState([{ user_id: "", role: "" }]);
  // const usersArray = ["Rehman Ahmed (rehmankha73@gmail.com)", "Asad Abbas (asad@gmail.com)", "Zain Khan (zain@gmail.com)"];
  // const roleOptions = ["Suparr Admin", "Admin", "User"];

  // const handleAddOperationClick = () => {
  //     const newObj = {user_id: '', role: ''};
  //     setFiles([...files, newObj]);
  // }
  //
  // const handleRemoveOperationClick = (index) => {
  //     setFiles((files) => files.filter((_, i) => i !== index));
  // }
  //
  const onSubmit = () => {
    nevigation("/departments");
  };

  return (
    <>
      <DashboardLayout>
        <Card fullWidth shadow="none">
          <CardBody>
            <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">
              Create New Department
            </h1>

            <Input
              autoFocus
              label={
                <>
                  Name <span className="text-red-600 ml-2">*</span>
                </>
              }
              placeholder="Enter Department Name"
              variant="bordered"
              labelPlacement="outside"
              className="my-1 sm:my-2"
            />

            {/*<h3 className="text-sm mt-4 mb-2">Source Information</h3>*/}
            {/*<Divider/>*/}

            {/*<div className="my-2">*/}
            {/*    {operationComponent(files, 'File', usersArray, roleOptions, handleAddOperationClick, handleRemoveOperationClick)}*/}
            {/*</div>*/}

            <div className="flex justify-end ">
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
  usersArray,
  roleOptions,
  handleAddOperationClick,
  handleRemoveOperationClick
) {
  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button onClick={() => handleAddOperationClick(type)}>Add User</Button>
      </div>

      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 py-6 my-4"
          >
            <SelectDropdown
              label="User"
              variant="bordered"
              items={usersArray}
            />

            <SelectDropdown
              label="Roles"
              variant="bordered"
              items={roleOptions}
            />

            <Button
              onClick={() => handleRemoveOperationClick(index)}
              isIconOnly
              color="danger"
              size="md"
              aria-label="Like"
            >
              <TrashIcon width={20} />
            </Button>
          </div>
        ))}
    </>
  );
}
