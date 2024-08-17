/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useState } from "react";
import { FlightInfo } from "../types/flight";
import {
  getAircraftTypes,
  getAirlineByIata,
  getAllFlights,
  getDestinationByIata,
} from "../services/flightService";

interface FlightContextType {
  flights: FlightInfo[];
  getDestination: (destination: string) => Promise<any>;
  getAirline: (prefixIata: string) => Promise<any>;
  getAircraft: (iataMain: string, iataSub: string) => Promise<any>;
}

export const FlightContext = createContext<FlightContextType>({
  flights: [],
  getDestination: async () => {
    return {};
  },
  getAirline: async () => {
    return {};
  },
  getAircraft: async () => {
    return {};
  },
});

export const FlightProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [flights, setFlights] = useState<FlightInfo[]>([]);

  useEffect(() => {
    getAllFlights().then((response) => {
      if (response.flights.length > 0) setFlights(response.flights);
      else setFlights([]);
    });
  }, []);

  const getDestination = async (destination: string) => {
    try {
      const response = await getDestinationByIata(destination);
      return response;
    } catch (error) {
      console.error("Failed to fetch destination", error);
      return {};
    }
  };

  const getAirline = async (prefixIata: string) => {
    try {
      const response = await getAirlineByIata(prefixIata);
      return response;
    } catch (error) {
      console.error("Failed to fetch airline", error);
      return {};
    }
  };

  const getAircraft = async (iataMain: string, iataSub: string) => {
    try {
      const response = await getAircraftTypes(iataMain, iataSub);
      return response;
    } catch (error) {
      console.error("Failed to fetch airline", error);
      return {};
    }
  };

  return (
    <FlightContext.Provider value={{ flights, getDestination, getAirline, getAircraft }}>
      {children}
    </FlightContext.Provider>
  );
};
