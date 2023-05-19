import React, { createContext, useState, useContext } from "react";
import Toast from "./toast";
import { toastType } from "./toastType";

const ToastContext = createContext({});

export const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState([]);

  function newToast({
    message,
    type,
    theme,
    position,
    duration,
    animation,
  }: toastType) {
    const toastToAdd = {
      message: message ?? "🚀 Its working!",
      type: type ?? "",
      theme: theme ?? "",
      position: position ?? "",
      duration: duration ?? 2500,
      animation: animation ?? "",
    };
    setToasts({ ...toasts, toastToAdd });
  }

  return (
    <ToastContext.Provider value={{ toasts, newToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default function useToast() {
  return useContext(ToastContext);
}
