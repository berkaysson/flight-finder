import { FlightServiceData } from "../types/flight";
import MyFlightListItem from "./MyFlightsListItem";
import { Link } from "react-router-dom";

const MyFlightsList = ({
  filteredFlights,
}: {
  filteredFlights: FlightServiceData[];
}) => {
  return (
    <ul className="flex flex-col gap-4">
      {/* Eğer filtrelenmiş uçuş listesi boşsa */}
      {filteredFlights.length === 0 && (
        <>
          <li className="text-sm text-textAlt">You have no flights.</li>
          <li>
            <Link
              to="/"
              className="font-bold underline text-theme hover:cursor-pointer"
            >
              Book some flights
            </Link>
          </li>
        </>
      )}

      {/* Filtrelenmiş uçuşları listele */}
      {filteredFlights.map((flight, index) => {
        return <MyFlightListItem key={flight.id + index} flight={flight} />;
      })}
    </ul>
  );
};

export default MyFlightsList;
