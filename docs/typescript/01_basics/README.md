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