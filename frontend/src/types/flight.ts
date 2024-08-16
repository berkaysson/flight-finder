export type FlightInfo = {
  lastUpdatedAt: string; // ISO date string
  actualLandingTime: string; // ISO date string
  aircraftType: {
    iataMain: string;
    iataSub: string;
  };
  baggageClaim: {
    belts: string[];
  };
  estimatedLandingTime: string; // ISO date string
  expectedTimeOnBelt: string; // ISO date string
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
  scheduleDateTime: string; // ISO date string
  scheduleDate: string; // ISO date string
  scheduleTime: string; // Time string
  serviceType: string;
  terminal: number;
  schemaVersion: string;
};
