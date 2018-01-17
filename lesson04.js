// Functions
'use strict';

function morningGreeting (name) {
    return 'God morning to you ' + name;
}

console.log(morningGreeting('vicente'));

var a = function () {
    return 'God morning to you me';
};

console.log(a);
console.log(a());

// iife
var a = (function (name) {
    return 'God morning to you me ' + name;
}('vicente'));

console.log(a);

var test = 'this is public';
function testingScope () {
    var test2 = 'this is private';
//    test3 = 'this is public?'; // use 'use strict' to catch this errors
    return test + ' ' + test2;
}

console.log(testingScope());
// This should fail, uncomment it to test it.
// console.log(test + ' ' + test3);

var initial = 'D';
function GetName (initial) {
    var firstName = 'John';
    return function () {
        var lastName = 'Smith';
        return 'My name is ' + firstName + ' ' + initial + '. ' + lastName;
    };
}

var name = new GetName(initial);
console.log(name);
console.log(name());