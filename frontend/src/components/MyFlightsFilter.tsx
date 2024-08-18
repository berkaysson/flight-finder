import { useContext } from "react";
import { FlightContext } from "../context/FlightsContext";

const MyFlightsFilter = () => {
  const { myFlights } = useContext(FlightContext);

  const bookedDestinations = Array.from(
    new Set(myFlights.flatMap((flight) => [flight.departure, flight.arrival]))
  );

  return (
    <div className="flex flex-row flex-wrap gap-3 mt-6">
      {bookedDestinations.map((destination) => (
        <button
          className="px-4 py-2 text-sm border border-gray-200 border-solid rounded-lg shadow-sm hover:text-textAlt bg-text"
          key={destination}
        >
          {destination}
        </button>
      ))}
    </div>
  );
};

export default MyFlightsFilter;
