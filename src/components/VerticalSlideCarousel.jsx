import React, { useState, useRef } from 'react';
import './VerticalSlideCarousel'; // Create a corresponding CSS file for styling

const VerticalSlideCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current;
    const itemHeight = container.clientHeight;

    if (scrollDirection === 'up' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (scrollDirection === 'down' && currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    if (container) {
      container.scrollTo({
        top: currentIndex * itemHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="vertical-slide-carousel" onWheel={(e) => handleScroll(e.deltaY > 0 ? 'down' : 'up')}>
      <div className="carousel-container" ref={containerRef}>
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlideCarousel;