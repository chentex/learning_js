// this and bind

let cat = {}

cat = {
  sound: 'meow',
  speak: function () {
    console.log(this.sound)
  }
}

cat.speak()

let speakFunction = cat.speak
speakFunction()

let speakFunctionBind = speakFunction.bind(cat)

speakFunctionBind()

let person1 = {
  name: 'Alex'
}

let person2 = {
  name: 'Alexis'
}

function namer () {
  console.log(this.name)
}

let b1 = namer.bind(person1)

b1()
namer.bind(person1)()

let b2 = namer.bind(person2)

b2()

let number = {
  x: 24,
  y: 22
}

let count = function () {
  console.log(this.x, this.y)
}

count.bind(number)()

// call

var obj = {
  num: 2
}

let multiplier = function multiplyBy (number) {
  console.log(this.num * number)
}

multiplier.call(obj, 2)

// learnt text templates! hated the + signs!!!
console.log('%s this is test %d', 'text', 5)

let superMultiplier = function multiplyBy (number1, number2, number3) {
  console.log(this.num * number1 * number2 * number3)
}

let modifiers = [2, 5, 8]
superMultiplier.apply(obj, modifiers)
