export interface ISidebarItem {
  title: string
  href: string
}

export interface IEducationProps {
  _id: string
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
