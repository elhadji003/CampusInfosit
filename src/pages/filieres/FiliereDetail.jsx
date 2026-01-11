import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Award,
  Clock,
  GraduationCap,
  Briefcase,
  CreditCard,
  Info,
} from "lucide-react";
import { filieresDetails } from "./filieres";

export default function FiliereDetail() {
  const { id } = useParams(); // Récupère l'id de l'URL
  const data = filieresDetails[id];

  console.log("Data :", data);

  if (!data)
    return (
      <div className="pt-40 text-center text-2xl font-bold">
        Filière non trouvée...
      </div>
    );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/filieres"
          className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Retour aux filières
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-[2]">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              {data.nom} <br />
              <span className="text-emerald-600">INFOSITS Thiès</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {data.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <Clock className="text-emerald-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900">Durée</h4>
                <p className="text-gray-500">{data.duree}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <Award className="text-emerald-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900">Diplôme</h4>
                <p className="text-gray-500">{data.diplome}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <GraduationCap className="text-emerald-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900">Niveau</h4>
                <p className="text-gray-500">{data.niveau}</p>
              </div>
            </div>

            {/* --- BLOC PAIEMENT OPTIMISÉ --- */}
            <div className="p-8 bg-emerald-50/50 rounded-[2rem] border border-emerald-100 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-600 rounded-xl text-white">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 leading-none">
                    Détails Financiers
                  </h3>
                  <p className="text-sm text-emerald-700 font-medium">
                    Tarifs et modalités de paiement
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {data.paiement.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-white rounded-2xl border border-gray-100 group hover:border-emerald-300 transition-all shadow-sm"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {p.type === "Mensualité"
                          ? "Frais Mensuels"
                          : "Frais Uniques"}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800">
                          {p.type}
                        </span>
                        {/* Badge réduction si un montant réduit existe */}
                        {p.montantReduit && (
                          <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold animate-pulse">
                            PROMO
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex flex-col items-end">
                        {/* Si réduction : afficher le prix barré au-dessus */}
                        {p.montantReduit ? (
                          <>
                            <span className="text-sm text-gray-400 line-through decoration-red-400">
                              {p.montant.toLocaleString()} FCFA
                            </span>
                            <div className="flex items-baseline">
                              <span className="text-xl font-black text-emerald-600">
                                {p.montantReduit.toLocaleString()}
                              </span>
                              <span className="ml-1 text-xs font-bold text-emerald-900/50">
                                FCFA
                              </span>
                            </div>
                          </>
                        ) : (
                          /* Sinon : afficher le prix normal */
                          <div className="flex items-baseline">
                            <span className="text-xl font-black text-emerald-600">
                              {p.montant.toLocaleString()}
                            </span>
                            <span className="ml-1 text-xs font-bold text-emerald-900/50">
                              FCFA
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Petit bandeau d'information supplémentaire */}
              <div className="mt-8 flex gap-3 p-4 bg-blue-50 rounded-2xl text-blue-800 text-xs leading-relaxed">
                <Info className="shrink-0" size={16} />
                <p>
                  Les frais d'inscription incluent l'assurance étudiante et
                  l'accès à la bibliothèque numérique pour toute l'année
                  académique.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  Programme
                </h3>
                <div className="space-y-3">
                  {data.programme.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl"
                    >
                      <CheckCircle className="text-emerald-500" size={18} />
                      <span className="text-gray-700 font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  Débouchés
                </h3>
                <div className="space-y-3">
                  {data.debouches.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-emerald-50/50 rounded-xl"
                    >
                      <Briefcase className="text-emerald-600" size={18} />
                      <span className="text-emerald-900 font-medium">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="sticky top-32 p-10 bg-emerald-900 text-white rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black mb-4 text-center">
                Inscriptions Ouvertes
              </h3>
              <p className="text-emerald-100 text-center mb-8">
                Réservez votre place pour la rentrée 2026 à l'INFOSITS.
              </p>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black transition-all shadow-xl mb-4">
                Postuler Maintenant
              </button>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/20">
                Contacter un conseiller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
