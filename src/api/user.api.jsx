import {API, PRIVATE_API} from './api'

const base = '/user'
export const signUp = (user) => {
  return API.post(`${base}/sign-up`, user);
};

export const logIn = (user) => {
  return API.post(`${base}/login`, user);
};

export const logOut = (email) => {
  return PRIVATE_API.patch(`${base}/logout`, { email });
};

