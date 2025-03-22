import React, { useState } from "react";
import { fetchData } from "../utils/yelpApi";

const sortOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ setBusinesses }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectOption(sortOptions[option]);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const data = await fetchData(search, location, selectOption);
    setBusinesses(data.businesses);
  };

  return (
    <div className="relative flex justify-center flex-col gap-8 bg-gray-800 px-16 py-48 bg-[url(https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg)] bg-center bg-cover text-white before:absolute before:content-[''] before:bg-black before:opacity-50 before:inset-0 before:z-10">
      <div className="relative flex justify-center gap-4 z-10">
        {Object.keys(sortOptions).map((option) => (
          <button
            id={option}
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`
            ${
              sortOptions[option] === selectOption
                ? "bg-yellow-400 text-black"
                : "bg-gray-400 text-white"
            }
            px-4 py-2 rounded cursor-pointer
            `}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="relative z-10 flex justify-center gap-4">
        <input
          className="bg-gray-200 text-black placeholder:text-gray-400 px-4 py-2 rounded"
          type="text"
          placeholder="Search Businesses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="bg-gray-200 text-black placeholder:text-gray-400 px-4 py-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        className="relative z-10 rounded bg-yellow-400 text-black px-4 py-2 inline-block mx-auto cursor-pointer"
        onClick={(e) => handleButtonClick(e)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
