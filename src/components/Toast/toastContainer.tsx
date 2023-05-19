import React, { useEffect, useState } from "react";
import useToast from "./useToast";
import { toastType } from "./toastType";
import ToastCard from "./cards/toastCard";

interface toastContainerProps {
  position: string;
}

export default function ToastContainer({ position }: toastContainerProps) {
  const { newToast, toasts } = useToast();
  const [toastMapping, setToastMapping] = useState();

  // Demo
  useEffect(() => {
    newToast("Content added successfully!", "success", "light", 3000, "zoomIn");
    setTimeout(() => {
      newToast("An error has occured.", "error", "light", 3000, "slideUp");
    }, 300);
  }, []);
  //

  useEffect(() => {
    setToastMapping(
      toasts.map((toast: toastType) => {
        const { message, type, theme, duration, animation } = toast;
        return (
          <ToastCard
            {...{ message, type, theme, duration, animation, position }}
          />
        );
      })
    );
  }, [toasts]);

  // Position
  let positionOnScreen = "top-4 right-4";
  if (position === "top-left") positionOnScreen = "top-4 left-4";
  if (position === "bottom-left") positionOnScreen = "bottom-4 left-4";
  if (position === "bottom-right") positionOnScreen = "bottom-4 right-4";

  return <div className={`absolute ${positionOnScreen}`}>{toastMapping}</div>;
}
