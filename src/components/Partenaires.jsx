import React from "react";
import { Handshake } from "lucide-react"; // Pour l'icône de partenariat

const Partenaires = () => {
  // Liste des partenaires (tu pourras ajouter les logos plus tard)
  const partenaires = [
    {
      name: "3FPT",
      description: "Financement de la Formation Professionnelle et Technique",
    },
    { name: "Mairie de Thiès", description: "Partenaire institutionnel local" },
    {
      name: "Ministère de la Santé",
      description: "Tutelle technique et pédagogique",
    },
    {
      name: "ANAQ-SUP",
      description: "Assurance Qualité de l'Enseignement Supérieur",
    },
    {
      name: "CAMES",
      description: "Reconnaissance internationale des diplômes",
    },
    {
      name: "Centres Hospitaliers",
      description: "Partenaires pour les stages cliniques",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Handshake size={16} /> Réseau de Confiance
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Ils nous font <span className="text-emerald-600">confiance</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nous collaborons avec des institutions publiques et privées pour
            garantir l'insertion professionnelle et l'excellence académique de
            nos étudiants.
          </p>
        </div>

        {/* Grille des partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partenaires.map((partenaire, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Cercle pour le futur Logo */}
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                <span className="text-emerald-600 font-black text-xl">
                  {partenaire.name.charAt(0)}
                </span>
              </div>

              <h4 className="font-bold text-gray-900 text-center text-sm mb-1">
                {partenaire.name}
              </h4>
              <p className="text-[10px] text-gray-400 text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                {partenaire.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note sur le 3FPT */}
        <div className="mt-16 p-8 bg-emerald-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-emerald-200">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">
              Partenariat Spécial 3FPT
            </h3>
            <p className="text-emerald-100/80 leading-relaxed">
              Grâce à notre collaboration avec le <strong>3FPT</strong>, nos
              étudiants bénéficient de programmes de bourses et de financements
              pour faciliter leur accès aux formations d'excellence en santé.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-emerald-900 rounded-2xl font-black hover:bg-emerald-50 transition-colors whitespace-nowrap">
            En savoir plus sur les bourses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partenaires;
