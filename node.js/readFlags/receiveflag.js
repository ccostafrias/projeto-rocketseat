const getFlagValue = require('./flags')

const name = getFlagValue('--name')
const greetings = getFlagValue('--greetings')

console.log(`${greetings}, ${name}?`)