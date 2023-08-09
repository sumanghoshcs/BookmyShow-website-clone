import React from 'react'
import './eventStream.css'
import stream from '../../Assets/endlessEnterPoster.avif'

const EventStream = () => {
  return (
    <div className='StreamPoster_Container'>
      <img src={stream} alt="" className='d-block w-100 stream'/>
    </div>
  )
}

export default EventStream
