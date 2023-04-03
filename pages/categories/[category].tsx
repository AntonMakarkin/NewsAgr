import { FC } from "react";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetStaticPaths, GetStaticProps } from "next";
import { apiRootUrl } from "@/constants/constants";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { title } from "process";
import Head from "next/head";
import { useRouter } from "next/router";

type CategoryNewsPageProps = {
    newsArticles: NewsArticle[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categorySlugs = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
    ];

    const paths = categorySlugs.map(slug => ({ params: { category: slug } }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
    const category = params?.category?.toString();
    const response = await fetch(`${apiRootUrl}/top-headlines?country=ru&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    const newsResponse: NewsResponse = await response.json();

    return {
        props: { newsArticles: newsResponse.articles },
        revalidate: 5 * 60
    }
}

const CategoryNewsPage:FC<CategoryNewsPageProps> = ({ newsArticles }) => {
    const router = useRouter();
    const categoryName = router.query.category?.toString();

    const title = `Category: ${categoryName}`;

    return (
        <>
            <Head>
                <title key="title">{`${title} - News Aggregator`}</title>
            </Head>
            <main>
                <NewsArticlesGrid articles={newsArticles}/>
            </main>
        </>
    )
}

export default CategoryNewsPage;