import React from "react";
import { Printer } from "lucide-react";

export default function FicheIDE_SFE3() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-4 sm:my-8 p-4 sm:p-6 bg-white shadow-md sm:rounded-lg border border-gray-200">
      {/* Bouton Impression (Masqué lors de l'impression papier) */}
      <div className="flex justify-end mb-4 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm"
        >
          <Printer size={16} />
          <span>Imprimer la fiche</span>
        </button>
      </div>

      {/* En-tête */}
      <div className="text-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700 uppercase tracking-wide">
          INFOSITS — Thiès
        </h1>
        <p className="text-gray-700 font-medium text-xs sm:text-sm mt-1">
          Fiche de Renseignement — 3ème Année APC
        </p>
        <p className="text-gray-500 text-xs">
          Infirmier d'État / Sage-Femme d'État (Niveau BAC — Licence 3)
        </p>
        <p className="text-gray-400 text-xs mt-1">Année Académique 2026-2027</p>
      </div>

      {/* Section 1: Frais et Équipements */}
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2 mb-3">
          💰 Tarifs et Équipements (Ré-inscription L3)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gray-50 p-3 rounded border">
            <span className="font-medium text-xs sm:text-sm text-gray-600 block">
              Frais de Ré-inscription :
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 block mt-0.5">
              54 000 F CFA
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded border">
            <span className="font-medium text-xs sm:text-sm text-gray-600 block">
              Mensualité (Scolarité) :
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 block mt-0.5">
              40 000 F CFA / mois
            </span>
            <span className="text-xs text-amber-600 block mt-1">
              ⚠️ À payer au plus tard le 05 de chaque mois (pendant 11 mois, de
              Nov. à Sept. 2027).
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded border">
            <span className="font-medium text-xs sm:text-sm text-gray-600 block">
              Frais d'Examens &amp; Matériel :
            </span>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 mt-1 space-y-0.5">
              <li>
                Frais de Certification :{" "}
                <span className="font-semibold text-blue-700">
                  20 000 F CFA
                </span>
              </li>
              <li>Blouse École et de stage (11 000 F)</li>
              <li>Carnet de Stage, F.T et Portfolio (10 000 F)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-3 rounded border">
            <span className="font-medium text-xs sm:text-sm text-gray-600 block">
              Frais de Stages (3ème Année) :
            </span>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 mt-1 space-y-0.5">
              <li>
                Stage Clinique :{" "}
                <span className="font-semibold">23 000 F CFA</span>
              </li>
              <li>
                Stage Rural :{" "}
                <span className="font-semibold text-amber-700">
                  À la charge du stagiaire
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-xs sm:text-sm text-blue-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span className="font-semibold">
            Total à verser à la Ré-inscription (avec Scolarité Nov. et Sept.) :
          </span>
          <span className="text-base sm:text-lg font-bold">198 000 F CFA</span>
        </div>
      </div>

      {/* Section 2: Pièces à fournir */}
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2 mb-3">
          📄 Pièces à Fournir obligatoirement
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
          <li className="flex items-center bg-gray-50 p-2 rounded col-span-1 sm:col-span-2 border-l-2 border-red-500">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 shrink-0"></span>
            <span>
              01 Copie légalisée et authentifiée du BAC{" "}
              <strong className="text-red-700">(Condition Sine Qua Non)</strong>
            </span>
          </li>
          <li className="flex items-center bg-gray-50 p-2 rounded">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
            02 Photos d'Identité
          </li>
          <li className="flex items-center bg-gray-50 p-2 rounded">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
            01 Extrait du Casier Judiciaire (&lt; 3 mois)
          </li>
          <li className="flex items-center bg-gray-50 p-2 rounded">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
            01 Extrait de naissance (&lt; 3 mois)
          </li>
          <li className="flex items-center bg-gray-50 p-2 rounded">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
            01 Certificat de Visite et Contre-visite (&lt; 3 mois)
          </li>
          <li className="flex items-center bg-gray-50 p-2 rounded">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
            01 Certificat de Nationalité
          </li>
          <li className="flex items-center bg-blue-50 p-2 rounded col-span-1 sm:col-span-2 text-xs text-blue-900">
            ℹ️ Pour les Étrangers : Diplôme en équivalence ET authentifié
            requis.
          </li>
        </ul>

        <div className="mt-3 bg-amber-50 p-3 rounded border border-amber-200 text-amber-900 text-xs sm:text-sm flex-col flex items-start">
          <span className="mr-2 my-4 font-bold shrink-0">
            📚 Obligation Matérielle :
          </span>
          <div>
            Chaque étudiant doit obligatoirement fournir{" "}
            <strong>01 Rame de papier A4 (Double A)</strong> pour cette année
            d'étude.
          </div>
        </div>
      </div>

      {/* Section 3: Règlements généraux */}
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2 mb-3">
          ⚙️ Règlements Interne &amp; Tarifs Annexes
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
          <li className="flex items-center">
            <span className="mr-2">📄</span>
            Le montant de la photocopie de documents personnels est de{" "}
            <strong className="text-gray-900 mx-1">10 frs / Page</strong> au
            sein de l'institut.
          </li>
        </ul>
      </div>

      {/* Note Importante / Warning */}
      <div className="p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-md">
        <h4 className="font-bold text-xs sm:text-sm flex items-center mb-1">
          🛑 NB : Clause de non-remboursement &amp; Examen d'État
        </h4>
        <p className="text-xs sm:text-sm mb-2">
          Le Diplôme d'État de Licence en science Infirmière et Obstétricale
          n'est délivré en 3ème année qu'
          <strong>après réussite à l'examen d'État</strong>.
        </p>
        <p className="text-xs sm:text-sm">
          En cas de désistement, d'abandon ou de renvoi de l'étudiant à
          n'importe quel moment, les sommes déjà versées{" "}
          <strong>
            restent la propriété de l'INFOSITS et ne sont pas remboursables
          </strong>
          .
        </p>
      </div>
    </div>
  );
}
