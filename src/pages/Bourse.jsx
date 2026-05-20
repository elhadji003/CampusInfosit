import React, { useState } from "react";
import { GraduationCap, Building2, User, CheckCircle2, Wallet } from "lucide-react";

export default function Bourse() {
  // 1. Choix du partenaire principal
  const [partenaire, setPartenaire] = useState("mairie");
  // 2. Choix du profil (uniquement si Mairie est sélectionnée)
  const [profil, setProfil] = useState("infirmier_sage_femme");

  // Logique simplifiée pour l'affichage textuel
  const obtenirDetails = () => {
    if (partenaire === "mont_roland") {
      return {
        titre: "Prise en charge totale (Mont Roland)",
        partOrganisme: 100,
        partEtudiant: 0,
        phraseExploratoire: "Bonne nouvelle ! Pour le Mont Roland, la Mairie finance l'intégralité de votre formation. Vous n'avez absolument rien à payer.",
        couleur: "from-blue-600 to-indigo-700"
      };
    }
    if (partenaire === "3fpt") {
      return {
        titre: "Prise en charge via le 3FPT",
        partOrganisme: 90,
        partEtudiant: 10,
        phraseExploratoire: "Le 3FPT prend en charge la quasi-totalité de vos frais (90%). Il ne vous reste que 10% du montant total à payer.",
        couleur: "from-amber-600 to-orange-700"
      };
    }
    
    // Cas de la Mairie classique
    if (profil === "infirmier_sage_femme") {
      return {
        titre: "Mairie - Filière Infirmier & Sage-femme",
        partOrganisme: 70,
        partEtudiant: 30,
        phraseExploratoire: "Pour les futurs infirmiers et sages-femmes, la Mairie prend en charge 70% des frais de scolarité. L'étudiant doit payer les 30% restants.",
        couleur: "from-emerald-600 to-teal-700"
      };
    } else {
      return {
        titre: "Mairie - Assistants & Autres filières",
        partOrganisme: 80,
        partEtudiant: 20,
        phraseExploratoire: "Pour les assistants et toutes les autres filières, la Mairie prend en charge 80% des frais de scolarité. L'étudiant ne paye que 20%.",
        couleur: "from-purple-600 to-indigo-800"
      };
    }
  };

  const info = obtenirDetails();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête ultra clair */}
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            INFOSITS • Guide Financier
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mt-3 uppercase tracking-tight">
            Quelle est la part de ma <span className="text-blue-600">Bourse</span> ?
          </h1>
          <p className="text-gray-600 mt-2 text-base font-medium">
            Cliquez simplement sur votre situation ci-dessous pour savoir ce que vous devez payer.
          </p>
        </div>

        {/* ÉTAPE 1 : Choisir le partenaire */}
        <div className="mb-8">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            1. Choisissez votre situation ou partenaire :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <button
              onClick={() => setPartenaire("mairie")}
              className={`p-6 text-left rounded-3xl border-2 transition-all flex flex-col justify-between h-40 relative overflow-hidden ${
                partenaire === "mairie"
                  ? "border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-100"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Building2 className={partenaire === "mairie" ? "text-blue-600" : "text-gray-400"} size={28} />
              <div>
                <p className="font-black text-gray-900 text-lg">Mairie</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Prise en charge classique (70% ou 80%)</p>
              </div>
              {partenaire === "mairie" && <CheckCircle2 className="absolute top-4 right-4 text-blue-600" size={20} />}
            </button>

            <button
              onClick={() => setPartenaire("mont_roland")}
              className={`p-6 text-left rounded-3xl border-2 transition-all flex flex-col justify-between h-40 relative overflow-hidden ${
                partenaire === "mont_roland"
                  ? "border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-100"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <GraduationCap className={partenaire === "mont_roland" ? "text-blue-600" : "text-gray-400"} size={28} />
              <div>
                <p className="font-black text-gray-900 text-lg">Mont Roland</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">La mairie paye 100% de la bourse</p>
              </div>
              {partenaire === "mont_roland" && <CheckCircle2 className="absolute top-4 right-4 text-blue-600" size={20} />}
            </button>

            <button
              onClick={() => setPartenaire("3fpt")}
              className={`p-6 text-left rounded-3xl border-2 transition-all flex flex-col justify-between h-40 relative overflow-hidden ${
                partenaire === "3fpt"
                  ? "border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-100"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Wallet className={partenaire === "3fpt" ? "text-blue-600" : "text-gray-400"} size={28} />
              <div>
                <p className="font-black text-gray-900 text-lg">3FPT</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Le 3FPT finance à hauteur de 90%</p>
              </div>
              {partenaire === "3fpt" && <CheckCircle2 className="absolute top-4 right-4 text-blue-600" size={20} />}
            </button>

          </div>
        </div>

        {/* ÉTAPE 2 : Choisir la filière (Seulement si "Mairie" est sélectionné) */}
        {partenaire === "mairie" && (
          <div className="mb-8 transition-all animate-fadeIn">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
              2. Quelle est votre filière d'étude ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setProfil("infirmier_sage_femme")}
                className={`p-5 text-left rounded-2xl border-2 transition-all flex items-center gap-4 ${
                  profil === "infirmier_sage_femme"
                    ? "border-emerald-600 bg-emerald-50/30"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`p-3 rounded-xl ${profil === "infirmier_sage_femme" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Infirmier ou Sage-femme</p>
                  <p className="text-xs text-gray-500 font-medium">Aide de 70% / Reste 30%</p>
                </div>
              </button>

              <button
                onClick={() => setProfil("assistant_autres")}
                className={`p-5 text-left rounded-2xl border-2 transition-all flex items-center gap-4 ${
                  profil === "assistant_autres"
                    ? "border-purple-600 bg-purple-50/30"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`p-3 rounded-xl ${profil === "assistant_autres" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-400"}`}>
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Assistant ou Autres filières</p>
                  <p className="text-xs text-gray-500 font-medium">Aide de 80% / Reste 20%</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ZONE DE RÉSULTAT RE PENSÉE : Zéro jargon informatique, du texte pur */}
        <div className={`bg-gradient-to-br ${info.couleur} text-white rounded-[2.5rem] shadow-xl p-8 md:p-10 transition-all duration-300`}>
          
          <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
            {info.titre}
          </span>

          <p className="text-lg md:text-xl font-medium mt-6 leading-relaxed text-white/90">
            "{info.phraseExploratoire}"
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-white/20">
            <div>
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Payé par l'organisme</p>
              <p className="text-4xl md:text-5xl font-black mt-1 text-white">{info.partOrganisme}%</p>
            </div>
            <div>
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Reste à payer pour vous</p>
              <p className="text-4xl md:text-5xl font-black mt-1 text-white">{info.partEtudiant}%</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}