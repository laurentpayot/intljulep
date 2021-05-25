import assert from 'assert/strict'
import { i18n } from './intljulep.js'

console.time("Tests")

i18n.addLocale('en', {
  foo: "the bar",
  plurals: {
    msg: ["message", "messages"],
    man: ["man", "men"],
    woman: ["woman", "women"]
  },
  email: {
    hey: "Hey!",
    info: "Hi {name}. {@email.hey} You have {number} {@plurals.msg(number)}."
  }
})

// before locale has been set
assert.throws(() => i18n('foo'), {
  name: 'TypeError',
  message: "Cannot read property 'foo' of undefined"
})

i18n.setLocale('en')

assert.equal(i18n('foo'), "the bar")
assert.equal(i18n('email.baz'), "email.baz")
assert.equal(i18n('plurals.msg', 0), "messages")
assert.equal(i18n('plurals.msg', 1), "message")
assert.equal(i18n('plurals.msg', 2), "messages")
assert.equal(i18n('plurals.msg', 3), "messages")
assert.equal(i18n('email.info', { name: "Laurent", number: 0 }), "Hi Laurent. Hey! You have 0 messages.")
assert.equal(i18n('email.info', { name: "Laurent", number: 1 }), "Hi Laurent. Hey! You have 1 message.")
assert.equal(i18n('email.info', { name: "Laurent", number: 2 }), "Hi Laurent. Hey! You have 2 messages.")
assert.equal(i18n('email.info', { name: "Laurent", number: 3 }), "Hi Laurent. Hey! You have 3 messages.")

i18n.addLocale('fr', {
  foo: "le bar"
})
i18n.setLocale('fr')
assert.equal(i18n('foo'), "le bar")

i18n.setLocale('en')
assert.equal(i18n('foo'), "the bar")

// overwrite
i18n.addLocale('en', {
  foo: "BAR"
})
assert.equal(i18n('foo'), "BAR")

console.timeEnd("Tests")
