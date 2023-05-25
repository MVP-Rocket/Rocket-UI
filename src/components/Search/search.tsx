import React from "react";
import { search } from "./types/search";
import { GrSearch } from "react-icons/gr";

export default function Search({
  onChange,
  height = "h-10",
  width = "w-[300px]",
  placeholder,
  iconRight,
  iconBorder,
}: search) {
  return (
    <>
      {!iconRight && (
        <div
          className={`${height} ${
            iconBorder ? "outline-gray-400" : "outline-gray-100"
          } px-1.5 flex items-center bg-gray-100 outline outline-1 rounded-l-lg cursor-pointer`}
        >
          <GrSearch size={24} />
        </div>
      )}
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        className={`${height} ${width} ${
          height === "h-9" ? "text-md" : "text-lg"
        } ${
          iconRight ? "rounded-l-lg" : "rounded-r-lg"
        } cursor-pointer pl-4 pb-0.5 z-10 outline outline-1 outline-gray-400 hover:outline-blue-600 
        focus:outline focus:outline-2 focus:outline-blue-600 placeholder:text-gray-400`}
        placeholder={`${placeholder ?? "Rechercher"}`}
      />
      {iconRight && (
        <div
          className={`${height} ${
            iconBorder ? "outline-gray-400" : "outline-gray-100"
          } px-[7px] flex items-center bg-gray-100 outline outline-1 rounded-r-lg cursor-pointer`}
        >
          <GrSearch size={24} />
        </div>
      )}
    </>
  );
}
