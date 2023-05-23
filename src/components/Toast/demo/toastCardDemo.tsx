import React, { useEffect } from "react";
import useToast from "../useToast";
import { positions } from "../types/toastContainer";

export default function ToastCardDemo() {
  const { newToast, ToastContainer } = useToast();

  useEffect(() => {
    newToast("Contenu ajouté avec succès!");
    newToast("Une erreur est survenue", {
      type: "error",
      theme: "dark",
      animation: "zoom",
      duration: 3700,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
