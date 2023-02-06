import jake from '@assets/jake.png'
import diego from '@assets/diego.png'
import rodrigo from '@assets/rodrigo.png'
import mayk from '@assets/mayk.png'
import host from '@assets/host-icon.svg'
import ignite from '@assets/ignite-icon.svg'
import explorer from '@assets/explorer-icon.svg'

export const educatorsProps = [
  {
    name: 'Jake Gracielly',
    img: jake,
    roleIcon: host,
    role: 'Host',
    primaryColor: '#271A45',
    secondaryColor: '#996DFF',
    bio: `Desenvolvedora web há mais de 10 anos reconhecida pela Microsoft
    como Microsoft Most Valuable Professional. Desenvolvedora NodeJS
    e React, DevRel na Rocketseat. Apaixonada por compartilhar
    conhecimento e impulsionar pessoas em suas trajetórias
    profissionais.`,
  },
  {
    name: 'Diego Fernandes',
    img: diego,
    roleIcon: ignite,
    role: 'Trilha Ignite',
    primaryColor: '#00291D',
    secondaryColor: '#54E694',
    bio: `Programador há 11 anos com foco nas melhores tecnologias de
    desenvolvimento web & mobile. Apaixonado por educação e por
    mudar a vida das pessoas através da programação. Mais de 500.000
    pessoas já passaram por um dos seus treinamentos.`,
  },
  {
    name: 'Rodrigo Gonçalves',
    img: rodrigo,
    roleIcon: ignite,
    role: 'Trilha Ignite',
    primaryColor: '#00291D',
    secondaryColor: '#54E694',
    bio: `Graduado em Sistemas, pós-graduado em Project Management PMI,
    Mestre em educação com ênfase em tecnologia e professor
    acadêmico desde 2014. Já lecionou e coordenou a graduação em
    Sistemas de Informação e a pós-graduação em Engenharia de
    Software.`,
  },
  {
    name: 'Mayk Brito',
    img: mayk,
    roleIcon: explorer,
    role: 'Trilha Explorer',
    primaryColor: '#0A3442',
    secondaryColor: '#42D4FF',
    bio: `Programador há mais de 14 anos, é apaixonado por ajudar quem
    está dando os primeiros passos nesse universo. Vem transformando
    milhares de devs através dos seus conteúdos e cursos. Com uma
    didática fácil de assimilar, ele vai te guiar no início da
    jornada.`,
  },
]

export const highlightsProps = [
  {
    spanPlus: true,
    data: '380k',
    dataSpan: 'Devs impactados',
  },
  {
    spanPlus: true,
    data: '2.4m',
    dataSpan: 'De visualizações nas aulas',
  },
  {
    spanPlus: true,
    data: '500h',
    dataSpan: 'Horas de vídeo assistidas',
  },
  {
    spanPlus: false,
    data: '10h',
    dataSpan: 'Edições consolidadas',
  },
]
