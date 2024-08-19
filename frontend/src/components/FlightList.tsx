import { useContext } from "react";
import { FlightInfo } from "../types/flight";
import FlightListItem from "./FlightListItem";
import { FlightContext } from "../context/FlightsContext";

const FlightList = () => {
  // FlightContext'ten `flights` verisini alıyoruz.
  const { flights } = useContext(FlightContext);

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
