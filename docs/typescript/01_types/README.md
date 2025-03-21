## Docs.dev - Types in TypeScript

In programming languages there are three primitive data types as

1. `string`
2. `number`
3. `boolean`

### Types Inferring

```ts
let myName;

// myName: any
```

In the above statement when we hover on the `myName` variable is will inferring the data type of the variable by own in this case `any`.

```ts
let isProgrammer: any;
isProgrammer = true;
isProgrammer = "YES";
```

_TypeScript intelligence is smart enough to find variable type using inferring._

### Types Annotation

```ts
let myName: string;

// myName: string
```

When we explicitly define the type for the variable is call annotation.

> [NOTE]\
> If you try to declare any other data type value in the variable, It will throw an error of not valid value for the variable.
>
> ```ts
> let myName: string;
> myName = "vikash";
> myName = 12; // Error
> ```

You can define other types as well

```ts
let myAge: number = 21;
myAge = "twenty one"; // Error

let isMarried: boolean = false;
isMarried = "No"; // Error
```

**Bravo!** 😎<br/>
You've learnt Type Annotation in TypeScript.

Lets dig deeper with more uses of Annotations

#### Union in Primitive data types

Alike arrays you can use unions for primitive data types as well.

```ts
let userId: number | string;

userId = 21;
userId = "21c";
```

#### Arrays in TypeScript

Arrays are used to keep multiple values in one variable.<br/>
Each value inside an array called as elements.

```ts
let myArr = [1, 2, 3];
// 1, 2, 3 are elements of the myArr
```

In the above statement TypeScript will infer the types of the elements by reading the values passed in it.

```ts
let myArr = [1, 2, 3];

// myArr: number[]
```

TypeScript infer the data types by own but it is better to annotate data types.

```ts
let myArr: number[] = [1, 2, true]; // true will be not accepted here

let myArr2: number[] = [1, 2, Number("3")]; // Will work fine
```

But if you store mix values like

```ts
let myArr = [1, true, "hello"];

// myArr: (number | boolean | string)[]
```

Instead you can annotate

```ts
let myArr: (number | string)[] = [1, "2", 3];
```

> [IMPORTANT]\
> `|` Symbol is used to form unions of data types in TypeScript.
>
> In the above example `myArr` contains mix values and Union forms that the array variable may have a `number`, `boolean`, or `string`.
>
> Best practices are annotating data types to the variable.

#### Readonly

Sometimes you want an array which can not be modifiable further.

```ts
let roles: readonly string[] = ["admin", "user"];

roles.push("new"); // Error
roles.pop(); // Error
```

#### functions in TypeScript

Alike JavaScript, You can create functions in two ways.<br/>

```ts
// Basic function
function addOne (num: number) {
    return num + 1;
}

addOne(2)

// Arrow function
const addTwo = (num: number) => num + 2;

addTwo(3)
```
In TypeScript, Parameters must have type annotations.<br/>
It helps the function call what data type and how many arguments to be passed in the function call. 

> [NOTE]\
> In the above function, the return value type is inferring number with the help of TypeScript intelligence.\
> But we are following best practices.
> ```ts
> function addOne (num: number): number {
>     return num + 1;
> }
> 
> const addTwo = (num: number): number => num + 2;
> ```

Sometimes the function is not returning any value.<br/>
In this case return type is `void`.

```ts
function greet (name: string): void {
    console.log(`Hello ${name}`)
}

const hello = (name: string): void => console.log(`Hello ${name}`)
```

**Created with 💖!**
