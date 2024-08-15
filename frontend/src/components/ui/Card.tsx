const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm">
    {children}
  </div>;
};

export default Card;
