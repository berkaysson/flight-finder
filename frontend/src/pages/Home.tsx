import FlightFilter from "../components/FlightFilter";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="flex flex-col h-full mx-auto mt-6 md:flex-row max-w-7xl">
      <div className="w-full md:w-3/4">
        <FlightFilter />

        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/4">Flights</div>
          <div className="w-full md:w-1/4">Flight sorter</div>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <Services />
      </div>
    </div>
  );
};

export default Home;
