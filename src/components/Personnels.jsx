import React from "react";
import { Mail, Phone } from "lucide-react";
import Dg from "../assets/image/dg.png";
import Rahman from "../assets/image/Rahman.png";
import MmeTra from "../assets/image/MmeTra.png";

export default function Personnels() {
  // Vos données JSON (extrait des résultats)
  const personnelData = [
    {
      first_name: "Fallou",
      last_name: "Séne",
      role: "dg",
      // profile: Dg,
      email: "dg@infosits.com",
      genre: "M",
    },
    {
      first_name: "Amadou",
      last_name: "SOW",
      role: "de",
      email: "amadoumasow@gmail.com",
      genre: "M",
    },
    {
      first_name: "AbdouRahman",
      last_name: "Ndiaye",
      role: "pp",
      profile: Rahman,
      email: "ndiaye@infosits.com",
      genre: "M",
    },
    {
      first_name: "Ahmadou Lamine",
      last_name: "Fall",
      role: "gs_comptable",
      email: "ahmadoulaminef@gmail.com",
      genre: "M",
    },
    {
      first_name: "Ndeye Diama",
      last_name: "Diawara",
      role: "caissier",
      email: "diamadiawara.ndd@gmail.com",
      genre: "F",
    },
    {
      first_name: "Ndiaté",
      last_name: "Diaw",
      role: "chef_section",
      email: "diawndiate@gmail.com",
      genre: "F",
    },
    {
      first_name: "Bineta",
      last_name: "KA",
      role: "chef_section",
      email: "kabineta248@gmail.com",
      genre: "F",
    },
    {
      first_name: "Jacqueline Marame",
      last_name: "MBENGUE",
      role: "chef_section",
      email: "jacquelinembengue2@gmail.com",
      genre: "F",
    },
    {
      first_name: "Maguette",
      last_name: "Mbaye",
      role: "chef_section",
      email: "maguettembaye019@gmail.com",
      genre: "F",
    },
    {
      first_name: "Moustapha",
      last_name: "Mbaye",
      role: "assistant",
      email: "mbayemoustapha010@gmail.com",
      genre: "M",
    },
    {
      first_name: "El Hadji Ibrahima",
      last_name: "SENE",
      role: "chef_mtn",
      email: "elhadjiibrahimasene@gmail.com",
      genre: "M",
    },
    {
      first_name: "Papa Moustapha",
      last_name: "Niane",
      role: "Agent de conformité",
      email: "nianemoustapha83@gmail.com",
      genre: "M",
    },
    {
      first_name: "Taye Mah",
      last_name: "Cissoko",
      role: "care",
      email: "mataye27@gmail.com",
      genre: "F",
    },
  ];

  const roleLabels = {
    dg: "Directeur Général",
    de: "Directeur des Études",
    gs_comptable: "Gestionnaire Comptable",
    care: "Service Care / Stages",
    pp: "Professeur Principal",
    caissier: "Caissière",
    chef_section: "Chef de Section",
    assistant: "Assistant Administratif",
    chef_mtn: "Chef Maintenance / IT",
    pointeur: "Surveillant",
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
            Notre <span className="text-emerald-600">Personnel</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            L'équipe administrative de l'INFOSITS à votre écoute
          </p>
        </div>

        {/* Grille Flexbox : 4 colonnes sur PC (lg:w-1/4), 2 sur Tablette (sm:w-1/2) */}
        <div className="flex flex-wrap -mx-4">
          {personnelData.map((staff, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="group bg-gray-50 rounded-[2.5rem] p-8 text-center border border-gray-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 h-full flex flex-col items-center">
                {/* Photo de profil (Placeholder avec Initiale si pas d'image) */}
                <div className="relative w-28 h-28 mb-6">
                  <div className="absolute inset-0 bg-emerald-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-full h-full bg-emerald-600 rounded-3xl shadow-inner flex items-center justify-center text-white text-3xl font-black border-4 border-white">
                    {staff.profile ? (
                      <img
                        src={staff.profile}
                        alt="profile-user"
                        className="w-28 h-28 rounded-xl"
                      />
                    ) : (
                      <p>
                        {" "}
                        {staff.first_name.charAt(0)}
                        {staff.last_name.charAt(0)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Informations */}
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {staff.genre === "M" ? "Mr" : "Mme"} {staff.first_name}{" "}
                    <br />
                    <span className="uppercase text-emerald-700">
                      {staff.last_name}
                    </span>
                  </h4>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">
                    {roleLabels[staff.role] || staff.role}
                  </div>
                </div>

                {/* Boutons de contact discrets */}
                <div className="mt-6 flex gap-3 pt-6 border-t border-gray-100 w-full justify-center">
                  <a
                    href={`mailto:${staff.email}`}
                    className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:shadow-md transition-all"
                  >
                    <Mail size={18} />
                  </a>
                  <button className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 hover:shadow-md transition-all">
                    <Phone size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
