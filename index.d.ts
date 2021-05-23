export function i18n(path: string, data: object): string

export interface i18n {
  locales: object
  addLocale: (lang: string, dic: object) => void
  setLocale: (lang: string) => void
}
