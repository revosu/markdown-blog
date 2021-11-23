export default function CategoryTag({
  categoryTag
}: {
  categoryTag: string
}) {
  let categoryType: string
  switch (categoryTag) {
    case 'Dev':
      categoryType = 'bg-category-dev'
      break;
    case 'Design':
      categoryType = 'bg-category-design'
      break;
    case 'Life':
      categoryType = 'bg-category-life'
      break;
  }
  return(
    <div className={`inline-block px-10 py-1.5 text-white font-bold text-xl ${categoryType} rounded-3xl tracking-wide`}>
      { categoryTag }
    </div>
  )
}