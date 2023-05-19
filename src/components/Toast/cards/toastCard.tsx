import React from "react";
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsInfoCircleFill,
  BsXLg,
} from "react-icons/bs";
import { toastType } from "../toastType";
import useToast from "../useToast";

export default function ToastCard({
  id,
  message,
  type,
  theme,
  animation,
  position,
}: toastType) {
  const { closeToast } = useToast();

  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = <BsCheckCircleFill size={22} color="#22c55e" />;
  let animate = "animate-toastZoomIn";

  // Type
  if (type === "error") {
    borderColor = "border-red-500";
    icon = <BsExclamationCircleFill size={22} color="#ef4444" />;
  }
  if (type === "info") {
    borderColor = "border-blue-500";
    icon = <BsInfoCircleFill size={22} color="#3b82f6" />;
  }

  // Theme
  if (theme === "dark") backgroundColor = "bg-gray-900";

  // Animation
  if (animation === "slide-up") animate = "animate-toastSlideUp";

  // Justifying
  let justifying = "justify-end";
  if (position === "top-left" || position === "bottom-left")
    justifying = "justify-start";

  return (
    <div className={`flex ${justifying}`}>
      <div
        className={`${borderColor} ${backgroundColor} ${animate}
        min-w-[240px] min-h-[60px] w-fit h-fit rounded-md border-t-4 shadow-md mb-3`}
      >
        <div className="flex min-h-[60px] items-center px-4 pb-0.5">
          {icon}
          <p
            className={`${
              theme === "dark" && "text-white"
            } px-3 mb-0.5 break-words md:max-w-[350px] max-w-[240px]`}
          >
            {message}
          </p>
          <BsXLg
            onClick={() => closeToast(id)}
            size={14}
            className="absolute z-20 top-3 right-3 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
