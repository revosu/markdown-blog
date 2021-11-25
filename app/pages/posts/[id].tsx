import Layout from '../../components/layout'
import Seo from '../../components/seo'
import CategoryTag from '../../components/category-tag'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import postContent from '../../styles/postContent.module.scss'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    id: string
    category: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Seo
        pageTitle={postData.title}
      />
      <div className='rounded-3xl shadow-normal'>
        <div className='p-16'>
          <div className='pb-10'>
            <h1 className='pb-1 text-3xl font-bold'>{ postData.title }</h1>
            <time className='block pb-5 text-lg text-gray-900 text-opacity-50'>{ postData.date }</time>
            <div className='block'>
              <CategoryTag
                categoryTag={ postData.category }
              />
            </div>
          </div>
          <div className={postContent.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
