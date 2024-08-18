import { useContext } from "react";
import { FlightContext } from "../context/FlightsContext";
import MyFlightListItem from "./MyFlightsListItem";
import { Link } from "react-router-dom";

const MyFlightsList = () => {
  const { myFlights } = useContext(FlightContext);

  return (
    <ul className="flex flex-col gap-4">
      {myFlights.length === 0 && (
        <>
          <li className="text-sm text-textAlt">You have no flights.</li>
          <li>
            <Link to="/" className="font-bold underline text-theme hover:cursor-pointer">
              Book some flights
            </Link>
          </li>
        </>
      )}
      {myFlights.map((flight, index) => {
        return <MyFlightListItem key={flight.id + index} flight={flight} />;
      })}
    </ul>
  );
};

export default MyFlightsList;
