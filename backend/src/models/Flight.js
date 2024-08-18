const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    mainFlight: { type: String, required: true },
    scheduleDateTime: { type: Date, required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    userId: { type: String, required: true },
    airlineCode: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);
