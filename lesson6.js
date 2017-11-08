// Loops and conditions

console.log((4 > 5))
console.log(('asddf'.length > 'asdf'.length))
console.log(((4 < 5) || (5 > 6)))
console.log((4 > 5))
console.log((false))

function ifs (x) {
  if (x > 2) {
    console.log('woo')
  } else if (x < -1) {
    console.log('hoo')
  } else {
    console.log('boo')
  }
}

ifs(3)
ifs(-2)
ifs(0)

function cases (text) {
  switch (text) {
    case 'yes':
      return 'NO!'
    case 'no':
      return 'YES!'
    default:
      return 'Why'
  }
}

console.log(cases('yes'))
console.log(cases('no'))
console.log(cases('other'))

var b = 0
while (b < 5) {
  console.log(b)
  b++
}

do {
  console.log(b)
  b--
} while (b > 0)

for (var i = 0; i < 10; i++) {
  console.log('My favorite number is ' + i)
}

var names = ['juan', 'pedro', 'luis']

for (i in names) {
  console.log(names[i])
}

names.forEach(function (element) {
  console.log('My name is ' + element)
}, this)
