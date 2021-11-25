export default function CategoryTag({
  categoryTag
}: {
  categoryTag: string
}) {
  let categoryClassName: string
  switch (categoryTag) {
    case 'Dev':
      categoryClassName = 'bg-category-dev'
      break;
    case 'Design':
      categoryClassName = 'bg-category-design'
      break;
    case 'Life':
      categoryClassName = 'bg-category-life'
      break;
  }
  return(
    <div className={`inline-block px-10 py-1.5 text-white font-bold text-xl ${categoryClassName} rounded-3xl tracking-wide`}>
      { categoryTag }
    </div>
  )
}