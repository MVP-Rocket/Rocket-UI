import { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { toastType } from "./toastType";

export default function useToast() {
  const [toasts, setToasts] = useState([]);
  const [removing, setRemoving] = useState("");

  function newToast(message, type, theme, duration, animation) {
    const toastToAdd = {
      id: uuid(),
      message: message ?? "🚀 Its working!",
      type: type ?? "",
      theme: theme ?? "",
      duration: duration ?? 3000,
      animation: animation ?? "",
    };
    setToasts((toasts) => [...toasts, toastToAdd]);
  }

  // Autoclosing
  useEffect(() => {
    removing && setToasts(toasts.filter((t: toastType) => t.id !== removing));
  }, [removing]);

  useEffect(() => {
    if (toasts.length) {
      const lastToast = toasts.at(-1);
      setTimeout(() => {
        setRemoving(lastToast.id);
      }, lastToast.duration);
    }
  }, [toasts]);

  // Closing
  function closeToast(toastId: string) {
    setToasts(toasts.filter((t: toastType) => t.id !== toastId));
  }

  return { toasts, newToast, closeToast };
}
