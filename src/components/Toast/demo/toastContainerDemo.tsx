import React, { useEffect } from "react";
import useToast from "../useToast";

export default function ToastContainerDemo({ position }: any) {
  const { ToastContainer, newToast } = useToast();

  useEffect(() => {
    newToast();
    newToast("Custom Toast!", {
      type: "info",
      theme: "dark",
      duration: 3700,
      animation: "zoom",
    });
  }, []);

  return (
    <>
      <ToastContainer position={position} />
    </>
  );
}
