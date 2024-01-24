"use client";
import React, { useState } from "react";

const Input = ({ initial, onChange }) => {
    const [current, editText] = useState(initial);

    const onChangeWrapper = (e) => {
        editText(e.target.value);
    }

    return (
        <input
            type="text"
            className="w-full py-0.5 px-1.5 text-white rounded-md bg-projects-black focus:bg-projects-gray focus:outline-none"
            value={current}
            onChange={onChangeWrapper}
        />
    );
};

export default Input;
