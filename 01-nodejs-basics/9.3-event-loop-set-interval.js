console.log('hello.');
setInterval(() => {
  console.log('repeat.');
}, 5000)
console.log('bye.');



/*Note:
again blocking code runs first (i.e. hello and bye)
then runs the blocking setTimeout func (second action). -> event loop invokes set interval every x seconds (w/o exit).
*/