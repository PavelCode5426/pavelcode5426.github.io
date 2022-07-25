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
export function updateCarousel(selector: string, callbacks: Object = {}) {
  const $carousel = jQuery(selector)
  const params = {
    dots: $carousel.data('dots'),
    loop: $carousel.data('loop'),
    items: $carousel.data('items'),
    margin: $carousel.data('margin'),
    mouseDrag: $carousel.data('mouse-drag'),
    touchDrag: $carousel.data('touch-drag'),
    autoHeight: $carousel.data('autoheight'),
    center: $carousel.data('center'),
    nav: $carousel.data('nav'),
    rewind: $carousel.data('rewind'),
    navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
    autoplay: $carousel.data('autoplay'),
    animateIn: $carousel.data('animate-in'),
    animateOut: $carousel.data('animate-out'),
    autoplayTimeout: $carousel.data('autoplay-timeout'),
    smartSpeed: $carousel.data('smart-speed'),
    responsive: $carousel.data('responsive'),
    ...callbacks,
  }
  $carousel.owlCarousel(params)
}
export function makeid(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  return result
}

