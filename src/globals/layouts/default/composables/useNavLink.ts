export interface NavLinkProps {
  href: {
    type: String
    default: '#'
  }
  customClass: {
    type: String
    required: false
  }
  name: {
    type: String
  }
}
