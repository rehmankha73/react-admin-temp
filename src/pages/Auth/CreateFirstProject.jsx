import {Button, Input, Textarea} from "@nextui-org/react";
import {SelectDropdown} from "../../components/SelectDropdown/SelectDropdown.jsx";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout.jsx";

// import {useState} from "react";

export function CreateFirstProject() {

    const categoryOptions = ["Finance", "Accountant", "Development", "Ecommerce"];
    const roleOptions = ["Admin", "User", "Manager", "Peon"];


    // TODO: we can use this on integration time

    // const rolesOptions = [
    //     {name: "Developer", uid: "active"},
    //     {name: "Project Manager", uid: "paused"},
    //     {name: "Market", uid: "vacation"},
    // ];

    // const [roleFilter, setRoleFilter] = useState("Developer");

    return (
        <AuthLayout>
            <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20">
                <h1 className="text-xl sm:text-3xl font-bold mb-8">Create First Project</h1>

                <Input
                    autoFocus
                    label="Title"
                    placeholder="Your project title"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-4"
                />

                <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="my-4"
                />

                <SelectDropdown label="Category/Type" placeHolder="example:email@email.com" variant="bordered"
                                items={categoryOptions}/>

                <SelectDropdown label="Roles" placeHolder="Select Role from the following" variant="bordered"
                                items={roleOptions}/>

                {/*<Dropdown type="listbox">*/}
                {/*    <DropdownTrigger className="hidden sm:flex">*/}
                {/*//         <Input*/}
                {/*//             autoFocus*/}
                {/*//             label="Role"*/}
                {/*//             placeholder="example:email@email.com"*/}
                {/*//             variant="bordered"*/}
                {/*//             labelPlacement="outside"*/}
                {/*//             className="my-4"*/}
                {/*//             endContent={<ChevronDownIcon className="text-small"/>}*/}
                {/*        />*/}
                {/*//     </DropdownTrigger>*/}
                {/*//     <DropdownMenu*/}
                {/*//         disallowEmptySelection*/}
                {/*        aria-label="Table Columns"*/}
                {/*//         closeOnSelect={false}*/}
                {/*//         selectedKeys={roleFilter}*/}
                {/*//         selectionMode="single"*/}
                {/*        onSelectionChange={setRoleFilter}*/}
                {/*    >*/}
                {/*        {rolesOptions.map((status) => (*/}
                {/*            <DropdownItem key={status.uid} className="capitalize">*/}
                {/*                {capitalize(status.name)}*/}
                {/*            </DropdownItem>*/}
                {/*        ))}*/}
                {/*    </DropdownMenu>*/}
                {/*</Dropdown>*/}

                <Button className="my-6" variant="flat" style={{width: '100%'}}>
                    Create Project
                </Button>
            </div>
        </AuthLayout>
    )

}