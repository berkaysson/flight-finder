import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";

const Layout: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-flights" element={<MyFlights />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
