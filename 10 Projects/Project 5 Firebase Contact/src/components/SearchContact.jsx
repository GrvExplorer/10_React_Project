import React from "react";

const SearchContact = ({ isSearch, setIsSearch}) => {
  return (
    <div className="flex gap-3 h-10 w-[84%] border px-2   border-white rounded-xl  ">
      <div className="flex justify-center items-center">
        <img className=" w-7 h-7 " src="/searchicon.svg" alt="" />
      </div>
      <div className="h-10 flex justify-center items-center pb-1">
      <input
        type="text"
        value={isSearch}
        onChange={(e) => setIsSearch(e.target.value)}
        className="inputSearch text-lg h-full bg-transparent w-full text-white first-line: focus:outline-none"
        placeholder="Search  Contact"
      />
      </div>
    </div>
  );
};

export default SearchContact;
