import React from 'react'
import './menu.css';

const Menu = () => {
  return (
    <div className='menuContainer'>
      <div>
        <a href="/">Movie</a>
        <a href="/">Stream<sup> New</sup></a>
        <a href="/">Events</a>
        <a href="/">Plays</a>
        <a href="/">Sports</a>
        <a href="/">Buzz</a>
      </div>

      <div>
      <a href="/">List Your Show</a>
        <a href="/">Corporates</a>
        <a href="/">Offers</a>
        <a href="/">Gift Cards</a>
      </div>
    </div>
  )
}

export default Menu;
