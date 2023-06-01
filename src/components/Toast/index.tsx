import React, { useState, useEffect } from "react";
import { toast } from "./types";
import { positionsTypes } from "./types";
import successIcon from "../../assets/icons/checkmark-circle-svgrepo-com.svg";
import errorIcon from "../../assets/icons/exclamation-mark-round-svgrepo-com.svg";
import infoIcon from "../../assets/icons/info-svgrepo-com.svg";
import crossmarkIcon from "../../assets/icons/cross-23.svg";
import crossmarkDarkIcon from "../../assets/icons/cross-23-dark.svg";

export const positions: positionsTypes = {
  topLeft: "top-4 left-0",
  topRight: "top-4 right-0",
  bottomLeft: "bottom-4 left-0",
  bottomRight: "bottom-4 right-0",
};

export default function ToastCard({
  message,
  type,
  theme,
  animation,
  duration,
  color,
  position,
}: toast) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Transitions and autoclosing
  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 100);
    setTimeout(() => {
      setIsDisplayed(false);
    }, (duration ?? 3000) - 350);
    setTimeout(() => {
      setIsClosed(true);
    }, duration ?? 3000);
  }, []);

  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = successIcon;
  let transitionStart = "translate-x-[110%] opacity-0";
  let transitionEnd = "translate-x-0 opacity-100";
  let justifying = "justify-end";
  let margin = "mr-4";

  // Type
  if (type === "error") {
    borderColor = "border-red-500";
    icon = errorIcon;
  }
  if (type === "info") {
    borderColor = "border-blue-500";
    icon = infoIcon;
  }

  // Theme
  if (theme === "dark") backgroundColor = "bg-gray-800";

  // Animation
  if (animation === "zoom") {
    transitionStart = "scale-50 opacity-0";
    transitionEnd = "scale-100 opacity-100";
  }

  // Position
  if (position === "top-4 left-0" || position === "bottom-4 left-0") {
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
        className={`${color ?? borderColor} ${
          color ?? backgroundColor
        } ${margin} ${isClosed && "hidden"} ${
          isDisplayed ? transitionEnd : transitionStart
        }
       min-w-[300px] min-h-[60px] w-fit h-fit rounded-md border-t-4 shadow-md mb-3 transition-all duration-[350ms] ease-out`}
      >
        <div className="flex min-h-[60px] items-center px-4 pb-0.5">
          <img src={icon} alt="icon" className="h-[30px]" />
          <p
            className={`${
              theme === "dark" && "text-white"
            } px-3 mb-0.5 break-words md:max-w-[350px] max-w-[240px]`}
          >
            {message}
          </p>
          <div
            onClick={() => setIsClosed(true)}
            className="absolute z-20 top-3 right-3 cursor-pointer"
          >
            <img
              src={theme === "dark" ? crossmarkDarkIcon : crossmarkIcon}
              alt="icon"
              className="h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
