import { useLocation, useNavigate } from "react-router-dom";
// import {SelectionDropDown} from "../../SelectionDropdown/SelectionDropDown.jsx";
// import {SelectDropdown} from "../../SelectDropdown/SelectDropdown.jsx";
// import {Button, Input, Modal, ModalBody, ModalContent, Textarea, useDisclosure} from "@nextui-org/react";
// Icons
import {
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
  FolderIcon,
  UsersIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export function SideNav({ onClose = null }) {
  const items = [
    { to: "/", title: "Dashboard", icon: "" },
    { to: "/departments", title: "Departments", icon: "" },
    { to: "/projects", title: "Projects", icon: "" },
    { to: "/jobs", title: "Jobs", icon: "" },
    { to: "/users", title: "Users", icon: "" },
    { to: "", title: "Logs", icon: "" },
    { to: "", title: "Emails", icon: "" },
    { to: "/settings", title: "Settings", icon: "" },
  ];

  const location = useLocation().pathname;

  // const categoryOptions = ["Finance", "Accountant", "Development", "Ecommerce"];
  // const roleOptions = ["Admin", "User", "Manager", "Peon"];
  //
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();

  // const SelectionDropDownOptions = ["Rehman & Co.", "Sfto.com", "HeroIcons.com"];

  const router = useNavigate();

  const handleClickOnSideBarClose = (to) => {
    console.log("to: ", to);
    router(to);
    if (onClose) onClose();
  };

  return (
    <div className="mt-8">
      {/*<SelectionDropDown type="span" items={SelectionDropDownOptions}/>*/}

      {/*<span onClick={onOpen} className="flex cursor-pointer bg-zinc-200 py-2 px-6 text-sm font-bold mb-4" style={ {borderRadius: '10px'} }>*/}
      {/*            <span className="mr-2"><PlusIcon width={20}/></span> Add New Project*/}
      {/*</span>*/}

      {items.map((item) => (
        <>
          <span
            key={item.to} // Add a unique key for each item in the array (assuming `item.to` is unique)
            className={`block py-4 px-6 text-sm mb-1 cursor-pointer ${
              location === item.to ? "bg-sftpRoseStart" : "hover:bg-sftpGray"
            }`}
            style={{ borderRadius: "10px" }}
            onClick={() => handleClickOnSideBarClose(item.to)}
          >
            <div className="flex text-white justify-center sm:justify-start">
              <span className="mr-2">{getIcon(item.title)}</span> {item.title}
            </div>
          </span>

          {/*<Link*/}
          {/*    key={item.to} // Add a unique key for each item in the array (assuming `item.to` is unique)*/}
          {/*    className="bg-zinc-200 block py-2 px-6 text-md font-bold mb-4"*/}
          {/*    to="#"*/}
          {/*    style={ {borderRadius: '10px'} }*/}
          {/*    onClick={() => handleClickOnSideBarClose(item.to)}*/}
          {/*>*/}
          {/*    <div className="flex">*/}
          {/*        <span className="mr-2">{getIcon(item.title)}</span> {item.title}*/}
          {/*    </div>*/}
          {/*</Link>*/}
        </>
      ))}

      {/*Add New Project*/}
      {/*<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">*/}
      {/*    <ModalContent>*/}
      {/*        {(onClose) => (*/}
      {/*            <>*/}
      {/*                <ModalBody className="">*/}
      {/*                    <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20 ">*/}
      {/*                        <h1 className="mb-6 text-xl sm:text-3xl font-bold">Create Your Project</h1>*/}

      {/*                        <Input*/}
      {/*                            autoFocus*/}
      {/*                            label="Title"*/}
      {/*                            placeholder="Your project title"*/}
      {/*                            variant="bordered"*/}
      {/*                            labelPlacement="outside"*/}
      {/*                            className="my-2"*/}
      {/*                        />*/}

      {/*                        <Textarea*/}
      {/*                            label="Description"*/}
      {/*                            labelPlacement="outside"*/}
      {/*                            placeholder="Enter your description"*/}
      {/*                            className="my-2"*/}
      {/*                        />*/}

      {/*                        <SelectDropdown label="Category/Type" placeHolder="example:email@email.com"*/}
      {/*                                        variant="bordered"*/}
      {/*                                        items={categoryOptions}/>*/}

      {/*                        <SelectDropdown label="Roles" placeHolder="Select Role from the following" variant="bordered"*/}
      {/*                                        items={roleOptions}/>*/}

      {/*                        <Button className="my-6" variant="flat" style={{width: '100%'}} onClick={onClose}>*/}
      {/*                            Create Project*/}
      {/*                        </Button>*/}
      {/*                    </div>*/}
      {/*                </ModalBody>*/}
      {/*            </>*/}
      {/*        )}*/}
      {/*    </ModalContent>*/}
      {/*</Modal>*/}
    </div>
  );
}

function getIcon(title) {
  switch (title) {
    case "Dashboard":
      return <FolderIcon width={20} />;
    case "Projects":
      return <ClipboardDocumentCheckIcon width={20} />;
    case "Jobs":
      return <FolderIcon width={20} />;
    case "Users":
      return <UsersIcon width={20} />;
    case "Departments":
      return <BuildingOfficeIcon width={20} />;
    case "Settings":
      return <Cog8ToothIcon width={20} />;
    case "Logs":
      return <PlusIcon width={20} />;
    case "Emails":
      return <EnvelopeIcon width={20} />;
  }
}
