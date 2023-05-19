import React, { useEffect, useState } from "react";
import useToast from "./useToast";
import ToastCard from "./cards/toastCard";
import { toastType } from "./toastType";

interface toastContainerProps {
  position: string;
}

export default function ToastContainer({ position }: toastContainerProps) {
  const { newToast, toasts } = useToast();

  // Demo
  useEffect(() => {
    newToast("Content added successfully!", "success", "light", 3000, "slide");
    setTimeout(() => {
      newToast("An error has occured.", "error", "light", 3200, "zoom-in");
    }, 300);
  }, []);
  //

  // Position
  let positionOnScreen = "top-4 right-0";
  if (position === "top-left") positionOnScreen = "top-4 left-0";
  if (position === "bottom-left") positionOnScreen = "bottom-4 left-0";
  if (position === "bottom-right") positionOnScreen = "bottom-4 right-0";

  return (
    toasts.length > 0 && (
      <div className={`absolute ${positionOnScreen} overflow-hidden`}>
        {toasts.map((toast: toastType) => {
          const { id, message, type, theme, animation } = toast;
          return (
            <ToastCard {...{ id, message, type, theme, animation, position }} />
          );
        })}
      </div>
    )
  );
}
