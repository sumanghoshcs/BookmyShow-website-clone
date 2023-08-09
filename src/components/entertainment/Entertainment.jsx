import React, {useRef } from 'react';
import '../entertainment/entertainment.css';
import banner1 from "../../Assets/entertianment posters/arts-crafts-collection-202211140440.avif";
import banner2 from "../../Assets/entertianment posters/comedy-shows-collection-202211140440.avif";
import banner3 from "../../Assets/entertianment posters/dance-classes-collection-202211140440.avif";
import banner4 from "../../Assets/entertianment posters/esports-collection-202211140440.avif";
import banner5 from "../../Assets/entertianment posters/food-drinks-collection-202211140440.avif";
import banner6 from "../../Assets/entertianment posters/kids-zone-collection-202211140440.avif";
import banner7 from "../../Assets/entertianment posters/music-shows-collection-202211140440.avif";
import banner8 from "../../Assets/entertianment posters/theatre-shows-collection-202211140440.avif";
import banner9 from "../../Assets/entertianment posters/upskill-collection-202211140440.avif";
import banner10 from "../../Assets/entertianment posters/workshop-and-more-web-collection-202211140440.avif";

function MiddleBanner() {
  const images = [
    banner1, banner2, banner3, banner4, banner5,
    banner6, banner7, banner8, banner9, banner10
  ];

  const boxRef = useRef(null);

  const showNextImages = () => {
    const width = boxRef.current.offsetWidth;
    const newWidth = 310;
    boxRef.current.scrollLeft += newWidth;
  };

  const showPrevImages = () => {
    const width = boxRef.current.offsetWidth;
    const newWidth = 310;
    boxRef.current.scrollLeft -= newWidth;
  };

  return (
    <>
    <h2 className='heading'>The Best Of Live Events For You</h2>
    <div className="middle-banner">
      <div className="middle-banner-container" ref={boxRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Banner ${index + 1}`} />
        ))}
      </div>
      <div className="banner-buttons">
        <button onClick={showPrevImages}>&lt;</button>
        <button onClick={showNextImages}>&gt;</button>
      </div>
    </div>
    </>
  );
}

export default MiddleBanner;
