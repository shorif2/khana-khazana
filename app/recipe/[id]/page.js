import Banner from "@/components/recipeDetails/Banner";
import Description from "@/components/recipeDetails/Description";
import { dbConnect } from "@/dbConnect/mongo";
import { getRecipeById } from "@/queries/queries";

export async function generateMetadata({ params: { id } }) {
  const recipeInfo = await getRecipeById(id);

  return {
    title: `Khana Khazana - ${recipeInfo?.name}`,
    description: recipeInfo?.description,
    openGraph: {
      images: [recipeInfo?.thumbnail],
    },
  };
}

const RecipeDetailsPage = async ({ params: { id } }) => {
  await dbConnect();
  const recipe = await getRecipeById(id);

  return (
    <div>
      <Banner recipe={recipe} />
      <Description steps={recipe?.steps} />
    </div>
  );
};

export default RecipeDetailsPage;
