const name = require('./4-names');
const sayHI = require('./5-utils');
sayHI('susan')
sayHI(name.john);
sayHI(name.smith);

const data = require('./6-alternate-flavors');
console.log(data.items[0]);

require('./7-mind-granade');