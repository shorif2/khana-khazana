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
        "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg",
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
