const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

// rezerve
router.post("/", flightController.createFlight);

// rezerve uçuşlar listesi
router.get("/", flightController.getFlights);

module.exports = router;
