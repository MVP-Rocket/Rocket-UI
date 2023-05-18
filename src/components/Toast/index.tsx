import React from "react";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsInfoCircle,
} from "react-icons/bs";

interface toastProps {
  type: string;
  theme: string;
  position: string;
  message?: string;
}

export default function Toast({ type, theme, position, message }: toastProps) {
  // Default toast
  let borderColor = "border-green-500";
  let backgroundColor = "bg-white";
  let icon = <BsCheckCircle size={22} color="#22c55e" />;
  let positionOnScreen = "top-4 right-4";

  // Type
  if (type === "error") {
    borderColor = "border-red-500";
    icon = <BsExclamationCircle size={22} color="#ef4444" />;
  }
  if (type === "info") {
    borderColor = "border-blue-500";
    icon = <BsInfoCircle size={22} color="#3b82f6" />;
  }

  // Theme
  if (theme === "dark") backgroundColor = "bg-gray-900";

  // Position
  if (position === "top-left") positionOnScreen = "top-4 left-4";
  if (position === "bottom-left") positionOnScreen = "bottom-4 left-4";
  if (position === "bottom-right") positionOnScreen = "bottom-4 right-4";

  return (
    <div
      className={`absolute min-w-[240px] w-fit h-16 rounded-md border-t-4 shadow-md ${borderColor} ${backgroundColor} ${positionOnScreen}`}
    >
      <div className="flex h-full items-center px-4 pb-0.5">
        <div>{icon}</div>
        <p className={`${theme === "dark" && "text-white"} ml-2 mb-0.5`}>
          {message ?? "Contenu ajouté avec succès!"}
        </p>
      </div>
    </div>
  );
}
