import React from "react";
import {
  Activity,
  Clock,
  Award,
  CheckCircle,
  ArrowLeft,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Infirmier() {
  const programme = [
    "Soins infirmiers fondamentaux",
    "Anatomie et Physiologie humaine",
    "Pharmacologie et administration des médicaments",
    "Urgences et Réanimation",
    "Santé publique et Éthique médicale",
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Retour et Fil d'Ariane */}
        <Link
          to="/filieres"
          className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Retour aux filières
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* GAUCHE : Contenu principal */}
          <div className="flex-[2]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 rounded-2xl text-red-500">
                <Activity size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900">
                Infirmier <span className="text-emerald-600">d'État</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Devenez un acteur incontournable du système de santé. Cette
              formation de haut niveau vous prépare à prodiguer des soins
              techniques, relationnels et éducatifs pour répondre aux besoins de
              santé des individus.
            </p>

            {/* Grille d'infos clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <Clock className="text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900">Durée</h4>
                <p className="text-gray-500">3 ans (LMD)</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <Award className="text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900">Diplôme</h4>
                <p className="text-gray-500">Diplôme d'État</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <GraduationCap className="text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900">Niveau requis</h4>
                <p className="text-gray-500">Baccalauréat</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="text-emerald-600" /> Au programme de la
              formation
            </h3>
            <div className="space-y-4 mb-10">
              {programme.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:border-emerald-100 transition-colors"
                >
                  <CheckCircle
                    className="text-emerald-500 shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DROITE : Sidebar d'inscription */}
          <div className="flex-1">
            <div className="sticky top-32 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Prêt à nous rejoindre ?
              </h3>
              <p className="text-gray-500 mb-8">
                Les inscriptions pour la session 2026 sont ouvertes à Thiès.
              </p>

              <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 hover:-translate-y-1 transition-all mb-4">
                Postuler en ligne
              </button>

              <button className="w-full py-4 border-2 border-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Télécharger la brochure (PDF)
              </button>

              <div className="mt-8 pt-8 border-t border-gray-50 text-left">
                <p className="text-sm font-bold text-gray-900 mb-2">
                  Besoin d'aide ?
                </p>
                <p className="text-sm text-gray-500">
                  Contactez le service d'admission au :
                </p>
                <p className="text-emerald-600 font-black">+221 33 951 XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
