import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel"; // Assure-toi du bon chemin
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Imports d'images
import vieUn from "../assets/image/visite1.png";
import vieDeux from "../assets/image/visite2.png";
import vieTrois from "../assets/image/visite3.png";
import vieQuatre from "../assets/image/visite4.png";
import vieCinq from "../assets/image/visite5.png";
import DonS from "../assets/image/image4.jpg";
import DonSs from "../assets/image/image5.jpg";
import DonSss from "../assets/image/image5.jpg";
import reussite1 from "../assets/image/reussite1.png";
import reussite2 from "../assets/image/reussite2.png";
import reussite3 from "../assets/image/reussite3.png";
import MomentsEtudiants from "./MomentsEtudiants";

// Collections d'images structurées
const imagesDiplomes = [reussite1, reussite2, reussite3];
const imagesVisites = [vieUn, vieDeux, vieTrois, vieQuatre, vieCinq];
const imagesPratiques = [DonS, DonSs, DonSss];

export default function Home() {
  // État de la modale d'agrandissement d'image (Lightbox)
  const [modalData, setModalData] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  // Fonction pour ouvrir la modale
  const openModal = (imagesList, index = 0, title = "") => {
    setModalData({
      isOpen: true,
      images: imagesList,
      currentIndex: index,
      title: title,
    });
  };

  // Fermer la modale
  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  // Navigation dans la modale
  const nextImage = () => {
    setModalData((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setModalData((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 leading-tight">
          Explorez les moments forts de{" "}
          <span className="text-emerald-600">Infosits</span>
        </h2>

        {/* Grille des 3 sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Section 1: Moments de Réussite */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Moments de <span className="text-emerald-600">Réussite</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md text-sm">
              Immortalisons les célébrations de nos diplômés, fiers de leurs
              parcours inspirants et prêts pour le milieu professionnel.
            </p>

            {/* Conteneur Carrousel centré avec option de clic */}
            <div
              onClick={() =>
                openModal(imagesDiplomes, 0, "Moments de Réussite")
              }
              className="w-full max-w-xl flex justify-center items-center relative cursor-pointer group rounded-2xl overflow-hidden"
            >
              <ImageCarousel
                images={imagesDiplomes}
                autoSlide={true}
                slideInterval={5000}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
                <Maximize2 size={20} />
                <span>Agrandir</span>
              </div>
            </div>

            <button
              onClick={() =>
                openModal(imagesDiplomes, 0, "Moments de Réussite")
              }
              className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition transform hover:-translate-y-1 shadow-md text-sm"
            >
              Voir en Grand Format
            </button>
          </div>

          {/* Section 2: Moments des Visites */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Moments des <span className="text-blue-600">Visites</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md text-sm">
              Découvrez les moments forts où les responsables et partenaires de
              nos structures d'accueil viennent à la rencontre de nos étudiants
              au sein de l'établissement.
            </p>

            <div
              onClick={() => openModal(imagesVisites, 0, "Moments des Visites")}
              className="w-full max-w-xl flex justify-center items-center relative cursor-pointer group rounded-2xl overflow-hidden"
            >
              <ImageCarousel
                images={imagesVisites}
                autoSlide={true}
                slideInterval={4500}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
                <Maximize2 size={20} />
                <span>Agrandir</span>
              </div>
            </div>

            <button
              onClick={() => openModal(imagesVisites, 0, "Moments des Visites")}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-md text-sm"
            >
              Voir en Grand Format
            </button>
          </div>

          {/* Section 3: Travaux Pratiques & Ateliers */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Séances <span className="text-amber-600">Pratiques</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md text-sm">
              Mise en situation, démonstrations médicales et ateliers pratiques
              pour garantir un apprentissage 100% opérationnel.
            </p>

            <div
              onClick={() => openModal(imagesPratiques, 0, "Séances Pratiques")}
              className="w-full max-w-xl flex justify-center items-center relative cursor-pointer group rounded-2xl overflow-hidden"
            >
              <ImageCarousel
                images={imagesPratiques}
                autoSlide={true}
                slideInterval={5500}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
                <Maximize2 size={20} />
                <span>Agrandir</span>
              </div>
            </div>

            <button
              onClick={() => openModal(imagesPratiques, 0, "Séances Pratiques")}
              className="mt-8 px-8 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition transform hover:-translate-y-1 shadow-md text-sm"
            >
              Voir en Grand Format
            </button>
          </div>
        </div>
      </div>

      {/* --- MODALE CARROUSEL / LIGHTBOX TAILLE GRANDE --- */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          {/* Bouton Fermer */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <X size={28} />
          </button>

          {/* Titre en haut */}
          {modalData.title && (
            <div className="absolute top-6 left-6 text-white font-bold text-lg md:text-xl">
              {modalData.title}
            </div>
          )}

          {/* Flèche Gauche */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image Centrée */}
          <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2">
            <img
              src={modalData.images[modalData.currentIndex]}
              alt={`Agrandissement ${modalData.currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Flèche Droite */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicateur d'images en bas */}
          <div className="absolute bottom-6 text-white/70 text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full">
            {modalData.currentIndex + 1} / {modalData.images.length}
          </div>
        </div>
      )}
      <MomentsEtudiants />
    </div>
  );
}
