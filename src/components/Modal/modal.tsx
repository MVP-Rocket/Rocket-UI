import React, { useEffect } from "react";

interface indexProps {
  children?: any;
  isOpen?: boolean;
  onClose?: any;
  height?: string;
  width?: string;
  noBackdrop?: boolean;
  backdropOpacity?: number;
}

function Modal({
  children,
  isOpen,
  onClose,
  height,
  width,
  backdropOpacity,
  noBackdrop,
}: indexProps): any {
  // onClose
  useEffect(() => {
    !isOpen && onClose();
  }, [isOpen]);

  // height and width
  const dynamicStyle = {
    height: height ?? "200px",
    width: width ?? "400px",
  };

  const backdropStyle = {
    background: backdropOpacity
      ? `rgba(0,0,0,${backdropOpacity})`
      : "rgba(0, 0, 0, 0.1)",
  };

  return (
    isOpen && (
      <div className="absolute z-50">
        <div className="h-screen w-screen flex justify-center items-center">
          {!noBackdrop && (
            <div
              onClick={(e) => e.target === e.currentTarget && onClose()}
              className="fixed h-screen w-screen"
              style={backdropStyle}
            />
          )}
          <div
            className="absolute bg-white rounded-2xl shadow-lg"
            style={dynamicStyle}
          >
            {children}
          </div>
        </div>
      </div>
    )
  );
}

function Title({ children }) {
  return <h1 className="text-xl text-gray-950 font-semibold">{children}</h1>;
}

function Text({ children }) {
  return <p className="mt-3 text-gray-600">{children}</p>;
}

function CloseBtn({ onClick, children }) {
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={() => onClick()}
        className="cursor-pointer mt-3 p-2 bg-gray-950 text-white rounded-lg"
      >
        {children}
      </button>
    </div>
  );
}

Modal.Title = Title;
Modal.Text = Text;
Modal.CloseBtn = CloseBtn;

export default Modal;
