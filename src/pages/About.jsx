import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Globe,
  Building2,
  History,
  Award,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import imageAbout from "../assets/image/about.jpg";
import MapSection from "../components/MapSection";
import Partenaires from "../components/Partenaires";

export default function Apropos() {
  const stats = [
    {
      label: "Années d'expérience",
      value: "17+",
      icon: <History className="text-emerald-500" />,
    },
    {
      label: "Partenaires engagés",
      value: "30+",
      icon: <ShieldCheck className="text-emerald-500" />,
    },
    {
      label: "Professionnels formés",
      value: "1500+",
      icon: <Award className="text-emerald-500" />,
    },
  ];

  return (
    <div className="pt-24 bg-white">
      {/* --- EN-TÊTE --- */}
      <section className="bg-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-bold uppercase tracking-widest text-sm"
          >
            Qui sommes-nous ?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mt-4 leading-tight"
          >
            L'excellence en Sciences <br />
            <span className="text-emerald-600">et Techniques Sanitaires</span>
          </motion.h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Fondé en novembre 2006 à Thiès, l'INFOSITS est un acteur majeur de
            la formation professionnelle au Sénégal, dédié à forger les leaders
            de la santé de demain.
          </p>
        </div>
      </section>

      {/* --- SECTION HISTOIRE & VISION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-emerald-700 rounded-[3rem] overflow-hidden group-hover:scale-75">
              <img
                src={imageAbout}
                alt="Formation INFOSITS"
                className="w-full h-full object-cover mix-blend-overlay opacity-100 hover:scale-105 duration-700"
              />
            </div>
            {/* Petit badge d'expérience flottant */}
            <div className="absolute -bottom-10 -right-10 bg-white shadow-2xl p-8 rounded-3xl border border-emerald-50 hidden md:block">
              <p className="text-5xl font-black text-emerald-600 italic">17</p>
              <p className="text-gray-500 font-bold">Ans de savoir-faire</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
              Une institution ancrée dans la{" "}
              <span className="text-emerald-600">Qualité et l'Éthique</span>.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              L'INFOSITS s'est engagé dès sa création à offrir une formation
              répondant aux normes nationales et internationales. En cours
              d'habilitation par l'<strong>ANAQ SUP</strong> et d'accréditation
              par le <strong>CAMES</strong>, nous aspirons à être un institut de
              référence régionale.
            </p>

            <ul className="space-y-4">
              {[
                "Système de Management de la Qualité (SMQ)",
                "Certifié par le Ministère de la Formation Professionnelle",
                "Partenariats avec plus de 30 institutions de santé",
                "Approche pédagogique axée sur les défis de demain",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2
                    className="text-emerald-500 shrink-0"
                    size={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- SECTION CHIFFRES --- */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION AMBITION --- */}
      <section className="py-24 px-6 bg-emerald-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="mx-auto text-emerald-600 mb-6" size={48} />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Notre Ambition Internationale
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "L'INFOSITS incarne la vision d'une formation de santé de qualité,
            formant des professionnels compétents et éthiques pour relever les
            défis de la santé publique de demain."
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-black text-xl text-gray-800">
              <Building2 /> ANAQ SUP
            </div>
            <div className="flex items-center gap-2 font-black text-xl text-gray-800">
              <Building2 /> CAMES
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION LOCALISATION & INFRASTRUCTURE --- */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Texte et Localisation */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <MapPin size={14} /> Notre Ancrage à Thiès
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Un campus moderne au cœur de la{" "}
                <span className="text-emerald-600">Cité du Rail</span>.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Idéalement situé à Thiès, l'INFOSITS bénéficie d'un
                environnement calme et propice aux études. Dans le cadre de
                notre stratégie de pérennisation, l'institut est actuellement en
                phase active
                <strong> d'acquisition de ses propres locaux</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Autonomie & Pérennité
                  </h4>
                  <p className="text-sm text-gray-500">
                    Ce projet immobilier vise l'autonomie financière et la
                    garantie d'un cadre d'apprentissage stable pour les
                    générations futures.
                  </p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Accessibilité
                  </h4>
                  <p className="text-sm text-gray-500">
                    Proche des grandes structures sanitaires de la région,
                    facilitant les stages pratiques immédiats pour nos
                    étudiants.
                  </p>
                </div>
              </div>
            </div>

            {/* Visuel Carte/Bâtiment */}
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform -rotate-1">
                {/* Tu peux remplacer cette image par une photo réelle du bâtiment ou une carte stylisée de Thiès */}
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                  alt="Campus de Thiès"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Décoration en arrière-plan */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <Partenaires />

      <MapSection />
    </div>
  );
}
