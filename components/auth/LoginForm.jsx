"use client";
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { dbConnect } from "@/dbConnect/mongo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      await dbConnect();
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
        setLoading(false);
        toast.success(`Have a good day, ${found?.firstName} !!`);
        console.log(auth?.firstName);
      } else {
        setLoading(false);
        setError("Please provide a valid login credential");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }
  return (
    <>
      <div className="my-2 text-red-500">{error}</div>

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#eb4a36]  flex justify-center  gap-2 rounded-md text-white w-full mt-4"
        >
          {loading ? <Spinner /> : <h2 className="py-3">Login</h2>}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
