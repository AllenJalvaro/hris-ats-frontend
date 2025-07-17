import { UserGroupIcon as SolidUserGroupIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon as OutlineUserGroupIcon } from "@heroicons/react/24/outline";

export const EmployeesIcon = ({ size = 4, color = "text-gray-500" , hover}) => {
  return <SolidUserGroupIcon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export const EmployeesOutlineIcon = ({ size = 4, color = "text-gray-500" , hover}) => {
  return <OutlineUserGroupIcon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export default EmployeesIcon;
