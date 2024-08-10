## Docs.dev - JavaScript - Basics

In JavaScript, We print values using `console`
```js
console.log("Hello World!")
```

### Variables

In JavaScript, We create variables to hold data. Variables are like containers in which we store some data.

**Const**<br/>
For creating a constant we have only one keyword that is `const`
```js
const userId = 198
```
Constants are unchangable variables, so that by mistaken your variable should not change by you or others.

> [!NOTE]\
> We can write variable name in different manners.\
> `userId` is very common style of writing name of the variable, we can write it in another style as well like `user_id`, `user_Id`
>
> It totally depends on the user or programmer, How he/she wants to write the name.\
> But make sure you are using an readable variable name\
> eg. `a = 198` is not comes under the good pratice instead you can write `myNumber = 198`

**Let and Var**<br/>
For creating a changeable variable we have two keywords `let` and `var`.

In modern JavaScript, We only use `let` keyword for defining changeable variable not `var`.
```js
let userName = "vikash"
var userEmail = "vikash@google.com"
```
Prefer not to use `var`<br/>
`var` has issues with block scope and functional scope.

> [!IMPORTANT]\
> A block means
> ```js
> {
>    // Code block
> }
> ```
> 
> In JavaScript we use blocks in `if-else`, `loop`s and `function`s
> ```js
> if (condition) {
>
> }
> 
> for (start; end; increment/decrement) {
> 
> }
> 
> function () {
> 
> }
> ```

**Comments**<br/>
Unlike another languages, In JavaScript we can also write comments.<br/>
Comments are ignored by the compiler.
```js
// Single line comment

/*
Multiline

comments
*/
```
> [!NOTE]\
> If you are using a code editor like VS Code.\
> Then you can comment lines very efficiently\
> Select the lines and `ctrl` + `/` ( `cmd` + `/` )


### Data Types
As we discussed to standardize the JavaScript code ECMAScript International writes standards.<br/>
For the browser how they will treat the code
`"use strict"`
```js
"use script"

// above statement ensures that your source code will be treated as newer version of javascript
```

> [!WARNING]\
> `alert("Hello")` statement won't work when we execute our script file using `node.js`\
> It only works when you are on the broswer's console or running your script on the browser.

In the coding, it always recommended that your code should readable.
```js
console.log(3 
    + 
    3) 

console.log("javascript"); console.log("Vikash")
```
The above examples are not comes under the good practice.<br/>
> [!IMPORTANT]\
> Our main goal to write the code readable, Code readablity should be high.

**Premitive data types**

- `number` ( 198, 143, 1.45 ), Range 2^53 - 1
- `bigint` ( trading, stock market, reddit like websites )
- `string` ( "vikash", 'kumar' )
- `boolean` ( `true` / `false` )
- `null` ( standalone value | dataType = `Object` )
- `undefined` ( dataType )
- `symbol` ( unique )

We have a `typeof` method for investigation, what kind of data type we are storing in a variable.<br/>
There are two ways to write typeof method as

```js
console.log(typeof 198)

console.log(typeof(198))
```

List of types of data types
```js
console.log(typeof "vikash")        // string
console.log(typeof 187)             // number
console.log(typeof true)            // boolean
console.log(typeof null)            // object

console.log(typeof undefined)       // undefined
console.log(typeof Object())        // object
console.log(typeof Array())         // object
console.log(typeof String())        // string
console.log(typeof function(){})    // functional object
```