import React from "react";

const AddContact = ({forAddRemove}) => {
  return (
    <div onClick={() => forAddRemove()} className="flex cursor-pointer justify-center items-center bg-white h-[42px] w-[42px] rounded-full ">
      <img className="w-9 h-9" src="/add.svg" alt="" />
    </div>
  );
};

export default AddContact;
