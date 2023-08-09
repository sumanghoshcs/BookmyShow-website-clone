import React, { useState } from 'react';
import '../crouselarr/Crouse.css'; // Make sure to create this CSS file

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(items.length / 5)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(items.length / 5) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={goToPrev}>
        <h2>&lt;</h2>
      </button>
      <div className="carousel-content">
        <div className="carousel-card-container">
          {items.slice(currentIndex * 5, (currentIndex + 1) * 5).map((item, index) => (
            <div key={index} className="carousel-card">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next-button" onClick={goToNext}>
        <h2>&gt;</h2>
      </button>
    </div>
  );
};

export default Carousel;
