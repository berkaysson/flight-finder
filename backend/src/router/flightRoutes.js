const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

router.post("/", flightController.createFlight);
router.get("/", flightController.getFlights);

module.exports = router;
