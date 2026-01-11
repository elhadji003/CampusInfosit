import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Assure-toi du bon chemin
import vieUn from "../assets/image/vie1.jpg";
import vieDeux from "../assets/image/vie2.jpg";
import vieTrois from "../assets/image/vie3.jpg";
import vieQuatre from "../assets/image/vie4.jpg";
import DonS from "../assets/image/image4.jpg";
import DonSs from "../assets/image/image5.jpg";
import DonSss from "../assets/image/image5.jpg";

// ** À METTRE À JOUR avec TES PROPRES IMAGES **
const imagesDiplomes = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  "https://i.pinimg.com/1200x/45/c9/e0/45c9e07ee16440cd46ff81a39fcb880f.jpg",
  "https://i.pinimg.com/736x/b2/1d/7a/b21d7ad4f6d17ab344219dd53021047f.jpg",
];

const imagesVieEtudiante = [vieUn, vieDeux, vieTrois, vieQuatre];

const imagesEvenementsSolidarite = [DonS, DonSs, DonSss];

const imagesProjetsTechLab = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  "https://i.pinimg.com/1200x/06/33/8c/06338c5618390aa8daa78da139a092a7.jpg",
  "https://i.pinimg.com/736x/a8/79/8a/a8798a1e3f85e4af613749a41ff65ce8.jpg",
];

export default function Home() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-16 leading-tight">
          Explorez les moments forts de{" "}
          <span className="text-emerald-600">CampusInfosits</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Section 1: Cérémonies de Diplômes */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Moments de <span className="text-emerald-600">Réussite</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Immortalisons les célébrations de nos diplômés, fiers de leurs
              parcours inspirants et prêts pour l'avenir.
            </p>
            <div className="w-full max-w-xl">
              <ImageCarousel
                images={imagesDiplomes}
                autoSlide={true}
                slideInterval={5000}
              />
            </div>
            <button className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition transform hover:-translate-y-1 shadow-md">
              Voir la galerie complète
            </button>
          </div>

          {/* Section 2: La Vie Étudiante sur le Campus */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              La Vie des <span className="text-blue-600">Étudiants</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Découvrez l'ambiance vibrante et les interactions quotidiennes qui
              enrichissent l'expérience CampusInfosits.
            </p>
            <div className="w-full max-w-xl">
              <ImageCarousel
                images={imagesVieEtudiante}
                autoSlide={true}
                slideInterval={4500}
              />
            </div>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-md">
              Explorer le campus
            </button>
          </div>

          {/* Section 3: Solidarité & Engagement (Don du Sang, etc.) */}
          <div className="rounded-[2.5rem] border border-gray-100 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solidarité & <span className="text-red-600">Engagement</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Nos étudiants s'engagent pour un impact positif : campagnes de don
              de sang, actions humanitaires, etc.
            </p>
            <div className="w-full max-w-xl">
              <ImageCarousel
                images={imagesEvenementsSolidarite}
                autoSlide={true}
                slideInterval={5500}
              />
            </div>
            <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition transform hover:-translate-y-1 shadow-md">
              S'engager avec nous
            </button>
          </div>

          {/* Nouvelle Section: Ateliers et Projets (ancien Tech Lab) */}
          <div className="lg:col-span-2 xl:col-span-3 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center mt-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Projets & <span className="text-purple-600">Innovation</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Découvrez nos ateliers pratiques, nos projets de recherche et les
              réalisations innovantes de nos étudiants et formateurs.
            </p>
            <div className="w-full max-w-3xl">
              {" "}
              {/* Carrousel un peu plus large */}
              <ImageCarousel
                images={imagesProjetsTechLab}
                autoSlide={true}
                slideInterval={6000}
              />
            </div>
            <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition transform hover:-translate-y-1 shadow-md">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
