const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    flightNumber: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);
