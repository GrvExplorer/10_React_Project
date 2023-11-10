import React from "react";

const NavBar = () => {
  return (
    <div className=" h-16 gap-2 bg-white  rounded-xl  mt-3 flex justify-center">
      <div className="py-4">
        <img className=" w-8 h-8" src="/logos_firebase.svg" alt="" />
      </div>
      <p className=" flex items-center  text-base font-bold">Firebase Contact App</p>
    </div>
  );
};

export default NavBar;
