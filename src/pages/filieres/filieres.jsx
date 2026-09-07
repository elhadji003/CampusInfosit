import FicheAIDE from "./fiches/FicheAIDE";
import FicheAIE from "./fiches/FicheAIE";
import FicheAIE2 from "./fiches/FicheAIE2";
import FicheDelegue from "./fiches/FicheDelegue";
import FicheIDE2 from "./fiches/FicheIDE2";
import FicheIDE_SFE3 from "./fiches/FicheIDE_SFE3";
import FicheSecretaire from "./fiches/FicheSecretaire";
import FicheSFE2 from "./fiches/FicheSFE2";
import FicheTC from "./fiches/FicheTC";
import FicheVendeuse from "./fiches/FicheVendeuse";

export const filieresDetails = {
  "sage-femme": {
    nom: "Sage-Femme",
    couleur: "pink",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description:
      "Formez-vous à l'accompagnement de la grossesse, de l'accouchement et du suivi postnatal. Une filière centrée sur la santé de la mère, du nouveau-né et de la famille.",
    component_annee1: <FicheTC />,
    component_annee2: <FicheSFE2 />,
    component_annee3: <FicheIDE_SFE3 />,
  },
  infirmier: {
    nom: "Infirmier d'État",
    couleur: "red",
    duree: "3 ans",
    niveau: "Baccalauréat",
    diplome: "Diplôme d'État",
    description:
      "Développez les compétences nécessaires pour assurer les soins, la surveillance clinique, la prise en charge des urgences et l'accompagnement des patients.",
    component_annee1: <FicheTC />,
    component_annee2: <FicheIDE2 />,
    component_annee3: <FicheIDE_SFE3 />,
  },
  "assistant-infirmier": {
    nom: "Assistant Infirmier d'État",
    couleur: "blue",
    duree: "2 ans",
    niveau: "Niveau 3ème / BFEM",
    diplome: "Diplôme d'État",
    description:
      "Préparez-vous à assister l'équipe soignante dans les soins de base, le suivi des patients, l'hygiène hospitalière et les gestes techniques du quotidien.",
    component_annee1: <FicheAIE />,
    component_annee2: <FicheAIE2 />,
  },
  "aide-soignant": {
    nom: "Aide-Soignant",
    couleur: "orange",
    duree: "2 ans",
    niveau: "BFEM",
    diplome: "Attestation de Fin de Formation",
    description:
      "Apprenez à accompagner les patients dans les gestes essentiels du quotidien : hygiène, confort, mobilité, alimentation et soutien moral.",
    component_annee1: <FicheAIDE />,
    component_annee2: <FicheAIE2 />,
  },
  "delegue-medical": {
    nom: "Délégué Médical",
    couleur: "emerald",
    duree: "10 mois",
    niveau: "BFEM",
    diplome: "Certificat de Qualification Professionnelle",
    description:
      "Maîtrisez la communication médicale, la présentation des produits de santé et la relation professionnelle avec les médecins, pharmaciens et structures sanitaires.",
    component_annee1: <FicheDelegue />,
  },
  "vendeur-pharmacie": {
    nom: "Vendeur(se) en Pharmacie",
    couleur: "violet",
    duree: "10 mois",
    niveau: "BFEM",
    diplome: "Certificat de Qualification Professionnelle",
    description:
      "Formez-vous à l'accueil, au conseil en pharmacie, à la gestion des stocks et à la délivrance des produits de santé sous la responsabilité du pharmacien.",
    component_annee1: <FicheVendeuse />,
  },
  "secretaire-medical": {
    nom: "Secrétaire Médical(e)",
    couleur: "cyan",
    duree: "10 mois",
    niveau: "BFEM",
    diplome: "Certificat de Qualification Professionnelle",
    description:
      "Apprenez à gérer l'accueil des patients, les rendez-vous, les dossiers médicaux, la terminologie médicale et la confidentialité administrative.",
    component_annee1: <FicheSecretaire />,
  },
};
