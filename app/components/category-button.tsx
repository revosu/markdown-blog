import Link from "next/link"

export default function CategoryButton({
  children,
  isCurrentCategory,
}: {
  children: React.ReactNode
  isCurrentCategory: boolean
}) {
  const lowerCaseCategoryName = children.toString().toLowerCase()
  return (
    <Link href={children === 'New' ? '/' :`/category/${lowerCaseCategoryName}`}>
      <a>
        <div className={`flex justify-center items-center w-40 h-12 pt-0.5 mr-10 tracking-wide font-bold text-lg font-inter border border-gray-900 border-opacity-20 rounded-3xl hover:border-opacity-100 hover:shadow-lg ${isCurrentCategory ? 'text-white bg-gray-900 border-transparent' : ''}`}>{ children }</div>
      </a>
    </Link>
  )
}