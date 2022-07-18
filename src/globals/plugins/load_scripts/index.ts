import { type UserModule } from '~/types/types'
import { load_script } from '~/helpers/vue.loadscript'

export const install: UserModule = async () => {
  await load_script('assets/js/jquery-1.12.4.min.js')
  await load_script('assets/js/jquery-ui.js')
  await load_script('assets/bootstrap/js/bootstrap.min.js')
  await load_script('assets/owlcarousel/js/owl.carousel.min.js')
  await load_script('assets/js/magnific-popup.min.js')
  await load_script('assets/js/waypoints.min.js')
  await load_script('assets/js/parallax.js')
  await load_script('assets/js/jquery.countdown.min.js')
  await load_script('assets/js/jquery.counterup.min.js')
  await load_script('assets/js/imagesloaded.pkgd.min.js')
  await load_script('assets/js/isotope.min.js')
  await load_script('assets/js/vanilla-tilt.babel.min.js')
  await load_script('assets/js/typed.min.js')
  await load_script('assets/js/typed-text.js')
  await load_script('assets/js/jquery.mCustomScrollbar.concat.min.js')
  await load_script('assets/js/scripts.js')
}
