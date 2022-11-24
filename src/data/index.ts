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
  aboutMe: 'Soy un estudiante de Ingenieria de Software del Instituto Superior Politecnico Jose Antonio Echeverria. '
        + 'Durante estos años me preparé con las tecnologías de <strong>Desarrollo Web</strong>. '
        + 'En mi práctica profesional, desarrollé un sistema para la Gestion de la Cantera Joven de la Universidad. '
        + 'También trabajé como freelance para mejorar mis habilidades y experiencia. '
        + 'Mi objetivo es mantener un crecimiento continuo en mi vida profesional y conocimiento.',
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
  { name: 'Django Rest Framework', percent: 80 },
  { name: 'WordPress', percent: 80 },
  { name: 'ASP.NET', percent: 60 },
  { name: 'Boostrap', percent: 80 },
  { name: 'Tailwind CSS', percent: 75 },
  { name: 'jQuery', percent: 75 },
  { name: 'Git', percent: 75 },
  { name: 'REST Services', percent: 90 },
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
      'projects/familia-velazquez/1.png',
      'projects/familia-velazquez/2.png',
      'projects/familia-velazquez/3.png',
      'projects/familia-velazquez/4.png',
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
      'projects/frateli/1.png',
      'projects/frateli/2.png',
      'projects/frateli/3.png',
      'projects/frateli/4.png',
      'projects/frateli/5.png',
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
      'projects/stamina-investments/1.png',
      'projects/stamina-investments/2.png',
      'projects/stamina-investments/3.png',
      'projects/stamina-investments/4.png',
      'projects/stamina-investments/5.png',
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
      'projects/xprobots/1.png',
      'projects/xprobots/2.png',
      'projects/xprobots/3.png',
      'projects/xprobots/4.png',
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
      'projects/vralex-airline-services/1.png',
      'projects/vralex-airline-services/2.png',
      'projects/vralex-airline-services/3.png',
      'projects/vralex-airline-services/4.png',
      'projects/vralex-airline-services/5.png',
      'projects/vralex-airline-services/6.png',
      'projects/vralex-airline-services/7.png',
      'projects/vralex-airline-services/8.png',
      'projects/vralex-airline-services/9.png',
      'projects/vralex-airline-services/10.png',
      'projects/vralex-airline-services/11.png',
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
      'projects/quepijo/1.png',
      'projects/quepijo/2.png',
      'projects/quepijo/6.png',
      'projects/quepijo/3.png',
      'projects/quepijo/5.png',
    ],
  ),
]

export const educationResume: Resume[] = [
  new Resume(
    'Universidad Tecnologica de la Habana Jose Antonio Echeverria',
    'CUJAE',
    '2018 - Presente',
    '',
  ),
]

export const experienceResume: Resume[] = [
]
