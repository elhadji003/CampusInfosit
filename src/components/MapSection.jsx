import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const MapSection = () => {
  const address = "Avenue Aynina Fall, Nº11, Rue 29 DVF, Thiès";
  const mapUrl =
    "https://www.google.com/maps/place/INFOSITS+(INSTITUT+DE+FORMATION+EN+SCIENCES+INFIRMIERES+ET+TECHNIQUES+SANITAIRES)/@14.792262,-16.9244579,17z";

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          {/* Informations de contact */}
          <div className="lg:w-1/3 p-12 bg-emerald-800 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-8 leading-tight">
              Retrouvez-nous <br />
              <span className="text-emerald-400">sur le terrain.</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-emerald-400 shrink-0" size={24} />
                <div>
                  <p className="font-bold text-lg">Notre Adresse</p>
                  <p className="text-emerald-100/80 text-sm leading-relaxed">
                    {address}
                    <br />
                    Derrière la Mairie, Thiès, Sénégal
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-emerald-400 shrink-0" size={24} />
                <div>
                  <p className="font-bold text-lg">Téléphone</p>
                  <p className="text-emerald-100/80 text-sm">
                    +221 77 744 01 86
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-emerald-400 shrink-0" size={24} />
                <div>
                  <p className="font-bold text-lg">Horaires de réception</p>
                  <p className="text-emerald-100/80 text-sm">
                    Lun - Ven : 08:00 - 18:00
                  </p>
                  <p className="text-emerald-100/80 text-sm">
                    Sam : 08:00 - 15:00
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex items-center justify-center gap-2 bg-white text-emerald-900 py-4 rounded-2xl font-black hover:bg-emerald-50 transition-colors"
            >
              Ouvrir dans Google Maps
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Carte Interactive (Iframe) */}
          <div className="lg:w-2/3 h-[500px] lg:h-auto relative">
            <iframe
              title="Localisation INFOSITS"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3858.555!2d-16.9244566!3d14.7922578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ3JzMyLjEiTiAxNsKwNTUnMjguMCJX!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
