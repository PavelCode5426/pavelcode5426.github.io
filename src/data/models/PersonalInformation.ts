export default class PersonalInformation {
  public name: string
  public photos: [string, string] // PORTADA Y SOBRE MI
  public professions: string[]
  public presentationPhrase: string
  public aboutMe: string
  public cvLink: string

  public email: string
  public phone: string
  public birthdate: string

  constructor(name: string, photos: [string, string], professions: string[], presentationPhrase: string, aboutMe: string, cvLink: string, email: string, phone: string, birthdate: string) {
    this.name = name
    this.photos = photos
    this.professions = professions
    this.presentationPhrase = presentationPhrase
    this.aboutMe = aboutMe
    this.cvLink = cvLink
    this.email = email
    this.phone = phone
    this.birthdate = birthdate
  }
}
