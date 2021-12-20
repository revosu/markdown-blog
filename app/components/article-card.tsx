import CategoryTag from "./category-tag"

export default function ArticleCard({
  title,
  category,
}: {
  title: string
  category: string
}) {
  return(
    <div className='px-12 py-10 bg-white border rounded-2xl border-gray-900 border-opacity-20 hover:border-opacity-100 hover:shadow-lg md:p-6'>
      <h2 className='pb-2 text-3xl font-bold md:text-lg md:pb-1'>{ title }</h2>
      <div className='pb-4 text-base text-gray-900 text-opacity-50 md:text-sm'>2021.11.05</div>
      <CategoryTag
        children={`${category}`}
      />
    </div>
  )
}
