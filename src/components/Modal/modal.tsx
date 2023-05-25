import React, { Children, cloneElement, useEffect, useRef } from "react";
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
  const props = { onClose };

  return (
    <div className={`${!isOpen && "invisible"} absolute h-screen w-screen`}>
      {!noBackdrop && (
        <div className="fixed h-screen w-screen -z-10" style={backdropStyle} />
      )}
      {Children.map(children, (child: any) => {
        return cloneElement(child, { props });
      })}
    </div>
  );
}

function Card({ children, width = "w-[450px]", noPadding, props }: modalCard) {
  // Closing modal when clicking outside of it
  const modalCardRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalCardRef]);

  function handleClickOutside(e: any) {
    if (modalCardRef.current && !modalCardRef.current.contains(e.target)) {
      props.onClose();
    }
  }

  return (
    <div
      ref={modalCardRef}
      className={`${width} ${
        !noPadding && "px-6 py-4"
      } absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] z-50 bg-white rounded-2xl shadow-lg max-w-[90vw]`}
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
