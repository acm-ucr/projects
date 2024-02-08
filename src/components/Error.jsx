import Link from "next/link";

const Error = ({ status, name, message }) => {
  return (
    <>
      <p className="text-9xl font-thin text-white">{status}</p>
      <p className="text-4xl font-thin text-white">{name}</p>
      <p className="text-4xl font-thin text-white">{message}</p>
      <Link href="/" className="text-white">
        <p className="px-3 py-2 font-light my-8 border rounded-full w-fit">
          go back to home
        </p>
      </Link>
    </>
  );
};

export default Error;
