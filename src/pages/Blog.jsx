import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Assure-toi du bon chemin

// Exemple d'images pour chaque catégorie. Tu devras les remplacer par tes propres URLs.
const imagesDiplomes = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Remplace par tes URLs réelles
  "https://i.pinimg.com/1200x/45/c9/e0/45c9e07ee16440cd46ff81a39fcb880f.jpg",
  "https://i.pinimg.com/736x/b2/1d/7a/b21d7ad4f6d17ab344219dd53021047f.jpg",
];

const imagesVieEtudiante = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  "https://i.pinimg.com/736x/c4/6b/35/c46b35712d9e60f40a8dbea0394c51f7.jpg",
  "https://i.pinimg.com/1200x/df/51/86/df518651cbd744b3e03e2d71bbd5346c.jpg",
];

const imagesTechLab = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  "https://i.pinimg.com/1200x/06/33/8c/06338c5618390aa8daa78da139a092a7.jpg",
  "https://i.pinimg.com/736x/a8/79/8a/a8798a1e3f85e4af613749a41ff65ce8.jpg",
];

// ... et ainsi de suite pour d'autres catégories si tu en as.

export default function Home() {
  // Assure-toi que c'est bien dans ta page Home ou une section dédiée
  return (
    <div className="py-20 bg-gray-50">
      {" "}
      {/* Ajuste le padding et le fond si nécessaire */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          Explorez les moments forts de{" "}
          <span className="text-emerald-600">CampusInfosits</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {" "}
          {/* Utilise lg:grid-cols-2 pour le responsive */}
          {/* Section 1: Remise des Diplômes */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Moments de <span className="text-emerald-600">Réussite</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Célébrons ensemble les accomplissements de nos brillants diplômés.
              Des parcours inspirants, des carrières prometteuses.
            </p>
            <div className="w-full max-w-xl">
              {" "}
              {/* Ajuste le max-w pour contrôler la taille du carrousel */}
              <ImageCarousel
                images={imagesDiplomes}
                autoSlide={true}
                slideInterval={5000}
              />
            </div>
            <button className="mt-8 px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition">
              Voir la galerie complète
            </button>
          </div>
          {/* Section 2: Vie Étudiante & Campus */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              La Vie sur le <span className="text-blue-600">Campus</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Découvrez l'ambiance dynamique et les activités qui animent
              CampusInfosits au quotidien.
            </p>
            <div className="w-full max-w-xl">
              <ImageCarousel
                images={imagesVieEtudiante}
                autoSlide={true}
                slideInterval={4500}
              />
            </div>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
              Découvrir la vie étudiante
            </button>
          </div>
          {/* Section 3: Laboratoires & Innovation (Exemple de troisième bloc, ajuster la grille si 3 blocs) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Innovation & <span className="text-purple-600">Technologie</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Plongez au cœur de nos laboratoires à la pointe de la technologie
              et de nos projets innovants.
            </p>
            <div className="w-full max-w-2xl">
              {" "}
              {/* Un peu plus large pour cette section */}
              <ImageCarousel
                images={imagesTechLab}
                autoSlide={true}
                slideInterval={5500}
              />
            </div>
            <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition">
              Nos projets de recherche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
