import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  GraduationCap,
  Phone,
  Calendar,
  BookOpen,
} from "lucide-react";
import { filieresDetails } from "./filieres";
import ModalImportant from "../../components/modal/ModalImportant";

export default function FiliereDetail() {
  const { id } = useParams();
  const data = filieresDetails[id];

  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedYear, setSelectedYear] = useState("annee1");

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Filière non trouvée
        </h2>
        <Link
          to="/filieres"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition-all"
        >
          <ArrowLeft size={18} /> Voir toutes les filières
        </Link>
      </div>
    );
  }

  // Filtrage des années disponibles
  const years = [
    { key: "annee1", label: "1ère Année", component: data.component_annee1 },
    { key: "annee2", label: "2ème Année", component: data.component_annee2 },
    { key: "annee3", label: "3ème Année", component: data.component_annee3 },
  ].filter((y) => y.component);

  // Récupération de l'élément JSX de l'année active
  const activeYearData = years.find((y) => y.key === selectedYear);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-24 pb-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/filieres"
          className="inline-flex items-center gap-2 text-slate-600 font-semibold mb-8 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft size={18} /> Retour à l'offre de formation
        </Link>

        {/* En-tête de la formation */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-100">
              {data.diplome}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md flex items-center gap-1.5">
              <Clock size={14} /> Durée : {data.duree}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md flex items-center gap-1.5">
              <GraduationCap size={14} /> Prérequis : {data.niveau}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {data.nom}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
            {data.description}
          </p>
        </div>

        {/* Contenu & Inscription */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Programme Pédagogique */}
          <div className="flex-[2]">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="text-emerald-700" size={22} />
                  Programme d'Enseignement
                </h2>
              </div>

              {/* Onglets d'années */}
              {years.length > 1 && (
                <div className="flex gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl">
                  {years.map((year) => (
                    <button
                      key={year.key}
                      onClick={() => setSelectedYear(year.key)}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${
                        selectedYear === year.key
                          ? "bg-white text-emerald-800 shadow-sm font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {year.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Rendu du composant JSX */}
              <div className="prose prose-slate max-w-none">
                {activeYearData ? (
                  activeYearData.component
                ) : (
                  <div className="text-slate-500 italic">
                    Aucun programme disponible pour cette année.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Panneau latéral d'admission */}
          <div className="flex-1">
            <div className="sticky top-28 rounded-3xl bg-slate-900 p-8 text-white shadow-xl border border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
                <Calendar size={14} />
                <span>Session Académique 2026</span>
              </div>

              <h3 className="text-2xl font-bold leading-snug mb-3">
                Procédure d'Admission
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Les inscriptions pour la rentrée académique sont ouvertes.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dossier d'inscription administratif</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Validation des prérequis académiques</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-700 hover:bg-emerald-600 text-white transition-all shadow-md active:scale-[0.98]"
                >
                  S'inscrire en ligne
                </button>

                <button
                  onClick={() => setShowContact(!showContact)}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  {showContact ? "+221 77 123 45 67" : "Contacter le secrétariat"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalImportant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}