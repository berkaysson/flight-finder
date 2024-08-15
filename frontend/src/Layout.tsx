import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";
import Navigation from "./components/Navigation";

const Layout: React.FC = () => {
  return (
    <div className="text-textBlack">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-flights" element={<MyFlights />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
