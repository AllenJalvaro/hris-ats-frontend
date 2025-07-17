import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export const ArrowLeftInCircleIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <ArrowLeftCircleIcon className={`h-${size} w-${size} ${color} ${hover}`} />
  );
};

export const ArrowRightInCircleIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <ArrowRightCircleIcon className={`h-${size} w-${size} ${color} ${hover}`} />
  );
};

export default ArrowLeftInCircleIcon;
