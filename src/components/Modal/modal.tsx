import React from "react";
import { modal } from "./types/modal";
import { modalCard } from "./types/modalCard";

function Modal({
  children,
  isOpen,
  onClose,
  backdropOpacity,
  noBackdrop,
}: modal): any {
  const backdropStyle = {
    background: `rgba(0,0,0,${backdropOpacity ?? "0.1"})`,
  };

  return (
    <div
      className={`${
        !isOpen && "invisible"
      } absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
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

function Card({ children, width = "w-[450px]", noPadding }: modalCard) {
  return (
    <div
      className={`${width} ${
        !noPadding && "px-6 py-4"
      } absolute top-1/2 left-1/2 h-fit -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg max-w-[90vw]`}
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
