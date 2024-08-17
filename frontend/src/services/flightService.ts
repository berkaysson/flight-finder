import { schipholAxiosInstance } from "../utils/axios";

export const getAllFlights = async (flightDirection: string) => {
  try {
    const response = await schipholAxiosInstance.get("/flights", {
      params: {
        flightDirection: flightDirection,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
  }
};

export const getDestinationByIata = async (destination: string) => {
  try {
    const response = await schipholAxiosInstance.get(
      `/destinations/${destination}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const getAirlineByIata = async (prefixIata: string) => {
  try {
    const response = await schipholAxiosInstance.get(`/airlines/${prefixIata}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const getAircraftTypes = async (iataMain: string, iataSub: string) => {
  try {
    const response = await schipholAxiosInstance.get(`/aircrafttypes`, {
      params: {
        iataMain: iataMain,
        iataSub: iataSub,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

// export const getFlightsById = async (id) => {
//   try {
//     const response = await schipholAxiosInstance.get(`/flights/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flights:", error);
//     throw error;
//   }
// };

// export const getAirlines = async (airline) => {
//   try {
//     const response = await schipholAxiosInstance.get(`/airlines/${airline}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flights:", error);
//     throw error;
//   }
// };

// export const getDestinations = async (destinations) => {
//   try {
//     const response = await schipholAxiosInstance.get(`/destinations/${destinations}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flights:", error);
//     throw error;
//   }
// };

// export const getAircrafttypes = async (iataMain, iataSub) => {
//   try {
//     const response = await schipholAxiosInstance.get(`/aircrafttypes`, {
//       params: {
//         iataMain: iataMain,
//         iataSub: iataSub,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flights:", error);
//     throw error;
//   }
// };

// export const getFlightStatus = (flight) => {
//   let index = 0;
//   if (!flight || !flight.publicFlightState) {
//     return "Flight information not available";
//   }
//   if (flight.publicFlightState.flightStates?.length > 1) {
//     index = 1;
//   }
//   switch (flight.publicFlightState?.flightStates[index]) {
//     case "SCH":
//       return "On Schedule";
//     case "DEL":
//       return "Delayed";
//     case "WIL":
//       return "Wait in Longue";
//     case "GTO":
//       return "Gate Open";
//     case "BRD":
//       return "Boarding";
//     case "GCL":
//       return "Gate Closing";
//     case "GTD":
//       return "Gate Closed";
//     case "DEP":
//       return "Departed";
//     case "CNX":
//       return "Cancelled";
//     case "GCH":
//       return "Gate Change";
//     case "TOM":
//       return "Tomorrow";
//     case "AIR":
//       return "Airborne";
//     case "EXP":
//       return "Expected Landing";
//     case "FIR":
//       return "Flight Information Region";
//     case "LND":
//       return "Landed";
//     case "FIB":
//       return "FIBAG";
//     case "ARR":
//       return "Arrived Flight has been completely handled";
//     case "DIV":
//       return "Diverted";
//     default:
//       return `Undefined Statue: ${flight.publicFlightState.flightStates[index]}`;
//   }
// };
