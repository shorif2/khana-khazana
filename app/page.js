import HeroSection from "@/components/HeroSection";
import RecipesList from "@/components/RecipesList";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <SideBar />
          <Suspense fallback={<HashLoader color="#36d7b7" />}>
            <RecipesList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
