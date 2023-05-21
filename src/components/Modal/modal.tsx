import React, { useEffect } from "react";

interface indexProps {
  children?: any;
  isOpen?: boolean;
  onClose?: any;
  height?: string;
  width?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  height,
  width,
}: indexProps): any {
  useEffect(() => {
    !isOpen && onClose;
  }, [isOpen]);

  const dynamicStyle = {
    height: height ?? "500px",
    width: width ?? "700px",
  };

  return (
    isOpen && (
      <div className="flex justify-center items-center bg-black/10 h-screen w-screen">
        <div className="bg-white rounded-lg" style={dynamicStyle}>
          {children}
        </div>
      </div>
    )
  );
}
