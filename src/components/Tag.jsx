const colors = {
  green: {
    bg: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-500",
  },
  orange: {
    bg: "bg-orange-500",
  },
  red: {
    bg: "bg-red-500",
  },
};

const Tag = ({ text, color }) => {
  return (
    <div className={`${colors[color].bg} w-fit rounded-full px-3 py-2`}>
      {text}
    </div>
  );
};

export default Tag;
