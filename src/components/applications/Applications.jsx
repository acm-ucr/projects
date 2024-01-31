import React from "react";
import Tile from "../Tile";

const Applications = ({ title, applications }) => {
  return (
    <div className="w-full p-3">
      <p className="uppercase text-2xl mb-4">{title}</p>
      <div className="bg-projects-black flex justify-start content-start flex-wrap w-full h-96 gap-3 rounded-lg p-3">
        {applications.map((application, index) => {
          return <Tile {...application} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Applications;
