// import { toast } from "sonner";

// export const GlassToast = ({
//   message = "Something went wrong.",
//   icon = null,
//   textColor = "text-black",
//   bgColor = "bg-white/10",
//   borderColor = "border-white/20",
//   shadow = "shadow-md",
//   backdrop = "backdrop-blur-md",
//   size = "text-xs",
//   padding = "p-3",
//   onClick = null,
// }) => {
//   toast.custom((t) => (
//     <div
//       className={`!rounded-lg ${shadow} ${borderColor} ${bgColor} ${backdrop} ${textColor} ${padding} !flex !items-center !justify-center !gap-3 !cursor-pointer `}
//       onClick={() => {
//         if (onClick) onClick();
//         toast.dismiss(t);
//       }}
//     >
//       {icon && <div className="shrink-0">{icon}</div>}
//       <span className={size}>{message}</span>
//     </div>
//   ));
// };


import { toast } from "sonner";

export function glassToast({
  message,
  icon,
  textColor = "#1f2937",
  bgColor = "rgba(255, 255, 255, 0.25)",
  blur = 10,
  duration = 3000,
  dismissible = true,
  closeButton = false,
}) {
  toast(message, {
    icon,
    duration,
    dismissible,
    closeButton,
    style: {
      background: bgColor,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      borderRadius: "1rem",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      color: textColor,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
    },
  });
}

