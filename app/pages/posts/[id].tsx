import Layout from '../../components/layout'
import Seo from '../../components/seo'
import CategoryTag from '../../components/category-tag'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import postContent from '../../styles/postContent.module.scss'
import RelatedArticleCard from '../../components/related-article-card'
import Date from '../../components/date'

export default function Post({
  postData,
  allPostsData,
}: {
  postData: {
    title: string
    date: string
    id: string
    category: string
    contentHtml: string
  }
  allPostsData: {
    date: string
    title: string
    category: string
    id: string
  }[]
}) {
  const relatedArticleCardMaximumNum = 5
  const relatedArticleCardList = allPostsData
                                  .filter(e => e.category === postData.category && e.title !== postData.title)
                                  .slice(0, relatedArticleCardMaximumNum)

  return (
    <Layout>
      <Seo
        pageTitle={postData.title}
      />
      <div className='my-20 rounded-3xl shadow-normal md:my-10'>
        <div className='p-20 md:px-4 md:py-7'>
          <div className='mb-10 md:mb-8'>
            <h1 className='pb-1 text-3xl font-bold md:text-2xl'>{ postData.title }</h1>
            <Date dateString={postData.date} />
            <div className='block'>
              <CategoryTag
                children={ postData.category }
              />
            </div>
          </div>
          <div className={postContent.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        { relatedArticleCardList.length > 0 &&
          <div className='rounded-b-3xl bg-gray-900 bg-opacity-10'>
            <div className='p-16 md:px-4 md:py-10'>
              { relatedArticleCardList.map(({ id, date, title, category }) => (
                <li key={id} className='pb-10 list-none last:pb-0 md:pb-6'>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <RelatedArticleCard
                        title={`${title}`}
                        category={`${category}`}
                        date={`${date}`}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        }
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData,
    },
  }
}
