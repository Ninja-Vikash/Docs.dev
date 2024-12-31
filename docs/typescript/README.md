## Docs.dev - TypeScript

_TypeScript is JavaScript with added syntax for types._

<img src="https://github.com/Ninja-Vikash/web_assets/blob/main/icons_svg/TYPESCRIPT.svg" height="95px" align="left">

TypeScript is transpiled into JavaScript using a compiler.<br/>
TypeScript is being converted into JavaScript means it runs anywhere that JavaScript runs!

TypeScript is a syntactic superset of JavaScript which adds _static typing_.

> [!IMPORTANT]\
> JavaScript is a loosely typed language.\
> It can be difficult to understand what types of data are being passed.
>
> In JavaScript, function parameters and variables don't have any information!
>
> Here, TypeScript covers this deficiency of JavaScript.\
> By catching the errors when passing a string into function that expects a number.
>
> ```js
> function add(num1, num2) {
>   return num1 + num2;
> }
>
> const sum = add("one", "two");
> console.log(sum); // "onetwo"
> ```

With TypeScript 😋!

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sum: number = add(1, "two"); // error
```

> [NOTE]\
> TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

### Installing the compiler

```bash
npm install typescript --save-dev
```

Now initialize `tsconfig.js`

```bash
npx tsc --init
```

**Lets see** 👀<br/>
An example of a TypeScript file

```bash
touch index.ts
```

```ts
const chapter: string = "Docs.dev - TypeScript";

console.log(chapter);
```

In TypeScript, You can specify the type as the above code block.<br/>

```ts
const chapter: string; // restricted the assignablable value it should be a string.

const chapter: string = 198; // error
```

But wait! 🤔<br/>
Where you will execute the TypeScript file.

First, TypeScript file will compile to a JavaScript file.

```bash
tsc index.ts
```

It will generate a JavaScript file.

**Created with 💖!**
