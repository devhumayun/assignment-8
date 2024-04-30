import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
} from 'next-share';

const RecipeShare = ({ recipe }) => {
    const imageUrl = recipe.thumbnail;

    return (
        <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6] items-center">
            <span>Share:</span>

            <div className='flex gap-1 items-center'>

                <FacebookShareButton
                    url={"https://assignment-8-pi.vercel.app/"}
                    quote={'Share my recipe'}
                    hashtag={"#recipe"}
                    media={imageUrl}
                >
                    <FacebookIcon size={28} round />
                </FacebookShareButton>
                <LinkedinShareButton url={'https://assignment-8-pi.vercel.app/'}>
                    <LinkedinIcon size={28} round />
                </LinkedinShareButton>
            </div>

        </div>
    );
};

export default RecipeShare;
