import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { toastType } from "./types/toastType";
import ToastCard from "./cards/toastCard";
import { toastOptionsType } from "./types/toastOptionsType";

interface toastContainerProps {
  position: string;
}

export default function useToast() {
  const [toasts, setToasts] = useState<toastType>([]);

  // Demo
  useEffect(() => {
    newToast("Default Toast!");
    newToast("Custom Toast!", {
      type: "info",
      theme: "dark",
      duration: 3700,
      animation: "zoom",
    });
  }, []);
  //

  function newToast(message, options?: toastOptionsType): void {
    const toastToAdd = {
      id: uuid(),
      message: message ?? "🚀 Its working!",
      type: options?.type ?? "",
      theme: options?.theme ?? "",
      duration: options?.duration ?? 3000,
      animation: options?.animation ?? "",
    };
    setToasts((toasts) => [...toasts, toastToAdd]);
  }

  function ToastContainer({ position }: toastContainerProps): any {
    // Position
    let positionOnScreen = "top-4 right-0";
    if (position === "top-left") positionOnScreen = "top-4 left-0";
    if (position === "bottom-left") positionOnScreen = "bottom-4 left-0";
    if (position === "bottom-right") positionOnScreen = "bottom-4 right-0";

    return (
      toasts.length > 0 && (
        <div
          className={`absolute z-50 ${positionOnScreen} overflow-hidden`}
          id="toastContainer"
        >
          {toasts.map((toast: toastType) => {
            const { id, message, type, theme, animation, duration } = toast;
            return (
              <ToastCard
                {...{
                  id,
                  message,
                  type,
                  theme,
                  animation,
                  duration,
                  position,
                }}
              />
            );
          })}
        </div>
      )
    );
  }

  return { ToastContainer, newToast };
}
