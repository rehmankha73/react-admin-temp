import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input} from "@nextui-org/react";
import {useMemo, useState} from "react";
import {ChevronDownIcon} from "../DataTable/components/ChevronDownIcon.jsx";

// eslint-disable-next-line react/prop-types
export function SelectDropdown({label, placeHolder, multiple = false, variant, items, dropDownClasses, triggerClasses}) {

    const [selectedKeys, setSelectedKeys] = useState(new Set([items[0]]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown type="listbox" className={`${dropDownClasses}`}>
            <DropdownTrigger>
                <Input
                    autoFocus
                    label={label}
                    placeholder={placeHolder}
                    variant={variant}
                    labelPlacement="outside"
                    className={`${triggerClasses}`}
                    endContent={<ChevronDownIcon className="text-small"/>}
                    value={selectedValue}
                />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection actions"
                variant="flat"
                disallowEmptySelection
                selectionMode={multiple ? 'multiple' : 'single'}
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {items.map((item) => (
                    <DropdownItem key={item}>{item}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
