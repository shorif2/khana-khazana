import HeroSection from "@/components/HeroSection";
import RecipesList from "@/components/RecipesList";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <SideBar />
          <RecipesList />
        </div>
      </section>
    </div>
  );
}
