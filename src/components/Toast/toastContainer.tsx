import React from "react";
import useToast from "./toastContext";
import Toast from "./toast";
import { createPortal } from "react-dom";
import { toastType } from "./toastType";

export default function toastContainer() {
  const { toasts } = useToast();

  const toastsMapping = toasts.map((toast: toastType) => {
    const { message, type, theme, position, duration, animation } = toast;
    return (
      <Toast {...{ message, type, theme, position, duration, animation }} />
    );
  });

  return <>{createPortal(<>{toastsMapping}</>, document.body)}</>;
}
