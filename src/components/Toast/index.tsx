import React, { useState, useEffect } from "react";
import { toast } from "../../global/types/Toast";
import { positionsTypes } from "../../global/types/Toast";
import SVGInfo from "./../../components/SVG/SVGInfo";
import SVGError from "./../../components/SVG/SVGError";
import SVGCrossMark from "./../../components/SVG/SVGCrossMark";

export const positions: positionsTypes = {
  topLeft: "top-4 left-0",
  topRight: "top-4 right-0",
  bottomLeft: "bottom-4 left-0",
  bottomRight: "bottom-4 right-0",
};

export default function ToastCard({
  message,
  type = "info",
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
  let transitionStart = "translate-x-[110%] opacity-0";
  let transitionEnd = "translate-x-0 opacity-100";
  let justifying = "justify-end";
  let margin = "mr-4";

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
          {type === "info" && (
            <SVGInfo width="30px" className=" border-blue-500" />
          )}
          {type === "error" && (
            <SVGError width="30px" className=" border-red-500" />
          )}
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
            {theme === "dark" ? (
              <SVGCrossMark className="fill-white" />
            ) : (
              <SVGCrossMark />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
