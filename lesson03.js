// Arrays: in this section we'll learn
// * Declare
// * Use them:
// ** lenght
// ** indexOf
// ** push
// ** pop
// ** shift
// ** unshift
// ** concat
// ** reverse
// ** sort
// ** slice
'use strict';

// This is the way to denote an array.
var testScores = [];

// You can assign values like this, remember this will override the value
//of the array every time you run it.
testScores = [72, 84, 56, 90];

console.log(`testScores = ${testScores}`);

// Remember that all arrays start counting in the position zero 0
// so to get the fourth position we would need to ask for position 3 in the array.
console.log(`\ntestScores pos 3 = ${testScores[3]}`);

// If we want to check if a value exists and in what position it is we use indexOf
console.log(`\ntestScores index of 56 = ${testScores.indexOf(56)}`);

// But what happens if the values doesn't exist on the array.
// You'll get a -1 as the answer
console.log(`\ntestScores index of 3 = ${testScores.indexOf(3)}`);

// Now you want to add a new number with out having to write the whole array again.
// To do that you have to use push function, this will append the value at the
// end of the array.
testScores.push(67);
console.log(`\ntestScores = ${testScores}`);

// You could also add multiple values to the array at once
testScores.push(78, 79, 78, 90, 89);
console.log(`\ntestScores = ${testScores}`);

// And to check on the length of the array simply use the property length
console.log(`testScores length = ${testScores.length}`);

// You can also modify a value on the array, you just need to specify what value
// position you want to modify, in this example we are modifying position 3, so
// we set it in 2 (Remember arrays count from zero up).
testScores[2] = 88;
console.log(`\ntestScores = ${testScores}`);

// To obtain the last item from the array you use the function pop
var lastItem = testScores.pop();
console.log(`\nlastItem = ${lastItem}`);
console.log(`testScores = ${testScores}`);
console.log(`testScores length = ${testScores.length}`);

// To obtain the first item from the array you use the function shift
var fistItem = testScores.shift();
console.log(`\nfirstItem = ${fistItem}`);
console.log(`testScores = ${testScores}`);
console.log(`testScores length = ${testScores.length}`);

// To insert at the beggining of the array you use the function unshift
testScores.unshift(100);
console.log(`\ntestScores = ${testScores}`);
console.log(`testScores length = ${testScores.length}`);

// With arrays you can also do operations like sorting and reversing them
// even get to obtain a subset of the array

var bigDogs = ['labrador', 'german sheppard', 'great dane'];
var littleDogs = ['pug', 'lhasa apso', 'shitzu'];


// With slice you can obtain just a specific par of the array
// in this case we are obtaining the first two items, the end parameter in non-including
console.log(`\nOriginal: ${bigDogs}`);
console.log(`\nslice 1: ${bigDogs.slice(0, 2)}`);

// in this case we are obtaining the last two items
console.log(`\nslice -2: ${bigDogs.slice(-2)}`);

// Here we are using the function concat, to append another array to our array.
console.log(`\nconcat: ${bigDogs.concat(littleDogs)}`);

// With the function reverse you set the array to a reversed order.
console.log(`\nreverse: ${bigDogs.reverse()}`);

// With sort you order the array ascending (a-z)
console.log(`\norder: ${littleDogs.concat(bigDogs).sort()}`);