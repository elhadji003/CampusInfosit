import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // Numéro WhatsApp principal de l'établissement (au format international sans le +)
  const whatsappNumber = "221771341649";

  // État du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    filiere: "Délégué Médical",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoi du formulaire directement sur WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = `*Nouvelle demande d'information - INFOSITS*%0A%0A` +
      `*Nom complet :* ${formData.nom}%0A` +
      `*Téléphone :* ${formData.telephone}%0A` +
      `*Email :* ${formData.email}%0A` +
      `*Filière visée :* ${formData.filiere}%0A` +
      `*Message :* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

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
                  title: "Notre Établissement",
                  content:
                    "Avenue Aynina Fall, Nº11, Rue 29 DVF, Thiès, Sénégal",
                },
                {
                  icon: <Phone />,
                  title: "Téléphone / WhatsApp",
                  content: "+221 77 545 12 83 / +221 77 134 16 49",
                },
                {
                  icon: <Mail />,
                  title: "Yahoo",
                  content: "infosits@yahoo.fr",
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

            {/* Aide Rapide avec Lien WhatsApp Direct */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Bonjour%20INFOSITS,%20j'aimerais%20avoir%20des%20renseignements.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-emerald-50 hover:bg-emerald-100 rounded-[2rem] border border-emerald-200 flex items-start gap-4 transition-all group"
            >
              <MessageSquare className="text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-bold text-emerald-950">
                  Besoin d'une réponse rapide ?
                </h4>
                <p className="text-emerald-800 text-sm mt-1">
                  Cliquez ici pour discuter directement sur WhatsApp avec un conseiller d'orientation.
                </p>
              </div>
            </a>
          </div>

          {/* DROITE : Formulaire orienté WhatsApp */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Envoyez-nous un message
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Remplissez le formulaire ci-dessous pour transmettre directement votre message à notre secrétariat via WhatsApp.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Mamadou Diallo"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-800 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+221 77 000 00 00"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-800 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Filière d'intérêt
                </label>
                <select
                  name="filiere"
                  value={formData.filiere}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-800 text-sm"
                >
                  <option value="Infirmier d'Etat">Infirmier d'Etat</option>
                  <option value="Sage Femme d'Etat">Sage Femme d'Etat</option>
                  <option value="Délégué Médical">Délégué Médical</option>
                  <option value="Vendeur en Pharmacie">Vendeur(se) en Pharmacie</option>
                  <option value="Secrétaire Médical">Secrétaire Médical(e)</option>
                  <option value="Assistant Infirmier d'État">Assistant Infirmier d'État</option>
                  <option value="Aide Infirmier d'État">Aide Infirmier d'État</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Votre Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Posez vos questions sur les conditions d'admission, les frais ou la rentrée..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-800 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 text-sm"
              >
                <Send size={18} />
                <span>Envoyer le message sur WhatsApp</span>
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