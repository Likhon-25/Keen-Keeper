import React from "react";
import { HiOutlineSearchCircle } from "react-icons/hi";

const SearchNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-zinc-100 p-6 rounded-full mb-6">
        <HiOutlineSearchCircle className="text-6xl md:text-8xl text-zinc-400" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-2">
        No Friends Found
      </h2>

      <p className="text-zinc-500 max-w-xs md:max-w-md mx-auto">
        We couldn't find any results matching your search. Try checking the
        spelling or use different keywords.
      </p>

      
    </div>
  );
};

export default SearchNotFound;
