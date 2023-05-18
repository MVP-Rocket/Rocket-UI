import React, { useState, useEffect } from "react";
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsInfoCircleFill,
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
    }, duration ?? 3000);
  }, []);

  // Animation
  if (animation === "slide-up") animate = "animate-toastSlideUp";

  return (
    isDisplayed && (
      <div
        className={`${borderColor} ${backgroundColor} ${positionOnScreen} ${animate}
        absolute min-w-[240px] w-fit h-16 rounded-md border-t-4 shadow-md`}
      >
        <div className="flex h-full items-center px-4 pb-0.5">
          <div>{icon}</div>
          <p className={`${theme === "dark" && "text-white"} ml-2 mb-0.5`}>
            {message ?? "🚀 Its working!"}
          </p>
        </div>
      </div>
    )
  );
}
