import RecipesList from "@/components/RecipesList";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "Khana Khazana - Recipe",
  description: "Most Famous food in Bangladesh. Thousands of recipes.",
  openGraph: {
    url: "https://khana-kazana.vercel.app/",
    siteName: "Khana Khazana - BD",
    images: [
      {
        url: "https://source.unsplash.com/random/800x600?recipe",
      },
    ],
  },
};
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
