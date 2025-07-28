import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ArrowHeadDownIcon = ({ size = 15, className, ...props }) => {
  return (
    <ChevronDownIcon
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};

export const ArrowHeadUpIcon = ({ size = 15, className, ...props }) => {
  return (
    <ChevronUpIcon
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};

export default ArrowHeadDownIcon;
