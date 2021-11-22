import Head from 'next/head'
import Link from 'next/link'

export default function Layout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <>
      <header className='flex items-center w-full h-24 mb-12 border-b border-gray-900 border-opacity-20'>
        <Link href='/'>
          <a>
            <h1 className='pt-2 pl-12 font-inter text-5xl font-black'>VOSU</h1>
          </a>
        </Link>
      </header>
      <main>
        <div className='w-[1180px] my-0 mx-auto'>{ children }</div>
      </main>
      <footer className='flex justify-center items-center w-full h-20 border-t border-gray-900 border-opacity-20'>
        <div className='pt-1 text-sm'>©︎2021 VOSU All right reserved.</div>
      </footer>
    </>
  )
}