import React from "react";

export default function Hero() {
  return (
    <div className="pt-32 pb-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Votre Campus, <br />
            <span className="text-emerald-600">Toujours Connecté.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Accédez à vos notes, vos emplois du temps et toutes les actualités
            de l'ITS en temps réel. La plateforme pensée pour simplifier votre
            vie étudiante.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition">
              Explorer les Infos
            </button>
            <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition">
              Voir les Filières
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg">
          {/* Tu peux mettre ici une illustration 3D ou une image d'étudiants */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <img
                src="https://illustrations.popsy.co/emerald/studying-from-home.svg"
                alt="Étudiant"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
