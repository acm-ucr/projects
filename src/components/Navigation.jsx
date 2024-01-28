"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/acm-logo.svg";
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
  return (
    <div
      className="flex flex-col text-white text-xl font-light py-[26px] w-[204px]"
      style={{
        backgroundImage:
          "linear-gradient(182deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 97.65%)",
        backgroundColor: "#131220",
      }}
    >
      <Image src={logo} alt="ACM logo" className="self-center"></Image>
      <p
        className={`self-center text-center my-[88px] py-[5px] rounded-[5px] font-bold ${textColor} w-[180px] bg-projects-gray`}
      >
        {segments[1]}
      </p>
      <div className="pl-2.5">
        <Link
          href={`/${segments[1]}/profile`}
          className="mb-4 flex items-center space-x-4"
        >
          <>
            <MdPerson className="text-2xl" />
            <span
              className={`hover:underline ${
                isLinkActive("profile") ? textColor : ""
              }`}
            >
              PROFILE
            </span>
          </>
        </Link>
        <Link
          href={`/${segments[1]}/applications`}
          className="mb-4 flex items-center space-x-4"
        >
          <>
            <MdOutlineListAlt className="text-2xl" />
            <span
              className={`hover:underline ${
                isLinkActive("applications") ? textColor : ""
              }`}
            >
              APPLICATIONS
            </span>
          </>
        </Link>
        <Link
          href={`/${segments[1]}/forms`}
          className="mb-4 flex items-center space-x-4"
        >
          <>
            <MdOutlineCalendarMonth className="text-2xl" />
            <span
              className={`hover:underline ${
                isLinkActive("forms") ? textColor : ""
              }`}
            >
              FORMS
            </span>
          </>
        </Link>
        <Link
          href={`/${segments[1]}/interviews`}
          className="mb-4 flex items-center space-x-4"
        >
          <>
            <MdOutlineListAlt className="text-2xl" />
            <span
              className={`hover:underline ${
                isLinkActive("interviews") ? textColor : ""
              }`}
            >
              INTERVIEWS
            </span>
          </>
        </Link>
      </div>
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
