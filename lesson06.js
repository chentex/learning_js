// regex

// /pattern/modifiers;

var regex = /que/ig

var a = ['Que estamos haciendo?', 'Porque lo hacemos?', 'Quien hace esto?']

a.forEach(function (element) {
  var match = element.match(regex)
  if ((match !== null) && (match.length > 0)) {
    console.log(element + ' it\'s a Match')
  }
}, this)

var b = ['Que estamos haciendo?', 'Porque lo hacemos?', 'Quien hace esto que?']

b.forEach(function (element) {
  var match = element.search(regex)
  if (match > -1) {
    console.log(element + 'at position ' + match)
  }
}, this)

var regex2 = /[^qdfaeg]/ig

b.forEach(function (element) {
  var match = element.match(regex2)
  if ((match !== null) && (match.length > 0)) {
    console.log(element + 'not matching ' + match)
  }
}, this)

var regex3 = /[qdfaeg]/ig

b.forEach(function (element) {
  var match = element.match(regex3)
  if ((match !== null) && (match.length > 0)) {
    console.log(element + 'not matching ' + match)
  }
}, this)
