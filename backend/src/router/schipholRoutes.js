const express = require("express");
const schipholController = require("../controllers/schipholController");

const router = express.Router();

router.get("/flights", schipholController.getFlights);
router.get(
  "/destinations/:destination",
  schipholController.getDestinationByIata
);
router.get("/airlines/:prefixIata", schipholController.getAirlineByIata);
router.get("/aircrafttypes", schipholController.getAircraftTypes);

module.exports = router;
