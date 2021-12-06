import Head from 'next/head'
import Link from 'next/link'

export default function Layout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <>
      <header className='flex items-center w-full h-24 mb-12 border-b border-gray-900 border-opacity-20 md:h-20 md:mb-8'>
        <Link href='/'>
          <a className='block'>
            <h1 className='pt-2 pl-12 font-inter text-5xl font-black md:pt-1 md:pl-4 md:text-3xl'>VOSU</h1>
          </a>
        </Link>
      </header>
      <main>
        <div className='w-[1100px] my-0 mx-auto md:max-w-[90%]'>{ children }</div>
      </main>
      <footer className='flex justify-center items-center w-full h-20 border-t border-gray-900 border-opacity-20 md:h-16'>
        <div className='pt-1 text-sm md:text-xs'>©︎2021 VOSU All right reserved.</div>
      </footer>
    </>
  )
}