import {
  Baby,
  Stethoscope,
  Syringe,
  HandHeart,
  BriefcaseMedical,
  Pill,
  ClipboardList,
} from "lucide-react";

export const filieresData = [
  {
    id: 1,
    slug: "sage-femme",
    nom: "Sage-Femme",
    complet: "Diplôme d'État de Sage-Femme",
    description:
      "Formez-vous à l'accompagnement de la grossesse, de l'accouchement et du suivi postnatal. Une filière dédiée à la santé de la mère, du nouveau-né et de la famille.",
    icon: <Baby className="w-8 h-8 text-pink-600" />,
    color: "bg-pink-50",
  },
  {
    id: 2,
    slug: "infirmier",
    nom: "Infirmier d'État",
    complet: "Sciences Infirmières et Obstétricales",
    description:
      "Apprenez à assurer les soins, la surveillance clinique, la prise en charge des urgences et l'accompagnement quotidien des patients dans différents services de santé.",
    icon: <Stethoscope className="w-8 h-8 text-red-500" />,
    color: "bg-red-50",
  },
  {
    id: 3,
    slug: "assistant-infirmier",
    nom: "Assistant Infirmier d'État",
    complet: "Brevet d'État d'Assistant Infirmier",
    description:
      "Développez les compétences pratiques nécessaires pour assister l'équipe soignante, réaliser les soins de base et participer au suivi des patients.",
    icon: <Syringe className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    id: 4,
    slug: "aide-soignant",
    nom: "Aide-Soignant",
    complet: "Certificat d'Aptitude Aide-Soignant",
    description:
      "Préparez-vous à accompagner les patients dans les gestes essentiels du quotidien : hygiène, confort, mobilité, alimentation et soutien moral.",
    icon: <HandHeart className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50",
  },
  {
    id: 5,
    slug: "delegue-medical",
    nom: "Délégué Médical",
    complet: "Délégué Médical",
    description:
      "Maîtrisez la communication scientifique, la présentation des produits de santé et la relation professionnelle avec les médecins, pharmaciens et structures sanitaires.",
    icon: <BriefcaseMedical className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50",
  },
  {
    id: 6,
    slug: "vendeur-pharmacie",
    nom: "Vendeur(se) en Pharmacie",
    complet: "Vendeur(se) en Pharmacie",
    description:
      "Formez-vous à l'accueil des clients, au conseil en pharmacie, à la gestion des stocks, à la parapharmacie et à la délivrance des produits sous supervision.",
    icon: <Pill className="w-8 h-8 text-violet-500" />,
    color: "bg-violet-50",
  },
  {
    id: 7,
    slug: "secretaire-medical",
    nom: "Secrétaire Médical(e)",
    complet: "Secrétariat Médical",
    description:
      "Apprenez à gérer l'accueil, les rendez-vous, les dossiers patients, la terminologie médicale et la confidentialité dans un cabinet ou un établissement de santé.",
    icon: <ClipboardList className="w-8 h-8 text-cyan-600" />,
    color: "bg-cyan-50",
  },
];
