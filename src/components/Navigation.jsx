import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-gray-800 text-white px-6 py-4">
      <Link
        href="/app/developer/profile"
        class="mb-4 flex items-center space-x-4"
      >
        <Person2Icon className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Profile</span>
      </Link>
      <Link
        href="/app/developer/interviews"
        class="mb-4 flex items-center space-x-4"
      >
        <CalendarMonthIcon className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Interviews</span>
      </Link>
      <Link
        href="/app/developer/applications"
        class="mb-4 flex items-center space-x-4"
      >
        <FormatListBulletedIcon className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Applications</span>
      </Link>
      <Link href="/app/developer/" class="mb-4 flex items-center space-x-4">
        <FormatListBulletedIcon className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Forms</span>
      </Link>
      <Link
        href="#"
        onClick={handleLogout}
        className="mb-4 flex items-center space-x-4"
      >
        <Link className="text-2xl" />
        <span class="text-lg font-bold hover:underline">Log Out</span>
      </Link>
    </div>
  );
};

export default Navigation;
