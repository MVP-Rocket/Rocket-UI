import React, { useEffect, useState } from "react";
import Search from "../";

const data = [
  { id: 0, name: "Timéo" },
  { id: 1, name: "Titouan" },
  { id: 2, name: "Tamara" },
  { id: 3, name: "Thomas" },
  { id: 4, name: "Théo" },
  { id: 5, name: "Thésée" },
  { id: 6, name: "Tristan" },
  { id: 7, name: "Tatiana" },
];

export default function SearchDemo() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState([]);

  // Results demo
  useEffect(() => {
    let resultsArray = [];
    data.map((el) => {
      searchValue
        ? el.name.includes(searchValue) && resultsArray.push(el)
        : setResults([]);
    });
    setResults(resultsArray);
  }, [searchValue]);

  function handleSearch() {
    console.log("endSearch!");
  }

  function clickOnResult(id: number) {
    console.log("clicking on a result!", id);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Search
        onChange={setSearchValue}
        results={results}
        onEndSearch={handleSearch}
        clickOnResult={clickOnResult}
        maxResult={4}
      />
    </div>
  );
}
