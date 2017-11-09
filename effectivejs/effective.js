function add(a, b) {
  if (!isFinite(a)){
    throw Error("not number");
  }
  if (!isFinite(b)){
    throw Error("not number");
  }
  return a + b;
}

function sub(a, b) {
  if (!isFinite(a)){
    throw Error("not number");
  }
  if (!isFinite(b)){
    throw Error("not number");
  }
  return a - b;
}

function mul(a, b) {
  if (!isFinite(a)){
    throw Error("not number");
  }
  if (!isFinite(b)){
    throw Error("not number");
  }
  return a * b;
}

function identityf(x) {
  if (!isFinite(x)){
    throw Error("not a number");
  }
  return function () {
    return x;
  }
}

function addf(a) {
  if (!isFinite(a)){
    throw Error("not number");
  }
  return  function (b) {
    if (!isFinite(b)){
      throw Error("not number");
    }   
    return a + b;
  }
}

function curry(f, a) {
  if (typeof f !== "function") {
    throw Error("not a function")
  }
  if (!isFinite(a)){
    throw Error("not number");
  }
  return function (b) {
    if (!isFinite(b)){
      throw Error("not number");
    }
    return f(a, b);
  }
}

function curryr(f, a) {
  if (typeof f !== "function") {
    throw Error("not a function")
  }
  if (!isFinite(a)){
    throw Error("not number");
  }
  return function (b) {
    if (!isFinite(b)){
      throw Error("not number");
    }
    return f(b, a);
  }
}

function liftf(func) {
  if (typeof func !== "function") {
    throw Error("not a function")
  }
  return function (a) {
    if (!isFinite(a)){
      throw Error("not number");
    }
    return function (b) {
      if (!isFinite(b)){
        throw Error("not number");
      }
      return func(a, b)
    }
  }
}

const THREE = identityf(3);

console.log(add(3, 4));
console.log(sub(3, 4));
console.log(mul(3, 4));

console.log(THREE());
console.log(addf(3)(4));
const add3 = curry(add, 3);
console.log(add3(4));
console.log(curry(mul, 5)(6));
console.log(curryr(sub, 3)(11));
console.log(curryr(sub, 3)(3));
console.log(liftf(add)(3)(4));
console.log(liftf(mul)(5)(6));
console.log(liftf(sub)(5)(6));

let inc = addf(1);
console.log(inc(5));
inc = curry(add, 1);
console.log(inc(5));
inc = liftf(add)(1);
console.log(inc(5));
inc = curryr(add, 1);
console.log(inc(inc(5)));

function twice(func) {
  if (typeof func !== "function") {
    throw Error("not a function")
  }
  return function (a) {
    if (!isFinite(a)){
      throw Error("not number");
    }
    return func(a, a)
  }
}

const double = twice(add);
console.log(double(11));
const square = twice(mul);
console.log(square(11));

function reverse(func) {
  if (typeof func !== "function") {
    throw Error("not a function")
  }
  return function (first, second) {
    if (!isFinite(first) || !isFinite(second)){
      throw Error("not number");
    }
    return func(second, first);
  }
}

const bus = reverse(sub);
console.log(bus(3, 2));

function composeu(func1, func2) {
  if (typeof func1 !== "function") {
    throw Error("not a function")
  }
  if (typeof func2 !== "function") {
    throw Error("not a function")
  }
  return function (a) {
    if (!isFinite(a)) {
      throw Error("not number");
    }
    return func2(func1(a));
  }
}

console.log(composeu(double, square)(5));

function composeb(func1, func2) {
  if (typeof func1 !== "function") {
    throw Error("not a function")
  }
  if (typeof func2 !== "function") {
    throw Error("not a function")
  }
  return function (...args) {
    args.forEach(element => {
      if (!isFinite(element)) {
        throw Error(`${element} not number`)
      }
    });
    return func2(func1(args[0],args[1]), args[2])
  }
}

console.log(composeb(add, mul)(2,3,7));
console.log(composeb(add, mul)(5,3,7));

function limit(func, times) {
  var cont = 0;
  return function (a, b) {
    if (cont < times) {
      cont += 1;      
      return func(a, b);
    } else {
      return undefined;
    }
  }
}

const add_ltd = limit(add, 2)
console.log(add_ltd(3, 4));
console.log(add_ltd(3, 4));
console.log(add_ltd(3, 4));

function from(arg) {
  var next = arg - 1;
  return function () {
    next += 1;
    return next;
  }
}

// const gen = from(0);
// console.log(gen());
// console.log(gen());
// console.log(gen());

function to(func, limit) {
  return function () {
    const value = func();
    if (value < limit) {
      return value
    }
  } 
}

// const gen = to(from(3), 5);
// console.log(gen());
// console.log(gen());
// console.log(gen());

function fromTo(begin, end) {
  return to(
    from(begin), 
    end)
  ;
}

// const gen = fromTo(0, 3);
// console.log(gen());
// console.log(gen());
// console.log(gen());
// console.log(gen());

console.log("-------------element----------");
function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length);
  }
  return function () {
    const index = gen();
    if (index !== undefined) {
      return array[index];  
    }
  }
}

let gen = element(
              ["a", "b", "c", "d", "e"],
              fromTo(1,4)
            )

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());

gen = element(
              ["a", "b", "c", "d", "e"]
            )

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());

console.log("------------collect----------");
let array = []
function collect(gen, arr) {
  return function () {
    const index = gen();
    if (index !== undefined) {
        array.push(index);
    }
    return index;
  }
}

gen = collect(fromTo(0,3), array);
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(array);

console.log("------------filter----------");
function filter(gen, filter) {
  return function () {
    let index;
    while (!filter(index)) {
      index = gen();
      if (index === undefined){
        return index;
      }
    }
    return index
  }
}

gen = filter(fromTo(0,5),
      function third(a) {
        return (a % 3) === 0;
      })

console.log(gen());
console.log(gen());
console.log(gen());

console.log("------------concat----------");
function concat(gen1, gen2) {
  let gen = gen1;
  return function () {
    const index1 = gen();
    if (index1 !== undefined) {
      return index1;
    }
    gen = gen2;
    return gen();
  }
}

gen = concat(fromTo(0, 3), fromTo(0, 2));

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());

console.log("------------gensymf----------");
function gensymf(symbol) {
  let next = 0;
  return function name() {
    next += 1;
    return `${symbol}${next}`;
  }
}

let genh = gensymf("h");
let geng = gensymf("g");
console.log(geng());
console.log(geng());
console.log(geng());
console.log(geng());
console.log(genh());
console.log(geng());
console.log(genh());
console.log(geng());
console.log(genh());
console.log(geng());
console.log(genh());

console.log("------------gensymff----------");
function gensymff(start) {
  return function (prefix) {
    let gen = from(start);
    return function() {
      return `${prefix}${gen()}`;
    }
  }
}

let symff = gensymff(1);
let symfg = symff("g");

console.log(symfg());
console.log(symfg());
console.log(symfg());

console.log("------------fibonaccif----------");
function fibonaccif(first, second) {
  return function () {
    let sum = 0;
    let oldFirst = 0;
    switch (first) {
      case 0:
        oldFirst = first;
        first = second;
        second = oldFirst + first;
        return oldFirst;
      case 1:
        oldFirst = first;
        first = second;
        second = oldFirst + first;
        return oldFirst;
      default:
        oldFirst = first;
        first = second;
        second = oldFirst + first;
        return oldFirst;
    }
  }
}

let fib = fibonaccif(0,1);
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

console.log("------------counter----------");
function counter() {
  let count = 0;
  const add1 = curry(add, 1);
  const sub1 = curryr(sub, 1);
  return {
    up: function up() {
      count += 1
      return count
    },
    down: function up() {
      count -= 1
      return count
    }
  }
}
let object = counter();
let up = object.up;
let down = object.down;

console.log(up());
console.log(down());
console.log(down());
console.log(up());

console.log("------------revocable----------");
function revocable(f) {
  let func = f
  return {
    invoke: function (a, b) {
      if (func === undefined) {
        return undefined;
      }
      return func(a, b);
    },
    revoke: function () {
      func = undefined;
      return;
    }
  };
}

object = revocable(add);
add_rev = object.invoke;
console.log(add_rev(3, 4));
console.log(add_rev(8, 4));
console.log(add_rev(9, 4));
object.revoke();
console.log(add_rev(3, 4));

console.log("------------m----------");
function m(value, source) {
  return {
    value: value,
    source: (typeof source === "string")
            ? source
            : String(value)
  };
}

console.log(JSON.stringify(m(1)));

console.log("------------addm----------");
function addm(func1, func2) {
  return m(func1.value + func2.value, `(${func1.source} + ${func2.source})`);
}

console.log(JSON.stringify(addm(m(1), m(2))));
console.log(JSON.stringify(addm(m(Math.PI, "pi"), m(2))));

console.log("------------liftm----------");
function liftm(func, symbol) {
  return function (a, b) {
    if (typeof a === "number") {
      a = m(a)
    }
    if (typeof b === "number") {
      b = m(b)
    }
    return m(func(a.value, b.value), `(${a.source} ${symbol} ${b.source})`);
  }
}

let addmm = liftm(add, "+");
console.log(JSON.stringify(addmm(m(1), m(2))));
console.log(JSON.stringify(addmm(1, 2)));
let mulmm = liftm(mul, "*");
console.log(JSON.stringify(mulmm(m(4), m(2))));
let submm = liftm(sub, "-");
console.log(JSON.stringify(submm(m(2), m(4))));

console.log("------------exp----------");
function exp(array) {
  if (Array.isArray(array)) {
    func = array[0];
    return func(...array.slice(1).map(exp));
  }else{
    return array;
  }
  
}
let sae = [mul, 5, 11];
console.log(exp(sae));
//console.log(exp([add, 4]));
console.log(exp(42));
let nsae = [
  Math.sqrt,
  [
    add,
    [square, 3],
    [square, 4]
  ]
];
console.log(exp(nsae));

console.log("------------addg----------");
function addg(a) {
  if (a === undefined) {
    return;
  }
  let num = a;
  return function addg2(num2) {
    if(num2 === undefined){
      return num;
    }
    num += num2;
    return addg2;
  };
}

console.log(addg());
console.log(addg(2)());
console.log(addg(2)(7)());
console.log(addg(3)(0)(4)());
console.log(addg(1)(2)(4)(8)());