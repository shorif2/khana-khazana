"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const FavouriteList = ({ recipes }) => {
  const { auth } = useAuth();
  const [fav, setFav] = useState(null);

  useEffect(() => {
    const favourite = auth?.favourites.map((id) =>
      recipes.find((recipe) => recipe.id === id)
    );
    setFav(favourite);
  }, [auth?.favourites, recipes]);
  console.log(fav);

  return (
    <>
      {auth?.favourites.length == 0 ? (
        <>
          <div className="h-96 flex justify-center items-center">
            <h1 className="text-2xl font-medium text-center">
              Favourite list is empty
            </h1>
          </div>
        </>
      ) : (
        <h2 className="text-lg font-medium">
          Favourite Item ({auth?.favourites?.length})
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
        {fav?.map((fav) => (
          <RecipeCard key={fav.id} recipe={fav} />
        ))}
      </div>
    </>
  );
};

export default FavouriteList;
