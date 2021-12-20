import CategoryTag from "./category-tag"
import Date from "./date"

export default function ArticleCard({
  title,
  category,
  date,
}: {
  title: string
  category: string
  date: string
}) {
  return(
    <div className='px-12 py-10 bg-white border rounded-2xl border-gray-900 border-opacity-20 hover:border-opacity-100 hover:shadow-lg md:p-6'>
      <h2 className='pb-2 text-3xl font-bold md:text-lg md:pb-1'>{ title }</h2>
      <Date dateString={date} />
      <CategoryTag
        children={`${category}`}
      />
    </div>
  )
}
