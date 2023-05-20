import React, { useState, useEffect } from "react";
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsInfoCircleFill,
  BsXLg,
} from "react-icons/bs";
import { toastType } from "../../Toast/types/toastType";

export default function ToastCardDemo({
  id,
  message,
  type,
  theme,
  duration,
  animation,
}: toastType) {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isAnimationOn, setIsAnimationOn] = useState(false);

  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // start transition
    setTimeout(() => {
      setIsAnimationOn(true);
    }, 100);
    // end transition
    setTimeout(() => {
      setIsAnimationOn(false);
    }, 3000 - 350);
    // closing toast
    setTimeout(() => {
      setIsClosed(true);
    }, 3000);
  }, []);

  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = <BsCheckCircleFill size={22} color="#22c55e" />;
  let transitionStart = "translate-x-[110%] opacity-0";
  let transitionEnd = "translate-x-0 opacity-100";

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

  // Duration
  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(false);
    }, 3000);
  }, []);

  // Animation
  if (animation === "zoom") {
    transitionStart = "scale-50 opacity-0";
    transitionEnd = "scale-100 opacity-100";
  }

  return (
    isDisplayed && (
      <div
        className={`${borderColor} ${backgroundColor} ${isClosed && "hidden"} ${
          isAnimationOn ? transitionEnd : transitionStart
        }
        absolute top-4 right-4 min-w-[300px] min-h-[60px] w-fit h-fit rounded-md border-t-4 shadow-md mb-3 transition-all duration-[350ms] ease-out`}
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
            onClick={() => setIsClosed(true)}
            size={14}
            className="absolute z-20 top-3 right-3 cursor-pointer"
          />
        </div>
      </div>
    )
  );
}
