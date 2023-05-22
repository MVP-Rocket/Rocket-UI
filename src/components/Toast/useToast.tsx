import React, { useState } from "react";
import { toastType } from "./types/toastType";
import ToastCard from "./toastCard";
import { toastOptionsType } from "./types/toastOptionsType";

interface toastContainerProps {
  position: string;
}

export default function useToast() {
  const [toasts, setToasts] = useState<toastType>([]);

  function newToast(message?: string, options?: toastOptionsType): void {
    const toastToAdd = {
      message: message ?? "🚀 Default Toast!",
      type: options?.type ?? "",
      theme: options?.theme ?? "",
      duration: options?.duration ?? 3000,
      animation: options?.animation ?? "",
    };
    setToasts((toasts) => [...toasts, toastToAdd]);
  }

  function ToastContainer({ position }: toastContainerProps): any {
    let positionOnScreen = "top-4 right-0";
    if (position === "top-left") positionOnScreen = "top-4 left-0";
    if (position === "bottom-left") positionOnScreen = "bottom-4 left-0";
    if (position === "bottom-right") positionOnScreen = "bottom-4 right-0";

    return (
      toasts.length > 0 && (
        <div className={`${positionOnScreen} absolute z-50 overflow-hidden`}>
          {toasts.map((toast: toastType) => {
            const { message, type, theme, animation, duration } = toast;
            return (
              <ToastCard
                {...{
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
