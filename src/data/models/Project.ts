import type Category from '~/data/models/Category'

export default class Project {
  public categories: Category[]
  public name: string
  public clientName: string | undefined
  public photos: string[]
  public date: string
  public link: string | undefined
  public text: string

  constructor(categories: Category[], name: string, clientName: string | undefined, date: string, link: string | undefined, text: string, photos: string[] = []) {
    this.categories = categories
    this.name = name
    this.clientName = clientName
    this.date = date
    this.link = link
    this.text = text

    this.photos = photos

    if (!photos.length) {
      const folderInProjectDir: string = name.replace(' ', '-').toLowerCase()
      const projectPhotos: string[] = []
      const allPhotos = import.meta.globEager('/**/projects/**/*.*')
      Object.keys(allPhotos).forEach((item) => {
        if (item.includes(folderInProjectDir) && !item.includes('-small') && !item.includes('dist')) {
          let photoDir = allPhotos[item].default as string
          photoDir = photoDir.replace('/public/', '')
          projectPhotos.push(photoDir)
        }
      })
      this.photos = projectPhotos
    }
  }
}
