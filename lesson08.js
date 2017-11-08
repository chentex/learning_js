// functional programming-ish

// filter() && map()

var testScores = [ 92, 87, 54, 63, 75, 59 ]
var passingTest = function (test) {
  return test > 60
}

var pass = testScores.filter(passingTest)

console.log(pass)

var pass2 = testScores.filter(function (test) {
  return test > 60
})

console.log(pass2)

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54]

var gooutside = weather.filter(function (temperature) {
  return temperature > 70
})

console.log(gooutside)

var forecasts = [
  {day: 'Monday', sun: true},
  {day: 'Tuesday', sun: false},
  {day: 'Wednesday', sun: false},
  {day: 'Thursday', sun: true},
  {day: 'Friday', sun: false},
  {day: 'Saturday', sun: true},
  {day: 'Sunday', sun: false}
]

var sunnyDays = forecasts.filter(function (forecast) {
  return forecast.sun
})

console.log(sunnyDays)

sunnyDays = forecasts.filter(function (forecast) {
  return forecast.sun
}).map(function (forecast) {
  return forecast.day
})

console.log(sunnyDays)

// Note to self C# LINQ
// where => filter
// map => select
// reduce => Aggregation functions

// reduce()

// reduce() AVG
var numbers = [1, 2, 3, 4]
// optional index and array
var reduced = numbers.reduce(function (accumulated, currentValue, index, array) {
  if (index < (array.length - 1)) {
    return accumulated + currentValue
  } else {
    return (accumulated + currentValue) / array.length
  }
})

console.log(reduced)

// reduce() MAX
var notes = [23, 56, 89, 234, 90, 45, 67, 689, 2, 79, 68, 345, 478]

var max = notes.reduce(function (acc, curr) {
  if (acc < curr) {
    return curr
  } else {
    return acc
  }
})

console.log(max)

// fat arrow syntax
let es6Func = (x) => x * 2
console.log(es6Func(16))

var fatMax = notes.reduce((acc, curr) => {
  if (curr > acc) {
    return curr
  } else {
    return acc
  }
})

console.log(fatMax)
