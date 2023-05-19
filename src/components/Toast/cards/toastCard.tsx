import React, { useState, useEffect } from "react";
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
  const [isDisplayed, setIsDisplayed] = useState(false);

  // Start animation after component load
  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 100);
  }, []);

  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = <BsCheckCircleFill size={22} color="#22c55e" />;
  let transitionStart = "translate-x-[110%] opacity-0";
  let transitionEnd = "translate-x-0 opacity-100";
  let justifying = "justify-end";
  let margin = "mr-4";

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
  if (animation === "zoom-in") {
    transitionStart = "scale-50 opacity-0";
    transitionEnd = "scale-100 opacity-100";
  }

  // Position
  if (position === "top-left" || position === "bottom-left") {
    justifying = "justify-start";
    margin = "ml-4";
    if (!animation || animation === "slide") {
      transitionStart = "-translate-x-[110%] opacity-0";
      transitionEnd = "-translate-x-0 opacity-100";
    }
  }

  return (
    <div className={`flex ${justifying}`}>
      <div
        className={`${borderColor} ${backgroundColor} ${margin} ${
          isDisplayed ? transitionEnd : transitionStart
        }
        min-w-[240px] min-h-[60px] w-fit h-fit rounded-md border-t-4 shadow-md mb-3 transition-all duration-[350ms] ease-out`}
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
