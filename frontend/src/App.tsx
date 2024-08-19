import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";
import { FlightProvider } from "./context/FlightsContext";

// Uygulamada tema bilgileri ve uçuş yönetimi Context API ile yapılmıştır.
// Providerlarda Context APInin sağladığı basit ve düzenli yapı kullanılmıştır.
// Layout içerisinde react-router yönetimi yapılmıştır.
function App() {
  return (
    <AppWrapper>
      <ThemeProvider>
        <FlightProvider>
          <Layout />
        </FlightProvider>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100%;
  height: 100%;
  padding: 1rem;
`;
