import { getCategoryByName } from "@/db/quries";
import { recipesModel } from "@/models/recipe-models";
import { dbConnect } from "@/services/database";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async ({ params: { categoryName } }) => {
  await dbConnect();
  await recipesModel.find();
  const catName = categoryName.split("%20%26%20").join(" & ");
  const recipes = await getCategoryByName(catName);

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-slate-200 p-10 shadow-md rounded-md flex flex-col gap-3 items-center">
          <h3>
            No recipes found with the category:{" "}
            <span className="text-red-500">{catName}</span>{" "}
          </h3>
          <Link className="bg-red-500 mt-3 p-2 text-white rounded-md" href="/">
            Go back!
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <section className="container py-8">
        <h3 className="font-semibold text-xl">Appetizers &amp; Snacks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes &&
            recipes.map((recipe) => (
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
