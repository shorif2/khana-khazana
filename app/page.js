import HeroSection from "@/components/HeroSection";
import ReactSpinner from "@/components/ReactSpinner";
import RecipesList from "@/components/RecipesList";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <SideBar />
          <Suspense fallback={<ReactSpinner />}>
            <RecipesList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
