const schipholAxiosInstance = require("../utils/axios");

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

const getAirlineByIata = async (prefixIata) => {
  try {
    const response = await schipholAxiosInstance.get(`/airlines/${prefixIata}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching airline data:", error);
    throw new Error("Error fetching airline data");
  }
};

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
