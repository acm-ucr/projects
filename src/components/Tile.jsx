const Tile = ({ title, button, subtitle, hint, color }) => {
  return (
    <>
      <div className="bg-slate-800 h-64">
        <div className="font-extrabold text-m text-orange-400 list-disc mx-4">
          {" "}
          <li>{hint}</li>{" "}
        </div>
        <div className="bg-orange-400 rounded-lg w-72 h-48 mx-4">
          <div className="font-extrabold text-xl box-content h-32 p-2 mx-2">
            {title}{" "}
          </div>
          <div className=""> {subtitle}</div>
          <div className="font-bold mx-48 border-x-2 border-y-2 w-16 h-8 pl-2 rounded-lg border-black ">
            {" "}
            {button}
          </div>
        </div>
      </div>
    </>
  );
};

// padding, margin, background, text

export default Tile;
