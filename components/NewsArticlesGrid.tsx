import { FC } from 'react'
import { NewsArticle } from '@/models/NewsArticles';
import NewsArticleItem from './NewsArticleItem';

type NewsArticlesGridProps = {
    articles: NewsArticle[]
}

const NewsArticlesGrid:FC<NewsArticlesGridProps> = ({ articles }) => {
    return (
        <div className='grid gap-7 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4'>
            {articles.map(article => (
                <NewsArticleItem key={article.url} article={article}/>
            ))}
        </div>
    )
};

export default NewsArticlesGrid;