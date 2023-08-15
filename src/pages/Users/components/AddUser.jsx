import {Button, Input} from "@nextui-org/react";
import {SelectDropdown} from "../../../components/SelectDropdown/SelectDropdown.jsx";

export function AddUser() {
    const roleOptions = ["Admin", "User", "Manager", "Peon"];

    return (
        <>
            <h2 className="my-2 text-sm text-center sm:text-left sm:text-xl font-bold">Add User</h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <Input
                        autoFocus
                        label="Title"
                        placeholder="Your project title"
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4 w-full sm:w-[400px]"
                    />

                    <SelectDropdown label="Roles" placeHolder="Select Role from the following" variant="bordered"
                                    items={roleOptions} className="w-full"/>
                </div>


                <div className="my-4 sm:my-0">
                    <Button className="w-full sm:w-fit">Send Invitation</Button>
                </div>
            </div>
        </>
    );
}