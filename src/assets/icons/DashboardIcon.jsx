import { RectangleGroupIcon as SolidDashboardIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon as OutlineDashboardIcon } from "@heroicons/react/24/outline";

export const DashboardIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return <SolidDashboardIcon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export const DashboardOutlineIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return (
    <OutlineDashboardIcon className={`h-${size} w-${size} ${color} ${hover}`} />
  );
};

export default DashboardIcon;