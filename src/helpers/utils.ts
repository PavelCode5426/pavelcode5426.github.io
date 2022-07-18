import type Category from '~/data/models/Category'

interface literalCategoriesType {
  asClass: String
  asNames: String
}
export function literalCategories(categories: Category[]): literalCategoriesType {
  let literalCategoriesClass = ''
  let literalCategoriesNames = ''
  categories.forEach((item) => {
    literalCategoriesClass += ` ${item.id}`
    if (literalCategoriesNames === '')
      literalCategoriesNames += item.name
    else literalCategoriesNames += `, ${item.name}`
  })
  return { asClass: literalCategoriesClass, asNames: literalCategoriesNames }
}
