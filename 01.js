const bottle = {
    brand : 'apple',
    price : 45,
    color : 'white',
    isClean: false,
    sub : [12,34,56,78,44],
    presure : function(){console.log("I'm getting Killed!!")},
    'big job': ['job 1', 'job 2','job 3']
};

console.log(bottle);
console.log(bottle.price);

bottle.price = 999; // change the inner Value

console.log(bottle['price']);
console.log(bottle['big job']);

let res = bottle.sub;
console.log(res);

// How to Access 
/*
    1. Bracket notation
    2. third bracket diye access

    bottle.price
    bottle['price']
*/

// KeyName ==========
const keyName = 'price';
console.log(bottle[keyName]);
