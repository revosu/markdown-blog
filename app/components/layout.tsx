import Head from 'next/head'
import Link from 'next/link'

export default function Layout({
  children
}:{
  children: React.ReactNode 
}) {
  return (
    <div className=''>
      <header className='flex items-center w-full h-28 border-b border-gray-900 border-opacity-20'>
        <h1 className='pt-2.5 pl-10 font-hind text-5xl font-black'>VOSU</h1>
      </header>
      <main>{ children }</main>
      <footer className='flex justify-center items-center w-full h-20 border-t border-gray-900 border-opacity-20'>
        <div className='pt-1 text-sm'>©︎2021, VOSU All right reserved.</div>
      </footer>
    </div>
  )
}