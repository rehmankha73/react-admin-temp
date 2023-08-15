import {Button, Card, CardBody, Input, Radio, RadioGroup} from "@nextui-org/react";
import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SelectDropdown} from "../../components/SelectDropdown/SelectDropdown.jsx";

export function UserForm() {

    // TODO: This form will use for both Create and Edit
    const route = useNavigate();

    const [role, setRole] = useState('SuperAdmin');

    const departmentsArray = ["IT", "Ecommerce", "Marketing", "Graphics"];
    const projectsArray = ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6", "Project7", "Project8", "Project9"];
    // const rolesArray = ["Super Admin", "Admin", "User"];

    const onSubmit = () => {
        route('/jobs');
    }

    const handleOnChange = (e) => {
        setRole(e.target.value)
    }

    return (
        <>
            <DashboardLayout>
                <Card fullWidth
                      shadow="none"
                >
                    <CardBody>
                        <h1 className="text-xl sm:text-3xl font-bold my-4 text-center sm:text-left">Create New User</h1>

                        {/*<Input*/}
                        {/*    autoFocus*/}
                        {/*    label={<>Title<span className="text-red-600 ml-2">*</span></>}*/}
                        {/*    placeholder="Job Title here"*/}
                        {/*    variant="bordered"*/}
                        {/*    labelPlacement="outside"*/}
                        {/*    className="my-1 sm:my-2"*/}
                        {/*/>*/}

                        {/*<h3 className="text-sm mt-4 mb-2">Source Information</h3>*/}
                        {/*<Divider/>*/}

                        <div className="sm:flex sm:gap-2">
                            <Input
                                autoFocus
                                label={<>First Name<span className="text-red-600 ml-2">*</span></>}
                                placeholder="Enter First Name"
                                variant="bordered"
                                labelPlacement="outside"
                                className="w-full my-1 sm:w-1/2 sm:my-2"
                            />

                            <Input
                                autoFocus
                                label={<>Last Name<span className="text-red-600 ml-2">*</span></>}
                                placeholder="Enter Last Name"
                                variant="bordered"
                                labelPlacement="outside"
                                className="w-full my-1 sm:w-1/2 sm:my-2"
                            />
                        </div>

                        <div className="sm:flex sm:gap-2">
                            <Input
                                autoFocus
                                label={<>Email<span className="text-red-600 ml-2">*</span></>}
                                placeholder="Enter Email"
                                variant="bordered"
                                labelPlacement="outside"
                                className="w-full my-1 sm:w-1/2 sm:my-2"
                            />

                            <Input
                                autoFocus
                                label={<>Phone<span className="text-red-600 ml-2">*</span></>}
                                placeholder="Enter Phone"
                                variant="bordered"
                                labelPlacement="outside"
                                className="w-full my-1 sm:w-1/2 sm:my-2"
                            />
                        </div>

                        <RadioGroup
                            label={<>User Role<span className="text-red-600 ml-2 mt-2">*</span></>}
                            orientation="horizontal"
                            onChange={handleOnChange}
                            value={role}
                            className="my-4"
                        >
                            <Radio value="SuperAdmin">Super Admin</Radio>
                            <Radio value="Admin">Admin</Radio>
                            <Radio value="User">User</Radio>
                        </RadioGroup>

                        {role !== 'SuperAdmin' &&
                            <div className="sm:flex sm:gap-2 my-6">

                                <SelectDropdown label="Department"
                                                variant="bordered"
                                                items={departmentsArray}
                                                multiple={true}
                                                triggerClasses="w-full my-8 sm:w-1/2 sm:my-2"/>

                                {role === 'User' &&
                                    <SelectDropdown label="Project"
                                                    variant="bordered"
                                                    items={projectsArray}
                                                    multiple={true}
                                                    triggerClasses="w-full my-8 sm:w-1/2 sm:my-2"/>
                                }

                                {/*<SelectDropdown label="User" variant="bordered" items={rolesArray}*/}
                                {/*                triggerClasses="w-full my-8 sm:w-1/2 sm:my-2" />*/}
                            </div>
                        }

                        <div className="flex justify-end">
                            <Button onClick={() => {
                                onSubmit()
                            }}>Submit</Button>
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