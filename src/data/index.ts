import type PersonalInformation from '~/data/models/PersonalInformation'
import type Skill from '~/data/models/Skill'
import type SocialMedia from '~/data/models/SocialMedia'
import type Category from '~/data/models/Category'
import Project from '~/data/models/Project'
import Resume from '~/data/models/Resume'

export const personalInformation: PersonalInformation = {
  name: 'Pavel Perez',
  photos: ['assets/images/me/portal.jpg', 'assets/images/me/about.jpg'],
  professions: [
    'Desarrollador Backend',
    'Desarrollador Frontend',
    'Desarrollador WordPress',
    'Freelancer',
  ],
  presentationPhrase: '',
  aboutMe: 'Soy un apasionado graduado de Ingeniería de Software en el Instituto Superior Politécnico José Antonio Echeverría. Durante mi formación académica, me he enfocado en adquirir habilidades en el desarrollo de aplicaciones web. Durante mi práctica profesional, tuve la oportunidad de trabajar en el desarrollo de un sistema para la gestión de la Cantera Joven de la Universidad, lo cual me permitió aplicar mis conocimientos y adquirir experiencia práctica en el campo.'
        + 'Además, he trabajado como freelance, lo que ha brindado la oportunidad de mejorar mis habilidades técnicas y desarrollar proyectos en los que he aplicado las mejores prácticas de desarrollo de software. Siempre busco mantenerme actualizado y en constante aprendizaje, ya que considero que el crecimiento profesional y el conocimiento continuo son fundamentales en el mundo de la ingeniería de software. Mi objetivo es seguir desarrollando software de alta calidad, aplicando las mejores prácticas y buscando la excelencia en cada proyecto en el que participe.',
  email: 'perezpavel5426@gmail.com',
  phone: '+53 54266836',
  birthdate: '21 de Diciembre de 1999',
  cvLink: 'https://docs.google.com/document/d/13myiTaByE0lY6vbWFJ1hRm5QJjkYq30pTx2oXRDr0-U',
}

export const skills: Skill[] = [
  { name: 'PHP', percent: 75 },
  { name: 'Java', percent: 80 },
  { name: 'JavaScript', percent: 78 },
  { name: 'Python', percent: 80 },
  { name: 'C#', percent: 50 },
  { name: 'CSS', percent: 80 },
  { name: 'HTML', percent: 90 },
  { name: 'PostgresSQL', percent: 90 },
  { name: 'MySQL', percent: 90 },
  { name: 'TypeScript', percent: 80 },
  { name: 'Laravel', percent: 85 },
  { name: 'Flask', percent: 70 },
  { name: 'Django', percent: 80 },
  { name: 'PyQt', percent: 60 },
  { name: 'Django Rest Framework', percent: 80 },
  { name: 'WordPress', percent: 80 },
  { name: 'ASP.NET', percent: 60 },
  { name: 'Boostrap', percent: 80 },
  { name: 'Tailwind CSS', percent: 75 },
  { name: 'jQuery', percent: 75 },
  { name: 'Git', percent: 75 },
  { name: 'REST Services', percent: 90 },
  { name: 'Machine Learning', percent: 40 },
  { name: 'Docker', percent: 60 },
  { name: 'Cypress', percent: 80 },

]

export const socialMedias: SocialMedia[] = [
  { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/pavelcode5426', color: 'text-white' },
  { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/PavelCode5426', color: 'text-white' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', link: 'https://t.me/PavelCode5426', color: 'text-white' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/5354266836', color: 'text-white' },
]

export const projectCategories: Category[] = [
  // { id: 'backend', name: 'Backend' },
  // { id: 'frontend', name: 'Frontend' },
  // { id: 'wordpress', name: 'WordPress' },
  // { id: 'woocommerce', name: 'Woocommerce' },
  // { id: 'laravel', name: 'Laravel' },
  // { id: 'django', name: 'Django' },
  { id: 'ecommerce', name: 'e-Commerce' },
  { id: 'elearning', name: 'e-Learning' },
  { id: 'investment-plataform', name: 'Investment Platform' },
  { id: 'sports', name: 'Sports' },
]

export const projects: Project[] = [
  new Project(
    [
      // projectCategories[0],
      // projectCategories[1],
      // projectCategories[2],
      // projectCategories[3],
      // projectCategories[7]
      projectCategories[0],
    ],
    'Familia Velazquez',
    'Rafael Castillo',
    'Diciembre 2020',
    'https://www.familia-velazquez.com',
    '',
    [
      'projects/familia-velazquez/1.jpg',
      'projects/familia-velazquez/2.jpg',
      'projects/familia-velazquez/3.jpg',
      'projects/familia-velazquez/4.jpg',
    ],
  ),
  new Project(
    [
      // projectCategories[0],
      // projectCategories[1],
      // projectCategories[2],
      // projectCategories[6]
      projectCategories[0],
      projectCategories[1],
    ],
    'Frateli',
    undefined,
    'Noviembre 2021',
    undefined,
    '',
    [
      'projects/frateli/1.jpg',
      'projects/frateli/2.jpg',
      'projects/frateli/3.jpg',
      'projects/frateli/4.jpg',
      'projects/frateli/5.jpg',
    ],
  ),
  new Project(
    [
      // projectCategories[0],
      // projectCategories[4]
      projectCategories[0],
      projectCategories[2],
    ],
    'Stamina Investments',
    undefined,
    'Mayo 2022',
    'https://www.staminainvestment.com',
    '',
    [
      'projects/stamina-investments/1.jpg',
      'projects/stamina-investments/2.jpg',
      'projects/stamina-investments/3.jpg',
      'projects/stamina-investments/4.jpg',
      'projects/stamina-investments/5.jpg',
    ],
  ),
  new Project(
    [
      // projectCategories[0],
      // projectCategories[1],
      // projectCategories[2],
      // projectCategories[3],
      // projectCategories[7]
      projectCategories[0],

    ],
    'Xprobots',
    'Rafael Castillo',
    'Enero 2022',
    'https://www.xprobots.com',
    '',
    [
      'projects/xprobots/1.jpg',
      'projects/xprobots/2.jpg',
      'projects/xprobots/3.jpg',
      'projects/xprobots/4.jpg',
    ],
  ),
  new Project(
    [
      // projectCategories[0],
      // projectCategories[1],
      // projectCategories[5],
      // projectCategories[7]
      projectCategories[0],

    ],
    'Vralex Airline Services',
    'Vralex Company',
    'Septiembre 2022',
    'https://tickets.vralex.com',
    '',
    [
      'projects/vralex-airline-services/1.jpg',
      'projects/vralex-airline-services/2.jpg',
      'projects/vralex-airline-services/3.jpg',
      'projects/vralex-airline-services/4.jpg',
      'projects/vralex-airline-services/5.jpg',
      'projects/vralex-airline-services/6.jpg',
      'projects/vralex-airline-services/7.jpg',
      'projects/vralex-airline-services/8.jpg',
      'projects/vralex-airline-services/9.jpg',
      'projects/vralex-airline-services/10.jpg',
      'projects/vralex-airline-services/11.jpg',
    ],
  ),
  new Project(
    [
      // projectCategories[0],
      // projectCategories[1],
      // projectCategories[2],
      // projectCategories[3],
      // projectCategories[7]
      projectCategories[0],

    ],
    'Que Pijo',
    undefined,
    'Septiembre 2022',
    'https://quepijo.com',
    '',
    [
      'projects/quepijo/1.jpg',
      'projects/quepijo/2.jpg',
      'projects/quepijo/6.jpg',
      'projects/quepijo/3.jpg',
      'projects/quepijo/5.jpg',
    ],
  ),
  new Project([
    projectCategories[3],
  ],
  'Decalixto',
  'Nestor Calixto',
  'Septiembre 2023',
  'https://dev.decalixto.com',
  '',
  [
    'projects/decalixto/1.jpg',
    'projects/decalixto/2.jpg',
    'projects/decalixto/3.jpg',
    'projects/decalixto/4.jpg',
    'projects/decalixto/5.jpg',
    'projects/decalixto/6.jpg',
    'projects/decalixto/7.jpg',
    'projects/decalixto/8.jpg',
    'projects/decalixto/9.jpg',
    'projects/decalixto/10.jpg',
    'projects/decalixto/11.jpg',
    'projects/decalixto/12.jpg',
    'projects/decalixto/13.jpg',
    'projects/decalixto/14.jpg',
  ],
  ),
]

export const educationResume: Resume[] = [
  new Resume(
    'Universidad Tecnologica de la Habana Jose Antonio Echeverria',
    'CUJAE',
    '2018 - 2023',
    '',
  ),
  new Resume('Curso de Python Intermedio', 'DESOFT', '2023', ''),
  new Resume('Curso de Machine Learning', 'DESOFT', '2023', ''),
]

export const experienceResume: Resume[] = [
  new Resume('Aerovaradero S.A', '', '2018 - Presente', ''),
]
