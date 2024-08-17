import axios from "axios";
import axiosRetry from "axios-retry";

export const schipholAxiosInstance = axios.create({
  baseURL: "https://api.schiphol.nl/public-flights",
  headers: {
    Accept: "application/json",
    resourceversion: "v4",
    app_id: import.meta.env.VITE_SCHIPHOL_APP_ID,
    app_key: import.meta.env.VITE_SCHIPHOL_APP_KEY,
  },
});

export const backendAxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
  },
});

axiosRetry(schipholAxiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return axiosRetry.exponentialDelay(retryCount);
  },
  retryCondition: (error) => {
    return error.response?.status === 429;
  },
});