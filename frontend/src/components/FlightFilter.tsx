import styled from "styled-components";
import Card from "./ui/Card";
import { useContext, useState } from "react";
import { Plane, PlaneLanding, PlaneTakeoff, CalendarFold } from "lucide-react";
import { FlightContext } from "../context/FlightsContext";
import { formatDateTime } from "../utils/date";

const FlightFilter = () => {
  const { getFlights, isLoading } = useContext(FlightContext);

  // Kullanıcı girişleri için state tanımları.
  const [tripType, setTripType] = useState("Round Trip");
  const [fromDestination, setFromDestination] = useState("Other");
  const [toDestination, setToDestination] = useState("Amsterdam");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Kalkış noktası değiştiğinde varış noktasını otomatik ayarlayan fonksiyon.
  const handleFromDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setFromDestination(value);
    setToDestination(value === "Amsterdam" ? "Other" : "Amsterdam");
  };

  // Varış noktası değiştiğinde varış noktasını otomatik ayarlayan fonksiyon.
  const handleToDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setToDestination(value);
    setFromDestination(value === "Amsterdam" ? "Other" : "Amsterdam");
  };

  // Tarih seçimi için event handler'lar.
  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };

  // Form submit işlemi, filtrelenmiş uçuşları getFlights fonksiyonunu çağırarak getiriyor.
  const handleSubmit = async () => {
    const formattedFromDate = formatDateTime(fromDate);
    const formattedToDate = formatDateTime(toDate);
    const flightDirection = fromDestination === "Amsterdam" ? "D" : "A";

    await getFlights(flightDirection, formattedFromDate, formattedToDate);
  };

  return (
    <Card>
      {/* Üst bölüm: başlık ve yolculuk türü seçimi */}
      <div className="flex flex-col justify-between gap-4 mb-4 md:flex-row">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Plane size={20} />
          BOOK YOUR FLIGHT
        </h2>
        <div className="inline-flex font-bold">
          <TripTypeButton
            className="border-r-0 rounded-l-full translate-ease"
            onClick={() => setTripType("Round Trip")}
            active={tripType === "Round Trip"}
          >
            Round Trip
          </TripTypeButton>
          <TripTypeButton
            onClick={() => setTripType("One Way")}
            active={tripType === "One Way"}
            className="border-l-0 rounded-r-full translate-ease"
          >
            One Way
          </TripTypeButton>
        </div>
      </div>

      {/* Orta bölüm: kalkış/varış yeri ve tarih seçimi */}
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

        {/* Kalkış noktası ve varış noktası seçimi. */}
        <div className="flex flex-col w-full gap-1 sm:flex-row">
          <InputWrapper>
            <PlaneTakeoff size={20} className="input-icon" />
            <StyledSelect
              value={fromDestination}
              onChange={handleFromDestinationChange}
              className="sm:rounded-l-full sm:border-r-0 rounded-t-xl"
            >
              <option value="Other">Other</option>
              <option value="Amsterdam">Amsterdam</option>
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <PlaneLanding size={20} className="input-icon" />
            <StyledSelect
              value={toDestination}
              onChange={handleToDestinationChange}
              className="sm:rounded-r-full sm:border-l-0 rounded-b-xl"
            >
              <option value="Other">Other</option>
              <option value="Amsterdam">Amsterdam</option>
            </StyledSelect>
          </InputWrapper>
        </div>

        {/* Tarihleri seçimi. */}
        <div className="flex flex-col w-full gap-1 sm:flex-row">
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput
              type="datetime-local"
              value={fromDate}
              onChange={handleFromDateChange}
              className="sm:rounded-l-full sm:border-r-0 rounded-t-xl"
            />
          </InputWrapper>
          <InputWrapper>
            <CalendarFold size={20} className="input-icon" />
            <StyledInput
              type="datetime-local"
              value={toDate}
              onChange={handleToDateChange}
              className="sm:rounded-r-full sm:border-l-0 rounded-b-xl"
            />
          </InputWrapper>
        </div>
      </div>

      {/* Uçuşları göster butonu */}
      <div className="flex m-2 mt-4">
        <button
          className="px-4 py-2 text-white rounded-lg translate-ease bg-theme hover:opacity-80"
          onClick={handleSubmit}
          disabled={isLoading}
        >
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
