"use client";
import { addToFavourite } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";
import toast from "react-hot-toast";
import SocialShare from "./SocialShare";

const RecipeAction = ({ recipeId }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const isFavourite = !!auth?.favourites.find((id) => id === recipeId);
  const [favourite, setFavourite] = useState(isFavourite);

  console.log("fist", favourite);

  const toggleInterest = async () => {
    if (auth) {
      addToFavourite(recipeId, auth?.id);
      setFavourite(!favourite);
      toast.success("Favourite Updated");
      console.log("after click", favourite);
    } else {
      router.push("/login");
      toast.error("Please Login First");
    }
  };
  console.log("Last", favourite);
  return (
    <div className="flex gap-4 justify-end">
      <button
        onClick={toggleInterest}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={favourite ? "red" : "none"}
          stroke={favourite ? "red" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>Favourite</span>
      </button>

      <SocialShare />
    </div>
  );
};

export default memo(RecipeAction);
