const {i18n} = require('.')
const assert = require('assert')

console.time("Tests")

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

assert(i18n('foo') === "the bar")
assert(i18n('email.baz') === "email.baz")
assert(i18n('plurals.msg', 3) === "messages")
assert(i18n('email.info', { name: "Laurent", number: 0 }) === "Hi Laurent. Hey! You have 0 messages.")
assert(i18n('email.info', { name: "Laurent", number: 1 }) === "Hi Laurent. Hey! You have 1 message.")
assert(i18n('email.info', { name: "Laurent", number: 2 }) === "Hi Laurent. Hey! You have 2 messages.")
assert(i18n('email.info', { name: "Laurent", number: 3 }) === "Hi Laurent. Hey! You have 3 messages.")

i18n.addLocale('fr', {
  foo: "le bar"
})
i18n.setLocale('fr')
assert(i18n('foo') === "le bar")

i18n.setLocale('en')
assert(i18n('foo') === "the bar")

console.timeEnd("Tests")
