import { Cog6ToothIcon as SolidConfigurationsIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon as OutlineConfigurationsIcon } from "@heroicons/react/24/outline";

export const ConfigurationsIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return <SolidConfigurationsIcon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export const ConfigurationsOutlineIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return <OutlineConfigurationsIcon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export default ConfigurationsIcon;
