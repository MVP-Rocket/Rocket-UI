import React, { useState } from "react";
import { toast } from "./types";
import ToastCard, { positions } from "./";
import { options } from "./types";
import { toastContainer } from "./types";

export default function useToast() {
  const [toasts, setToasts] = useState<toast[]>([]);

  function newToast(message: string, options?: options): void {
    const toastToAdd = {
      message: message ?? "🚀 Default Toast!",
      type: options?.type,
      theme: options?.theme,
      duration: options?.duration ?? 3000,
      animation: options?.animation,
    };
    setToasts((toasts) => [...toasts, toastToAdd]);
  }

  function ToastContainer({
    position = positions.topRight,
  }: toastContainer): any {
    return (
      toasts.length > 0 && (
        <div className={`${position} absolute z-50 overflow-hidden`}>
          {toasts.map((toast: toast) => {
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
