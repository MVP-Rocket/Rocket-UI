import { useState } from "react";

export default function useToast() {
  const [toasts, setToasts] = useState([]);

  function newToast(message, type, theme, duration, animation) {
    const toastToAdd = {
      message: message ?? "🚀 Its working!",
      type: type ?? "",
      theme: theme ?? "",
      duration: duration ?? 2500,
      animation: animation ?? "",
    };
    setToasts((toasts) => [...toasts, toastToAdd]);
  }

  return { toasts, newToast };
}
