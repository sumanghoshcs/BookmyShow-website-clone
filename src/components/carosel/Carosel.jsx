import React, { useEffect, useState } from "react";
import logo1 from "../../Assets/poster1.jpg";
import logo2 from "../../Assets/poster2.jpg";
import logo4 from "../../Assets/poster4.jpg";
import logo5 from "../../Assets/entertianment posters/1690867717888_wwedesktop.avif";
import logo6 from "../../Assets/entertianment posters/1690953464383_joboltahaiwahihotahaidesktop.avif";

import "./carosel.css";

function Banner() {
  const images = [logo1, logo2, logo4, logo5, logo6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-scrolling configuration
  const autoScrollInterval = 3000; // Change this value to adjust the scroll speed
  useEffect(() => {
    const autoScrollTimer = setInterval(showNextImage, autoScrollInterval);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(autoScrollTimer);
  }, []);

  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src={images[currentImageIndex]}
        alt={`Banner ${currentImageIndex + 1}`}
      />
      <div className="banner-buttons-crouse">
        <button onClick={showPrevImage} className="prev">
          &lt;
        </button>
        <button onClick={showNextImage} className="next">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Banner;
