import { getCategoryByName } from "@/db/quries";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async ({ params: { categoryName } }) => {
  const catName = categoryName.split("%20%26%20").join(" & ");
  const recipes = await getCategoryByName(catName);
  return (
    <main>
      <section className="container py-8">
        <h3 className="font-semibold text-xl">Appetizers &amp; Snacks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes.map((recipe) => (
            <div key={recipe?.id} className="card">
              <Link href={`/recipe/${recipe._id}`}>
                <Image
                  src={recipe?.thumbnail}
                  className="rounded-md"
                  alt={recipe?.name}
                  width={500}
                  height={500}
                />
                <h4 className="my-2">{recipe?.name}</h4>
                <div className="py-2 flex justify-between text-xs text-gray-500">
                  <span>⭐️ {recipe?.rating}</span>
                  <span>By: {recipe?.author}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
