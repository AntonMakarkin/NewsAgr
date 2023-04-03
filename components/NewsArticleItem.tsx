import { FC, useState } from "react";
import { NewsArticle } from "@/models/NewsArticles";
import placeholder from "../public/placeholder.jpg" 
import Image from "next/image";

type NewsArticleEntryProps = {
    article: NewsArticle
};

const NewsArticleItem:FC<NewsArticleEntryProps> = ({ article: { title, description, url, urlToImage } }) => {
    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : placeholder.src;
    const [imageSrc, setImageSrc] = useState<string>(validImageUrl);


    return (
        <div className="w-full h-full rounded overflow-hidden shadow-lg flex flex-col">
                <Image 
                    src={imageSrc} 
                    alt="News Image" 
                    width={400} 
                    height={250}
                    placeholder="blur"
                    blurDataURL={imageSrc} 
                    onError={() => setImageSrc(placeholder.src)}
                    className="object-cover h-40"/>
            <div className="py-4 px-4 flex flex-col grow">
                <h2 className="font-bold mb-2">{title}</h2>
                <p className="text-sm mb-2 grow">{description}</p>
                <a href={url} className="font-semibold">Read in source</a>
            </div>
        </div>
    )
};

export default NewsArticleItem;