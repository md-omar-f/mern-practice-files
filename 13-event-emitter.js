const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user_name: ${name}, id: ${id}.`);
})
customEmitter.on('response', () => {
    console.log(`other logic here...`);
})
customEmitter.emit('response', 'John', '2243');
