const _  = require('loadsh');

const nestedArray = [1,[2,[3,[4]]]];
const flattenArray = _.flattenDeep(nestedArray); // create a one dimensional array
console.log(flattenArray);