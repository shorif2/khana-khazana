import FavouriteList from "@/components/FavouriteList";
import { getAllRecipes } from "@/queries/queries";

const FavouritePage = async () => {
  const recipes = await getAllRecipes();

  return (
    <div className="container mx-auto">
      <FavouriteList recipes={recipes} />
    </div>
  );
};

export default FavouritePage;
