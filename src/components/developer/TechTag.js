import React from "react";

const TechTag = ({ skill, bgColor }) => {
  // console.log(skill)
  return (
    <span className={`${bgColor} font-bold text-white rounded-full px-3 `}>
      {skill}
    </span>
  );
};

export default TechTag;
