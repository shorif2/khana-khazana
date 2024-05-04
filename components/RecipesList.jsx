import { getAllRecipes } from "@/queries/queries";
import Link from "next/link";
import RecipeCard from "./RecipeCard";

const RecipesList = async () => {
  const allRecipe = await getAllRecipes();

  return (
    <div className="col-span-12 md:col-span-9">
      {allRecipe?.length == 0 && (
        <>
          <div className="h-[60vh] flex justify-center items-center font-medium">
            No Recipe Found...
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {allRecipe?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/recipe"
          className="py-2 bg-[#eb4a36] hover:bg-red-400 px-6 rounded-md text-white content-center"
        >
          More Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipesList;
