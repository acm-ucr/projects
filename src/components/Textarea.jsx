"use client";
import React, { useState } from "react";
// initialValue: string
// onChange: (value: string) => void
const Textarea = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const onChangeWrapper = (e) => {
    setValue(e.target.value);
    // onChange(e.target.value);
  };

  return (
    <textarea
      class="w-full m-3 p-3 bg-projects-black focus:bg-projects-gray text-white focus:outline-none rounded-xl"
      value={value}
      onChange={onChangeWrapper}
    />
  );
};

export default Textarea;
