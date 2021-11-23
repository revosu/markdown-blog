import Layout from '../components/layout'
import Seo from '../components/seo'
import CategoryButton from '../components/category-button'
import ArticleCard from '../components/article-card'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    category: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Seo
        pageDescription=''
      />
      <div className='flex mb-12'>
        <CategoryButton
          children='New'
        />
        <CategoryButton
          children='Dev'
        />
        <CategoryButton
          children='Design'
        />
        <CategoryButton
          children='Life'
        />
      </div>
      {allPostsData.map(({ id, date, title, category}) => (
        <li key={id} className='pb-10 list-none'>
          <Link href={`/posts/${id}`}>
            <a>
              <ArticleCard
                title={`${title}`}
                category={`${category}`}
              />
            </a>
          </Link>
        </li>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
