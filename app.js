'use strict';

/**
 * @description
 * Filter
 *
 * Getting numbers greater than 2
 *
 * @type {Array}
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.filter((i) => i > 2));

/*
 * Now lets get this result into a new array
 */

let arrayGreaterThanTwo = array.filter((i) => i > 2);

console.log(arrayGreaterThanTwo);

/*
 * It works w objetcts as well
 */

let arrayObjects = [
    {"item": 1}
    , {"item": 2}
    , {"item": 3}
    , {"item": 4}
    , {"item": 5}
];

arrayGreaterThanTwo = arrayObjects.filter((i) => i.item >= 3);
console.log(arrayGreaterThanTwo);

/**
 * @description
 * Map
 *
 * With map we can add/modify an array item at the same time
 * we pass through this array. It's awesome.
 *
 * @type {Array}
 */


arrayGreaterThanTwo.map((item, index) => {
    item.gender = index;
    return item; // item equals the new item w/ gender attribute
});

console.log(arrayGreaterThanTwo);

/**
 * @description
 * Reduce
 *
 * It has a new parameter called accumulator, and then the array's item.
 * Accumulator is also the initial value.
 *
 * Also we've to return the accumulator
 *
 * @type {Array}
 */

let arrayReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// We can sum all the values from an array simply like this:
let total = 0;

arrayReduce.reduce((acc, item) => {
    total = acc + item;
    return total;
}, total);

console.log("Total is", total);

// Also we can return only numbers greater than 4

let arrayGreaterThanFour = [];
arrayReduce.reduce((acc, item) => {
    if (item > 4) {
        arrayGreaterThanFour.push(item);
    }

    return acc;
}, arrayGreaterThanFour);

console.log(arrayGreaterThanFour); // Realize this is the same as filter()
