import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchContent from "./components/SearchContact";
import AddContent from "./components/AddContact";
import DilogBox from "./components/DilogBox";
import StartContent from "./components/StartContact";

const App = () => {
  const [listOfUpdate, setUpdate] = useState([]);
  const [notstartPage, setNotStartPage] = useState(true);
  const [passId, setPassId] = useState("");

  const [addDilogBox, setAddDilogBox] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [nameOf, setNameOf] = useState("");
  const [emailOf, setEmailOf] = useState("");
  const [isSearch, setIsSearch] = useState("");

  const rows = [];

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "Contact");
        const contactSnapShort = await getDocs(contactRef);
        const contactList = contactSnapShort.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setUpdate(contactList);
        setNotStartPage(false);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);


  console.log(listOfUpdate);

  const editEach = (id, name, email) => {
    setPassId(id);
    setNameOf(name);
    setEmailOf(email);
    setIsUpdate(true);
    setAddDilogBox(true);
  };

  const deleteContart = async (id) => {
    try {
      await deleteDoc(doc(db, "Contact", id));
    } catch (error) {
      console.log(error);
    }
  };

  const removeElement = (index, id) => {
    deleteContart(id);
    const newFruits = listOfUpdate.filter((_, i) => i !== index);
    setUpdate(newFruits);
  };

  const forAddRemove = () => {
    setAddDilogBox(true);
    setNameOf("");
    setEmailOf("");
  };

  listOfUpdate.map((data, i) => {
    if (
      data.name.toLowerCase().indexOf(isSearch.toLowerCase()) === -1 &&
      data.email.toLowerCase().indexOf(isSearch.toLowerCase()) === -1
    ) {
      return;
    }
    rows.push(
      <div
        key={data.id}
        className=" flex  gap-10 bg-yellow  rounded-lg pt-2 pr-2 pb-2 pl-2"
      >
        <div className="flex gap-2 ">
          <img src="/avatar.svg" alt="" />
          <div className="">
            <p className=" text-lg  font-medium">{data.name}</p>
            <p className="text-sm font-medium">{data.email}</p>
          </div>
        </div>
        <div className="flex gap-2 w-[50%]  justify-end items-center">
          <div onClick={() => editEach(data.id, data.name, data.email)}>
            <img className=" w-[32px] h-[32px] " src="/edit.svg" alt="" />
          </div>
          <div onClick={() => removeElement(i, data.id)}>
            <img className=" w-[32px] h-[32px] " src="/delete.svg" alt="" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="flex  justify-center">
        <div className="flex flex-col gap-4 w-[360px]">
          <div className=" ">
            <NavBar />
          </div>
          <div className=" flex justify-between ">
            <SearchContent isSearch={isSearch} setIsSearch={setIsSearch} />

            <AddContent forAddRemove={forAddRemove} />
          </div>
          <div className=" h-[60vh] opr flex flex-col mt-2 gap-3 ">
            {notstartPage ? <StartContent /> : rows}
            {addDilogBox ? (
              <DilogBox
                passId={passId}
                setAddDilogBox={setAddDilogBox}
                nameOf={nameOf}
                isUpdate={isUpdate}
                setNameOf={setNameOf}
                emailOf={emailOf}
                setEmailOf={setEmailOf}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
