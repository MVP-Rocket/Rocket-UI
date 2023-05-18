import React, { useState, useEffect } from "react";
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsInfoCircleFill,
  BsXLg,
} from "react-icons/bs";

interface toastProps {
  type?: string;
  theme?: string;
  position?: string;
  duration?: number;
  message?: string;
  animation?: string;
}

export default function Toast({
  message,
  type,
  theme,
  position,
  duration,
  animation,
}: toastProps) {
  const [isDisplayed, setIsDisplayed] = useState(true);

  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = <BsCheckCircleFill size={22} color="#22c55e" />;
  let positionOnScreen = "top-4 right-4";
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

  // Position
  if (position === "top-left") positionOnScreen = "top-4 left-4";
  if (position === "bottom-left") positionOnScreen = "bottom-4 left-4";
  if (position === "bottom-right") positionOnScreen = "bottom-4 right-4";

  // Duration
  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(false);
    }, duration ?? 2500);
  }, []);

  // Animation
  if (animation === "slide-up") animate = "animate-toastSlideUp";

  return (
    isDisplayed && (
      <div
        className={`${borderColor} ${backgroundColor} ${positionOnScreen} ${animate}
        absolute min-w-[240px] min-h-[60px] w-fit h-fit rounded-md border-t-4 shadow-md`}
      >
        <div className="flex min-h-[60px] items-center px-4 pb-0.5">
          {icon}
          <p
            className={`${
              theme === "dark" && "text-white"
            } px-3 mb-0.5 break-words md:max-w-[350px] max-w-[240px]`}
          >
            {message ?? "🚀 Its working!"}
          </p>
          <BsXLg
            onClick={() => setIsDisplayed(false)}
            size={14}
            className="absolute z-20 top-3 right-3 cursor-pointer"
          />
        </div>
      </div>
    )
  );
}
