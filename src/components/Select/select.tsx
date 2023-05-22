import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  useState,
} from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { selectOptionsType } from "./types/selectOptionsType";
import styled from "styled-components";
import { selectType } from "./types/selectType";

function Select({ children, value, onChange }: selectType) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const props = {
    isOpen,
    setIsOpen,
    value,
    onChange,
  };

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex justify-between items-center pb-0.5 px-2.5 h-9 w-72 border-gray-400 border-[1px] rounded-md shadow-sm cursor-pointer"
      >
        <p>{value ?? "Placeholder"}</p>
        {isOpen ? (
          <IoIosArrowUp size={17} className="mt-1 ml-[5px] cursor-pointer" />
        ) : (
          <IoIosArrowDown size={17} className="mt-1 ml-[5px] cursor-pointer" />
        )}
      </div>
      {Children.map(children, (child: any) => {
        return cloneElement(child, { props });
      })}
    </div>
  );
}

function Options({ children, hoverColor, props }: selectOptionsType) {
  const { setIsOpen, value, onChange } = props;

  const SelectPropsDiv = styled.div`
    &:hover {
      background-color: ${hoverColor ? hoverColor : "#262626"};
      color: white;
    }
  `;

  function handleClickOnOption(el: string) {
    setIsOpen(false);
    onChange(el);
  }

  const mappedOptions = children.map((option: any, i: number) => {
    if (option != value) {
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
    <div className="absolute bg-white mt-2 h-fit w-72 rounded-md py-1 border-gray-400 border-[1px]">
      {mappedOptions}
    </div>
  );
}

Select.Options = Options;

export default Select;
