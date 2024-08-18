import { Link } from "react-router-dom";

const NotFound = () => {
  return <div className="flex flex-col items-center justify-center gap-6 mt-10">
    <h1 className="text-3xl">404 - Page Not Found</h1>
    <Link className="underline hover:opacity-80 text-theme" to="/">Go Home</Link>
  </div>;
};

export default NotFound;
