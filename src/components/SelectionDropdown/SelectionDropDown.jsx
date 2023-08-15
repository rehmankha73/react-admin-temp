import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {useMemo, useState} from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export function SelectionDropDown({items}) {

    const [selectedKeys, setSelectedKeys] = useState(new Set([items[0]]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
               <span className="flex justify-between bg-zinc-200 p-2 text-sm font-bold mb-4 cursor-pointer" style={ {borderRadius: '10px'} }>
                    <span> {selectedValue} </span> <ChevronRightIcon width={20}/>
                </span>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection actions"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {items.map((item) => (
                    <DropdownItem key={item}>{item}</DropdownItem>
                ))}
            </DropdownMenu>

            <Button className="w-full">
                Add Project
            </Button>
        </Dropdown>
    );
}
