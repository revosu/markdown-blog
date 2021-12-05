import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllCategories } from '../../lib/category'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import CategoryButton from '../../components/category-button'
import Seo from '../../components/seo'
import ArticleCard from '../../components/article-card'
import Link from 'next/link'
import { Children } from 'react'

export default function Category(
  {
    category,
    allPostsData,
  }: {
    category:string
    allPostsData: {
      date: string
      title: string
      category: string
      id: string
    }[]
  }
) {
  const isCurrentCategoryFlag = (children: string) => category === children
  return(
    <Layout>
      <Seo/>
      <div className='flex mb-12'>
        <CategoryButton
          children='New'
          isCurrentCategory={isCurrentCategoryFlag('new') ? true : false}
        />
        <CategoryButton
          children='Dev'
          isCurrentCategory={isCurrentCategoryFlag('dev') ? true : false}
        />
        <CategoryButton
          children='Design'
          isCurrentCategory={isCurrentCategoryFlag('design') ? true : false}
        />
        <CategoryButton
          children='Life'
          isCurrentCategory={isCurrentCategoryFlag('life') ? true : false}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCategories()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const category = params.id as string
  const allPostsData = getSortedPostsData().filter(e => e.category.toLocaleLowerCase() === `${category}`)
  return {
    props: {
      category,
      allPostsData,
    },
  }
}