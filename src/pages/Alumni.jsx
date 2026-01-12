import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Quote,
  ExternalLink,
  Trophy,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Alumni = () => {
  const successStories = [
    {
      name: "Awa Diop",
      promotion: "Promo 2018",
      filiere: "Sage-Femme d'État",
      poste: "Major de Service - Maternité de Thiès",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      temoignage:
        "Grâce à la rigueur de l'INFOSITS, j'ai pu intégrer le milieu hospitalier avec une confiance absolue en mes compétences techniques.",
    },
    {
      name: "Moussa Sarr",
      promotion: "Promo 2020",
      filiere: "Infirmier d'État",
      poste: "Infirmier de Bloc - Clinique de l'Excellence",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      temoignage:
        "Le suivi personnalisé des formateurs à l'INFOSITS fait toute la différence. Aujourd'hui, je gère des situations d'urgence avec calme.",
    },
    {
      name: "Fatou Ndiaye",
      promotion: "Promo 2019",
      filiere: "Délégué Médical (DVS)",
      poste: "Représentante Senior - Laboratoires Sanofi",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      temoignage:
        "La formation DVS m'a ouvert les portes de l'industrie pharmaceutique internationale. Une expérience transformatrice.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* --- HERO ALUMNI --- */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Trophy size={14} /> Notre plus grande fierté
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Le succès de nos <span className="text-emerald-600">Alumni</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Plus de 1500 professionnels formés en 17 ans, exerçant au Sénégal
              et à l'international. Rejoindre l'INFOSITS, c'est intégrer un
              réseau puissant de leaders de la santé.
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gray-200"
                  ></div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                  +1.5k
                </div>
              </div>
              <p className="text-sm text-gray-500 self-center font-medium">
                Diplômés en activité
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-video bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover opacity-60"
                alt="Diplômés"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <div className="border-t-8 border-b-8 border-l-[16px] border-t-transparent border-b-transparent border-l-current ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SUCCESS STORIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center text-gray-900 mb-16 italic">
          "Ils ont étudié chez nous..."
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {successStories.map((alumni, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative"
            >
              <Quote
                className="absolute top-8 right-8 text-emerald-100"
                size={60}
              />

              <div className="flex items-center gap-4 mb-8">
                <img
                  src={alumni.image}
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                  alt={alumni.name}
                />
                <div>
                  <h4 className="font-black text-gray-900">{alumni.name}</h4>
                  <p className="text-emerald-600 text-sm font-bold">
                    {alumni.promotion}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="text-gray-400 shrink-0" size={18} />
                  <p className="text-sm font-medium text-gray-700">
                    {alumni.filiere}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Briefcase className="text-gray-400 shrink-0" size={18} />
                  <p className="text-sm font-bold text-gray-900">
                    {alumni.poste}
                  </p>
                </div>
                <p className="text-gray-600 italic leading-relaxed pt-4 border-t border-gray-50">
                  "{alumni.temoignage}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>{" "}
      {/* --- BANDEAU REJOINDRE LE RÉSEAU --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-emerald-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Vous êtes un ancien de l'INFOSITS ?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Rejoignez l'annuaire officiel des Alumni pour accéder à des offres
              d'emploi exclusives et rester connecté avec votre promotion.
            </p>
            <Link
              to={"/alumni/registration"}
              className="bg-white w-fit text-emerald-700 px-10 py-4 rounded-2xl font-black flex items-center gap-2 mx-auto hover:bg-emerald-50 transition-colors"
            >
              REJOINDRE LA COMMUNAUTÉ <Send size={20} />{" "}
            </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
