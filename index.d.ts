type I18nFn = (path: string, data?: object) => string

type I18nProps = {
  locales: object
  localeLang?: string
  addLocale: (language: string, locale: object) => void
  setLocale: (language: string) => void
}

export type I18n = I18nFn & I18nProps

export const i18n: I18n
