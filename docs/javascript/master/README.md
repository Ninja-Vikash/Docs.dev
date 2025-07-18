## Docs.dev - Master JS

**JavaScript** is a very powerful language due to its out of the box concepts.

Like *scope*, *closure*, *hoisting* and *currying*.

If you're learning advance js, then these are the basics.😁<br />
So without wasting time lets learn!

### Scopes in JS
Scope defines where variables are accessible in your code.

**Types of scope-**
1. Global
2. Function
3. Block

```js
let a = 10;         // Global Scope

function test(){
    let b = 20;     // Function Scope
    if (true) {
        let c = 30; // Block Scope
        console.log(a, b, c)
    }
    console.log(c)  // Reference Error
}
```

In the above code block, `a` is defined in global scope that is why it can be accessed through out the file after declaration.<br /> 

***

I talked about **variable is accessible after declaration**, What does it mean? 🤔

JavaScript's Magic! 🪄<br />
That is *Hoisting*.

### Hoisting

JavaScript moves variables and functions declarations to the top of their scope during compile phase.<br />
Which mean,

```js
console.log(x)      // Undefined (Not Error!)
var x = 5;
```

How JS sees this?
```js
var x;
console.log(x)      // Undefined
x = 5;
```

That's why it is preferred to create variables using `let` and `const` in modern JavaScript.

`let`/`const` are hoisted but not initialized.

```js
console.log(y)      // Reference Error
let y = 5;
```

> [!caution]\
> In production level `var` must not be used in your code.\
> Otherwise un-neccessary conflict will occur during development.
>
> It is safer to use `let` and `const` only.

***

You've learnt two crazy concepts in very less-time.<br />
So it is the perfect time to dig more deeper in the mine of JavaScript. ⛏️

Do you know about the boundary of variable?<br /> 🤔
If I say variables are restricted for different zones of code.

Due to `Closure`s.

### Closures
A closure is when a function remembers variables from its outer scope, even after that outer function has finished running.

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count)
    }
}

const counter = outer()
counter()   // 1
counter()   // 2
```

In the code block `inner` function remembers the value of its outer scope.

***

Suppose, You want a sequential input to get a result.
How can it be possibe?

Thanks to `currying`

### Currying
Currying means breaking a function with multiple arguments into a series of functions, each taking one argument.

```js
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3))   // 6
```

