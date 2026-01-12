import React from "react";
import { Mail, Phone } from "lucide-react";
import Dg from "../assets/image/dg.png";
import Rahman from "../assets/image/Rahman.png";
import MmeTra from "../assets/image/MmeTra.png";

export default function Personnels() {
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
      first_name: "Taye Mah",
      last_name: "Cissoko",
      role: "care",
      email: "mataye27@gmail.com",
      genre: "F",
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
      first_name: "Elhadji Malick",
      last_name: "Diop",
      role: "WebMaster",
      email: "malickelhadji07@gmail.com",
      genre: "M",
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
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
            Notre <span className="text-emerald-600">Personnel</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            L'excellence administrative au service de votre réussite
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 items-stretch">
          {personnelData.map((staff, index) => {
            const isDG = staff.role === "dg";

            return (
              <div
                key={index}
                className={`w-full p-4 transition-all duration-500 ${
                  isDG ? "md:w-full lg:w-1/3 xl:w-1/4" : "sm:w-1/2 lg:w-1/4"
                }`}
              >
                <div
                  className={`group relative overflow-hidden rounded-[2.5rem] p-8 text-center border transition-all duration-500 h-full flex flex-col items-center ${
                    isDG
                      ? "bg-slate-900 border-slate-800 shadow-2xl shadow-slate-200 scale-105 z-10"
                      : "bg-white border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100"
                  }`}
                >
                  {/* Effet brillant uniquement pour le DG */}
                  {isDG && (
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full"></div>
                  )}

                  {/* Photo de profil */}
                  <div className="relative w-32 h-32 mb-6">
                    <div
                      className={`absolute inset-0 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 ${
                        isDG ? "bg-blue-500/20" : "bg-emerald-100"
                      }`}
                    ></div>

                    <div
                      className={`relative w-full h-full rounded-3xl shadow-xl flex items-center justify-center text-3xl font-black border-4 ${
                        isDG
                          ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-slate-900 text-white"
                          : "bg-emerald-600 border-white text-white"
                      }`}
                    >
                      {staff.profile ? (
                        <img
                          src={staff.profile}
                          alt="profile"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <span>
                          {staff.first_name.charAt(0)}
                          {staff.last_name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="flex-grow">
                    <h4
                      className={`text-xl font-bold mb-2 leading-tight ${
                        isDG ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {staff.genre === "M" ? "Mr" : "Mme"} {staff.first_name}
                      <br />
                      <span
                        className={`uppercase ${
                          isDG ? "text-blue-400" : "text-emerald-700"
                        }`}
                      >
                        {staff.last_name}
                      </span>
                    </h4>

                    <div
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm ${
                        isDG
                          ? "bg-blue-600 text-white ring-4 ring-blue-600/20"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {isDG && (
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                      {roleLabels[staff.role] || staff.role}
                    </div>
                  </div>

                  {/* Boutons de contact */}
                  <div
                    className={`mt-6 flex gap-3 pt-6 border-t w-full justify-center ${
                      isDG ? "border-slate-800" : "border-gray-100"
                    }`}
                  >
                    <a
                      href={`mailto:${staff.email}`}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isDG
                          ? "bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white"
                          : "bg-gray-50 text-gray-400 hover:text-emerald-600 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <Mail size={20} />
                    </a>
                    <button
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isDG
                          ? "bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white"
                          : "bg-gray-50 text-gray-400 hover:text-blue-500 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <Phone size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
