import Layout from '../components/layout'
import Seo from '../components/seo'
import CategoryButton from '../components/category-button'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
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
