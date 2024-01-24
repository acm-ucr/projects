const Tile = ({ title, button, subtitle, hint, color }) => {
  return (
    <>
      <div className="font-extrabold text-orange-500"> {hint} </div>

      <div className="bg-orange-500 w-fit p-4">
        <div>{title} </div>
        <div className="p-2 border-4 border-width "> {button}</div>
      </div>
    </>
  );
};

// padding, margin, background, text

export default Tile;
