import React, { useEffect, useState } from "react";
import "./seats.css";
import Navbar from "../components/navbar/Navbar";
import Modal from "../components/modal/Modal";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import userContext from "../Context/userContext";

const SeatBooking = () => {

    // Using useState for showing the popup modal
    const[openModal,SetOpenModal] = useState(false);

    
    //importing login state through useContext
    const{UserLogInStatus,setUserStatus} = useContext(userContext);
    const {seatCounter,setCounter} = useContext(userContext);
    const {price , setPrice} = useContext(userContext);

   //function to change price and selected seats number on every click
         function change(e){
            // console.log(e.target.id.length);
            if(!e.target.classList.contains('selected')){
                e.target.classList.toggle('selected');
                // console.log(e.target);
                if(e.target.id.charAt(e.target.id.length-1) === 'm'){
                    setPrice(price+299);
                }else{
                    setPrice(price+140);
                }
                setCounter(seatCounter+1)
            }else{
                e.target.classList.toggle('selected');
                // console.log(e.target);
                if(e.target.id.charAt(e.target.id.length-1) === 'm'){
                    setPrice(price-299);
                }else{
                    setPrice(price-140);
                }
                setCounter(seatCounter-1)
            }
            
         }

       useEffect(()=>{
        if(price !== 0){
            document.getElementById('payy').disabled = false;
        }else{
            document.getElementById('payy').disabled = true;
        }
       },[price])

       const BUTTON_WRAPPER_STYLES = {
        margin:'1rem',
        position: 'relative',
        zIndex: 1,
        display:'flex',
        justifyContent : 'center'
      }
    
    

    //function to check the userlogin status then displaying the modal according
    const navigatePayment = useNavigate();
    function check(){
        if(UserLogInStatus){
            navigatePayment("/payment_page")
        }else{
            SetOpenModal(true);
        }
    }
   
    function closeModal(){
        SetOpenModal(false);
        setUserStatus(true);
        navigatePayment("/payment_page")
    }
  
  return (
    <>  
    <Navbar/>
    <div style={{textAlign:'center',padding:'1rem 0rem 0rem 0rem'}}><h2>Select your Seats</h2></div>
    <div className="availablility"> <div  className="outsideCont"><div className="avail"></div>Available</div> <div className="outsideCont"><div className="selected"></div>Selected</div> <div className="outsideCont"><div className="sold"></div>Sold</div></div>
      <div className="seatContainer">
        <div className="seatType"><h5><strong>MAX RECLINER-Rs. 299.00</strong></h5></div>
       
        <div className="row1">
        <div className="sequence"> <h4>A</h4></div>
            <div className="seat maxRec" id="1m" onClick={change}>1</div>
            <div className="seat maxRec" id="2m" onClick={change}>2</div>
            <div className="seat maxRec" id="3m" onClick={change}>3</div>
            <div className="seat maxRec" id="4m" onClick={change}>4</div>
            <div className="seat maxRec" id="5m" onClick={change}>5</div>
            <div className="seat maxRec" id="6m" onClick={change}>6</div>
            <div className="seat maxRec" id="7m" onClick={change}>7</div>
            <div className="seat maxRec" id="8m" onClick={change}>8</div>
            <div className="seat maxRec" id="9m" onClick={change}>9</div>
            <div className="seat maxRec" id="10m" onClick={change}>10</div>
            <div className="seat maxRec" id="11m" onClick={change}>11</div>
            <div className="seat maxRec" id="12m" onClick={change}>12</div>
            <div className="seat maxRec" id="13m" onClick={change}>13</div>
            <div className="seat maxRec" id="14m" onClick={change}>14</div>
            
        </div>     
        <div className="row1">
        <div className="sequence"> <h4>B</h4></div>
            <div className="seat maxRec" id="15m" onClick={change}>1</div>
            <div className="seat maxRec" id="16m" onClick={change}>2</div>
            <div className="seat maxRec" id="17m" onClick={change}>3</div>
            <div className="seat maxRec" id="18m" onClick={change}>4</div>
            <div className="seat maxRec" id="19m" onClick={change}>5</div>
            <div className="seat maxRec" id="20m" onClick={change}>6</div>
            <div className="seat maxRec" id="21m" onClick={change}>7</div>
            <div className="seat maxRec" id="22m" onClick={change}>8</div>
            <div className="seat maxRec" id="23m" onClick={change}>9</div>
            <div className="seat maxRec" id="24m" onClick={change}>10</div>
            <div className="seat maxRec" id="25m" onClick={change}>11</div>
            <div className="seat maxRec" id="26m" onClick={change}>12</div>
            <div className="seat maxRec" id="27m" onClick={change}>13</div>
            <div className="seat maxRec" id="28m" onClick={change}>14</div>
            
        </div>  
        <div className="row1">
        <div className="sequence"> <h4>C</h4></div>
            <div className="seat maxRec" id="29m" onClick={change}>1</div>
            <div className="seat maxRec" id="30m" onClick={change}>2</div>
            <div className="seat maxRec" id="31m" onClick={change}>3</div>
            <div className="seat maxRec" id="32m" onClick={change}>4</div>
            <div className="seat maxRec" id="33m" onClick={change}>5</div>
            <div className="seat maxRec" id="34m" onClick={change}>6</div>
            <div className="seat maxRec" id="35m" onClick={change}>7</div>
            <div className="seat maxRec" id="36m" onClick={change}>8</div> 
            <div className="seat maxRec" id="37m" onClick={change}>9</div>
            <div className="seat maxRec" id="38m" onClick={change}>10</div>
            <div className="seat maxRec" id="39m" onClick={change}>11</div>
            <div className="seat maxRec" id="40m" onClick={change}>12</div>
            <div className="seat maxRec" id="41m" onClick={change}>13</div>
            <div className="seat maxRec" id="42" onClick={change}>14</div>
            
        </div> 
       <div className="seatType"><h5><strong>PRIME-Rs. 140.00</strong></h5></div>
        <div className="row1">
        <div className="sequence"> <h4>D</h4></div>
            <div className="seat prime" id="1p" onClick={change}>1</div>
            <div className="seat prime" id="2p" onClick={change}>2</div>
            <div className="seat prime" id="3p" onClick={change}>3</div>
            <div className="seat prime" id="4p" onClick={change}>4</div>
            <div className="seat prime" id="5p" onClick={change}>5</div>
            <div className="seat prime" id="6p" onClick={change}>6</div>
            <div className="seat prime" id="7p" onClick={change}>7</div>
            <div className="seat prime" id="8p" onClick={change}>8</div>
            <div className="seat prime" id="9p" onClick={change}>9</div>
            <div className="seat prime" id="10p" onClick={change}>10</div>    
            <div className="seat prime" id="11p" onClick={change}>11</div>
            <div className="seat prime" id="12p" onClick={change}>12</div>         
        </div> 
        <div className="row1">
        <div className="sequence"> <h4>E</h4></div>
            <div className="seat prime" id="13p" onClick={change}>1</div>
            <div className="seat prime" id="14p" onClick={change}>2</div>
            <div className="seat prime" id="15p" onClick={change}>3</div>
            <div className="seat prime" id="16p" onClick={change}>4</div>
            <div className="seat prime" id="17p" onClick={change}>5</div>
            <div className="seat prime" id="18p" onClick={change}>6</div>
            <div className="seat prime" id="19p" onClick={change}>7</div>
            <div className="seat prime" id="20p" onClick={change}>8</div>
            <div className="seat prime" id="21p" onClick={change}>9</div>
            <div className="seat prime" id="22p" onClick={change}>10</div> 
            <div className="seat prime" id="23p" onClick={change}>11</div>  
            <div className="seat prime" id="24p" onClick={change}>12</div>           
        </div> 
        
        <div className="row1">
        <div className="sequence"> <h4>E</h4></div>
            <div className="seat prime" id="25p" onClick={change}>1</div>
            <div className="seat prime" id="26p" onClick={change}>2</div>
            <div className="seat prime" id="27p" onClick={change}>3</div>
            <div className="seat prime" id="28p" onClick={change}>4</div>
            <div className="seat prime" id="29p" onClick={change}>5</div>
            <div className="seat prime" id="30p" onClick={change}>6</div>
            <div className="seat prime" id="31p" onClick={change}>7</div>
            <div className="seat prime" id="32p" onClick={change}>8</div>
                   
        </div>
        <h4 className="eye">All eyes this way please!</h4>
    </div>
    <div className="billing">Your Total Amount is {price} for {seatCounter} Tickets.</div>
    <div style={BUTTON_WRAPPER_STYLES} > 
    <button className="btn btn-danger payBtn" id="payy" onClick={check}>Pay</button>
            <Modal open={openModal} onClose={closeModal} />     
      </div>
    </>

  );
};

export default SeatBooking;
