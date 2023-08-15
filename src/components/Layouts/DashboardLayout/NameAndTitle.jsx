import { Avatar } from "@nextui-org/react";
import { XMarkIcon } from "@heroicons/react/20/solid/index.js";

// eslint-disable-next-line react/prop-types
export function NameAndTitle({ isMobile = false, onClose = null }) {
  const handleClickOnCloseIcon = () => {
    if (onClose) onClose();
  };

  return (
    <div className="flex items-start flex-wrap">
      <div className="px-6 flex flex-1 flex-col items-center text-white">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          className="w-20 h-20"
        />

        <div className="flex flex-col items-center">
          <p className="text-lg font-bold">Amanda</p>
          <p>amanda@gmail.com</p>
        </div>
      </div>

      {isMobile && (
        <XMarkIcon
          width={25}
          className="cursor-pointer"
          onClick={handleClickOnCloseIcon}
        />
      )}
    </div>
  );
}
