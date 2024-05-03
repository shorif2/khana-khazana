"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const logout = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <>
      {auth ? (
        <>
          <li className="py-2 hover:text-red-500">
            <Link href="/favourite">Favourite</Link>
          </li>
          <li className="py-2">
            <span className="hover:text-red-500"> {auth?.firstName}</span>
            <span className="mx-2">|</span>
            <a className="cursor-pointer hover:text-red-500" onClick={logout}>
              Logout
            </a>
          </li>
        </>
      ) : (
        <li className="py-2 bg-[#eb4a36] hover:bg-red-400 px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );
};

export default SignInOut;
