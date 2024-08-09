## Docs.dev - JavaScript - Basics

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