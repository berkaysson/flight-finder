import { useEffect, useState } from "react";
import { flights as _flights } from "../data/flights.json";
import { FlightInfo } from "../types/flight";
import FlightListItem from "./FlightListItem";

const FlightList = () => {
  const [flights, setFlights] = useState<FlightInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    try {
      const flights: FlightInfo[] = _flights as FlightInfo[];
      setFlights(flights);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading flights: {JSON.stringify(error)}</p>;

  console.log(flights[0]);

  return (
    <div className="w-full mt-6 mb-16">
      <ul className="flex flex-col gap-14">
        {flights.map((flight: FlightInfo) => (
          <FlightListItem key={flight.id} flight={flight} />
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
