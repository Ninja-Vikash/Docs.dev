## Docs.dev - list rendering and `key`

### What is list rendering?
Lists are very powerful and useful in React.

Lets explore, how can we render a list of elements in React.

```jsx
function Greet({ name }) {
    return <h2>I am {name}</h2>
}

function App() {
    return (
        <>
            <Greet name="vikash" />
            <Greet name="ninja" />
            <Greet name="john" />
        </>
    )
}
```

*We can refactor and simplify using list rendering.* ☝️

```jsx
// Array of users
const users = ["vikash", "ninja", "john"];
```

Now, we will render the name of `users` using `Array.map()`
```js
function Greet({ name }) {
    return <h2>I am {name}</h2>
}

function App() {
    const users = ["vikash", "ninja", "john"];

    return (
        <>
            {users.map((name) => {
                return (
                    <Greet name={name} />
                )
            })}
        </>
    )
}
```
> [!NOTE]\
> We can write the list rendering syntax.
>
> `Array.map()` is a higher order `function()` which accepts a callback.

#### Arrow function syntax 💖
*Arrow function* makes function's statement more simple and concise.

Arrow function provides implicit `return`.

Lets understand implicit and explicit `return` statement.
```jsx
// Traditional function syntax
function sum1(a, b) {
    return a + b;
}

let total1 = sum1(1, 2);

// Variable function syntax
const sum2 = function(a, b) {
    return a + b;
}

let total2 = sum2(2, 3);
```
```jsx
// Arrow function syntax with explicit return
const sum3 = (a, b) => {
    return a + b;
}

let total3 = sum3(3, 4);

// Arrow function syntax with implicit return
const sum4 = (a, b) => a + b;

let total4 = sum4(4, 5);
```
> [!NOTE]\
> How implicit `return` works?
>
> ```jsx
> const sum = (a, b) => {
>     return a + b;
> }
> 
> const sum = (a, b) => { return a + b }
> ```
> Once we start curly `{ }` braces, it is essential to `return` the functional body.
> 
> ```jsx
> const sum = (a, b) => ( a + b );
> 
> // or
> const sum = (a, b) => a + b;
> ```

### `key` in lists 🗝️
`key`s are used to differentiate elements in a list. So that browser can identify their difference.

*Make sure `key` should be unique.*
```js
function Greet({ name }) {
    return <h2>I am {name}</h2>
}

function App() {
    const users = ["vikash", "ninja", "john"];

    return (
        <>
            {users.map((name, index) => (
                <Greet key={index} name={name} />
            ))}
        </>
    )
}
```

#### Rendering Array of Objects
```jsx
function User(user) {
    const { name, role, expertise } = user;

    return (
        <>
            <h2>Name: {name}</h2>
            <h3>Role: {role}</h3>
            <h3>Expertise: {expertise}</h3>
        </>
    )
}

function App() {
    const userData = [
        {
            name: "vikash",
            role: "frontend-developer",
            expertise: "React"
        },
        {
            name: "ninja",
            role: "frontend-developer",
            expertise: "JavaScript"
        },
        {
            name: "john",
            role: "backend-developer",
            expertise: "Java"
        },
    ]
    return (
        <>
            {userData.map((user, index) => (
                <User
                    key={index}
                    user={{
                        name: user.name,
                        role: user.role,
                        expertise: user.expertise
                    }}
                />
            ))}
        </>
    )
}
```