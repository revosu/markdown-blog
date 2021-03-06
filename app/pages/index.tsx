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
      <Seo/>
      <div className='flex mb-12 md:overflow-x-auto md:mb-4'>
        <CategoryButton
          children='New'
          isCurrentCategory={true}
        />
        <CategoryButton
          children='Dev'
          isCurrentCategory={false}
        />
        <CategoryButton
          children='Design'
          isCurrentCategory={false}
        />
        <CategoryButton
          children='Life'
          isCurrentCategory={false}
        />
      </div>
      {allPostsData.map(({ id, date, title, category}) => (
        <li key={id} className='pb-10 list-none md:pb-5'>
          <Link href={`/posts/${id}`}>
            <a>
              <ArticleCard
                title={`${title}`}
                category={`${category}`}
                date={`${date}`}
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
