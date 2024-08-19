// schiphol api yanıtını temsilen arayüz
export type FlightInfo = {
  lastUpdatedAt: string;
  actualLandingTime: string;
  aircraftType: {
    iataMain: string;
    iataSub: string;
  };
  baggageClaim: {
    belts: string[];
  };
  estimatedLandingTime: string;
  expectedTimeOnBelt: string;
  flightDirection: string;
  flightName: string;
  flightNumber: number;
  id: string;
  isOperationalFlight: boolean;
  mainFlight: string;
  prefixIATA: string;
  prefixICAO: string;
  airlineCode: number;
  publicFlightState: {
    flightStates: string[];
  };
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
  scheduleDateTime: string;
  scheduleDate: string;
  scheduleTime: string;
  serviceType: string;
  terminal: number;
  schemaVersion: string;
};

// MongoDBde saklanan rezerve uçuşu temsilen arayüz
export interface FlightServiceData {
  id: string;
  mainFlight: string;
  scheduleDateTime: string;
  departure: string;
  arrival: string;
  userId: string;
  airlineCode: string;
  price: number;
}
