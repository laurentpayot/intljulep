# :leaves: intljulep :tropical_drink:

Minimalist yet powerful i18n library

## Why

20 lines of code to get i18n with internal references (i.e. you can reuse translations) and simle plurals (such as for English or French).

## Installation

```shell
npm install intljulep
```

## Usage

```js
import i18n from 'intljulep'

i18n.addLocale('en', {
  foo: "the bar",
  plurals: {
    msg: ["message", "messages"]
  },
  email: {
    hey: "Hey!",
    info: "Hi {name}. {@email.hey} You have {number} {@plurals.msg(number)}."
  }
})
i18n.setLocale('en')

i18n('foo') // "the bar"
i18n('email.baz') // "email.baz"
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

## License

[MIT](#LICENSE)
