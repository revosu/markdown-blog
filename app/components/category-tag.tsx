export default function CategoryTag({
  children
}: {
  children: React.ReactNode
}) {
  let categoryClassName: string
  switch (children) {
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
    <div className={`inline-block px-8 py-1.5 text-white font-bold text-l ${categoryClassName} rounded-3xl tracking-wide`}>
      { children }
    </div>
  )
}