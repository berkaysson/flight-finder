import { Info } from "lucide-react";
import MyFlightsFilter from "../components/MyFlightsFilter";

const MyFlights = () => {
  return (
    <div className="flex flex-col h-full mx-auto max-w-7xl">
      <div>
        <MyFlightsFilter />
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

      <div>myflights list</div>
    </div>
  );
};

export default MyFlights;
