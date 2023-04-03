import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import Head from "next/head";
import { FC, FormEvent, useState } from "react";


const SearchNewsPage:FC = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState<boolean>(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim();

        if (searchQuery) {
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);

                const response = await fetch(`/api/search-news?q=${searchQuery}`);
                const articles: NewsArticle[] = await response.json();
                setSearchResults(articles);
            } catch (e) {
                console.log(e);
                setSearchResultsLoadingIsError(true);
            } finally {
                setSearchResultsLoading(false);
            }
        }
    }

    return (
        <>
            <Head>
                <title key="title">Search News - News Aggregator</title>
            </Head>
            <main>
                <h1>Search News</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="searchQuery" placeholder="Search politics, sports, etc..."/>
                    <button type="submit" disabled={searchResultsLoading}>
                        Search
                    </button>
                </form>
                {searchResultsLoading && <p>Loading</p>}
                {searchResultsLoadingIsError && <p>Something went wrong</p>}
                {searchResults?.length === 0 && <p>Nothing found. Try a different query</p>}
                {searchResults && <NewsArticlesGrid articles={searchResults}/>}
            </main>
        </>
    )
};

export default SearchNewsPage;