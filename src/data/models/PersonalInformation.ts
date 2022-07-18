export default class PersonalInformation {
  public name: String
  public photos: [String, String]
  public professions: String[]
  public presentationPhrase: String
  public aboutMe: String
  public cvLink: String

  public email: String
  public phone: String
  public birthdate: String

  constructor(name: String, photos: [String, String], professions: String[], presentationPhrase: String, aboutMe: String, cvLink: String, email: String, phone: String, birthdate: String) {
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
