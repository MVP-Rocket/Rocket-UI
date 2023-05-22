import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const props = ["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook"];

export default function Select() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosenElement, setChosenElement] = useState<any>(props[0]);
  const selectRef = useRef<HTMLDivElement>(null);

  // Closing select when clicking outside of it
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  function handleClickOutside(e: any) {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }
  //

  const children = props.map((el: any, i: number) => {
    if (el != chosenElement) {
      return (
        <div
          onClick={() => setChosenElement(el)}
          key={i}
          className="w-full pt-0.5 pb-0.5 px-2.5 cursor-pointer hover:bg-gray-100"
        >
          <p className="mb-1">{el}</p>
        </div>
      );
    }
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div ref={selectRef} className="relative">
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="flex justify-between items-center pb-1 px-2.5 h-9 w-72 border-gray-400 border-[1px] rounded-md shadow-sm cursor-pointer"
        >
          <p>{chosenElement ?? "Placeholder"}</p>
          {isOpen ? (
            <IoIosArrowUp size={17} className="mt-1 ml-[5px] cursor-pointer" />
          ) : (
            <IoIosArrowDown
              size={17}
              className="mt-1 ml-[5px] cursor-pointer"
            />
          )}
        </div>
        {isOpen && (
          <div className="absolute mt-2 h-fit w-72 rounded-md py-1 border-gray-400 border-[1px]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
