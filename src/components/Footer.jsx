import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Colonne 1 : À propos */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                Campus<span className="text-emerald-500">Infosits</span>
              </h3>
              <p className="text-sm leading-relaxed">
                La plateforme officielle d'information de l'ITS. Nous
                accompagnons les étudiants dans leur réussite académique grâce à
                une communication fluide et moderne.
              </p>
            </div>

            {/* Colonne 2 : Contact Rapide */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-500" /> Thies,
                  Sénégal
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-500" /> +221 33 000
                  00 00
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-500" />{" "}
                  infosits@yahoo.fr
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Réseaux Sociaux */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
            <p>
              © {new Date().getFullYear()} CampusInfosits. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
