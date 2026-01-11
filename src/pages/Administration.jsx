import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpen,
  Calculator,
  Laptop,
  UserCog,
  HeartPulse,
} from "lucide-react";
import Personnels from "../components/Personnels";

export default function Administration() {
  const nodes = [
    {
      title: "Direction Générale (DG)",
      role: "Vision & Stratégie",
      icon: <UserCheck className="text-white" />,
      color: "bg-emerald-800",
      details: "Responsable de la conformité avec l'ANAQ-SUP et le CAMES.",
    },
    {
      title: "Directeur des Études",
      role: "Pédagogie & Examens",
      icon: <BookOpen className="text-white" />,
      color: "bg-emerald-600",
      details: "Coordination des formateurs et des programmes LMD.",
    },
    {
      title: "Secrétariat & Accueil",
      role: "Administration & Inscriptions",
      icon: <UserCog className="text-white" />,
      color: "bg-emerald-500",
      details: "Premier point de contact et gestion des dossiers étudiants.",
    },
    {
      title: "Service Care (Stages)",
      role: "Immersion Professionnelle",
      icon: <HeartPulse className="text-white" />,
      color: "bg-red-500",
      details: "Gestion des stages cliniques dans les hôpitaux de Thiès.",
    },
    {
      title: "Pôle Support & Technique",
      isGroup: true,
      subServices: [
        { label: "Gestion Comptable & Caisse", icon: <Calculator size={18} /> },
        { label: "Chefs de Section (Filières)", icon: <UserCheck size={18} /> },
        { label: "Maintenance & Informatique", icon: <Laptop size={18} /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Structure <span className="text-emerald-600">Administrative</span>
          </h1>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          {/* Ligne verticale centrale (visible sur desktop) */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          <div className="space-y-12">
            {nodes.map((node, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icône sur la ligne */}
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center z-10 ${
                    node.color || "bg-gray-800"
                  }`}
                >
                  {node.icon}
                </div>

                {/* Contenu de la carte */}
                <div
                  className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}
                >
                  {!node.isGroup ? (
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-black text-gray-900">
                        {node.title}
                      </h3>
                      <p className="text-emerald-600 font-bold text-sm mb-2">
                        {node.role}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {node.details}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gray-900 p-8 rounded-[2rem] shadow-xl text-white">
                      <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
                        Pôle Exécutif & Technique
                      </h3>
                      <div className="space-y-4">
                        {node.subServices.map((sub, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-3 bg-gray-800 p-3 rounded-xl border border-gray-700"
                          >
                            <span className="text-emerald-400">{sub.icon}</span>
                            <span className="text-sm font-medium">
                              {sub.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* --- NOTE FINALE --- */}
        <div className="mt-20 p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 text-center">
          <p className="text-emerald-800 font-medium italic">
            "Une administration structurée pour un encadrement d'excellence à
            Thiès."
          </p>
        </div>
      </div>
      <Personnels />
    </div>
  );
}
