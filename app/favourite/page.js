// import FavouriteList from "@/components/FavouriteList";
import { getAllRecipes } from "@/queries/queries";
import dynamic from "next/dynamic";
export const metadata = {
  title: "Khana Khazana - Favourite",
};
const FavouriteList = dynamic(() => import("@/components/FavouriteList"), {
  ssr: false,
});

const FavouritePage = async () => {
  const recipes = await getAllRecipes();

  return (
    <div className="container mx-auto">
      <FavouriteList recipes={recipes} />
    </div>
  );
};

export default FavouritePage;
