const schipholService = require("../services/schipholService");

// Uçuşları getirme işlevi
const getFlights = async (req, res) => {
  const { flightDirection, fromDateTime, toDateTime } = req.query;

  try {
    const flights = await schipholService.getFlights(
      flightDirection,
      fromDateTime,
      toDateTime
    );
    res.json(flights);
  } catch (error) {
    console.error("Error handling request for flight data:", error);
    res.status(500).send("Error fetching flight data");
  }
};

// IATA koduna göre destinasyon verilerini getirme işlevi
const getDestinationByIata = async (req, res) => {
  const { destination } = req.params;

  try {
    const destinationData = await schipholService.getDestinationByIata(
      destination
    );
    res.json(destinationData);
  } catch (error) {
    console.error("Error handling request for destination data:", error);
    res.status(500).send("Error fetching destination data");
  }
};

// IATA koduna göre havayolu verilerini getirme işlevi
const getAirlineByIata = async (req, res) => {
  const { prefixIata } = req.params;

  try {
    const airlineData = await schipholService.getAirlineByIata(prefixIata);
    res.json(airlineData);
  } catch (error) {
    console.error("Error handling request for airline data:", error);
    res.status(500).send("Error fetching airline data");
  }
};

// Uçak türlerini getirme işlevi
const getAircraftTypes = async (req, res) => {
  const { iataMain, iataSub } = req.query;

  try {
    const aircraftTypes = await schipholService.getAircraftTypes(
      iataMain,
      iataSub
    );
    res.json(aircraftTypes);
  } catch (error) {
    console.error("Error handling request for aircraft types:", error);
    res.status(500).send("Error fetching aircraft types");
  }
};

module.exports = {
  getFlights,
  getDestinationByIata,
  getAirlineByIata,
  getAircraftTypes,
};
