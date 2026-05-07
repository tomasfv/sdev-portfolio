import { useState, useEffect } from "react";
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (images && images.length > 0) {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;

        const imgHigh = new Image();
        imgHigh.src = getHighResUrl(src);
      });
    }
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getHighResUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    return url.replace('w_800', 'w_1200');
  };

  return (
    <>
      <div className="myCarousel-container">
        <button className="myCarousel-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="myCarousel-slide" onClick={openModal}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>

        <button className="myCarousel-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Modal / Lightbox */}
      {isModalOpen && (
        <div className="myCarousel-modal-overlay" onClick={closeModal}>
          <button className="myCarousel-close-btn" onClick={closeModal}>
            ×
          </button>

          <div className="myCarousel-modal-content">
            <button className="myCarousel-btn left" onClick={prevSlide}>
              ❮
            </button>

            <img
              className="myCarousel-modal-image"
              src={getHighResUrl(images[currentIndex])}
              alt={`Full size Slide ${currentIndex}`}
              onClick={(e) => e.stopPropagation()}
            />

            <button className="myCarousel-btn right" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
}
