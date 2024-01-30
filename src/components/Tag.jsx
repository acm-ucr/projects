const colors = {
  blue: {
    bg: "bg-projects-blue",
  },
  purple: {
    bg: "bg-projects-purple",
  },
  red: {
    bg: "bg-projects-red",
  },
  orange: {
    bg: "bg-projects-orange",
  },
  green: {
    bg: "bg-projects-green",
  },
  black: {
    bg: "bg-projects-black",
  },
  gray: {
    bg: "bg-projects-gray",
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
