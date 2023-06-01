import React, { useState } from "react";
import { search } from "./types";
import { GrSearch } from "react-icons/gr";
import { height } from "../../global/types";
import { width } from "../../global/types";
import searchIcon from "../../assets/icons/icons8-search.svg";
import colors from "tailwindcss/colors";

export const heights: height = {
  xxl: "h-16",
  xl: "h-12",
  lg: "h-11",
  md: "h-10",
  sm: "h-9",
};

export const widths: width = {
  xxl: "w-[750px]",
  xl: "w-[550px]",
  lg: "w-[400px]",
  md: "w-[300px]",
  sm: "w-54",
};

export default function Search({
  onChange = () => {},
  height = heights.md,
  width = widths.md,
  placeholder = "Rechercher",
  hoverColor = colors.gray[950],
  iconRight = false,
  iconBorder = true,
  results = [],
  maxResult = 6,
  onEndSearch = () => {},
  clickOnResult = () => {},
}: search) {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  function handleSearchChange(e: any) {
    e.target.value === "" ? setIsSearching(false) : setIsSearching(true);
    onChange(e.target.value);
  }

  function handleEndSearch(e: any) {
    e.preventDefault();
    onEndSearch && onEndSearch();
  }

  return (
    <div className="flex">
      {!iconRight && (
        <div
          onClick={() => onEndSearch && onEndSearch()}
          className={`${height} ${
            iconBorder ? "outline-gray-400" : "outline-gray-100"
          } px-2.5 pt-1.5 pb-2 flex items-center bg-gray-100 outline outline-1 rounded-l-lg cursor-pointer`}
        >
          <img src={searchIcon} className="max-h-full" alt="search_icon" />
        </div>
      )}
      <div className="relative">
        <form onSubmit={handleEndSearch}>
          <input
            type="text"
            onChange={(e) => handleSearchChange(e)}
            className={`${height} ${width} ${
              height === "h-9" ? "text-md" : "text-lg"
            } ${
              !isSearching && (iconRight ? "rounded-l-lg" : "rounded-r-lg")
            } cursor-text pl-4 pb-0.5 z-10 outline outline-1 outline-gray-400 hover:outline-blue-600 
        focus:outline focus:outline-2 focus:outline-blue-600 placeholder:text-gray-400`}
            placeholder={placeholder}
          />
        </form>
        {isSearching && results && (
          <div
            onPointerOut={() => setHoverIndex(null)}
            className="absolute w-full flex flex-col mt-[3px] bg-white rounded-b-lg shadow-search outline outline-1 outline-white"
          >
            {results.length > 0 ? (
              results.map((el: any, i: number) => {
                if (i < maxResult)
                  return (
                    <div
                      key={i}
                      onPointerOver={() => setHoverIndex(i)}
                      style={{
                        backgroundColor: hoverIndex === i && hoverColor,
                        color: hoverIndex === i && "white",
                      }}
                      onClick={() => clickOnResult && clickOnResult(el.id ?? i)}
                      className="p-2 pb-2.5 rounded-b-lg hover:text-white hover:bg-gray-950"
                    >
                      {el.name ?? el}
                    </div>
                  );
              })
            ) : (
              <div className="p-2">
                <p>Aucun résultat trouvé</p>
              </div>
            )}
          </div>
        )}
      </div>
      {iconRight && (
        <div
          onClick={() => onEndSearch && onEndSearch()}
          className={`${height} ${
            iconBorder ? "outline-gray-400" : "outline-gray-100"
          } px-[7px] flex items-center bg-gray-100 outline outline-1 rounded-r-lg cursor-pointer`}
        >
          <GrSearch size={24} />
        </div>
      )}
    </div>
  );
}
