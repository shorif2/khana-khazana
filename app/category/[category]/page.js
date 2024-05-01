import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes } from "@/queries/queries";

export async function generateMetadata({ params: { category } }) {
  return {
    title: `Khana Khazana - ${decodeURIComponent(category)}`,
  };
}

const RecipePage = async ({ params: { category } }) => {
  const AllRecipes = await getAllRecipes();
  const recipes = AllRecipes.filter(
    (res) => res.category === decodeURIComponent(category)
  );
  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">
            {decodeURIComponent(category)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipePage;
