import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { selectType } from "./types/selectType";
import styled from "styled-components";

export default function Select({ options, color, onChange }: selectType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosenOption, setChosenOption] = useState<any>(options[0]);
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

  function handleClickOnOption(el: string) {
    setChosenOption(el);
    setIsOpen(false);
    onChange(el);
  }

  const SelectPropsDiv = styled.div`
    &:hover {
      background-color: ${color ? color : "#262626"};
      color: white;
    }
  `;

  const children = options.map((option: any, i: number) => {
    if (option != chosenOption) {
      return (
        <SelectPropsDiv
          onClick={() => handleClickOnOption(option)}
          key={i}
          className="w-full pt-0.5 pb-0.5 px-2.5 cursor-pointer"
        >
          <p className="mb-1">{option}</p>
        </SelectPropsDiv>
      );
    }
  });

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex justify-between items-center pb-1 px-2.5 h-9 w-72 border-gray-400 border-[1px] rounded-md shadow-sm cursor-pointer"
      >
        <p>{chosenOption ?? "Placeholder"}</p>
        {isOpen ? (
          <IoIosArrowUp size={17} className="mt-1 ml-[5px] cursor-pointer" />
        ) : (
          <IoIosArrowDown size={17} className="mt-1 ml-[5px] cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div className="absolute bg-white mt-2 h-fit w-72 rounded-md py-1 border-gray-400 border-[1px]">
          {children}
        </div>
      )}
    </div>
  );
}
