import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { MdOutlineListAlt } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-gray-800 text-white px-6 py-4">
      <Link
        href="/app/developer/profile"
        class="mb-4 flex items-center space-x-4"
      >
        <MdPerson className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Profile</span>
      </Link>
      <Link
        href="/app/developer/interviews"
        class="mb-4 flex items-center space-x-4"
      >
        <MdOutlineCalendarMonth className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Interviews</span>
      </Link>
      <Link
        href="/app/developer/applications"
        class="mb-4 flex items-center space-x-4"
      >
        <MdOutlineListAlt className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Applications</span>
      </Link>
      <Link href="/app/developer/forms" class="mb-4 flex items-center space-x-4">
        <MdOutlineListAlt className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Forms</span>
      </Link>
      <div
        onClick={console.log("Logged out")}
        className="mb-4 flex items-center space-x-4"
      >
        <span class="text-lg font-bold hover:underline">Log Out</span>
      </div>
    </div>
  );
};

export default Navigation;
