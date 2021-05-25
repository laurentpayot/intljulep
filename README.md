# :tropical_drink: intljulep

[![npm bundle size](https://badgen.net/bundlephobia/minzip/intljulep)](https://bundlephobia.com/result?p=intljulep)
[![npm dependencies](https://badgen.net/david/dep/laurentpayot/intljulep)](https://david-dm.org/laurentpayot/intljulep)
[![Build Status](https://badgen.net/travis/laurentpayot/intljulep)](https://travis-ci.org/laurentpayot/intljulep)
[![npm version](https://badgen.net/npm/v/intljulep)](https://www.npmjs.com/package/intljulep)
[![license](https://badgen.net/github/license/laurentpayot/intljulep)](https://github.com/laurentpayot/intljulep/blob/main/LICENSE)

## Why

Only [20 lines of code](https://github.com/laurentpayot/intljulep/blob/master/intljulep.js) to get i18n with internal references (use translations in your translations!) and simple plurals such as in English or in French.

## Installation

Be sure to use a NodeJS version greater or equal to **13.2.0** to support [ES modules](https://nodejs.org/api/esm.html).

```shell
npm install intljulep
```

## Usage

```js
import { i18n } from 'intljulep'

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
