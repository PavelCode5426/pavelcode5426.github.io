export interface NavLinkProps {
  href: {
    type: string
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
