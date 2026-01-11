export const filieresDetails = {
  "sage-femme": {
    nom: "Sage-Femme",
    couleur: "pink",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description: "Accompagnez la vie avec expertise. Une formation complète pour assurer le suivi de la grossesse, l'accouchement et les soins postnataux.",
    programme: ["Anatomie-Physiologie", "Obstétrique & Gynécologie", "Pédiatrie & Néonatologie", "Santé de la reproduction", "Pharmacologie", "..."],
    debouches: ["Maternités", "Centres de santé", "Cabinets libéraux", "Services de néonatologie"],
    paiement: [
      { type: "Inscription", niveau: "Licence 1", montant: 180500 },
      { type: "Inscription", niveau: "Licence 2", montant: 182500 },
      { type: "Inscription", niveau: "Licence 3", montant: 185500 },
      { type: "mensualité", montant: 40000 },
    ]
  },
  "infirmier": {
    nom: "Infirmier d'État",
    couleur: "red",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description: "Devenez le pilier du système de santé. Apprenez à prodiguer des soins infirmiers de haute qualité et à gérer les urgences.",
    programme: ["Soins infirmiers fondamentaux", "Pathologies médicales", "Pharmacologie", "Urgences & Réanimation", "Hygiène hospitalière", "..."],
    debouches: ["Hôpitaux publics/privés", "Blocs opératoires", "Services d'urgence", "ONG"],
     paiement: [
      { type: "Inscription", niveau: "Licence 1", montant: 180500 },
      { type: "Inscription", niveau: "Licence 2", montant: 182500 },
      { type: "Inscription", niveau: "Licence 3", montant: 185500 },
      { type: "mensualité", montant: 40000 },
    ]
  },
  "dvs": {
    nom: "Délégué Médical / Vendeur(se) en Pharmacie / Secretariat-medical (DVS)",
    couleur: "emerald",
    duree: "10 mois",
    niveau: "BFEM",
    diplome: "Certificat de Qualification Professionelle",
    description: "Faites le pont entre la science et le marché. Maîtrisez la communication médicale et la promotion éthique des produits de santé.",
    programme: ["Marketing & Vente", "Pharmacologie générale", "Communication médicale", "Biochimie", "Droit pharmaceutique", "..."],
    debouches: ["Laboratoires pharmaceutiques", "Agences de promotion", "Répartiteurs"],
    paiement: [
        {type: "inscription", montant: 100000, montantReduit: 0},
        {type: "mensualite", montant: 30000},
    ]
  },
  "assistant-infirmier": {
    nom: "Assistant Infirmier",
    couleur: "blue",
    duree: "2 ans",
    niveau: "Niveau 3ème / BFEM",
    diplome: "Diplome d'État",
    description: "Maîtrisez les gestes techniques essentiels. Soutenez l'équipe médicale dans l'administration des soins quotidiens.",
    programme: ["Gestes techniques de base", "Hygiène & Prévention", "Secourisme", "Anatomie élémentaire", "Éthique professionnelle", "..."],
    debouches: ["Postes de santé", "Cliniques", "Assistance à domicile"],
     paiement: [
        {type: "inscription", montant: 180500, montantReduit: 125000},
        {type: "mensualite", montant: 35000},
    ]
  },
  "aide-soignant": {
    nom: "Aide-Soignant",
    couleur: "orange",
    duree: "2 ans",
    niveau: "BFEM",
    diplome: "Attestion Fin de Formation",
    description: "L'humain au cœur du métier. Assurez le confort, l'hygiène et le soutien moral des patients pour leur rétablissement.",
    programme: ["Soins d'hygiène & confort", "Nutrition & Diététique", "Manutention des patients", "Psychologie du patient", "Entretien des locaux", "..."],
    debouches: ["Maisons de retraite", "Centres de convalescence", "Services hospitaliers"],
     paiement: [
      { type: "Inscription", niveau: "Licence 1", montant: 130000 },
      { type: "Inscription", niveau: "Licence 2", montant: 130000 },
      { type: "mensualité", montant: 25000 },
    ]
  },
};