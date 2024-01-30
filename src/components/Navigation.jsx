"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/acm-ucr-logo.webp";
import { usePathname } from "next/navigation";
import {
  MdOutlineListAlt,
  MdOutlineCalendarMonth,
  MdPerson,
} from "react-icons/md";

const Navigation = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const textColor =
    segments[1] === "developer"
      ? "text-projects-blue"
      : segments[1] === "lead"
      ? "text-projects-red"
      : "text-white";
  const isLinkActive = (path) => pathname.startsWith(`/${segments[1]}/${path}`);

  const user = pathname.includes("developer") ? "developer" : "admin";

  return (
    <div className="flex flex-col items-center bg-projects-black text-white text-xl font-light w-2/12 p-4">
      <Image src={logo} alt="ACM logo" className="w-1/2" />
      <p
        className={`rounded py-1 w-full text-center font-bold ${textColor} bg-projects-gray`}
      >
        {user}
      </p>
      <Link
        href={`/${user}/profile`}
        className="mb-4 flex items-center w-full rounded hover:bg-projects-gray"
      >
        <MdPerson className="text-2xl" />
        PROFILE
      </Link>
      <Link
        href={`/${user}/applications`}
        className="mb-4 flex items-center space-x-4"
      >
        <MdOutlineListAlt className="text-2xl" />
        <span
          className={`hover:underline ${
            isLinkActive("applications") ? textColor : ""
          }`}
        >
          APPLICATIONS
        </span>
      </Link>
      <Link
        href={`/${user}/forms`}
        className="mb-4 flex items-center space-x-4"
      >
        <MdOutlineCalendarMonth className="text-2xl" />
        <span
          className={`hover:underline ${
            isLinkActive("forms") ? textColor : ""
          }`}
        >
          FORMS
        </span>
      </Link>
      <Link
        href={`/${user}/interviews`}
        className="mb-4 flex items-center space-x-4"
      >
        <MdOutlineListAlt className="text-2xl" />
        <span
          className={`hover:underline ${
            isLinkActive("interviews") ? textColor : ""
          }`}
        >
          INTERVIEWS
        </span>
      </Link>

      <div
        onClick={() => console.log("Logged out")}
        className="flex items-center space-x-4 self-center mt-auto"
      >
        <span className="hover:underline">LOG OUT</span>
      </div>
    </div>
  );
};

export default Navigation;
