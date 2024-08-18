import styled from "styled-components";
import CarRental from "../assets/car-rental.jpg";
import Hotel from "../assets/hotel.jpg";
import Travel from "../assets/travel.jpg";
import { CarFront, HotelIcon, TentTree } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-6 m-4 mt-0 lg:flex-col">
      <ServiceItem className="relative rounded-lg shadow-md">
        <img src={CarRental} alt="car-rental" />
        <span className="absolute flex flex-col gap-1 text-xl text-textWhite service-name bottom-5 left-5">
          <CarFront /> CAR RENTALS
        </span>
      </ServiceItem>
      <ServiceItem className="relative rounded-lg shadow-md">
        <img src={Hotel} alt="car-rental" />
        <span className="absolute flex flex-col gap-1 text-xl text-textWhite service-name bottom-5 left-5">
          <HotelIcon /> HOTELS
        </span>
      </ServiceItem>
      <ServiceItem className="relative rounded-lg shadow-md">
        <img src={Travel} alt="car-rental" />
        <span className="absolute flex flex-col gap-1 text-xl text-textWhite service-name bottom-5 left-5">
          <TentTree /> TRAVEL
        </span>
      </ServiceItem>
    </div>
  );
};

export default Services;

const ServiceItem = styled.div`
  max-width: 300px;

  .service-name {
    font-weight: 600;
  }

  img {
    aspect-ratio: 16 / 16;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    filter: brightness(0.7);
  }

  &:hover {
    cursor: pointer;

    img {
      filter: brightness(0.8);
    }
  }
`;
