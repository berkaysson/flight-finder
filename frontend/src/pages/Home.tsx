import FlightFilter from "../components/FlightFilter";
import FlightList from "../components/FlightList";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="flex flex-col h-full mx-auto mt-6 lg:flex-row max-w-7xl">
      <div className="w-full lg:w-3/4">
        <FlightFilter />
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full">
            <FlightList />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4">
        <Services />
      </div>
    </div>
  );
};

export default Home;
