import Head from 'next/head'

export default function Seo({
  pageTitle,
  pageDescription,
}: {
  pageTitle?: String
  pageDescription: string
}) {
  const siteTitle = 'VOSU'
  // const homeDescription = 'renの個人ブログ。エンジニアや自営業、フリーランンスの人たちに何か役立つ情報を発信できるよう日々の知見や感じたことをストックしていきます。'
  const title = pageTitle ? `#{siteTitle} | #{pageTitle}` : siteTitle
  return (
    <Head>
      <title>{ title}</title>
      <meta name='viewport' content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <meta name="description" content={pageDescription} />
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap" rel="stylesheet" />
    </Head>
  )
}