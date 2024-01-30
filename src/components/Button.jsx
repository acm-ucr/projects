const Button = ({ buttonText, onClick, textColor, borderColor }) => {
  const colors = {
    blue: {
      border: "border-blue-500",
      textColor: "text-blue-500",
    },
    red: {
      border: "border-red-500",
      textColor: "text-red-500",
    },
    violet: {
      border: "border-violet-500",
      textColor: "text-violet-500",
    },
    purple: {
      border: "border-purple-500",
      textColor: "text-purple-500",
    },
    white: {
      border: "border-slate-50",
      textColor: "text-slate-50",
    },
    orange: {
      border: "border-orange-500",
      textColor: "text-orange-500",
    },
    emerald: {
      border: "border-emerald-500",
      textColor: "text-emerald-500",
    },
    black: {
      border: "border-black",
      textColor: "text-black-500",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 border-2 rounded-2xl ${colors[borderColor]?.border} ${
        textColor ? colors[textColor]?.textColor : "text-slate-50"
      } m-2`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
