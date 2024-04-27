import { allCategories } from "@/db/quries";
import Link from "next/link";

const RecipeCategories = async () => {
    const categories = await allCategories();
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {
                    categories ? (
                        categories.map((category) => (
                            <li key={category}>
                                <Link href="#">{category}</Link>
                            </li>
                        ))
                    ) : (<p> No Category found </p>)
                }
            </ul>
        </div>
    )
}

export default RecipeCategories
