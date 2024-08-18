/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useState, useMemo } from "react";
import { FlightInfo, FlightServiceData } from "../types/flight";
import {
  getAircraftTypes,
  getAirlineByIata,
  getAllFlights,
  getDestinationByIata,
} from "../services/flightService";
import { createFlight, getAllMyFlights } from "../services/backendService";
import { formatDateTime } from "../utils/date";
import { addHours } from "date-fns";

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
  createMyFlight: (data: FlightServiceData) => Promise<any>;
  myFlights: FlightServiceData[];
  isLoading: boolean;
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
  createMyFlight: async () => {
    return {};
  },
  myFlights: [],
  isLoading: false,
});

export const FlightProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [flights, setFlights] = useState<FlightInfo[]>([]);
  const [myFlights, setMyFlights] = useState<FlightServiceData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const localOffsetHour = new Date().getTimezoneOffset() / 60;
    const now = formatDateTime(
      addHours(new Date(), -localOffsetHour).toISOString().slice(0, 16)
    );
    getFlights("A", now);
    getMyFlights();
  }, []);

  const getFlights = useMemo(
    () =>
      async (
        flightDirection: string = "A",
        fromDate: string = "",
        toDate: string = ""
      ) => {
        setIsLoading(true);
        try {
          const response = await getAllFlights(
            flightDirection,
            fromDate,
            toDate
          );
          if (response) {
            if (
              response.flights.length > 0 &&
              Array.isArray(response.flights)
            ) {
              setFlights(response.flights.slice(0, 4));
            }
          } else setFlights([]);
          return response;
        } catch (error) {
          console.error("Failed to fetch flights", error);
          return {};
        } finally {
          setIsLoading(false);
        }
      },
    []
  );

  const getMyFlights = useMemo(
    () => async () => {
      setIsLoading(true);
      try {
        const response = await getAllMyFlights();
        if (response) {
          if (response.length > 0 && Array.isArray(response)) {
            setMyFlights(response);
          }
        } else setFlights([]);
        return response;
      } catch (error) {
        console.error("Failed to fetch your flights", error);
        return {};
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getDestination = useMemo(
    () => async (destination: string) => {
      setIsLoading(true);
      try {
        const response = await getDestinationByIata(destination);
        return response;
      } catch (error) {
        console.error("Failed to fetch destination", error);
        return {};
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getAirline = useMemo(
    () => async (prefixIata: string) => {
      setIsLoading(true);
      try {
        const response = await getAirlineByIata(prefixIata);
        return response;
      } catch (error) {
        console.error("Failed to fetch airline", error);
        return {};
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getAircraft = useMemo(
    () => async (iataMain: string, iataSub: string) => {
      setIsLoading(true);
      try {
        const response = await getAircraftTypes(iataMain, iataSub);
        return response;
      } catch (error) {
        console.error("Failed to fetch aircraft types", error);
        return {};
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const createMyFlight = useMemo(
    () => async (flightData: FlightServiceData) => {
      setIsLoading(true);
      try {
        const response = await createFlight(flightData);
        getAllMyFlights().then((response) => {
          if (response) {
            if (response.length > 0 && Array.isArray(response)) {
              setMyFlights(response);
            }
          } else setMyFlights([]);
        });
        return response;
      } catch (error) {
        console.error("Failed to create your flight", error);
        return {};
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <FlightContext.Provider
      value={{
        flights,
        myFlights,
        isLoading,
        getDestination,
        getAirline,
        getAircraft,
        getFlights,
        createMyFlight,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
