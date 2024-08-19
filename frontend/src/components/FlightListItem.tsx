import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { FlightInfo } from "../types/flight";
import Card from "./ui/Card";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FlightContext } from "../context/FlightsContext";
import toast from "react-simple-toasts";
import { failureConfig, successConfig } from "../utils/toast";

// Uçuş süresini hesaplayan fonksiyon.
function calculateDuration(start: Date, end: Date): string {
  const durationMs = end.getTime() - start.getTime();
  const hours = Math.abs(Math.floor(durationMs / (1000 * 60 * 60)));
  const minutes = Math.abs(
    Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60))
  );
  if (isNaN(hours) || isNaN(minutes)) {
    return "N/A";
  }
  return `${hours}h ${minutes}m`;
}

// FlightContext'te buluna her bir flights objesi burada gösteriliyor.
const FlightListItem = ({ flight }: { flight: FlightInfo }) => {
  const { theme } = useContext(ThemeContext);

  const {
    getDestination,
    getAirline,
    getAircraft,
    createMyFlight,
    myFlights,
    isLoading,
  } = useContext(FlightContext);

  // Destinations, Airline, Aircraft durumları
  const [airline, setAirline] = useState("...");
  const [destinations, setDestinations] = useState<string[]>(["..."]);
  const [aircraft, setAircraft] = useState("...");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Bu uçuşun daha önce rezerve edilip edilmediğini kontrol ediyoruz.
  const isBooked = myFlights.find((myFlight) => myFlight.id === flight.id);

  // Uçuş saatlerini formatlıyoruz.
  const departureTime = new Date(flight.scheduleDateTime).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const landingTime = flight.estimatedLandingTime
    ? new Date(flight.estimatedLandingTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "N/A";

  // Uçuş süresini hesaplayan yardımcı fonksiyon.
  const flightDuration = calculateDuration(
    new Date(flight.scheduleDateTime),
    new Date(flight.estimatedLandingTime)
  );

  // Uçuş tarihini formatlıyoruz.
  const formattedDate = new Date(flight.scheduleDateTime).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
  );

  // Uçuş yönü (geliş veya gidiş) bilgisini tutuyoruz.
  const flightDirection = flight.flightDirection;

  // Uçuşu rezerve eden fonksiyon.
  const handleBookFlight = () => {
    const departure = flightDirection === "D" ? "Amsterdam" : destinations[0];
    const arrival =
      flightDirection === "A"
        ? "Amsterdam"
        : destinations[destinations.length - 1];

    // Geçmişteki uçuşlar rezerve edilemez.
    if (new Date(flight.scheduleDateTime) < new Date()) {
      failureConfig();
      toast("Sorry, flights can only be booked in the future");
      return;
    }

    // Uçuş rezervasyonu oluşturma.
    createMyFlight({
      id: flight.id,
      mainFlight: flight.mainFlight,
      scheduleDateTime: flight.scheduleDateTime,
      departure,
      arrival,
      userId: "1",
      airlineCode: airline,
      price: 200,
    }).then((data) => {
      if (data) {
        successConfig();
        toast("Flight booked successfully");
      } else {
        failureConfig();
        toast("Failed to book flight");
      }
    });
  };

  // Varış noktalarını ve hava yolu bilgilerini çekmek için useEffect kullanıyoruz.
  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationPromises = flight.route.destinations.map((destination) =>
        getDestination(destination)
      );
      const destinationData = await Promise.all(destinationPromises);
      setDestinations(destinationData.map((data) => data.city));
    };

    fetchDestinations();
    getAirline(flight.prefixIATA).then((data) => {
      setAirline(data.publicName);
    });
  }, [flight, getDestination]);

  // Detaylar açıldığında uçak tipi bilgilerini çekiyoruz.
  useEffect(() => {
    if (isDetailsOpen && aircraft.length < 4) {
      getAircraft(
        flight.aircraftType.iataMain,
        flight.aircraftType.iataSub
      ).then((data) => {
        if (data) setAircraft(data.aircraftTypes[0].shortDescription);
      });
    }
  }, [isDetailsOpen]);

  return (
    <Card sx="rounded-bl-none">
      <div className="flex flex-col gap-2">
        {/* İlk satır: Uçuş rotası */}
        <div className="flex flex-row gap-2 text-lg font-bold">
          {flightDirection === "A" ? (
            <>
              {destinations.map((destination, index) => (
                <span key={index}>{destination}</span>
              ))}
              <span>-</span>
              <span>Amsterdam (AAS)</span>
            </>
          ) : (
            <>
              <span>Amsterdam (AAS)</span>
              <span>-</span>
              {destinations.map((destination, index) => (
                <span key={index}>{destination}</span>
              ))}
            </>
          )}
        </div>
        <div className="flex text-sm">
          <p className="text-textAlt">{formattedDate}</p>
        </div>

        {/* İkinci satır: Uçuş programı ve hava yolu */}
        <div className="flex flex-col justify-between gap-2 mt-6 mr-4 text-sm sm:gap-6 sm:items-center sm:flex-row">
          {/* Kalkış bilgisi */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1 sm:block">
              <span>
                <PlaneTakeoff size={20} />
              </span>{" "}
              Departure
            </div>
            <div className="font-bold">{departureTime}</div> Airport:
            {flightDirection === "A"
              ? flight.route.destinations[0]
              : "Amsterdam (AAS)"}
          </div>

          {/* Uçuş süresi ve hava yolu */}
          <div className="flex items-center justify-between w-full gap-10 sm:mx-10">
            <div className="w-1/2 h-[2px] rounded-full bg-gray-400"></div>
            <div className="flex flex-col items-center gap-2 whitespace-nowrap">
              <p className="font-bold">{airline}</p>
              <Plane size={20} color={theme.colors.theme} /> {flightDuration}
            </div>
            <div className="w-1/2 h-[2px] bg-gray-400"></div>
          </div>

          <div className="flex flex-col items-end gap-1">
            {/* Varış bilgisi */}
            <div className="flex items-center gap-1 sm:block">
              <span>
                <PlaneLanding size={20} />
              </span>{" "}
              Arrival
            </div>
            <div className="font-bold">{landingTime}</div>
            Airport:{" "}
            {flightDirection === "A" ? "AAS" : flight.route.destinations[0]}
          </div>
        </div>

        {/* Uçuş detayları */}
        <div className="flex flex-col items-start justify-start mt-4">
          <p className="font-bold text-theme">
            Price: <span>200$</span>
          </p>
          <p className="text-sm">Round Trip</p>
          {isDetailsOpen && (
            <>
              <p className="text-sm">Flight code: {flight.mainFlight}</p>
              <p className="text-sm">Aircraft: {aircraft}</p>
            </>
          )}
        </div>

        {/* Rezervasyon */}
        <div className="absolute bottom-0 right-0" onClick={handleBookFlight}>
          {isBooked ? (
            <div className="px-4 py-2 font-bold text-textAlt sm:py-4 sm:px-8 rounded-br-md rounded-tl-md bg-hover">
              Booked!
            </div>
          ) : (
            <button
              disabled={isLoading}
              className="px-4 py-2 text-white translate-ease sm:py-4 sm:px-8 rounded-br-md rounded-tl-md bg-theme hover:opacity-80"
            >
              Book Flight
            </button>
          )}
        </div>

        <div className="absolute left-0 -bottom-10">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="px-4 py-2 underline height-8 translate-ease rounded-b-md hover:no-underline hover:opacity-80 text-theme bg-hover"
          >
            {isDetailsOpen ? "Hide Details" : "Check the Details"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FlightListItem;
