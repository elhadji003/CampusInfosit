import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from "lucide-react";

// Remplacez ces imports par vos images réelles de la vie étudiante
import vieUn from "../assets/image/vie1.jpg";
import vieDeux from "../assets/image/vie2.jpg";
import vieTrois from "../assets/image/vie3.jpg";
import vieQuatre from "../assets/image/vie4.jpg";

const imagesVieEtudiante = [vieUn, vieDeux, vieTrois, vieQuatre];

export default function MomentsEtudiants() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesVieEtudiante.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + imagesVieEtudiante.length) % imagesVieEtudiante.length
    );
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Titre & Description */}
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart size={14} /> Vie de Campus
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Le Moment des <span className="text-blue-600">Étudiants</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Plongez au cœur du quotidien de nos apprenants : moments d'échange, 
            entraide, événements culturels et intégration sur le campus de l'INFOSITS.
          </p>
        </div>

        {/* Carrousel Centré */}
        <div 
          onClick={() => openModal(0)}
          className="w-full max-w-2xl bg-white p-4 rounded-3xl shadow-sm border border-slate-200/80 cursor-pointer group relative overflow-hidden"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <ImageCarousel
              images={imagesVieEtudiante}
              autoSlide={true}
              slideInterval={4000}
            />
            {/* Overlay d'agrandissement au survol */}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
              <Maximize2 size={20} />
              <span>Agrandir la galerie</span>
            </div>
          </div>
        </div>

        {/* Bouton pour ouvrir la modale grand format */}
        <button
          onClick={() => openModal(0)}
          className="mt-8 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition shadow-lg shadow-blue-600/20 text-sm flex items-center gap-2"
        >
          <Maximize2 size={16} />
          Voir toutes les photos des étudiants
        </button>

      </div>

      {/* --- MODALE CARROUSEL PLEIN ÉCRAN --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          
          {/* Bouton Fermer */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <X size={24} />
          </button>

          {/* Titre Modale */}
          <div className="absolute top-6 left-6 text-white font-bold text-base md:text-lg">
            Moment des Étudiants — INFOSITS
          </div>

          {/* Naviguer à gauche */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Conteneur Image Principale */}
          <div className="max-w-4xl max-h-[80vh] w-full flex items-center justify-center">
            <img
              src={imagesVieEtudiante[currentIndex]}
              alt={`Vie étudiante ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Naviguer à droite */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Numérotation */}
          <div className="absolute bottom-6 text-white/80 text-xs font-semibold bg-white/10 px-4 py-1.5 rounded-full">
            {currentIndex + 1} / {imagesVieEtudiante.length}
          </div>
        </div>
      )}
    </section>
  );
}