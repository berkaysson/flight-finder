const express = require("express");
const schipholController = require("../controllers/schipholController");

const router = express.Router();

// Uçuşları getirme işlevi
router.get("/flights", schipholController.getFlights);

// Destinasyon verilerini getirme işlevi
router.get(
  "/destinations/:destination",
  schipholController.getDestinationByIata
);

// Havayolu verilerini getirme işlevi
router.get("/airlines/:prefixIata", schipholController.getAirlineByIata);

// Uçak türlerini getirme işlevi
router.get("/aircrafttypes", schipholController.getAircraftTypes);

module.exports = router;
