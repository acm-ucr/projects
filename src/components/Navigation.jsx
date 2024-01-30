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

  const links = {
    developer: [
      {
        name: "Profile",
        link: "/developer/profile",
        Icon: MdPerson,
      },
      {
        name: "Applications",
        link: "/developer/applications",
        Icon: MdOutlineListAlt,
      },
      {
        name: "Forms",
        link: "/developer/forms",
        Icon: MdOutlineCalendarMonth,
      },
      {
        name: "Interviews",
        link: "/developer/interviews",
        Icon: MdOutlineListAlt,
      },
    ],
  };

  const user = pathname.includes("developer") ? "developer" : "admin";

  return (
    <div className="flex flex-col items-center bg-projects-black text-white text-xl font-light w-2/12 p-4">
      <Image src={logo} alt="ACM logo" className="w-1/2" />
      <p className="rounded py-1 my-2 w-full text-center font-bold text-projects-blue bg-projects-gray">
        {user}
      </p>

      {links[user].map(({ name, link, Icon }, index) => (
        <Link
          key={index}
          href={link}
          className={`flex items-center w-full rounded hover:bg-projects-gray px-4 py-1 my-1 ${
            pathname === link && "text-projects-blue"
          }`}
        >
          <Icon className="text-2xl mx-2" />
          {name}
        </Link>
      ))}

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
