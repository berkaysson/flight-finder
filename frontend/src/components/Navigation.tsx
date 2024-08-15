import { Earth, Plane, Tag } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import MOCK_USER from "../data/user";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2">
        <Plane size={32} color={theme.colors.theme} />
        <h1 className="hidden text-xl font-bold uppercase sm:block">Flight Finder</h1>
      </Link>
      <div className="flex gap-4 text-sm sm:gap-6">
        <a className="hidden sm:flex items-center gap-1 hover:underline hover:cursor-pointer">
          <Tag size={20} color={theme.colors.theme} />
          Deals
        </a>
        <a className="flex items-center gap-1 hover:underline hover:cursor-pointer">
          <Earth size={20} color={theme.colors.theme} />
          Discover
        </a>
        <Link to="/my-flights" className="flex items-center gap-1 hover:underline hover:cursor-pointer">
          <img src={MOCK_USER.avatarUrl} alt="user-avatar" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
          {MOCK_USER.name}
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
