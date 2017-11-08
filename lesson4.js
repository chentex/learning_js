// arrays

var testScores = [];

testScores = [72, 84, 56, 90];

console.log(testScores);

console.log(testScores[3]);
console.log(testScores.indexOf(90));

testScores.push(67);
testScores[2] = 88;
console.log(testScores);
testScores.push(78,79,78,90,89)
console.log(testScores);
console.log(testScores.length);

testScores.pop()
console.log(testScores);
console.log(testScores.length);

testScores.shift();
console.log(testScores);
console.log(testScores.length);

testScores.unshift(100);
console.log(testScores);
console.log(testScores.length);

var bigDogs = ["asdf","Asdf","Adf"]
var littleDogs = ["qwer", "terw","yuti"]

console.log(bigDogs.concat(littleDogs));
console.log(bigDogs.reverse());

console.log(bigDogs.sort());
console.log(bigDogs.reverse());
console.log(bigDogs.slice(-1));