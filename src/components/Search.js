import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
 
  const searchhandler = () => {
    navigate('/searched/' + query)
  };

  return (
    <div className="flex justify-between md:justify-center items-center md:w-3/4 w-full">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        className=" border border-solid w-full"
        value={query}
      />
      <button
        className="search-btn flex justify-center items-center text-xl"
        onClick={searchhandler}
      >
        <BiSearch />
      </button>
    </div>
  );
};

export default Search;
