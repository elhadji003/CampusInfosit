import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* --- HEADER --- */}
      <section className="bg-emerald-900 py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Contactez-nous
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
            Une question sur nos filières ou les inscriptions ? <br />
            Notre équipe administrative est là pour vous accompagner.
          </p>
        </motion.div>
      </section>

      {/* --- CORPS DE LA PAGE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* GAUCHE : Coordonnées */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">
                Informations de{" "}
                <span className="text-emerald-600">contact</span>
              </h2>
              <p className="text-gray-500 mb-10">
                Passez nous voir à Thiès ou contactez-nous par téléphone. Nous
                répondons généralement en moins de 24h.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin />,
                  title: "Notre Campus",
                  content:
                    "Avenue Aynina Fall, Nº11, Rue 29 DVF, Thiès, Sénégal",
                },
                {
                  icon: <Phone />,
                  title: "Téléphone",
                  content: "+221 77 744 01 86 / +221 33 951 XX XX",
                },
                {
                  icon: <Mail />,
                  title: "Email",
                  content: "contact@infosits-thies.com",
                },
                {
                  icon: <Clock />,
                  title: "Heures d'ouverture",
                  content: "Lun - Ven: 08:00 - 18:00 | Sam: 08:00 - 15:00",
                },
              ].map((info, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(info.icon, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Aide Rapide */}
            <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 flex items-start gap-4">
              <MessageSquare className="text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-blue-900">
                  Besoin d'une réponse rapide ?
                </h4>
                <p className="text-blue-800/70 text-sm mt-1">
                  Utilisez notre WhatsApp direct pour discuter avec un
                  conseiller d'orientation.
                </p>
              </div>
            </div>
          </div>

          {/* DROITE : Formulaire */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-emerald-100 border border-gray-50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Moussa Diop"
                    className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-0 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+221 ..."
                    className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-0 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Sujet
                </label>
                <select className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-0 transition-all">
                  <option>Renseignement Inscription</option>
                  <option>Demande de bourse 3FPT</option>
                  <option>Partenariat professionnel</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Votre message
                </label>
                <textarea
                  rows="5"
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-0 transition-all"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-xl shadow-emerald-100">
                Envoyer le message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- CARTE GOOGLE MAPS --- */}
      <section className="h-[500px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Map INFOSITS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.33!2d-16.924456!3d14.792257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ3JzMyLjEiTiAxNsKwNTUnMjguMCJX!5e0!3m2!1sfr!2ssn!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
