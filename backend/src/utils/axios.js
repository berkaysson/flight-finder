const axios = require("axios");

// Schiphol API için özel axios örneği oluşturuluyor
// app id ve key test edilebilmesi için bırakılmıştır
// fakat doğru kullanımda saklanması gerekmekte
const schipholAxiosInstance = axios.create({
  baseURL: "https://api.schiphol.nl/public-flights",
  headers: {
    Accept: "application/json",
    resourceversion: "v4",
    app_id: "d81be1b8",
    app_key: "d75396c5f9d4da30f3bd85e2685167ac",
  },
});

module.exports = schipholAxiosInstance;
