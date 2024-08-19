const schipholAxiosInstance = require("../utils/axios");

// Tüm uçuşları almak için backend API'ye istek atan fonksiyon.
const getFlights = async (flightDirection, fromDateTime, toDateTime) => {
  try {
    const params = { flightDirection };

    if (fromDateTime) params.fromDateTime = fromDateTime;
    if (toDateTime) params.toDateTime = toDateTime;

    const response = await schipholAxiosInstance.get("/flights", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw new Error("Error fetching flight data");
  }
};

// Destinasyon verilerini almak için backend API'ye istek atan fonksiyon.
const getDestinationByIata = async (destination) => {
  try {
    const response = await schipholAxiosInstance.get(
      `/destinations/${destination}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching destination data:", error);
    throw new Error("Error fetching destination data");
  }
};

// Havayolu verilerini almak için backend API'ye istek atan fonksiyon.
const getAirlineByIata = async (prefixIata) => {
  try {
    const response = await schipholAxiosInstance.get(`/airlines/${prefixIata}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching airline data:", error);
    throw new Error("Error fetching airline data");
  }
};

// Uçak tiplerini almak için backend API'ye istek atan fonksiyon.
const getAircraftTypes = async (iataMain, iataSub) => {
  try {
    const params = { iataMain };

    if (iataSub) params.iataSub = iataSub;

    const response = await schipholAxiosInstance.get("/aircrafttypes", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching aircraft types:", error);
    throw new Error("Error fetching aircraft types");
  }
};

module.exports = {
  getFlights,
  getDestinationByIata,
  getAirlineByIata,
  getAircraftTypes,
};
