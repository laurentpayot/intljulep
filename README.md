# :tropical_drink: intljulep

Super lightweight yet powerful i18n library

<!-- [![dependencies](https://badgen.net/bundlephobia/dependency-count/intljulep)](https://bundlephobia.com/package/intljulep) -->
[![dependencies](https://badgen.net/static/dependencies/None/green)](https://github.com/laurentpayot/intljulep/blob/main/package.json#L59)
![minified + brotlied size](https://badgen.net/static/minified%20brotli/218%20bytes/green)
![minified + zipped size](https://badgen.net/static/minified%20zip/259%20bytes/green)

[![types](https://badgen.net/npm/types/intljulep)](https://github.com/laurentpayot/intljulep/blob/main/index.d.ts)
[![npm version](https://badgen.net/npm/v/intljulep)](https://www.npmjs.com/package/intljulep)
[![license](https://badgen.net/github/license/laurentpayot/intljulep)](https://github.com/laurentpayot/intljulep/blob/main/LICENSE)

## Why

Only [20 lines of code](https://github.com/laurentpayot/intljulep/blob/main/intljulep.js) to get i18n with internal references (translations in your translations) and simple plurals such as in English or in French. No dependencies.

## NodeJS

### Installation

```bash
npm install intljulep
```

### Import

```js
import { i18n } from 'intljulep'
```

## Browser
Intljulep uses [ES modules](https://jakearchibald.com/2017/es-modules-in-browsers/), [widely supported](https://caniuse.com/es6-module) in browsers nowadays. Import the `i18n` function from the `intljulep.min.js` file. This file can be located in a CDN (example below) or copied in any directory of your website (for better performance and to be GDPR compliant, since you don’t have to connect to a third party server).

```html
<script type="module">
  import { i18n } from 'https://cdn.jsdelivr.net/npm/intljulep@0.2.3/intljulep.min.js'
</script>
```

## Usage

```js
i18n.addLocale('en', {
  foo: "the bar",
  plurals: {
    msg: ["message", "messages"],
    man: ["man", "men"],
    woman: ["woman", "women"]
  },
  email: {
    hey: "Hey!",
    // Note the `@` prefix to use other translations in your translation
    info: "Hi {name}. {@email.hey} You have {number} {@plurals.msg(number)}."
  }
})
i18n.setLocale('en')

i18n('foo') // "the bar"
i18n('email.baz') // "email.baz"
i18n('plurals.msg', 0) // "messages"
i18n('plurals.msg', 1) // "message"
i18n('plurals.msg', 2) // "messages"
i18n('plurals.msg', 3) // "messages"
i18n('email.info', { name: "Laurent", number: 0 }) // "Hi Laurent. Hey! You have 0 messages."
i18n('email.info', { name: "Laurent", number: 1 }) // "Hi Laurent. Hey! You have 1 message."
i18n('email.info', { name: "Laurent", number: 2 }) // "Hi Laurent. Hey! You have 2 messages."
i18n('email.info', { name: "Laurent", number: 3 }) // "Hi Laurent. Hey! You have 3 messages."

i18n.addLocale('fr', {
  foo: "le bar"
})
i18n.setLocale('fr')
i18n('foo') // "le bar"

i18n.setLocale('en')
i18n('foo') // "the bar"
```

Note that you don’t have to use the `plurals` key specifically as nothing is hardcoded. You could use a single character key like `s` for convenience:

```js
i18n.addLocale('en', {
  s: {
    msg: ["message", "messages"],
    man: ["man", "men"],
    woman: ["woman", "women"]
  },
})
i18n.setLocale('en')

i18n('s.man', 3) // "men"
```

## License

[MIT](https://github.com/laurentpayot/intljulep/blob/main/LICENSE)

## Stargazers :heart:

[![Stargazers repo roster for @laurentpayot/intljulep](http://reporoster.com/stars/laurentpayot/intljulep)](https://github.com/laurentpayot/intljulep/stargazers)
