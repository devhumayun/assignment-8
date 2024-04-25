import HeroSection from "./components/home/HeroSection";
import RecipeCategories from "./components/home/RecipeCategories";
import RecipeList from "./components/recipe/RecipeList";

export default function Home() {
  return (
    <main>
      <section className="container">
        <HeroSection />
        <section className="container py-8">
          <div className="grid grid-cols-12 py-4">
            <RecipeCategories />
            <RecipeList />
          </div>
        </section>
      </section>
    </main>
  );
}
