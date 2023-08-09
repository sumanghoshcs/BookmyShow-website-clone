import { useContext,  useState } from 'react'
import React from 'react'
import {useNavigate } from 'react-router'
import userContext from '../Context/userContext'


const PaymentPage = () => {
  //getting values of seat and price through use context
  const {price , seatCounter,setPrice,setCounter} = useContext(userContext);
  const [Paymethod,setMethod] = useState('');


  //states for chceking the condition of card method
  const [cardNumber,setCardNumber] = useState('');
  const [holderName,setHolderName] = useState('');
  const [expiry,setExpiry] = useState('');
  const [Cvv,setCvv] = useState('');
  const [num,setNum] = useState('');
  const [code,setCode] = useState('');

  function checkWallet(){
    if(code && num){
      alert("Payment Successful you will be redirected to home page and you will get your tickets on your mail")
      setPrice(0);
      setCounter(0);
      setTimeout(()=>{
        navigate('/');
      },1000)
    }
  }

  //whenever the mode of payment change it will redender
  // const[method,setMethod] = useState('');
  const navigate = useNavigate();

  function checkCardDetails(){
    if(cardNumber && holderName && expiry && Cvv){
      alert("Payment Successful you will be redirected to home page and you will get your tickets on your mail")
      setPrice(0);
      setCounter(0);
        setTimeout(()=>{
          navigate('/');
        },1000)
    }
  }

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',padding:'1rem',textAlign:'center',margin:'2rem'}}>
        <h1 style={{fontWeight:'bold'}}>Summary</h1>
        <div>
          <div style={{display:'flex',justifyContent:'space-between'}}><h4>Number of Tickets</h4><h4>{seatCounter}</h4></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><h4>Total of Tickets</h4> <h4>{price}</h4></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><h5>Convenience fee of 1.75% </h5> <h5>{(price*1.75/100).toFixed(2)}</h5></div>
          <div style={{display:'flex',justifyContent:'space-between'}}> <h5>Total Amount : </h5><h5>{((price*1.75/100)+price).toFixed(2)}</h5></div>
        </div>
      </div>
          <div style={{margin:'2rem',display:'flex',alignItems:'center',justifyContent:'space-evenly',padding:'0.3rem 3rem 0rem 3rem'}}>
            <div style={{display:'flex',alignItems:'center'}}><h5><strong>Select Payment Method</strong></h5></div>
              <div><input type="radio" id="card" name="payment_method" value="card"  onChange={() => setMethod('card')}/>
              <label htmlFor="card"><strong>Card</strong></label></div>
              <div><input type="radio" id="wallet" name="payment_method" value="wallet"  onChange={() => setMethod('wallet')}/>
              <label htmlFor="wallet"><strong>Wallet</strong></label></div>
              <div><input type="radio" id="netbanking" name="payment_method" value="netbanking" disabled/>
              <label htmlFor="netbanking"><strong>Net Banking(Disabled)</strong></label></div>
          </div>
          {/* =================================================================================== */}
          {Paymethod === 'card' ? <div style={{margin:'2rem',padding:'1rem'}}>
            <div class="form-group my-3" >
              <label for="exampleInputEmail1"><strong>Card Number</strong></label>
              <input type="tel" class="form-control"   placeholder="Enter Card Number" minLength={16} maxLength={16} onChange={(e)=>{setCardNumber(e.target.value)}}/>
            </div>
            <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                <div class="form-group" style={{width:'100%',padding:'0rem 0.5rem 0rem 0rem'}}>
                  <label for="name"><strong>Card Holder's Name</strong></label>
                  <input type="text" class="form-control"   placeholder="Enter Card holder name" onChange={(e)=>{setHolderName(e.target.value)}}/>
                </div>
                <div class="form-group" style={{width:'100%',padding:'0rem 0rem 0rem 0.5rem'}}>
                  <label for="expirydate"><strong>Expiry</strong></label>
                  <input type="month" class="form-control"   placeholder="expiry date" onChange={(e)=>{setExpiry(e.target.value)}}/>
                </div>

            </div>
            <div class="form-group my-3" >
              <label for="exampleInputEmail1"><strong>CVV</strong></label>
              <input type="tel" class="form-control"   placeholder="Enter CVV" minLength={3} maxLength={3} onChange={(e)=>{setCvv(e.target.value)}}/>
            </div>
            <button className='btn btn-success'style={{width:'100%'}} onClick={checkCardDetails}>Pay</button>
          </div>:""}
          {Paymethod === 'wallet'?
          <div style={{margin:'2rem',padding:'1rem'}}>
            <div class="form-group my-3" >
              <label for="exampleInputEmail1"><strong>Phone Number</strong></label>
              <input type="number" class="form-control"   placeholder="Enter Phone Number" minLength={10} maxLength={10} onChange={(e)=>{setNum(e.target.value)}}/>
            </div>
            <div class="form-group my-3" >
              <label for="exampleInputEmail1"><strong>One Time Password</strong></label>
              <input type="number" class="form-control"   placeholder="Enter 4 digit passcode" min={1000} maxLength={9999} onChange={(e)=>{setCode(e.target.value)}}/>
            </div>
            
            <button className='btn btn-success'style={{width:'100%'}} onClick={checkWallet}>Pay</button>
          </div>:""  
        }
    </div>
  )
}

export default PaymentPage
