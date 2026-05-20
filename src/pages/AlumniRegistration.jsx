import React, { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Send,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { alumniService } from "../services/api";

export default function AlumniRegistration() {
  // 1. Initialisation avec tes exactes clés de données
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    lieu_naissance: "",
    email: "",
    filiere: "",
    diplome_obtenu: "",
    promotion: "",
    numero_telephone: "",
    lieu_travail: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await alumniService.create(formData);
      alert("Profil enregistré avec succès ! Merci de rejoindre le réseau.");

      // Réinitialisation complète
      setFormData({
        first_name: "",
        last_name: "",
        birthday: "",
        lieu_naissance: "",
        email: "",
        filiere: "",
        diplome_obtenu: "",
        promotion: "",
        numero_telephone: "",
        lieu_travail: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert(
        "Une erreur est survenue lors de l'enregistrement de votre profil.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
            Rejoignez le Réseau <span className="text-emerald-600">Alumni</span>
          </h1>
          <p className="text-gray-500 mt-3 font-medium">
            Partagez votre parcours et restez connecté avec la communauté
            INFOSITS.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section: Identité */}
              <div>
                <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <User size={16} /> Informations Personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Moussa"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Diop"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="exemple@email.com"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <Phone size={14} /> Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    name="numero_telephone"
                    value={formData.numero_telephone}
                    onChange={handleChange}
                    required
                    placeholder="Ex: +221 77..."
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Section: Naissance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <Calendar size={14} /> Date de naissance
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <MapPin size={14} /> Lieu de naissance
                  </label>
                  <input
                    type="text"
                    name="lieu_naissance"
                    value={formData.lieu_naissance}
                    onChange={handleChange}
                    placeholder="Ex: Dakar"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Section: Parcours Académique */}
              <div>
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <GraduationCap size={16} /> Parcours INFOSITS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Promotion
                    </label>
                    <select
                      name="promotion"
                      value={formData.promotion}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Année</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Filière
                    </label>
                    <input
                      type="text"
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Infirmier, Sage Fem..."
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Diplôme obtenu
                    </label>
                    <input
                      type="text"
                      name="diplome_obtenu"
                      value={formData.diplome_obtenu}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Licence"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Professionnelle */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <Briefcase size={14} /> Lieu de travail / Situation actuelle
                </label>
                <input
                  type="text"
                  name="lieu_travail"
                  value={formData.lieu_travail}
                  onChange={handleChange}
                  placeholder="Ex: Poste de Santé, Clinique de..."
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Section: Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <MessageSquare size={14} /> Message / Note pour la communauté
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Un petit mot, des suggestions ou un témoignage..."
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-black py-5 rounded-2xl shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 disabled:transform-none"
              >
                {loading ? "ENREGISTREMENT..." : "ENREGISTRER MON PROFIL"}{" "}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-gray-400 text-xs mt-8">
          En vous inscrivant, vous acceptez de partager ces informations avec la
          direction d'INFOSITS.
        </p>
      </div>
    </div>
  );
}
