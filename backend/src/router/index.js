const express = require("express");
const flightRoutes = require("./flightRoutes");

const router = express.Router();

router.use("/flight", flightRoutes);

module.exports = router;
