"use client";
const Textarea = ({ value, setValue }) => {
  return (
    <textarea
      class="w-full m-3 p-3 bg-projects-black focus:bg-projects-gray text-white focus:outline-none rounded-xl"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Textarea;
