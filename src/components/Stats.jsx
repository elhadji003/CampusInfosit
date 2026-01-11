import React from "react";

export const Stats = () => (
  <div className="bg-emerald-600 py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
      <div>
        <div className="text-3xl font-bold">1500+</div>
        <div className="text-emerald-100 text-sm">Étudiants</div>
      </div>
      <div>
        <div className="text-3xl font-bold">12</div>
        <div className="text-emerald-100 text-sm">Filières</div>
      </div>
      <div>
        <div className="text-3xl font-bold">45</div>
        <div className="text-emerald-100 text-sm">Professeurs</div>
      </div>
      <div>
        <div className="text-3xl font-bold">98%</div>
        <div className="text-emerald-100 text-sm">Réussite</div>
      </div>
    </div>
  </div>
);
