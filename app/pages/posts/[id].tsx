import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'


export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    id: string
    contentHtml: string
  }
}) {
  return (
    <div>
      {postData.title}
      <br />
      {
        postData.id
      }
      <br />
      {
        postData.date
      }
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
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
