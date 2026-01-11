import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export default function RegistrationRulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const rules = [
    {
      title: "Dossier d'Inscription",
      items: [
        "Extrait de naissance datant moins de (3) mois",
        "Extrait de caisier judiciaire datant moins de (3) mois",
        "Photocopies légalisées des diplomes / Certificat de Scolarite ou Relevé de notes pour les Aide-Infirmier",
        "Certificat de visite et de contre-visite",
      ],
      icon: <FileText className="text-emerald-600" size={20} />,
    },
    {
      title: "Conditions de Paiement",
      items: [
        "L'inscription est due dès l'admission",
        "Les mensualités se paient avant le 05 de chaque mois",
        "Tout mois entamé est dû intégralement",
      ],
      icon: <AlertCircle className="text-amber-500" size={20} />,
    },
    {
      title: "Tenue & Discipline",
      items: [
        "Blouse blanche obligatoire en TP",
        "Assiduité stricte aux stages cliniques",
        "Respect du règlement intérieur de l'INFOSITS",
      ],
      icon: <CheckCircle2 className="text-blue-500" size={20} />,
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Overlay - Fond sombre flou */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        />

        {/* Contenu du Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-emerald-600 p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl">
                <Info size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Règles d'Inscription
                </h2>
                <p className="text-emerald-100 text-sm">
                  À lire attentivement avant toute démarche
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="space-y-8">
              {rules.map((section, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{section.icon}</div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-3 uppercase text-sm tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <span className="text-emerald-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-10 rounded-2xl transition-all shadow-lg shadow-emerald-200"
            >
              J'ai compris
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
