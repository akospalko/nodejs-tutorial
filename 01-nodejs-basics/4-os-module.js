// basics of OS module
const os = require('os'); // get all the methods of the os module
//const { userInfo, uptime } = require('os'); // get specific methods

//info about the current user (username, uid, homedir)
const user = os.userInfo();
console.log(user);

// get system uptime in seconds
const systemUptime = os.uptime();
console.log(`The System uptime is ${systemUptime} seconds.`)

//some other OS methods:
const currentOS = {
  name: os.type(), //Windows ...
  release: os.release(), // 10 ...
  totalMem: os.totalmem(), // 8467877888 bytes (7.8 gb)
  freeMem: os.freemem(), // 1396305920 bytes (1.3 gb) 
}

console.log(currentOS);
