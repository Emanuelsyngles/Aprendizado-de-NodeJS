const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('Antes', () => {
    console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('Antes')

console.log('Depois')