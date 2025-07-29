import { ArrowLeftToLineIcon, ArrowRightToLineIcon } from "lucide-react";

export function ArrowLeftLineIcon({
  size = 15,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
}) {
  return (
    <ArrowLeftToLineIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export function ArrowRightLineIcon({
  size = 15,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
}) {
  return (
    <ArrowRightToLineIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export default ArrowLeftLineIcon;
