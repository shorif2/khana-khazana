import RecipesList from "@/components/RecipesList";
import SearchBar from "@/components/SearchBar";

const RecipePage = () => {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4 gap-2">
        <SearchBar />
        <RecipesList />
      </div>
    </section>
  );
};

export default RecipePage;
