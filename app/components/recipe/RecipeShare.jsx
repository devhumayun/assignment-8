import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
} from 'next-share';
import { useRouter } from 'next/navigation';

const RecipeShare = ({ recipe, auth }) => {
    const imageUrl = recipe.thumbnail;
    const router = useRouter();
    const handleSharePermit = () => {
        if (!auth) {
            router.push("/login");
        }
    };

    return (
        <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6] items-center">
            <span>Share:</span>

            <div onClick={(e) => handleSharePermit(e)} className='flex gap-1 items-center'>
                {
                    auth ? (
                        <button disabled={!auth}>
                            <FacebookShareButton
                                url={"https://learnwithsumit.com/"}
                                quote={'Share my recipe'}
                                hashtag={"#recipe"}
                                media={imageUrl}
                            >
                                <FacebookIcon size={28} round />
                            </FacebookShareButton>
                            <LinkedinShareButton url={'https://learnwithsumit.com/'}>
                                <LinkedinIcon size={28} round />
                            </LinkedinShareButton>
                        </button>
                    ) : (
                        <>
                            <FacebookShareButton
                                url={"https://learnwithsumit.com/"}
                                quote={'Share my recipe'}
                                hashtag={"#recipe"}
                                media={imageUrl}
                            >
                                <FacebookIcon size={28} round />
                            </FacebookShareButton>
                            <LinkedinShareButton url={'https://learnwithsumit.com/'}>
                                <LinkedinIcon size={28} round />
                            </LinkedinShareButton>
                        </>
                    )
                }

            </div>

        </div>
    );
};

export default RecipeShare;
