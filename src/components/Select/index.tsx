import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  useState,
} from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { selectOptions } from "./../../global/types";
import { select } from "./../../global/types";
import { height, width } from "../../global/types";
import colors from "tailwindcss/colors";

export const heights: height = {
  xxl: "h-20",
  xl: "h-16",
  lg: "h-12",
  md: "h-11",
  sm: "h-10",
};

export const widths: width = {
  xxl: "w-[550px]",
  xl: "w-[450px]",
  lg: "w-96",
  md: "w-72",
  sm: "w-56",
};

function Select({
  children,
  value,
  onChange,
  height = heights.md,
  width = widths.md,
  placeholder,
  noBorder,
}: React.PropsWithChildren<select>) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
    hoverIndex,
    setHoverIndex,
  };

  return (
    <div ref={selectRef} onPointerOut={() => setHoverIndex(null)}>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`${height} ${width} ${
          !noBorder && "outline outline-1 outline-gray-400"
        } ${
          noBorder ? "shadow-select" : "shadow-sm"
        } flex justify-between items-center pb-0.5 px-3 rounded-md cursor-pointer bg-white`}
      >
        <p>{value ? value : placeholder ?? "Choisissez une option"}</p>
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

function Options({
  children,
  props = {
    isOpen: false,
    setIsOpen: (val: boolean) => {},
    value: "",
    onChange: (el: string) => {},
    width: "",
    hoverIndex: null,
    setHoverIndex: (i: number) => {},
  },
  disconnected = false,
  hoverColor = colors.gray["950"],
}: React.PropsWithChildren<selectOptions>) {
  const {
    isOpen,
    setIsOpen,
    value,
    onChange,
    width,
    hoverIndex,
    setHoverIndex,
  } = props;

  function handleClickOnOption(el: string) {
    setIsOpen(false);
    onChange(el);
  }

  const mappedOptions = children.map((option: any, i: number) => {
    if (option != value) {
      return (
        <div
          onPointerOver={() => setHoverIndex(i)}
          style={{
            backgroundColor: hoverIndex === i && hoverColor,
            color: hoverIndex === i && "white",
          }}
          onClick={() => handleClickOnOption(option)}
          key={i}
          className="w-full py-2 px-3 cursor-pointer"
        >
          <p>{option}</p>
        </div>
      );
    }
  });

  return (
    <div
      className={` ${disconnected ? "mt-2.5" : "mt-[1px]"} ${
        isOpen ? "visible" : "invisible"
      } ${width} absolute bg-white h-fit overflow-hidden rounded-md shadow-select`}
    >
      {mappedOptions}
    </div>
  );
}

Select.Options = Options;

export default Select;
