import React from "react";
import { useAuthContext } from "../../authContext/AuthContextProvider";

function AlreadySigned() {
  const { token, user } = useAuthContext();
  console.log(token, user);
  return <></>;
}

export default AlreadySigned