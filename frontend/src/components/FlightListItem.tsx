import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { FlightInfo } from "../types/flight";
import Card from "./ui/Card";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FlightListItem = ({ flight }: { flight: FlightInfo }) => {
  const { theme } = useContext(ThemeContext);

  const departureTime = new Date(flight.scheduleDateTime).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const landingTime = new Date(flight.estimatedLandingTime).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const flightDuration = calculateDuration(
    new Date(flight.scheduleDateTime),
    new Date(flight.expectedTimeOnBelt)
  );

  // Helper function to calculate flight duration
  function calculateDuration(start: Date, end: Date): string {
    const durationMs = end.getTime() - start.getTime();
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }

  return (
    <Card sx="rounded-bl-none">
      <div className="flex flex-col gap-2">
        {/* First Row: Travel route */}
        <div className="flex flex-row gap-2 text-lg font-bold">
          <span>{flight.route.destinations[0]}</span>
          {flight.route.destinations.length > 1 && (
            <>
              <span>-</span>
              <span>{flight.route.destinations[1]}</span>
            </>
          )}
        </div>

        {/* Second Row: Flight schedule and airline */}
        <div className="flex flex-col justify-between gap-2 mt-6 mr-4 text-sm sm:gap-6 sm:items-center sm:flex-row">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1 sm:block">
              <span>
                <PlaneTakeoff size={20} />
              </span>{" "}
              Departure
            </div>
            <div className="font-bold">{departureTime}</div> Airport:
            {flight.prefixIATA}
          </div>

          <div className="flex items-center justify-between w-full gap-10 sm:mx-10">
            <div className="w-1/2 h-[2px] rounded-full bg-gray-400"></div>
            <div className="flex flex-col items-center gap-2 whitespace-nowrap">
              <Plane size={20} color={theme.colors.theme} /> {flightDuration}
            </div>
            <div className="w-1/2 h-[2px] bg-gray-400"></div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 sm:block">
              <span>
                <PlaneLanding size={20} />
              </span>{" "}
              Arrival
            </div>
            <div className="font-bold">{landingTime}</div> Airport:
            {flight.prefixICAO}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start mt-4">
          <p className="font-bold text-theme">
            Price: <span>200$</span>
          </p>
          <p className="text-sm">Round Trip</p>
        </div>

        {/* Third Row: Book Flight Button */}
        <div className="absolute bottom-0 right-0">
          <button className="px-6 py-4 text-white sm:px-8 rounded-br-md rounded-tl-md bg-theme hover:opacity-80">
            Book Flight
          </button>
        </div>

        <div className="absolute left-0 -bottom-10">
          <button className="px-4 py-2 underline height-8 rounded-b-md hover:no-underline hover:opacity-80 text-theme bg-hover">
            Check the details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FlightListItem;
