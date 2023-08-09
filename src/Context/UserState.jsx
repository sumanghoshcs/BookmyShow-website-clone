import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [UserLogInStatus, setUserStatus] = useState(false);
  const [seatCounter,setCounter] = useState(0);
    const [price , setPrice] = useState(0);
    const[wishListData,setWishListData] = useState([]);
  return (
    <UserContext.Provider value={{ UserLogInStatus, setUserStatus,seatCounter,setCounter, price , setPrice,wishListData,setWishListData}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
