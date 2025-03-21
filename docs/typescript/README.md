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

### Installing TypeScript in your PC

```bash
# as dev depenedency
npm install typescript --save-dev

# as global
npm install -g typescript
```

> [NOTE]\
> Explore the latest way of executing TypeScript below.

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

_A TypeScript file can't be executed directly._

First, TypeScript file will be compiled into a JavaScript file.<br />
Then you can execute corresponding JavaScript file.

```bash
# For compling ts file
tsc index.ts

# For executing js file
node index.js
```

> [!IMPORTANT]\
> `tsc index.ts` will generate a JavaScript file.
> 
> After that you can execute it.

But everytime you need to re-generate JavaScript file for every single change.
```bash
tsc --watch
```
`tsc --watch` command will do it for you 🤓!

### Compiling TypeScript file directly in node environment. `new!`
For compiling TypeScript file directly in node environment via code runner extension in vs code.

```bash
# install typescript globally
npm install -g typescript

# install ts-node globally
npm install -g ts-node typescript
```


**Created with 💖!**
