const Flight = require("../models/Flight");

exports.createFlight = async (flightData) => {
  return await Flight.create(flightData);
};

exports.getFlights = async (filters) => {
  if (!filters) filters = {};
  return await Flight.find(filters);
};
