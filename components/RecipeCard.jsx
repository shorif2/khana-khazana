import Link from "next/link";
import RecipeImage from "./home/RecipeImage";

const RecipeCard = ({ recipe }) => {
  const category = recipe?.name
    .split("")
    .filter((e) => e !== " ")
    .join("");

  return (
    <Link className="w-full" href={`/recipe/${recipe?.id}`}>
      <div className="card w-full relative">
        <RecipeImage recipe={recipe} />

        <h4 className="my-2">{recipe?.name}</h4>

        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}</span>
          <span>By: {recipe?.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
