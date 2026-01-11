export const filieresDetails = {
  "sage-femme": {
    nom: "Sage-Femme",
    couleur: "pink",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description: "Accompagnez la vie avec expertise. Une formation complète pour assurer le suivi de la grossesse, l'accouchement et les soins postnataux.",
    programme: ["Anatomie-Physiologie", "Obstétrique & Gynécologie", "Pédiatrie & Néonatologie", "Santé de la reproduction", "Pharmacologie"],
    debouches: ["Maternités", "Centres de santé", "Cabinets libéraux", "Services de néonatologie"],
    paiement: [
        {type: "inscription", montant: 180500, montantReduit: 125000},
        {type: "mensualite", montant: 40000},
    ]
  },
  "infirmier": {
    nom: "Infirmier d'État",
    couleur: "red",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description: "Devenez le pilier du système de santé. Apprenez à prodiguer des soins infirmiers de haute qualité et à gérer les urgences.",
    programme: ["Soins infirmiers fondamentaux", "Pathologies médicales", "Pharmacologie", "Urgences & Réanimation", "Hygiène hospitalière"],
    debouches: ["Hôpitaux publics/privés", "Blocs opératoires", "Services d'urgence", "ONG"]
  },
  "dvs": {
    nom: "Délégué Médical (DVS)",
    couleur: "emerald",
    duree: "10 mois",
    niveau: "BFEM",
    diplome: "Brevet de Technicien",
    description: "Faites le pont entre la science et le marché. Maîtrisez la communication médicale et la promotion éthique des produits de santé.",
    programme: ["Marketing & Vente", "Pharmacologie générale", "Communication médicale", "Biochimie", "Droit pharmaceutique"],
    debouches: ["Laboratoires pharmaceutiques", "Agences de promotion", "Répartiteurs"]
  },
  "assistant-infirmier": {
    nom: "Assistant Infirmier",
    couleur: "blue",
    duree: "2 ans",
    niveau: "Niveau 3ème / BFEM",
    diplome: "Brevet d'État",
    description: "Maîtrisez les gestes techniques essentiels. Soutenez l'équipe médicale dans l'administration des soins quotidiens.",
    programme: ["Gestes techniques de base", "Hygiène & Prévention", "Secourisme", "Anatomie élémentaire", "Éthique professionnelle"],
    debouches: ["Postes de santé", "Cliniques", "Assistance à domicile"]
  },
  "aide-soignant": {
    nom: "Aide-Soignant",
    couleur: "orange",
    duree: "2 ans",
    niveau: "Certificat de fin d'études",
    diplome: "Certificat d'Aptitude",
    description: "L'humain au cœur du métier. Assurez le confort, l'hygiène et le soutien moral des patients pour leur rétablissement.",
    programme: ["Soins d'hygiène & confort", "Nutrition & Diététique", "Manutention des patients", "Psychologie du patient", "Entretien des locaux"],
    debouches: ["Maisons de retraite", "Centres de convalescence", "Services hospitaliers"]
  },
  "secretariat-medical": {
    nom: "Secrétariat Médical",
    couleur: "indigo",
    duree: "2 ans",
    niveau: "Baccalauréat / Niveau Bac",
    diplome: "Brevet de Technicien",
    description: "Gérez l'accueil et l'organisation. Le lien indispensable entre les patients et le corps médical.",
    programme: ["Bureautique médicale", "Terminologie médicale", "Gestion des dossiers", "Accueil & Communication", "Comptabilité de base"],
    debouches: ["Cabinets médicaux", "Accueils d'hôpitaux", "Laboratoires d'analyses"]
  }
};