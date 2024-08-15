import FlightFilter from "../components/FlightFilter";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-full mt-6 max-w-7xl mx-auto">
      <div className="w-full md:w-3/4">
        <FlightFilter />

        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/4">Flights</div>
          <div className="w-full md:w-1/4">Flight sorter</div>
        </div>
      </div>
      <div className="w-full md:w-1/4">services</div>
    </div>
  );
};

export default Home;
