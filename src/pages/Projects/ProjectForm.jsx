import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
// import { useNavigate } from "react-router-dom";
import { SelectDropdown } from "../../components/SelectDropdown/SelectDropdown.jsx";

export function ProjectForm() {
  // TODO: This form will use for both Create and Edit
  // const router = useNavigate();

  const categoryOptions = ["Finance", "Accountant", "Development", "Ecommerce"];
  const roleOptions = ["Admin", "User", "Manager", "Peon"];

  return (
    <>
      <DashboardLayout>
        <Card className="w-full	 sm:w-10/12 m-auto mt-10" shadow>
          <CardBody>
            <h1 className="mb-6 text-xl sm:text-3xl font-bold">
              Create Your Project
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                autoFocus
                label="Title"
                placeholder="Your project title"
                variant="bordered"
                labelPlacement="outside"
                className="my-2"
              />

              <Textarea
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                className="my-2"
              />

              <SelectDropdown
                label="Category/Type"
                placeHolder="example:email@email.com"
                variant="bordered"
                items={categoryOptions}
              />

              <SelectDropdown
                label="Roles"
                placeHolder="Select Role from the following"
                variant="bordered"
                items={roleOptions}
              />
            </div>

            <div className="mt-10 flex justify-end">
              <Button variant="flat">Create Project</Button>
            </div>
          </CardBody>
        </Card>
      </DashboardLayout>
    </>
  );
}

// function operationComponent(items, type, handleAddOperationClick, handleRemoveOperationClick) {
//     return (
//         <>
//             <div className="flex justify-between items-center">
//                 <Checkbox className="mb-1" defaultSelected>Change {type}(s) Name</Checkbox>
//                 <Button onClick={() => handleAddOperationClick(type)}>Add</Button>
//             </div>
//
//             {items && items.length > 0 &&
//                 items.map((item, index) => (
//                     <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 my-3">
//                         <Input
//                             autoFocus
//                             label="Old File Name"
//                             placeholder="Enter old file name"
//                             variant="bordered"
//                             labelPlacement="outside"
//                         />
//
//                         <Input
//                             autoFocus
//                             label="New File Name"
//                             placeholder="Enter new file name"
//                             variant="bordered"
//                             labelPlacement="outside"
//                         />
//
//                         <Button onClick={() => handleRemoveOperationClick(type, index)} isIconOnly color="danger"
//                                 aria-label="Like">
//                             <TrashIcon width={25}/>
//                         </Button>
//                     </div>
//                 ))
//             }
//         </>
//     );
//
// }
