## Docs.dev - TypeScript basics

### TypeScript types

Variable `type` declaration is one of the core thing of TypeScript.

In TypeScript, You can assign type of any variable.

##### `implicitly`

```ts
let username = "vikash";

username = 123; // Error: Can't assign 'number'
```

The above code block is assigning variable type implicitly by reading the value in TypeScript.

But you are working with TypeScript.<br />
Assigning type explicitly is comes under good practice.

##### `explicitly`

```ts
let username: string = "vikash";

username = true; // Error: can't assign boolean
```

#### `types`

There are three main primitives in JavaScript and TypeScript.

```ts
// string
let username: string = "vikash";

// number
let userAge: number = 21;

// boolean
let isLoggedIn: boolean = true;
```

Let's see! 👀<br/>_Few special types in TypeScript_

#### `any`

```ts
let value: any;

value = "Docs.dev - TypeScript";
value = 198;
value = true;
```

`any` is special type that disables type checking and effectively allows all types of data.

#### `unknown`

```ts
let value: unknown;

value = "Docs.dev - TypeScript";
value = 198;
value = true;
```

`unknown` is similar, but safer alternative to `any`.

#### `never`

```ts
let neverDeclared: never;
```

`never` type effectively throws an error whenever it is defined.

### Array declaration in TypeScript

Declaring an Array is similar like JavaScript.<br />
Since you are working with TypeScript, You'll also get some enhancements.

```ts
const numArr = [1, 2, 3, 4, 5];

numArr.push("hey"); // Error: 'string' value can't be accepted
```

> [!WARNING]\
> When TypeScript implicitly detects the types of current variable.\
> The results may or may not be in your favor.

**Declaring type of an `Array` variable is easy like as normal variable**

```ts
const numArr: number[] = [1, 2, 3, 4, 5];
```

But wait!<br />
Have you tried to `push` different type of value?

```ts
const numArr: number[] = [1, 2, 3, 4, 5];

numArr.push(true); // Error: 'boolean' values can't be accepted
```

**Don't worry**! 😉<br />
Here is the one line solution.

```ts
const newArr: (number | boolean)[] = [1, 2, 3, 4, true];

newArr.push(false);
```

> [!NOTE]\
> You can union multiple type as `(number | boolean | string)[]`\
> This method is also useful for normal variables as well
> ```ts
> let data: number | string;
>
> data = 90;
> data = "TypeScript";
> data = true   // Error: 'boolean' values can't be assignable
> ```

#### `readonly`

Sometimes you don't want that anyone can modify your array variable.<br />
Just use one keyword.
```ts
const days: readonly string[] = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
];

days.push("")   // Error: readonly arrays are not modifiable
```

**Created with 💖!**