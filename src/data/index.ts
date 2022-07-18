import type PersonalInformation from '~/data/models/PersonalInformation'
import type Skill from '~/data/models/Skill'
import type SocialMedia from '~/data/models/SocialMedia'
import type Category from '~/data/models/Category'
import Project from '~/data/models/Project'

export const personalInformation: PersonalInformation = {
  name: 'Pavel Perez',
  photos: ['assets/images/pavel/IMG_3379.jpg', 'assets/images/pavel/IMG_20220717.jpg'],
  professions: [
    'Desarrollador Backend',
    'Desarrollador Frontend',
    'Desarrollador WordPress',
    'Freelancer',
  ],
  presentationPhrase: 'Soy una persona organizada y muy motivada, puedo adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y promover valores como el compañerismo.',
  // TODO CAMBIAR TEXTO SOBRE MI
  aboutMe: 'Soy una persona organizada y muy motivada, puedo adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y promover valores como el compañerismo.',
  email: 'perezpavel5426@gmail.com',
  phone: '+53 54266836',
  birthdate: '21 de Diciembre de 1999',
  cvLink: '/cv/Curriculum%20Vitae%20Pavel%20Perez%20Gonzalez.doc',
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
  { name: 'Django Rest Framework', percent: 80 },
  { name: 'WordPress', percent: 80 },
  { name: 'ASP.NET', percent: 60 },
  { name: 'Boostrap', percent: 80 },
  { name: 'Tailwind CSS', percent: 75 },
  { name: 'jQuery', percent: 75 },
  { name: 'REST Services', percent: 90 },
]

export const socialMedias: SocialMedia[] = [
  { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/pavelcode5426', color: 'text-white' },
  { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/PavelCode5426', color: 'text-white' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', link: 'https://t.me/PavelCode5426', color: 'text-white' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/5354266836', color: 'text-white' },
]

export const projectCategories: Category[] = [
  { id: 'backend', name: 'Backend' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'wordpress', name: 'WordPress' },
  { id: 'woocommerce', name: 'Woocommerce' },
]

export const projects: Project[] = [
  new Project(
    [projectCategories[0], projectCategories[1], projectCategories[2]],
    'Familia Velazquez',
    'Rafael Castillo',
    'Diciembre 2020',
    'https://www.familia-velazquez.com',
    'Texto del Proyecto',
  ),
]
