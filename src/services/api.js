import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Création d'une instance configurée sans token
const alumniClient = axios.create({
  baseURL: `${API_BASE_URL}/api/alumni/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Centralisation des requêtes
export const alumniService = {
  // Récupérer tous les anciens élèves
  getAll: async () => {
    const response = await alumniClient.get("/");
    return response.data;
  },

  // Récupérer un profil spécifique
  getById: async (id) => {
    const response = await alumniClient.get(`/${id}/`);
    return response.data;
  },

  // Créer un profil alumni
  create: async (data) => {
    const response = await alumniClient.post("/", data);
    return response.data;
  },
};
