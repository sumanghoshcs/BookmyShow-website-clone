import React, { useState } from "react";
import "../crouselarr/Crouse.css"; // Make sure to create this CSS file
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(items.length / 5)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(items.length / 5) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="middle-banner">
      <div className="middle-banner-container-crousel">
        {items
          .slice(currentIndex * 5, (currentIndex + 1) * 5)
          .map((item, index) => (
            <div key={index} className="carousel-card">
              {item}
            </div>
          ))}
      </div>
      <div className="banner-buttons">
        <button onClick={goToPrev}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
