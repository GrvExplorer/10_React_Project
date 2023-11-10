import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { createPortal } from "react-dom";
import { db } from "../config/firebase";

const DilogBox = ({
  setAddDilogBox,
  nameOf,
  isUpdate,
  emailOf,
  setNameOf,
  setEmailOf,
  passId,
}) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "Contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "Contact", id);
      await updateDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  return createPortal(
    <>
      <div className="h-screen w-screen left-0 top-0  z-40 absolute  backdrop-blur "></div>
      <div className="h-screen w-screen absolute left-0 top-0 flex justify-center">
        <div className="m-2 z-50 top-40 relative  w-[330px] h-[280px] bg-white p-4">
          <form
            id="hpk"
            action=""
            className=""
            onSubmit={(e) => {
              setAddDilogBox(false);
              isUpdate
                ? updateContact(
                    {
                      name: nameOf,
                      email: emailOf,
                    },
                    passId
                  )
                : addContact({
                    name: nameOf,
                    email: emailOf,
                  });
              setNameOf("");
              setEmailOf("");
            }}
          >
            <div
              className="flex justify-end"
              onClick={() => {
                setAddDilogBox(false);
              }}
            >
              <i className="fa-sharp fa-solid fa-circle-xmark text-2xl"></i>
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="" className="flex flex-col gap-1">
                <p className="  text-lg  font-medium  font-Inter">Name</p>

                <input
                  type="text"
                  value={nameOf}
                  onChange={(e) => setNameOf(e.target.value)}
                  className="h-10 text-lg  font-medium border focus:outline-none  focus:border-2 focus:border-purple-400 rounded-sm py-3 pl-4  "
                  required
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-1 ">
                <p className="  text-lg  font-medium  font-Inter">Email</p>

                <input
                  type="email"
                  value={emailOf}
                  onChange={(e) => setEmailOf(e.target.value)}
                  className="h-10 text-lg  font-medium border focus:outline-none  focus:border-2 focus:border-purple-400 rounded-sm py-3 pl-4  "
                  required
                />
              </label>
              <div className="flex justify-end">
                <button type="submit" className="button bg-dark_yellow">
                  {isUpdate ? "Edit Contact" : "Add Contact"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("modal_root")
  );
};

export default DilogBox;
