export default class SocialMedia {
  public name: String
  public link: String

  constructor(name: String, link: String, icon: String, color: String) {
    this.name = name
    this.link = link
    this.icon = icon
    this.color = color
  }

  public icon: String
  public color: String
}
