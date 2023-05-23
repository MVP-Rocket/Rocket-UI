import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  useState,
} from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { selectOptions } from "./types/selectOptions";
import { select } from "./types/select";
import { heights, widths } from "./types/size";
import styled from "styled-components";

function Select({
  children,
  value,
  onChange,
  height = heights.md,
  width = widths.md,
  placeholder,
  noBorder,
}: select) {
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
    width,
  };

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`${height} ${width} ${
          !noBorder && "border-gray-400 border-[1px]"
        } ${
          noBorder ? "shadow-select" : "shadow-sm"
        } flex justify-between items-center pb-0.5 px-3 rounded-md cursor-pointer`}
      >
        <p>{placeholder ?? value}</p>
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

function Options({ children, hoverColor, props, disconnected }: selectOptions) {
  const { isOpen, setIsOpen, value, onChange, width } = props;

  const SelectPropsDiv = styled.div`
    &:hover {
      background-color: ${hoverColor ?? "#262626"};
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
          className="w-full pt-1 pb-1 px-3 cursor-pointer"
        >
          <p className="mb-1">{option}</p>
        </SelectPropsDiv>
      );
    }
  });

  return (
    <div
      className={` ${disconnected && "mt-2.5"} ${
        isOpen ? "visible" : "invisible"
      } ${width} absolute bg-white h-fit  rounded-md py-1 shadow-select`}
    >
      {mappedOptions}
    </div>
  );
}

Select.Options = Options;

export default Select;
