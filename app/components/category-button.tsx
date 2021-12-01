
export default function CategoryButton({
  children,
  isCurrentCategory,
}: {
  children: React.ReactNode
  isCurrentCategory: boolean
}) {
  return (
    <div className={`flex justify-center items-center w-40 h-12 pt-0.5 mr-10 tracking-wide cursor-pointer font-bold text-lg font-inter border border-gray-900 border-opacity-20 rounded-3xl hover:border-opacity-100 hover:shadow-lg ${isCurrentCategory ? 'text-white bg-gray-900 border-transparent' : ''}`}>{ children }</div>
  )
}