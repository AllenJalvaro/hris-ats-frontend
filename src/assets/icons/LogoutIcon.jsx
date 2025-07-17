import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const LogoutIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <ArrowRightStartOnRectangleIcon
      className={`h-${4} w-${4} ${color} ${hover}`}
    />
  );
};

export default LogoutIcon;
