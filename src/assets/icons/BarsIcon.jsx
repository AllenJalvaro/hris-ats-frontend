import { Bars3Icon } from "@heroicons/react/24/solid";

const BarsIcon = ({ size = 4, color = "text-gray-500", hover }) => {
  return <Bars3Icon className={`h-${size} w-${size} ${color} ${hover}`} />;
};

export default BarsIcon;
