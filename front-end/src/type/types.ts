export interface ILanguageProps {
  language: 'fa' | 'en'
}

export interface IImageProps {
  _id: string
  url: string
  name: string
  type: string
}

export interface ISocialNetworkProps {
  icon: string
  link: string
  _id?: string
}
