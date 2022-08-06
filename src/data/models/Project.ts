import type Category from '~/data/models/Category'

export default class Project {
  public categories: Category[]
  public name: String
  public clientName: String | undefined
  public photos: String[]
  public date: String
  public link: String | undefined
  public text: String

  constructor(categories: Category[], name: String, clientName: String | undefined, date: String, link: String | undefined, text: String) {
    this.categories = categories
    this.name = name
    this.clientName = clientName
    this.date = date
    this.link = link
    this.text = text

    this.photos = []

    const folderInProjectDir: string = name.replace(' ', '-').toLowerCase()
    const projectPhotos: String[] = []
    const allPhotos = import.meta.globEager('/**/projects/**/*.*')
    Object.keys(allPhotos).forEach((item) => {
      if (item.includes(folderInProjectDir) && !item.includes('-small')) {
        let photoDir = allPhotos[item].default as string
        photoDir = photoDir.replace('/public/', '')
        projectPhotos.push(photoDir)
      }
    })
    this.photos = projectPhotos
  }
}
