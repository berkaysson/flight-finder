const express = require("express");
const flightRoutes = require("./flightRoutes");
const schipnolRoutes = require("./schipholRoutes");

const router = express.Router();

router.use("/flight", flightRoutes);
router.use("/schiphol", schipnolRoutes);

module.exports = router;
