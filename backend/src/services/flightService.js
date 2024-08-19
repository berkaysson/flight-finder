const Flight = require("../models/Flight");

// Yeni bir rezerve uçuş oluşturmak için backend API'ye istek atan fonksiyon.
exports.createFlight = async (flightData) => {
  // Uçuşun veritabanında mevcut olup olmadığını kontrol etne
  const existingFlight = await Flight.findOne({ id: flightData.id });

  if (existingFlight) {
    return existingFlight;
  }

  return await Flight.create(flightData);
};

// Rezerve uünü getirmek için backend API'ye istek atan fonksiyon.
exports.getFlights = async (filters) => {
  if (!filters) filters = {};
  return await Flight.find(filters);
};
