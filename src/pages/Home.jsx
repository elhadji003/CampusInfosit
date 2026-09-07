import React from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import LogoSn from "../assets/image/senegal.png";
import LogoSante from "../assets/image/sante-logo.png";
import InformationSection from "./InformationSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans py-8 lg:py-8">
      {/* --- ENTÊTE INSTITUTIONNEL --- */}
      <header className="bg-white border-b border-slate-100 py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img
            src={LogoSante}
            alt="Ministère de la Santé"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <img
            src={LogoSn}
            alt="République du Sénégal"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
      </header>

      {/* --- BANNIÈRE D'ACCUEIL --- */}
      <div className="bg-emerald-950 text-emerald-50 py-4 px-6 text-center shadow-inner">
        <p className="text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-emerald-400" />
          Institut de Formation en Sciences Infirmières et Techniques Sanitaires
        </p>
      </div>

      {/* --- SECTION HERO --- */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-teal-100/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 rounded-full border border-emerald-200">
              Excellence Pédagogique & Innovation
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              L'excellence académique au service du{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600">
                secteur de la santé.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Plateforme numérique dédiée au suivi académique, à l'accès aux
              ressources pédagogiques et à la diffusion de l'information pour
              les étudiants et les professionnels de santé.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/filieres"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm"
              >
                Découvrir nos filières
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg"
          >
            <div className="absolute -top-4 -right-2 z-20 bg-white/95 backdrop-blur border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-700">
                <CheckCircle size={22} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Évaluations
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Résultats certifiés
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 bg-white/95 backdrop-blur border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-teal-50 p-2.5 rounded-xl text-teal-700">
                <GraduationCap size={22} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Habilitation
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Diplômes d'État
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-tr from-emerald-100 to-teal-50 p-4 rounded-3xl border border-emerald-100/50 shadow-2xl">
              <div className="bg-white p-2 rounded-2xl overflow-hidden border border-slate-100">
                <img
                  src={Logo}
                  alt="Espace de formation en ligne"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION INDICATEURS CLEFS --- */}
      <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              label: "Apprenants inscrits",
              value: "1 000+",
              icon: <Users size={24} />,
            },
            {
              label: "Programmes de formation",
              value: "07",
              icon: <BookOpen size={24} />,
            },
            {
              label: "Diplômés certifiés",
              value: "500+",
              icon: <Award size={24} />,
            },
            {
              label: "Taux d'insertion",
              value: "95%",
              icon: <Clock size={24} />,
            },
          ].map((stat, i) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              key={i}
              className="text-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/50"
            >
              <div className="text-emerald-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-slate-100">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <InformationSection />
    </div>
  );
};

export default Home;
