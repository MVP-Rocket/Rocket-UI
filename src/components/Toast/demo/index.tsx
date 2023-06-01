import React, { useEffect } from "react";
import useToast from "../useToast";

export default function ToastCardDemo() {
  const { newToast, ToastContainer } = useToast();

  useEffect(() => {
    newToast("Success toast");
    newToast("Error toast", {
      type: "error",
      theme: "dark",
      animation: "zoom",
      duration: 3700,
    });
    newToast("Info toast", {
      type: "info",
      animation: "zoom",
      duration: 4200,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
