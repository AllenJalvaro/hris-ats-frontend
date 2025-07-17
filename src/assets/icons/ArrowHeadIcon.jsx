import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ArrowHeadDownIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <ChevronDownIcon className={`h-${size} w-${size} ${color} ${hover}`} />
  );
};

export const ArrowHeadUpIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <ChevronUpIcon className={`h-${size} w-${size} ${color} ${hover}`} />
  );
};

export default ArrowHeadDownIcon;
