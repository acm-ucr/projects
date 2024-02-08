import { colorsMap } from "../utils/colorsMap";

const Tag = ({ text, color }) => {
  return (
    <div className={`${colorsMap[color].bg} w-fit rounded-full px-3 py-2`}>
      {text}
    </div>
  );
};

export default Tag;
