const Card = ({ children, sx }: { children: React.ReactNode, sx?: string }) => {
  return <div className={`relative p-4 bg-white rounded-lg shadow-sm sm:p-5 ${sx}`}>
    {children}
  </div>;
};

export default Card;
