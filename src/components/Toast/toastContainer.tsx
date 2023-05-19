import React, { useEffect, useState } from "react";
import useToast from "./useToast";
import ToastCard from "./cards/toastCard";
import { toastType } from "./toastType";

interface toastContainerProps {
  position: string;
}

export default function ToastContainer({ position }: toastContainerProps) {
  const { newToast, toasts } = useToast();
  const [toastMapping, setToastMapping] = useState();

  // Demo
  useEffect(() => {
    newToast(
      "Content added successfully!",
      "success",
      "light",
      3000,
      "zoom-in"
    );
    setTimeout(() => {
      newToast("An error has occured.", "error", "light", 3200, "zoom-in");
    }, 300);
  }, []);
  //

  useEffect(() => {
    setToastMapping(
      toasts.map((toast: toastType) => {
        const { id, message, type, theme, animation } = toast;
        return (
          <ToastCard {...{ id, message, type, theme, animation, position }} />
        );
      })
    );
  }, [toasts]);

  // Position
  let positionOnScreen = "top-4 right-4";
  if (position === "top-left") positionOnScreen = "top-4 left-4";
  if (position === "bottom-left") positionOnScreen = "bottom-4 left-4";
  if (position === "bottom-right") positionOnScreen = "bottom-4 right-4";

  return (
    toasts.length > 0 && (
      <div className={`absolute ${positionOnScreen}`}>{toastMapping}</div>
    )
  );
}
