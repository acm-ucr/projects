import Navigation from "./Navigation";

const Protected = ({ children }) => {
  return (
    <div className="flex bg-red-500 h-screen">
      <Navigation />
      <div className="w-10/12">{children}</div>
    </div>
  );
};

export default Protected;
