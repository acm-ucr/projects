"use client";
import Link from "next/link";
import {
  MdOutlineListAlt,
  MdOutlineCalendarMonth,
  MdPerson,
} from "react-icons/md";

const Navigation = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-white p-4 w-2/12">
      <Link
        href="/developer/profile"
        className="mb-4 flex items-center space-x-4"
      >
        <>
          <MdPerson className="text-2xl" />
          <span className="text-lg font-bold hover:underline">Profile</span>
        </>
      </Link>
      <Link
        href="/developer/interviews"
        className="mb-4 flex items-center space-x-4"
      >
        <>
          <MdOutlineCalendarMonth className="text-2xl" />
          <span className="text-lg font-bold hover:underline">Interviews</span>
        </>
      </Link>
      <Link
        href="/developer/applications"
        className="mb-4 flex items-center space-x-4"
      >
        <>
          <MdOutlineListAlt className="text-2xl" />
          <span className="text-lg font-bold hover:underline">
            Applications
          </span>
        </>
      </Link>
      <Link
        href="/developer/forms"
        className="mb-4 flex items-center space-x-4"
      >
        <>
          <MdOutlineListAlt className="text-2xl" />
          <span className="text-lg font-bold hover:underline">Forms</span>
        </>
      </Link>
      <div
        onClick={() => console.log("Logged out")}
        className="mb-4 flex items-center space-x-4"
      >
        <span className="text-lg font-bold hover:underline">Log Out</span>
      </div>
    </div>
  );
};

export default Navigation;
