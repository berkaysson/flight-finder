import { Dispatch, SetStateAction, useContext } from "react";
import { FlightContext } from "../context/FlightsContext";

const MyFlightsFilter = ({
  setSelectedDestination,
  selectedDestination,
}: {
  setSelectedDestination: Dispatch<SetStateAction<string | null>>;
  selectedDestination: string | null;
}) => {
  const { myFlights } = useContext(FlightContext);

  const bookedDestinations = Array.from(
    new Set(myFlights.flatMap((flight) => [flight.departure, flight.arrival]))
  );

  return (
    <div className="flex flex-row flex-wrap gap-3 mt-6">
      {bookedDestinations.map((destination) => (
        <button
          onClick={() =>
            setSelectedDestination(
              selectedDestination === destination ? null : destination
            )
          }
          className={`px-4 py-2 text-sm border border-gray-200 rounded-lg shadow-sm translate-ease ${
            selectedDestination === destination
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-text hover:text-textAlt"
          }`}
          key={destination}
        >
          {destination}
        </button>
      ))}
    </div>
  );
};

export default MyFlightsFilter;
