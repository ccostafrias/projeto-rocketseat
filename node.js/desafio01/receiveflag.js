const getFlag = require('./getflag')

const name = getFlag('--name')
const greetings = getFlag('--greetings')

console.log(`${greetings}, ${name}?`)