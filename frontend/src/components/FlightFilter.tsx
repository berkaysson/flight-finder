import styled from "styled-components";
import Card from "./ui/Card";
import { useContext, useEffect, useState } from "react";
import { Plane, PlaneLanding, PlaneTakeoff, CalendarFold } from "lucide-react";
import { FlightContext } from "../context/FlightsContext";

const FlightFilter = () => {
  const { changeFlightDirection } = useContext(FlightContext);

  const [tripType, setTripType] = useState("Round Trip");
  const [from, setFrom] = useState<"A" | "D">("D");
  const [to, setTo] = useState<"A" | "D">("A");

  const handleFromChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as "A" | "D";
    setFrom(value);
    if (value === "D") {
      setTo("A");
    } else {
      setTo("D");
    }
  };

  const handleToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as "A" | "D";
    setTo(value);
    if (value === "D") {
      setFrom("A");
    } else {
      setFrom("D");
    }
  };

  useEffect(() => {
    changeFlightDirection(from);
  }, [from]);

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 mb-4 md:flex-row">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Plane size={20} />
          BOOK YOUR FLIGHT
        </h2>
        <div className="inline-flex font-bold">
          <TripTypeButton
            className="border-r-0 rounded-l-full"
            onClick={() => setTripType("Round Trip")}
            active={tripType === "Round Trip"}
          >
            Round Trip
          </TripTypeButton>
          <TripTypeButton
            onClick={() => setTripType("One Way")}
            active={tripType === "One Way"}
            className="border-l-0 rounded-r-full"
          >
            One Way
          </TripTypeButton>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <div className="flex flex-col w-full gap-1 sm:flex-row">
          <InputWrapper>
            <PlaneTakeoff size={20} className="input-icon" />
            <StyledSelect
              value={from}
              onChange={handleFromChange}
              className="sm:rounded-l-full sm:border-r-0 rounded-t-xl"
            >
              <option value="D">Amsterdam</option>
              <option value="A">Other</option>
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <PlaneLanding size={20} className="input-icon" />
            <StyledSelect
              value={to}
              onChange={handleToChange}
              className="sm:rounded-r-full sm:border-l-0 rounded-b-xl"
            >
              <option value="A">Other</option>
              <option value="D">Amsterdam</option>
            </StyledSelect>
          </InputWrapper>
        </div>
        <div className="flex flex-col w-full gap-1 sm:flex-row">
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput
              type="date"
              className="sm:rounded-l-full sm:border-r-0 rounded-t-xl"
            />
          </InputWrapper>
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput
              type="date"
              className="sm:rounded-r-full sm:border-l-0 rounded-b-xl"
            />
          </InputWrapper>
        </div>
      </div>

      <div className="flex m-2 mt-4">
        <button className="px-4 py-2 text-white rounded-lg bg-theme hover:opacity-80">
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
