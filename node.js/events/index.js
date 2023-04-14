const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (name) => {
    console.log(`Salve, ${name}!`)
})

ev.emit('saySomething', "Cláudio")
ev.emit('saySomething', "Cláudio")
ev.emit('saySomething', "Cláudio")