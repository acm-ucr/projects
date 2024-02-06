import Link from "next/link";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col h-full bg-projects-black text-white">
      <div className="relative top-1/4" style={{ marginLeft: "17%" }}>
        <p className="text-9xl font-thin">{error}</p>
        <p className="text-4xl font-thin">
          {error === "404" ? "page not found" : "internal server error"}
        </p>
        {error === "500" && (
          <>
            <p className="text-xl font-bold">
              please contact someone to help you
            </p>
          </>
        )}
        <div className="w-auto">
          <Link href="/">
            <button className="text-base font-light py-3.5 px-4 mt-2.5 border rounded-full">
              go back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
