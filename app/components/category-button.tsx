
export default function CategoryButton({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center items-center w-44 h-14 pt-0.5 mr-10 tracking-wide cursor-pointer font-bold text-xl font-inter border border-gray-900 border-opacity-20 rounded-3xl hover:border-opacity-100 hover:shadow-lg'>{ children }</div>
  )
}