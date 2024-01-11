const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newitems = _.flattenDeep(items);

setInterval(() => {
    console.log("hello");
}, [2000]);

 