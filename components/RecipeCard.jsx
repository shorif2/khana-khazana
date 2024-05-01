import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  const category = recipe?.name
    .split("")
    .filter((e) => e !== " ")
    .join("");
  return (
    <Link href={`/recipe/${recipe?.id}`}>
      <div className="card">
        <Image
          src={recipe?.thumbnail}
          className="rounded-md"
          height={160}
          width={300}
          alt=""
        />

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
