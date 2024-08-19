const express = require("express");
const flightRoutes = require("./flightRoutes");
const schipnolRoutes = require("./schipholRoutes");

const router = express.Router();

// rezerve uçuş işlevleri
router.use("/flight", flightRoutes);

// schiphol api işlevleri
router.use("/schiphol", schipnolRoutes);

module.exports = router;
