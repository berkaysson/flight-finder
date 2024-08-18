import { schipholAxiosInstance } from "../utils/axios";

export const getAllFlights = async (
  flightDirection: string,
  fromDateTime?: string,
  toDateTime?: string
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      flightDirection: flightDirection,
    };

    if (fromDateTime) {
      params.fromDateTime = fromDateTime;
    }
    if (toDateTime) {
      params.toDateTime = toDateTime;
    }

    const response = await schipholAxiosInstance.get("/flights", {
      params: params,
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
