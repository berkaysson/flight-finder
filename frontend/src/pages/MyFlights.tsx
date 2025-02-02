import { Info } from "lucide-react";
import MyFlightsFilter from "../components/MyFlightsFilter";
import MyFlightsList from "../components/MyFlightsList";
import { useContext, useState } from "react";
import { FlightContext } from "../context/FlightsContext";

// Uçuşlarım sayfası bileşeni, rezerve uçuşları gösterir.
const MyFlights = () => {
  // FlightContext'ten `myFlights` verisini alıyoruz.
  const { myFlights } = useContext(FlightContext);
  // Seçilen destinasyon için state oluşturuyoruz.
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );

  // Seçilen destinasyona göre uçuşları filtreliyoruz.
  // Eğer destinasyon seçilmediyse tüm uçuşlar gösteriliyor.
  const filteredFlights = selectedDestination
    ? myFlights.filter(
        (flight) =>
          flight.departure === selectedDestination ||
          flight.arrival === selectedDestination
      )
    : myFlights;

  return (
    <div className="flex flex-col h-full mx-auto max-w-7xl">
      <div>
        <MyFlightsFilter
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
        />
      </div>
      <div className="flex flex-col justify-between w-full my-4 sm:flex-row">
        <label>
          Sort by:
          <select
            name="sort"
            id="sort"
            className="p-2 font-bold bg-transparent text-md"
          >
            <option>Recommended</option>
          </select>
        </label>
        <div>
          <span className="flex items-center justify-center gap-2">
            <Info size={20} className="text-textAlt" />
            Avg. Fare:<span className="font-bold">$200</span>
          </span>
        </div>
      </div>

      <div>
        <MyFlightsList filteredFlights={filteredFlights} />
      </div>
    </div>
  );
};

export default MyFlights;
