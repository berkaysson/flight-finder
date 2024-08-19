import { FlightServiceData } from "../types/flight";
import { backendAxiosInstance } from "../utils/axios";

// Kullanıcının rezerve tüm uçuşlarını almak için backend API'ye istek atan fonksiyon.
export const getAllMyFlights = async () => {
  try {
    const response = await backendAxiosInstance.get("/flight");
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

// Yeni bir rezerve uçuş oluşturmak için backend API'ye istek atan fonksiyon.
export const createFlight = async (flightData: FlightServiceData) => {
  try {
    const response = await backendAxiosInstance.post("/flight", flightData);
    return response.data;
  } catch (error) {
    console.error("Error creating flight:", error);
    throw error;
  }
};
