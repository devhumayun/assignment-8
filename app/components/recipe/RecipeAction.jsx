"use client"

import { addOrRemoveFavourite } from "@/app/actions"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import RecipeShare from "./RecipeShare"

const RecipeAction = ({ recipe }) => {
    const { auth } = useAuth()
    const router = useRouter()
    const isFavourite = auth?.favourites?.find((id) => id === recipe?.id)
    const [favourite, setFavourite] = useState(isFavourite)
    const handleFavouriteToggle = async () => {
        try {
            if (auth) {
                await addOrRemoveFavourite(recipe?.id, auth?.id)
                setFavourite(!favourite)
            } else {
                router.push("/login")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex gap-4 justify-end items-center">
            <div onClick={handleFavouriteToggle} className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]">
                {
                    favourite ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="red"
                            stroke="currentColor"
                            strokeWidth={0}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                    ) :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                }
                <span>Favourite</span>
            </div>
            <RecipeShare recipe={recipe} auth={auth} />
        </div>
    )
}

export default RecipeAction
