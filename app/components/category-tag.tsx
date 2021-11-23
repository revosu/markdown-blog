export default function CategoryTag({
  categoryTag
}: {
  categoryTag: string
}) {
  let categoryType: string
  switch (categoryTag) {
    case 'Dev':
      categoryType = 'dev'
      break;
    case 'Design':
      categoryType = 'design'
      break;
    case 'Life':
      categoryType = 'life'
      break;
  }
  return(
    <div className={`inline-block px-10 py-1.5 text-white font-bold text-xl bg-category-${categoryType} rounded-3xl tracking-wide`}>
      { categoryTag }
    </div>
  )
}