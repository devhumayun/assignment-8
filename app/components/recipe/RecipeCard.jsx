import Image from "next/image"
import Link from "next/link"

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipe/${recipe?.id}`} className="card">
            <Image
                src={recipe?.thumbnail}
                className="rounded-md"
                alt="alt"
                height={400}
                width={400}
            />
            <h4 className="my-2">{recipe?.name}</h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {recipe?.rating}.0</span>
                <span className="cursor-pointer">By: {recipe?.author}</span>
            </div>
        </Link>
    )
}

export default RecipeCard
