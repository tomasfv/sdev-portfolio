import { useState, useEffect } from "react";
import './Carousel.css';

// eslint-disable-next-line react/prop-types
export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      // Preload all images
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [images]);

  const nextSlide = () => {
    // eslint-disable-next-line react/prop-types
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      // eslint-disable-next-line react/prop-types
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="myCarousel-container">
      <button className="myCarousel-btn left" onClick={prevSlide}>
        ❮
      </button>
      
      <div className="myCarousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      <button className="myCarousel-btn right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
