import React from "react";

const CourseTag = ({ course, tColor, boColor }) => {
  return (
    <span
      className={`font-bold rounded-full px-3 border-2 ${tColor} ${boColor}`}
    >
      {course}
    </span>
  );
};

export default CourseTag;
