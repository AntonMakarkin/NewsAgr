import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import NewsArticlesGrid from '@/components/NewsArticlesGrid'

type BreakingNewsPageProps = {
  newsArticles: NewsArticle[]
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
  const newsResponse: NewsResponse = await response.json();

  return {
    props: { newsArticles: newsResponse.articles }
  }
}

const BreakingNewsPage:FC<BreakingNewsPageProps> = ({ newsArticles }) => {
  return (
    <>
      <Head>
        <title key="title">NewsAgr - Breaking News</title>
      </Head>
      <main className="max-sm:px-2 max-sm:pt-2 px-10 pt-4">
        <h1 className='text-3xl mb-5'>Breaking News</h1>
        <NewsArticlesGrid articles={newsArticles}/>
      </main>
    </>
  )
}

export default BreakingNewsPage
