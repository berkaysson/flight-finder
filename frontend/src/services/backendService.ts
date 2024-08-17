import { backendAxiosInstance } from "../utils/axios";

export const getAllMyFlights = async () => {
  try {
    const response = await backendAxiosInstance.get("/flight");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

// export const createFlight = async (flightData) => {
//   try {
//     const response = await backendAxiosInstance.post("/flight", flightData);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating flight:", error);
//     throw error;
//   }
// }