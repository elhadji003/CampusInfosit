import React from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  GraduationCap,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // N'oublie pas : npm install framer-motion
import LogoSn from "../assets/image/senegal.png";
import LogoSante from "../assets/image/sante-logo.png";
import Infosits from "../assets/image/Infosits.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      <header className="flex justify-around items-start relative pt-20 pb-20 lg:pt-20 lg:pb-16 px-6 overflow-hidden">
        <img
          src={LogoSante}
          alt="logo - senegal"
          className="h-28 max-sm:w-40 max-sm:h-20"
        />
        <img
          src={LogoSn}
          alt="logo - Sante"
          className="w-40 max-sm:w-40 max-sm:h-20"
        />
      </header>

      {/* --- SECTION HERO AMÉLIORÉE --- */}
      <section className="relative pb-20 lg:pb-32 px-6 overflow-hidden">
        {/* Arrière-plan décoratif animé */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-24 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Texte avec animation d'entrée */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
              La connaissance au service de la vie. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
                Votre parcours en santé commence ici.
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 max-sm:text-sm">
              Une plateforme pensée pour les étudiants et le personnel de la
              santé. Suivi académique, informations en temps réel et outils
              pédagogiques réunis pour vous accompagner vers l’excellence
              professionnelle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all active:scale-95">
                Commencer maintenant
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <Link
                to="/filieres"
                className="px-8 py-4 border-2 border-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all flex items-center gap-2"
              >
                Voir les filières
              </Link>
            </div>
          </motion.div>

          {/* Visuel avec Badges Flottants */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl group"
          >
            {/* Badge flottant 1 */}
            <div className="absolute -top-6 -right-2 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-emerald-100">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <CheckCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  Résultats
                </p>
                <p className="text-sm font-black text-gray-900">Disponibles</p>
              </div>
            </div>

            {/* Badge flottant 2 */}
            <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 shadow-blue-100">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <GraduationCap size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  Diplômes
                </p>
                <p className="text-sm font-black text-gray-900">Certifiés</p>
              </div>
            </div>

            {/* Image principale stylisée */}
            <div className="relative bg-emerald-50 p-6 rounded-[3rem] shadow-inner transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <img
                  src="https://illustrations.popsy.co/emerald/working-from-home.svg"
                  alt="Digital Campus"
                  className="w-full h-auto rounded-[2rem]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- SECTION STATS (Look Sombre/Premium) --- */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Étudiants", value: "1,200+", icon: <Users size={28} /> },
            { label: "Filières", value: "8", icon: <BookOpen size={28} /> },
            { label: "Diplômés", value: "500+", icon: <Award size={28} /> },
            { label: "Réussite", value: "95%", icon: <Clock size={28} /> },
          ].map((stat, i) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={i}
              className="text-white group"
            >
              <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- SECTION ACTUALITÉS (Design épuré) --- */}
      <section id="infos" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black text-gray-900">
                Dernières <span className="text-emerald-600">Actualités</span>
              </h2>
              <p className="text-gray-500 mt-2">
                Ne manquez rien de la vie sur votre campus.
              </p>
            </div>
            <Link
              to="/blog"
              className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm"
            >
              Toutes les news
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <article
                key={n}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col"
              >
                <div className="h-60 bg-emerald-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-600/50 group-hover:bg-transparent transition-colors"></div>
                  <img
                    src={Infosits}
                    alt="news"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-lg">
                      Académique
                    </span>
                    <span className="text-gray-400 text-xs font-medium italic">
                      20 Jan 2026
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-emerald-600 transition-colors mb-4 leading-tight">
                    Inscriptions ouvertes pour le second semestre
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    Le calendrier officiel est disponible. Finalisez votre
                    dossier avant le 15 février prochain.
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-emerald-600 font-black text-sm group/btn">
                    Lire la suite
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
