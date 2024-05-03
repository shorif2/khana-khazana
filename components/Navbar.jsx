import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            className=" h-[40px]"
            width={122}
            height={54}
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500 ">
          <li className="py-2 active hover:text-red-500">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2 hover:text-red-500">
            <Link href="/">Recipe</Link>
          </li>

          <li className="py-2 hover:text-red-500">
            <Link href="/about">About us</Link>
          </li>

          <SignInOut />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
