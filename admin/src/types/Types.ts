export interface ISidebarItem {
  title: string
  href: string
}

export interface ISocialNetworkProps {
  icon: string
  link: string
  _id?: string
}

export interface IAboutProps {
  _id?: string
  firstName: {
    fa: string
    en: string
  }
  lastName: {
    fa: string
    en: string
  }
  job: {
    fa: string
    en: string
  }
  address: {
    fa: string
    en: string
  }
  bio: {
    fa: string
    en: string
  }
  gender: {
    fa: string
    en: string
  }
  age: string
  email: string
  phone: string
  socialsNetwork: ISocialNetworkProps[]
  avatar: string
}

export interface IEducationProps {
  _id?: string
  title: {
    fa: string
    en: string
  }
  university: {
    fa: string
    en: string
  }
  location: {
    fa: string
    en: string
  }
  dateStart: {
    fa: string
    en: string
  }
  dateEnd: {
    fa: string
    en: string
  }
  grade: {
    fa: string
    en: string
  }
}

export interface IExperienceProps {
  _id?: string
  title: {
    fa: string
    en: string
  }
  company: {
    fa: string
    en: string
  }
  jobType: {
    fa: string
    en: string
  }
  jobTime: {
    fa: string
    en: string
  }
  dateStart: {
    fa: string
    en: string
  }
  dateEnd: {
    fa: string
    en: string
  }
  description: {
    fa: string
    en: string
  }
  companyLink: string
  skill: string[]
}

export interface IProjectProps {
  _id?: string
  title: {
    fa: string
    en: string
  }
  briefDescription: {
    fa: string
    en: string
  }
  description: {
    fa: string
    en: string
  }
  skills: string[]
  links: {
    id: number
    link: string
  }[]

  images: {
    id: string
    path: string
  }[]
  isActive: boolean
}
