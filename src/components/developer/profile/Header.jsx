import Image from "next/image";

import pfp from "@/public/images/pfp.jpg";

const Header = () => {
  return (
    <div className="h-1/6 w-full bg-purple-950 flex flex-row justify-center items-center px-6 py-1">
      <div className="w-40">
        <Image
          className="rounded-md  h-full aspect-square"
          src={pfp}
          alt="profile picture"
        ></Image>
      </div>
      <div className="w-full h-auto px-2 flex flex-col align-start justify-center">
        <div className="flex flex-row items-center gap-4 text-center">
          <h3 className="text-3xl font-bold text-white">Evan Little Cat</h3>
          <p className="bg-blue-400 h-fit rounded-full px-4 font-semibold text-center">
            developer
          </p>
        </div>
        <p className="w-fit font-bold text-md bg-gradient-to-r from-blue-700 to-red-600 inline-block text-transparent bg-clip-text">
          evan213@ucr.edu
        </p>
        <div className="flex flex-row align-center mt-8">
          <h5 className="text-white font-semibold text-sm">past projects:</h5>
          <p className="border-2 font rounded-full text-red-400 border-red-400 px-4 py-0 ml-2 text-sm">
            IEEE Website
          </p>
          <p className="border-2 font rounded-full text-green-700 border-green-700 px-4 py-0 ml-2 text-sm">
            PAD Website
          </p>
        </div>
      </div>
      <div className="w-80 h-1/2 flex flex-row mb-6">
        <h3 className="text-white font-semibold text-sm">current project: </h3>
        <p className="border-2 font rounded-full h-fit w-fit text-red-400 border-red-400 px-4 py-0 ml-2 text-sm">
          PAD Website
        </p>
      </div>
    </div>
  );
};

export default Header;
