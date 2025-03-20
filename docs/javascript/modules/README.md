## Docs.dev - Modules in JavaScript

`Modules` are used to distribute code into multiple files for quick organizing and modifying.

In ES5 and earlier versions there is no support for `import` and `export` syntax.

### `import` and `export`
There are two types of import methods —
1. Named import
```js
import { calcuteSum } from "./mathMethods.js";
```
2. Default import
```js
import calcuteSum from "./mathMethods.js";
```

Both the imports depend on How the module is getting exported.

```js
// mathMethod.js

function calculateSum (a, b, c){
    return a + b + c;
}

export { calculateSum } // named export

// or

export function calculateSum (a, b, c){
    return a + b + c;
}
```
Lets see the example with default exported
```js
// mathMethod.js

function calculateSum (a, b, c){
    return a + b + c;
}

export default calculateSum; // default export
```
