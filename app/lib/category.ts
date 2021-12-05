const categories = ['dev', 'design', 'life']

export function getAllCategories() {
  return categories.map((category) => {
    return {
      params: {
        id: category,
      },
    }
  })
}
