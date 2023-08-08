import {PRIVATE_API} from './api.jsx'

const base = 'anime/search'
export const searchAnime = (title) => {
  return PRIVATE_API.get(`${base}`, {
    params: { title }
  });
};
