const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const http = require("http");
const connectDB = require("./config/database");
const router = require("./router");

const app = express();

// CORS ayarları: Yalnızca belirtilen origin'den gelen istekler kabul edilir
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// İstek gövdesini JSON olarak ayrıştır
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

// API yollarını yönlendir
app.use("/api", router);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});

// Veritabanına bağlan
connectDB();
