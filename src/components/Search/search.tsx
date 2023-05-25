import React, { useEffect, useState } from "react";
import { search } from "./types/search";
import { GrSearch } from "react-icons/gr";

export default function Search({
  onChange,
  height = "h-10",
  width = "w-[300px]",
  placeholder,
  iconRight,
  iconBorder,
  results,
  onEndSearch,
}: search) {
  const [isSearching, setIsSearching] = useState<boolean>(false);

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
          } px-1.5 flex items-center bg-gray-100 outline outline-1 rounded-l-lg cursor-pointer`}
        >
          <GrSearch size={24} />
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
            } cursor-pointer pl-4 pb-0.5 z-10 outline outline-1 outline-gray-400 hover:outline-blue-600 
        focus:outline focus:outline-2 focus:outline-blue-600 placeholder:text-gray-400`}
            placeholder={`${placeholder ?? "Rechercher"}`}
          />
        </form>
        {isSearching && results && (
          <div className="absolute w-full flex flex-col p-3 gap-2 mt-[3px] bg-white rounded-b-lg shadow-search outline outline-1 outline-white">
            {results.length > 0
              ? results.map((el: any, i: number) => {
                  return <div key={i}>{el}</div>;
                })
              : "Aucun résultat trouvé"}
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
