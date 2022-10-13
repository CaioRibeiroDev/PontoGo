import axios from 'axios';

export const apiSite = axios.create({baseURL: 'http://localhost:3333'})

export function changeToken(token: string) {
  apiSite.defaults.headers.common["Authorization"] = token ?? "";
  apiSite.defaults.headers.common["Authentication"] = token ?? "";
}