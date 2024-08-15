import styled from "styled-components";
import Card from "./ui/Card";
import { useState } from "react";
import { Plane, PlaneLanding, PlaneTakeoff, CalendarFold } from "lucide-react";

const FlightFilter = () => {
  const [tripType, setTripType] = useState("Round Trip");

  return (
    <Card>
      <div className="flex flex-col gap-4 justify-between mb-4 md:flex-row">
        <h2 className="text-lg font-bold flex gap-2 items-center">
          <Plane size={20} />
          BOOK YOUR FLIGHT
        </h2>
        <div className="inline-flex font-bold">
          <TripTypeButton
            className="rounded-l-full border-r-0"
            onClick={() => setTripType("Round Trip")}
            active={tripType === "Round Trip"}
          >
            Round Trip
          </TripTypeButton>
          <TripTypeButton
            onClick={() => setTripType("One Way")}
            active={tripType === "One Way"}
            className="rounded-r-full border-l-0"
          >
            One Way
          </TripTypeButton>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-between lg:flex-row items-center">
        <div className="flex flex-col sm:flex-row gap-1 w-full">
          <InputWrapper>
            <PlaneTakeoff size={20} className="input-icon" />
            <StyledSelect className="sm:rounded-l-full sm:border-r-0 rounded-t-xl">
              <option>From</option>
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <PlaneLanding size={20} className="input-icon" />
            <StyledSelect className="sm:rounded-r-full sm:border-l-0 rounded-b-xl">
              <option>To</option>
            </StyledSelect>
          </InputWrapper>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 w-full">
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput type="date" className="sm:rounded-l-full sm:border-r-0 rounded-t-xl" />
          </InputWrapper>
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput type="date" className="sm:rounded-r-full sm:border-l-0 rounded-b-xl" />
          </InputWrapper>
        </div>
      </div>

      <div className="flex m-2 mt-4">
        <button className="bg-theme text-white py-2 px-4 rounded-lg hover:opacity-80">
          Show Flights
        </button>
      </div>
    </Card>
  );
};

export default FlightFilter;

const TripTypeButton = styled.button<{ active: boolean }>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.theme : props.theme.colors.hover};
  color: ${(props) =>
    props.active ? props.theme.colors.textWhite : props.theme.colors.theme};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  .input-icon {
    position: absolute;
    left: 12px;
    color: ${(props) => props.theme.colors.theme};
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  padding: 0.4rem 1rem;
  padding-left: 2.5rem;
  border: 2px solid ${(props) => props.theme.colors.hover};
  outline: none;
  width: 100%;
  height: 40px;
  appearance: none;
  font-size: 0.9rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.focusBorder};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textBlack};
    opacity: 0.5;
  }
`;

const StyledInput = styled.input`
  padding: 0.4rem 1rem;
  padding-left: 2.5rem;
  border: 2px solid ${(props) => props.theme.colors.hover};
  outline: none;
  width: 100%;
  height: 40px;
  font-size: 0.9rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.focusBorder};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textBlack};
    opacity: 0.5;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    background-color: transparent;
    position: absolute;
    left: 12px;
  }
`;
