//local name
const localName = 'susan'
//imported name
const {jancsika, juliska} = require('./3.1-names');


//greet users
const sayHi = require('./3.4-utils');

sayHi(jancsika);
sayHi(juliska);

//print objs and array
const {items, person} = require('./3.2-arrays_objs');
console.log(items,person);

//require module that is being executed in its own file (module);
require('./3.3-require_without_export');