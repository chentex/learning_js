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