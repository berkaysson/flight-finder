import { FlightServiceData } from "../types/flight";
import Card from "./ui/Card";
import AirplaneIcon from "../assets/airplane.png";
import { useState } from "react";

const MyFlightListItem = ({ flight }: { flight: FlightServiceData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Tarihi formatlayor
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

  // Uçuş seçenekleri, seçenekler ve ücretler api tarafında sağlanmadığı için
  // varsaylına olarak aşağıdakiler eklendi
  const flightOptions = [
    { type: "Main", price: "$500" },
    { type: "Comfort", price: "$600" },
    { type: "Delta One", price: "$700" },
    { type: "Express", price: "$400" },
    { type: "Economy", price: "$350" },
  ];

  // Detayları genişletme/küçültme işlevi
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Card>
      <div className="flex flex-col justify-between gap-2 p-2 xl:flex-row">
        {/* Uçuş bilgileri */}
        <div className="flex flex-col items-start justify-start gap-4 xl:w-1/2">
          <div className="flex flex-row gap-2 sm:gap-6">
            <span>
              <img src={AirplaneIcon} alt="airplane" width={30} height={30} />
            </span>
            <span className="text-md sm:text-2xl">{formattedDate}</span>
          </div>
          <div className="flex flex-col gap-1 ml-0 sm:flex-row sm:ml-12 sm:gap-14">
            <div className="flex flex-col items-start justify-start">
              <span>{flight.airlineCode}</span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <span>Nonstop</span>
              <span className="text-sm opacity-80">1h 32m</span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row gap-2">
                <span>{flight.departure}</span>-<span>{flight.arrival}</span>
              </div>
              <span className="text-sm opacity-80">{flight.mainFlight}</span>
            </div>
          </div>
        </div>

        {/* Fiyat seçenekleri */}
        <div className="xl:w-1/2">
          {/* Büyük ekranlar için tüm seçenekleri göster */}
          <div className="flex-row justify-end hidden gap-2 sm:flex">
            {flightOptions.map((option, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center flex-1 h-full gap-2 px-4 border border-gray-200 border-solid rounded-md shadow-sm xl:p-8 whitespace-nowrap"
              >
                <span className="text-sm font-bold">{option.price}</span>
                <span className="text-sm opacity-80">{option.type}</span>
              </div>
            ))}
          </div>

          {/* Küçük ekranlar için genişletme/küçültme işlevi */}
          <div
            className={`flex ${
              isExpanded ? "flex-col" : "flex-row"
            } justify-end gap-2 sm:hidden`}
          >
            <div className="flex flex-col items-center justify-center flex-1 h-full gap-2 px-4 border border-gray-200 border-solid rounded-md shadow-sm xl:p-8 whitespace-nowrap">
              <span className="text-sm font-bold">
                {flightOptions[0].price}
              </span>
              <span className="text-sm opacity-80">
                {flightOptions[0].type}
              </span>
            </div>

            {isExpanded &&
              flightOptions.slice(1).map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-1 h-full gap-2 px-4 border border-gray-200 border-solid rounded-md shadow-sm xl:p-8 whitespace-nowrap"
                >
                  <span className="text-sm font-bold">{option.price}</span>
                  <span className="text-sm opacity-80">{option.type}</span>
                </div>
              ))}
          </div>

          {/* Küçük ekranlar için genişletme/küçültme butonu */}
          <div className="flex justify-end mt-2 sm:hidden">
            <button
              onClick={toggleExpand}
              className="px-2 py-2 text-sm rounded-md text-theme bg-hover translate-ease hover:opacity-80"
            >
              {isExpanded ? "Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MyFlightListItem;
