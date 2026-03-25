interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Bir Arama Motoru',
    description: `Dünyadaki herhangi bir bilgiyi arayabildiğinizi düşünün. Web sayfaları, görseller, videolar
    ve daha fazlası. Google, aradığınızı tam olarak bulmanıza yardımcı olan birçok özellikle gelir.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Zaman Makinesi',
    description: `Geçmişe veya geleceğe seyahat edebildiğinizi hayal edin. Kadranı istediğiniz tarihe çevirip
    "Git" düğmesine basmanız yeterli. Bu basit ve uygun maliyetli çözümle kayıp anahtarlar
    veya unutulan kulaklıklar için endişelenmeyin.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
