import Banner from "@/components/recipeDetails/Banner";
import RecipeNotFound from "@/components/recipeDetails/RecipeNotFound";
import Steps from "@/components/recipeDetails/Steps";
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
        recipeInfo?.thumbnail ||
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
      {recipe?.error && <RecipeNotFound message={recipe?.error} />}
      {recipe?.name && (
        <>
          <Banner recipe={recipe} />
          <Steps steps={recipe?.steps} />
        </>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
