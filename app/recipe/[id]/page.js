import Banner from "@/components/recipeDetails/Banner";
import Description from "@/components/recipeDetails/Description";
import { dbConnect } from "@/dbConnect/mongo";
import { getRecipeById } from "@/queries/queries";

export async function generateMetadata({ params: { id } }) {
  await dbConnect();
  const recipeInfo = await getRecipeById(id);

  return {
    title: `Khana Khazana - ${recipeInfo?.name}`,
    description: recipeInfo?.description,
    openGraph: {
      title: recipeInfo?.name,
      url: "https://khana-kazana.vercel.app",
      siteName: "Khana Khazana",
      images: [
        {
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
          width: 1200,
          height: 600,
        },
      ],
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
