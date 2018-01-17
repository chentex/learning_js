// Variables: in this section we'll learn
// * Declare
// * Assign
// * Modify
// * Compare variables (Javascript don'ts)

// Use Strict: will avoid you headaches, for non declared variables and other stuff.
'use strict';

// If you uncomment the next line and try to run the script
// 'use strict' will make the execution fail
// because x is never declared.
// Even if JavaScript allows you to do this declaration, avoid it at all cost.

// x = 5;

// Declaring a variable.
// b is declared and can be used bellow.
// It doesn't have a type it can be anything.
var b;

// Declaring and initializing a variable
// a is now declared and it has type number and a value of 5.
var a = 5;

// s is now declared and it has type string and the text assigned.
// this has a string declared in multiline, this could cause some issues.
var s = "this is a string 's that has stuff\
and enters.";

// d is declared with type string. d is declared correctly since no multiline is involved.
var d = "This is the correct way to use strings, with no breaking line.";

// Modifying a variable.

// By assigning a value.
b = 10;
// console.log, allows us to display something is JavaScript console.
console.log(`b = ${b}`);

// With value modifiers.
// Ads one to the value of a
a++;
console.log(`a = ${a}`);

// This also adds one to the value of a.
// Preferred form since would have the same syntax as adding 2 or 3 or another number to a
a += 1;
console.log(`a = ${a}`);

// Printing values
console.log(`s = ${s}`);

// Here length and toUpperCase() are prototype methods and values that are available to all Strings
console.log(`s length = ${s.length}`);
console.log(`s in Upper Case = ${s.toUpperCase()}`);

console.log(`d = ${d}`);

// Comparison
// == double equal compares value
// === compares value and type
// never use ==
console.log(8 == '8'); // this results true
console.log(8 === '8'); // this results false, that's what we want.
