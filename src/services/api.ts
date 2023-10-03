/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getAuthLocalStorage } from '../contexts/utils/localStorage';

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config: any) => {
    const auth = getAuthLocalStorage()
    if(auth && auth.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    }
    return config;
  }
);

api.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  if(err.response.status === 401) {
    localStorage.clear();
    window.location.reload()
  }
  return Promise.reject(err);
})
