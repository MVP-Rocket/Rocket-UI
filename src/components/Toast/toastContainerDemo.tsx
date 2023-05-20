import React from "react";
import useToast from "./useToast";

export default function ToastContainer({ position }: any) {
  const { ToastContainer } = useToast();
  return (
    <>
      <ToastContainer position={position} />
    </>
  );
}
