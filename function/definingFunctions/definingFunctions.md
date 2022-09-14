<h1 align="center"> Ways to Group, Categorize & Define JavaScript Functions </h1>

## Function Declaration

Here, the function is defined starting with the function keyword then a name followed by parentheses and then curly braces where your statements will be written.

```js
function alphabetOrder(string) {
  return str.split("").sort().join("");
}
```

```js
function calculateAreaCircle(radius, pi = 3.14) {
  return pi * (radius * radius);
}
```

```js
function calculateAge2050(age) {
  return age + 28;
}
```

```js
function sum ("a", "b") {
    return a + b
}
```

## Function Expression

Function expression does not have a name, this is usually called an anonymous function. The value of the function cannot be used until it is stored in a variable.

```js
const alphabetOrder = function(string) {
  return str.split("").sort().join("");
```

```js
const calculateAreaCircle = function (radius, pi = 3.14) {
  return pi * (radius * radius);
};
```

```js
const calculateAge2050 = function (age) {
  return age + 28;
};
```

```js
const sum = function("a", "b") {
    return a + b
}
```

## Arrow Function

An arrow function is a cleaner, concise & a compact alternative to a traditional function expression, but is limited and can't be used in all situations. Here is how we write the above function using the Arrow function syntax.

```js
const alphabetOrder = (string) => string.split("").sort().join("");
```

```js
const calculateAreaCircle = (radius, pi = 3.14) => pi * (radius * radius);
```

```js
const calculateAge2050 = (age) => age + 28;
```

```js
const add = ("a", "b") => a + b;
```

## Function Constructor

you can define your function dynamically using Function() constructor along with the new operator. This is how we can use the Function() constructor to create functions.

```js
const alphabetOrder = new Function("string" "return string.split("").sort().join("")");
```

```js
const calculateAreaCircle = new Function("radius, pi = 3.14" "return pi * radius * radius";
```

```js
const calculateAge2050 = new Function("age" "return age + 28");
```

```js
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
```

## Different Names

### Anonynous Function

Anonymous functions in JavaScript is a function that does not have any name associated with it. We use only the function keyword without the function name.

```js
const anonymousFunction = function() ;
```

### IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

## Concerns

### Arguments

### Scope

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.  
The two types of scope are local and global: Global variables are those declared outside of a block

```js
const globalScope =
  "I'm a global scope variable because i'm outside of a block!";
```

```js
const Scope = function () {
  const localScope = "I'm inside of a block, i'm a local variable";
};
```

Variables that are declared inside a function are called local variables and in the function scope.

### `this` Keyword

### Hoisting

### Function Object
