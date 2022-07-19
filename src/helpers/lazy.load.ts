import lozad from 'lozad'

// TODO Intentar autogenerar la imagen
export class ThumbnailConverterImage {
  public generateThumbnail(urlImg: string) {
    const urlThumnail = this.generateThumbnailFormat(urlImg)
    return urlThumnail
  }

  protected generateThumbnailFormat(urlImg: string): string {
    const extensionStart = urlImg.lastIndexOf('.')
    const urlThumnail = `${urlImg.substring(0, extensionStart)}-small${urlImg.substring(extensionStart)}`
    return urlThumnail
  }
}

// https://github.com/ApoorvSaxena/lozad.js
// npm install jimp
export default class LazyLoad {
  private static instance: LazyLoad | undefined = undefined
  private _observer: any
  protected defaultSelector = '.lazyLoad'

  private constructor() {
    const config = {
      load: (el) => {
        this.loadImage(el)
      },
      loaded: (el) => {
        const event = new Event('loaded')
        el.dispatchEvent(event)
      },
    }
    this._observer = lozad(this.defaultSelector, config)
  }

  public static getInstance(): LazyLoad {
    if (this.instance === undefined)
      this.instance = new LazyLoad()
    return this.instance
  }

  public observe() {
    this._observer.observe()
  }

  public loadBeforeEnter(selectors: string) {
    const element = document.querySelector(selectors)
    this._observer.triggerLoad(element)
  }

  private loadImage(element: HTMLElement) {
    if (element instanceof HTMLImageElement) {
      const image = new Image()
      image.src = element.getAttribute('data-src')
      // image.onload = () => setTimeout(() => element.setAttribute('src', image.src), 5000)
      image.onload = () => element.setAttribute('src', image.src)

      const srcset = element.getAttribute('data-srcset')
      element.setAttribute('src', srcset)
    }
  }

  get observer(): any {
    return this._observer
  }
}

