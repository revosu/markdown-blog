import CategoryTag from "./category-tag"
import Date from "./date"

export default function RelatedArticleCard({
  title,
  category,
  date,
}: {
  title: string
  category: string
  date: string
}) {
  return(
    <div className='px-10 py-8 bg-white rounded-2xl border hover:border-gray-900 hover:border-opacity-40 md:px-4 md:py-6'>
      <h2 className='pb-1 text-2xl font-bold md:text-xl'>{ title }</h2>
      <Date dateString={date} />
      <CategoryTag
        children={`${category}`}
      />
    </div>
  )
}
