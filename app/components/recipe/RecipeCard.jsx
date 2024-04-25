import Image from "next/image"

const RecipeCard = () => {
    return (
        <div className="card">
            <Image
                src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                className="rounded-md"
                alt="alt"
                height={400}
                width={400}
            />
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ 5.0</span>
                <span>By: John Doe</span>
            </div>
        </div>
    )
}

export default RecipeCard
