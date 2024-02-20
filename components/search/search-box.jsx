"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="input-container bg-background   border-none flex items-center w-full"
    >
      <div className=" text-black">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="جست و جو ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input bg-transparent w-full px-4 py-1"
      />
    </form>
  );
}

export default SearchBox;
