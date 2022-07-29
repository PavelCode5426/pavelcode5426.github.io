export default class Resume {
  public name: String
  public secondaryName: String
  public time: String
  public description: String

  constructor(name: String, secondaryName: String, time: String, description: String) {
    this.name = name
    this.secondaryName = secondaryName
    this.time = time
    this.description = description
  }
}
