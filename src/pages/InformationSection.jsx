import React, { useState } from "react";
import { ArrowRight, X, Calendar, Tag, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Infosits from "../assets/image/Infosits.jpg";

// Données enrichies avec du contenu détaillé pour les modales
const newsList = [
  {
    id: 1,
    category: "Tests d'Entrée",
    date: "Session 2026-2027",
    title: "Ouverture des Tests d'Entrée",
    description:
      "Les tests d'admission aux différentes filières de formation sont officiellement ouverts. Rejoignez l'INFOSITS pour débuter votre parcours professionnel.",
    image: Infosits,
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    modalContent: {
      subtitle: "Conditions & Procédure de Candidature",
      details: [
        "Les tests d'entrée concernent l'ensemble des filières de l'établissement (Délégué Médical, Vendeur en Pharmacie, Secrétaire Médical, etc.).",
        "Conditions : Candidats âgés d'au moins 18 ans au moment de l'inscription.",
        "Frais de dossier/test : 2 000 F CFA à s'acquitter lors du dépôt.",
        "Critère d'admissibilité : Seuil de réussite fixé à partir de 12/20.",
        "Inscriptions ouvertes dès maintenant au secrétariat de l'INFOSITS Thiès."
      ]
    }
  },
  {
    id: 2,
    category: "Inscription",
    date: "1er Octobre 2026",
    title: "Démarrage des Inscriptions",
    description:
      "La campagne officielle d'inscription pour l'année académique débute ce 1er octobre. Préparez vos dossiers complets.",
    image: Infosits,
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    modalContent: {
      subtitle: "Modalités et Dossier de Candidature",
      details: [
        "Démarrage effectif des inscriptions et réservations de places : 1er Octobre 2026.",
        "Pièces à fournir : 02 photos d'identité, extrait de naissance (< 3 mois), extrait du casier judiciaire (< 3 mois), certificat de visite & contre-visite, certificat de nationalité, et copie du diplôme/relevé exigé.",
        "Fourniture matérielle requise : 01 rame de papier A4 (Double A) obligatoire par année académique.",
        "Paiements à l'inscription : Frais d'inscription + Équipements/Kit (selon la fiche de renseignement de la filière choisie)."
      ]
    }
  },
  {
    id: 3,
    category: "Financement & Bourses",
    date: "Année Académique 2026-2027",
    title: "Demandes de Bourses d'Études",
    description:
      "Formulez vos demandes de bourses et d'accompagnement financier auprès de nos partenaires officiels : Mairie, 3FPT et Mont-Rolland.",
    image: Infosits,
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
    modalContent: {
      subtitle: "Partenariats & Organismes de Prise en Charge",
      details: [
        "Partenariat 3FPT : Dépôt des demandes d'allocation ou de prise en charge sur le guichet de financement 3FPT.",
        "Bourses Municipales (Mairie) : Adressez vos demandes de bourses sociales auprès de votre Mairie de résidence.",
        "Commune de Mont-Rolland : Dispositif spécifique d'accompagnement pour les ressortissants de la zone.",
        "Assistance Secrétariat : L'équipe de l'INFOSITS reste disponible pour guider les apprenants dans la constitution des dossiers de demande de bourse."
      ]
    }
  },
];

const InformationSection = () => {
  // État pour gérer la modale active
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section id="infos" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Communication
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Actualités &amp; Communiqués Officiels
            </h2>
          </div>
          <Link
            to="/blog"
            className="px-5 py-2.5 text-sm bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-all"
          >
            Consulter les archives
          </Link>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <article
              key={news.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide rounded border ${news.badgeColor}`}
                  >
                    {news.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                  {news.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {news.description}
                </p>
                <button
                  onClick={() => setSelectedNews(news)}
                  className="mt-auto flex items-center gap-2 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors"
                >
                  Consulter la note
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Structure de la Modale */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative">
            
            {/* Header de la Modale */}
            <div className="relative h-48 sm:h-56 w-full shrink-0">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full transition shadow-md backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Corps de la Modale */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide rounded border ${selectedNews.badgeColor}`}>
                  {selectedNews.category}
                </span>
                <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedNews.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {selectedNews.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 border-b pb-4">
                {selectedNews.description}
              </p>

              {/* Détails supplémentaires */}
              {selectedNews.modalContent && (
                <div>
                  <h4 className="font-semibold text-slate-800 text-base mb-3 flex items-center gap-2">
                    <Tag size={16} className="text-emerald-600" />
                    {selectedNews.modalContent.subtitle}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedNews.modalContent.details.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer de la Modale */}
              <div className="mt-8 pt-4 border-t flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition"
                >
                  Fermer
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default InformationSection;