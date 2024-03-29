function i18n(path, data) {
  const val = path.split('.').reduce((acc, curr) => acc[curr], i18n.locales[i18n.localeLang])
  if (Array.isArray(val)) {
    return val[data - 1] || val[val.length - 1]
  } else {
    return val ? val
      .replace(/{[^@}]+}/g, s => data[s.slice(1, -1)])
      .replace(/{@[^}]+}/g, s => {
        let n
        const subpath = s.slice(2, -1).replace(/\(.*\)/, argStr => {
          n = data[argStr.slice(1, -1)]
          return '' // removing eventual argument list string
        })
        return i18n(subpath, n ?? data)
      })
      : path
  }
}

i18n.locales = {}
i18n.addLocale = (lang, dic) => i18n.locales[lang] = dic
i18n.setLocale = lang => i18n.localeLang = lang

export { i18n }
