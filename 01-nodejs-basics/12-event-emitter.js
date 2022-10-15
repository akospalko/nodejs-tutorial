//testing out event emitters
const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//create event listener/register
myFirstEmitter.on('firstEmitter', (name, id) => {
  console.log(`
  Hello ${name}. You successfully purchased this item.  
  Your id is: ${id}`);
})
// same event w different callback
myFirstEmitter.on('firstEmitter', ()=>{console.log(`you paid: 999$.`)});
//create emitter
myFirstEmitter.emit('firstEmitter', 'pope', '1');