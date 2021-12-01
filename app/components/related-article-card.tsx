import CategoryTag from "./category-tag"

export default function RelatedArticleCard({
  title,
  category,
}: {
  title: string
  category: string
}) {
  return(
    <div className='px-10 py-8 bg-white rounded-2xl border hover:border-gray-900 hover:border-opacity-40'>
      <h2 className='pb-1 text-2xl font-bold'>{ title }</h2>
      <div className='pb-3 text-base text-gray-900 text-opacity-50'>2021.11.05</div>
      <CategoryTag
        categoryTag={`${category}`}
      />
    </div>
  )
} 