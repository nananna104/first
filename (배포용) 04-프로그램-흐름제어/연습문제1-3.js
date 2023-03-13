let numOfApples = 123;
let baskets = null;

let extra = numOfApples % 10;

// if (extra) {
//     baskets = (numOfApples - extra) / 10 + 1;
// } else {
//     baskets = numOfApples / 10;
// }

baskets = (numOfApples - extra) / 10 + (extra ? 1:0);
console.log(baskets);