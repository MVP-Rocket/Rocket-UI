import React, { useEffect, useState } from "react";

interface indexProps {
  children?: any;
  isOpen?: boolean;
  onClose?: any;
  noBackdrop?: boolean;
  backdropOpacity?: number;
}

function Modal({
  children,
  isOpen,
  onClose,
  backdropOpacity,
  noBackdrop,
}: indexProps): any {
  const backdropStyle = {
    background: backdropOpacity
      ? `rgba(0,0,0,${backdropOpacity})`
      : "rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className={`${!isOpen && "invisible"} absolute z-50`}>
      <div className="h-screen w-screen flex justify-center items-center">
        {!noBackdrop && (
          <div
            onClick={(e) => e.target === e.currentTarget && onClose()}
            className="fixed h-screen w-screen"
            style={backdropStyle}
          />
        )}
        {children}
      </div>
    </div>
  );
}

interface modalCardProps {
  children: any;
  height?: string;
  width?: string;
}

function Card({ children, height, width }: modalCardProps) {
  const dynamicStyle = {
    height: height ?? "fit-content",
    width: width ?? "fit-content",
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg px-6 py-4"
      style={dynamicStyle}
    >
      {children}
    </div>
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

Modal.Card = Card;
Modal.Title = Title;
Modal.Text = Text;
Modal.CloseBtn = CloseBtn;

export default Modal;
