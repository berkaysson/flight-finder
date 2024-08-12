const flightService = require("../services/flightService");

exports.createFlight = async (req, res, next) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json(flight);
  } catch (error) {
    next(error);
  }
};

exports.getFlights = async (req, res, next) => {
  try {
    const flights = await flightService.getFlights(req.query);
    res.status(200).json(flights);
  } catch (error) {
    next(error);
  }
};
