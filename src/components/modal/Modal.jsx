import React, { useState } from "react";
import ReactDom from "react-dom";
import userContext from "../../Context/userContext";
import { useContext } from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  padding: "0.5rem 1rem 1rem 1rem",
  borderRadius: "1rem",
};

const div_styles = {
  display: "flex",
  width: "20rem",
  flexDirection: "column",
  alignItems: "center",
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, onClose }) {

  
  const{setUserStatus} = useContext(userContext);

  const [userName, setuserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [pass, setPassword] = useState("");


  function valid(e){
    e.preventDefault();
    if (userName && userEmail && pass) {
      localStorage.setItem('userEmail',userEmail);
      localStorage.setItem('password',pass);
      setUserStatus(true);

      onClose();
    }
  }
 

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={div_styles}>
          <div style={{ marginTop: "0.8rem",display:'flex' }}>
           
            <h3 style={{ fontWeight: "bolder" }}>Please Sign Up </h3>
          </div>
          <form action="">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="first name"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              style={{width:'18rem'}}
              required
            />

            <label for="exampleInputEmail1" style={{marginTop:'1rem'}}>Email address</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <label for="exampleInputPassword1"  style={{marginTop:'1rem'}}>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

           <div style={{display:'flex',justifyContent:'center'}}>
           <button type="submit" class="btn btn-danger" id="submitBtn" onClick={valid} style={{marginTop:'1rem'}}>
              Sign Up
            </button>
           </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
