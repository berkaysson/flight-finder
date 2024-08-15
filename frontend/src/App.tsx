import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";

function App() {
  return <div className="App">
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  </div>;
}

export default App;
