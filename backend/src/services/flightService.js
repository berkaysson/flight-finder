const Flight = require("../models/Flight");

exports.createFlight = async (flightData) => {
  const existingFlight = await Flight.findOne({ id: flightData.id });

  if (existingFlight) {
    return existingFlight;
  }

  return await Flight.create(flightData);
};

exports.getFlights = async (filters) => {
  if (!filters) filters = {};
  return await Flight.find(filters);
};
