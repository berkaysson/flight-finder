const mongoose = require("mongoose");

// Mongo url test edilebilmesi için açık bırakılmıştıri normalde saklanması gerekiyor
const MONGO_URL =
  "mongodb+srv://berkaysonel85:1998berkay@cluster0.aci9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB'ye bağlanma işlevi
const connectDB = async () => {
  try {
    mongoose.Promise = Promise;
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
    mongoose.connection.on("error", (err) => {
      console.error(err);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
