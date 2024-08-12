const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const http = require("http");
const connectDB = require("./config/database");
const router = require("./router");

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

app.use("/api", router);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});

connectDB();
