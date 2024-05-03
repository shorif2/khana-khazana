"use client";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      className="font-semibold my-4 border py-2 px-4 hover:bg-red-400 rounded-md bg-red-500 text-white "
      href={"/"}
    >
      Go to Home
    </Link>
  );
};

export default HomeButton;
