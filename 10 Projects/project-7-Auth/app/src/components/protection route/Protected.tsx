import React from 'react'
import { useAuthContext } from '../../authContext/AuthContextProvider'

function Protected() {

  const { token, user } = useAuthContext();
  console.log(token, user);

  return (
    <div>Protected</div>
  )
}

export default Protected