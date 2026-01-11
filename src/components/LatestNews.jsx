import React from "react";

export default function LatestNews() {
  return (
    <div>
      <section id="infos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Dernières Actualités
            </h2>
            <p className="text-gray-500 mt-2">
              Restez informé des derniers événements
            </p>
          </div>
          <button className="text-emerald-600 font-bold hover:underline">
            Voir tout →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-48 bg-gray-200"></div> {/* Image d'actu */}
              <div className="p-6">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Événement
                </span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  Examen de fin de semestre : Le calendrier est disponible
                </h3>
                <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                  Le calendrier officiel des examens a été publié par la
                  Direction des Études...
                </p>
                <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-gray-400 text-xs italic">
                    Il y a 2 heures
                  </span>
                  <button className="text-sm font-bold text-emerald-600">
                    Lire plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
