import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";

function App() {
  return (
    <AppWrapper>
      <ThemeProvider>
        <Layout />
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
