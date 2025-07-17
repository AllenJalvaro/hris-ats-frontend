import { XMarkIcon } from "@heroicons/react/24/solid";

const CloseIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <XMarkIcon
      className={`h-${size} w-${size} ${color} ${hover}`}
    />
  );
};

export default CloseIcon;
