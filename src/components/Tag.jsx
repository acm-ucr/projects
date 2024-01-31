"use client";

import React, { useState } from "react";

const colorMapping = {
  purple: "bg-purple-500 text-white",
  orange: "bg-orange-500 text-white",
  // Add more color mappings as needed
};

const Tag = ({ text, color, isEditing = false }) => {
  const [editedText, setEditedText] = useState(text);

  const computedClass = colorMapping[color] || "bg-gray-400 text-gray-800";

  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full ${computedClass} overflow-hidden`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      ) : (
        { text }
      )}
    </span>
  );
};

export default Tag;
