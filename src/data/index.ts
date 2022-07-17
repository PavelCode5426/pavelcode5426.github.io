import type PersonalInformation from '~/data/models/PersonalInformation'
import type Skill from '~/data/models/Skill'
import type SocialMedia from '~/data/models/SocialMedia'

export const personalInformation: PersonalInformation = {
  name: 'Pavel Perez',
  photos: ['assets/images/pavel/IMG_3379.jpg', 'assets/images/pavel/IMG_20220717.jpg'],
  professions: [
    'Universitario',
    'Desarrollador Backend',
    'Desarrollador Frontend',
  ],
  presentationPhrase: 'Soy una persona organizada y muy motivada, puedo adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y promover valores como el compañerismo.',
  // TODO CAMBIAR TEXTO SOBRE MI
  aboutMe: 'Soy una persona organizada y muy motivada, puedo adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y promover valores como el compañerismo.',
  email: 'perezpavel5426@gmail.com',
  phone: '+53 54266836',
  birthdate: '21 de Diciembre de 1999',
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

]
