"use client";
const Input = ({ value, setValue }) => {
  return (
    <input
      type="text"
      className="w-full py-0.5 px-1.5 text-white rounded-md bg-projects-black focus:bg-projects-gray focus:outline-none"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
