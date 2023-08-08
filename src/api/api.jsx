import Axios from 'axios'

export const API = Axios.create({
  baseURL: import.meta.env.VITE_ANIME_WORLD_BASE_URL,
});

export const PRIVATE_API = Axios.create({
  baseURL: import.meta.env.VITE_ANIME_WORLD_BASE_URL,
});
