import React, { Children, cloneElement, useEffect, useRef } from "react";
import { modal } from "./types";
import { modalCard } from "./types";
import { width } from "./../../global/types";

export const widths: width = {
  xxl: "w-[850px]",
  xl: "w-[700px]",
  lg: "w-[550px]",
  md: "w-[450px]",
  sm: "w-[350px]",
};

function Modal({
  children,
  isOpen,
  onClose,
  backdropOpacity = 0.2,
  noBackdrop = false,
}: React.PropsWithChildren<modal>): any {
  const backdropStyle = {
    background: `rgba(0,0,0,${backdropOpacity})`,
  };
  const props = { isOpen, onClose };

  return (
    <div className={`${!isOpen && "invisible"} absolute h-screen w-screen`}>
      {!noBackdrop && (
        <div className="fixed h-screen w-screen " style={backdropStyle} />
      )}
      {Children.map(children, (child: any) => {
        return cloneElement(child, { props });
      })}
    </div>
  );
}

function Card({
  children,
  width = widths.md,
  noPadding = false,
  noAnimation,
  props,
}: React.PropsWithChildren<modalCard>) {
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
      className={`${width} ${!noPadding && "px-6 py-4"} ${
        !noAnimation
          ? props.isOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-50 opacity-0"
          : ""
      } ${
        !noAnimation && "transition-all duration-300 ease-out"
      } absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] z-50 bg-white rounded-2xl shadow-lg max-w-[90vw]`}
    >
      {children}
    </div>
  );
}

function Title(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={`${props.className} text-xl text-gray-950 font-semibold`}>
      {props.children}
    </h1>
  );
}

function Text(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={`${props.className} mt-3 text-gray-600`}>{props.children}</p>
  );
}

function CloseBtn(
  props: React.PropsWithChildren<{ onClick: () => void; className?: string }>
) {
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={() => props.onClick()}
        className={`${props.className} cursor-pointer mt-3 p-2 bg-gray-950 text-white rounded-lg`}
      >
        {props.children}
      </button>
    </div>
  );
}

Modal.Card = Card;
Modal.Title = Title;
Modal.Text = Text;
Modal.CloseBtn = CloseBtn;

export default Modal;
