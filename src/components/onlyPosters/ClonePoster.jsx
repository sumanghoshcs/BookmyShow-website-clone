import React from 'react'
import clone from '../../Assets/get-rs150-off-on-movie-tickets-bms150.avif'
import './cloneposter.css'

const ClonePoster = () => {
  return (
    <div className='cloneposter_Container'>
      <img src={clone} alt="" className='d-block w-100 clone'/>
    </div>
  )
}

export default ClonePoster
