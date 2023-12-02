export interface ISidebarItem {
  title: string
  href: string
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
