import { colorsMap } from "@/utils/colorsMap";

const Tile = ({ title, button, subtitle, hint, color }) => {
  return (
    <>
      <div className="h-64">
        <div
          className={`font-extrabold text-m ${colorsMap[color].text} list-disc mx-4`}
        >
          <li>{hint}</li>
        </div>
        <div className={`rounded-lg w-72 h-48 mx-4 ${colorsMap[color].bg}`}>
          <div className="font-extrabold text-xl box-content h-32 p-2 mx-2">
            {title}
          </div>
          <div className="">{subtitle}</div>
          <div className="font-bold mx-48 flex justify-center align-center border-x-2 border-y-2 w-16 h-8 rounded-lg border-black ">
            {button}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tile;
