console.log('first action.');
setTimeout(() => {
  console.log('second action.');
}, 0)
console.log('third action.');



/*Note:
again blocking code runs first (i.e. first and third actions)
then runs the blocking setTimeout func (second action). -> it runs after the bc despite it having 0ms waiting time
*/