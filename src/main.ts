import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './globals/config/router'

import '../public/assets/css/animate.css'
import '../public/assets/bootstrap/css/bootstrap.min.css'
import '../public/assets/fonts/google_font.css'
import '../public/assets/fonts/google_font2.css'
import '../public/assets/css/ionicons.min.css'
import '../public/assets/css/themify-icons.css'
import '../public/assets/css/all.min.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/owlcarousel/css/owl.carousel.min.css'
import '../public/assets/owlcarousel/css/owl.theme.css'
import '../public/assets/owlcarousel/css/owl.theme.default.min.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/jquery.mCustomScrollbar.min.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  router,
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./globals/plugins/**/*.ts')).forEach(i => i.install?.(ctx))
  },
)
