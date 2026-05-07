import { useState, useEffect } from "react";
import './Carousel.css';

// eslint-disable-next-line react/prop-types
export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (images && images.length > 0) {
      // Preload all images
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [images]);

  // Manejar tecla Escape para cerrar el modal
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
    e.stopPropagation(); // Evitar que se cierre el modal si hacemos clic en la flecha
    // eslint-disable-next-line react/prop-types
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      // eslint-disable-next-line react/prop-types
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Función para obtener imagen de alta resolución para el modal
  const getHighResUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    // Si es Cloudinary, aumentamos el ancho de 800 a 1600 para que se vea el doble de grande y nítido
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
