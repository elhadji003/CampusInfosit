import React from "react";
import {
  Database,
  Activity,
  Landmark,
  Monitor,
  Microscope,
  PencilRuler,
  Users,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { filieresData } from "./FilieresData";

export default function Filieres() {
  return (
    <section id="filieres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos {filieresData.length} {""}
            <span className="text-emerald-600">Filières</span> d'Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choisissez un parcours adapté à vos ambitions professionnelles. Des
            programmes conçus pour répondre aux besoins du marché actuel.
          </p>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grille des filières */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filieresData.map((filiere) => (
            <div
              key={filiere.id}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300"
            >
              {/* Icône avec fond coloré */}
              <div
                className={`w-16 h-16 ${filiere.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {filiere.icon}
              </div>

              {/* Contenu */}

              <h4 className="text-xl font-extrabold text-gray-900 mb-4">
                {filiere.nom}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {filiere.description}
              </p>

              {/* Bouton d'action */}
              <Link
                to={`/filiere/${filiere.slug}`}
                className="flex items-center gap-2 text-gray-900 font-bold hover:text-emerald-600 transition-colors"
              >
                En savoir plus
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  →
                </span>
              </Link>

              {/* Décoration subtile au hover */}
              <div className="absolute top-4 right-4 text-gray-100 font-black text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                {filiere.id.toString().padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Section Appel à l'action */}
        <div className="mt-20 p-10 bg-emerald-600 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vous hésitez sur votre choix ?
            </h3>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">
              Nos conseillers d'orientation sont disponibles pour vous guider
              vers la filière qui correspond le mieux à votre projet de
              carrière.
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg">
              Prendre rendez-vous
            </button>
          </div>
          {/* Formes décoratives fond footer */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
