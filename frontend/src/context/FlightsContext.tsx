/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useState, useMemo } from "react";
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
  getFlights: (
    flightDirection: string,
    fromDate: string,
    toDate: string
  ) => Promise<any>;
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
  getFlights: async () => {
    return {};
  },
});

export const FlightProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [flights, setFlights] = useState<FlightInfo[]>([]);

  useEffect(() => {
    getAllFlights("A").then((response) => {
      if (response) {
        if (response.flights.length > 0 && Array.isArray(response.flights)) {
          setFlights(response.flights.slice(0, 4));
        }
      } else setFlights([]);
    });
  }, []);

  const getFlights = useMemo(
    () => async (flightDirection: string, fromDate: string, toDate: string) => {
      try {
        const response = await getAllFlights(flightDirection, fromDate, toDate);
        if (response) {
          if (response.flights.length > 0 && Array.isArray(response.flights)) {
            setFlights(response.flights.slice(0, 4));
          }
        } else setFlights([]);
        return response;
      } catch (error) {
        console.error("Failed to fetch destination", error);
        return {};
      }
    },
    []
  );

  const getDestination = useMemo(
    () => async (destination: string) => {
      try {
        const response = await getDestinationByIata(destination);
        return response;
      } catch (error) {
        console.error("Failed to fetch destination", error);
        return {};
      }
    },
    []
  );

  const getAirline = useMemo(
    () => async (prefixIata: string) => {
      try {
        const response = await getAirlineByIata(prefixIata);
        return response;
      } catch (error) {
        console.error("Failed to fetch airline", error);
        return {};
      }
    },
    []
  );

  const getAircraft = useMemo(
    () => async (iataMain: string, iataSub: string) => {
      try {
        const response = await getAircraftTypes(iataMain, iataSub);
        return response;
      } catch (error) {
        console.error("Failed to fetch aircraft types", error);
        return {};
      }
    },
    []
  );

  return (
    <FlightContext.Provider
      value={{
        flights,
        getDestination,
        getAirline,
        getAircraft,
        getFlights,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
