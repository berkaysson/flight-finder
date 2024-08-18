import { useContext } from "react";
import { FlightContext } from "../context/FlightsContext";
import MyFlightListItem from "./MyFlightsListItem";

const MyFlightsList = () => {
  const { myFlights } = useContext(FlightContext);

  return (
    <ul className="flex flex-col gap-4">
      {myFlights.map((flight, index) => {
        return <MyFlightListItem key={flight.id + index} flight={flight} />;
      })}
    </ul>
  );
};

export default MyFlightsList;
