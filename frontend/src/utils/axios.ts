import axios from "axios";

export const backendAxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
  },
});