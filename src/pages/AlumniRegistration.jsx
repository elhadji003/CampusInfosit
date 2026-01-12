import React from "react";
import {
  User,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Send,
} from "lucide-react";

export default function AlumniRegistration() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
            Rejoignez le Réseau <span className="text-emerald-600">Alumni</span>
          </h1>
          <p className="text-gray-500 mt-3 font-medium">
            Partagez votre parcours et restez connecté avec la communauté
            INFOSITS.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <form className="space-y-8">
              {/* Section: Identité */}
              <div>
                <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <User size={16} /> Informations Personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Moussa"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Diop"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Naissance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <Calendar size={14} /> Date de naissance
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <MapPin size={14} /> Lieu de naissance
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Dakar"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Parcours Académique */}
              <div>
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <GraduationCap size={16} /> Parcours INFOSITS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Promotion (Année de diplôme)
                    </label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all">
                      <option>Sélectionner l'année</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Filière d'obtention du diplôme
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Licence en Santé"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Situation Actuelle */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <Briefcase size={14} /> Situation actuelle (Poste &
                  Entreprise)
                </label>
                <textarea
                  rows="3"
                  placeholder="Dites-nous ce que vous devenez aujourd'hui..."
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                ENREGISTRER MON PROFIL <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-gray-400 text-xs mt-8">
          En vous inscrivant, vous acceptez de partager ces informations avec la
          direction d'INFOSITS.
        </p>
      </div>
    </div>
  );
}
