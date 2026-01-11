import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icônes pour les flèches

const ImageCarousel = ({ images, autoSlide = true, slideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoSlide) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        slideInterval
      );
    }
    return () => resetTimeout();
  }, [currentIndex, images.length, autoSlide, slideInterval]);

  const goToPrevious = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    resetTimeout();
    setCurrentIndex(slideIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Déterminer la direction pour l'animation (simple, tu peux complexifier)
  const directionRef = useRef(0);
  useEffect(() => {
    if (currentIndex > directionRef.current) {
      directionRef.current = 1; // Avance
    } else if (currentIndex < directionRef.current) {
      directionRef.current = -1; // Recule
    }
    // Mise à jour de la référence après le rendu pour la prochaine comparaison
    directionRef.current = currentIndex;
  }, [currentIndex]);

  return (
    <div className="p-16 relative w-full overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-50 aspect-video md:aspect-w-16 md:aspect-h-9">
      <AnimatePresence initial={false} custom={directionRef.current}>
        <motion.img
          key={currentIndex} // Clé unique pour que Framer Motion détecte le changement
          src={images[currentIndex]}
          custom={directionRef.current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt={`Slide ${currentIndex + 1}`}
        />
      </AnimatePresence>

      {/* Boutons Précédent/Suivant */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-md text-gray-800 hover:bg-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-md text-gray-800 hover:bg-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-emerald-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
