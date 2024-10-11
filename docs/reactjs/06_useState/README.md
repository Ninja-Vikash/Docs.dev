## Docs.dev - useState

### What are hooks in React?
Hooks in React are special functions that let you **hook into** React features like `state` and `lifecycle` methods from functional components.<br/>
They enable you to use *state*, handle side *effects*, and reuse logic without needing class components.

Common hooks include:
- `useState`: to manage state.
- `useEffect`: to handle side effects like data fetching.
- `useContext`: to access context values.

Hooks make functional components more powerful and easier to manage, encouraging reusable and cleaner code.

### `useState()`
The `useState` hook in React allows you to add state to functional components.<br/>
It returns an array with two elements: *the current state* and *a function to update that state*.

```jsx
const [state, setState] = useState(initialValue);
```

`useState` is commonly used for managing simple, local state within components.

#### Counter ✅
```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter;
```
> [!NOTE]\
> In the state definition. It needs initial value of the state variable.
>
> For using a state variable. It is essential to write state definition.\
> But luckily vscode provides some extension. You have seen them in previous chapters.
>
> Just type the text below and your vscode will start giving suggestions for it. 🤩
> ```jsx
> useStateSnippets
> ```
>
> We can extend the Counter by adding *decrement* method.
> ```jsx
> function Counter() {
>     const [count, setCount] = useState(0);
> 
>     return (
>         <div>
>             <button onClick={() => setCount(count - 1)}>Decrement</button>
>             <p>{count}</p>
>             <button onClick={() => setCount(count + 1)}>Increment</button>
>         </div>
>     )
> }
> ```
> **Amazing**! 😍


#### Toggler ✅
```jsx
import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default Toggle;
```
> [!IMPORTANT]\
> You have learned in previous chapters.\
> Inside `JSX`, You can write JavaScript directly within curly braces `{ }`.
> ```
> {isOn ? "On" : "Off"}
> ```
> above statement is demonstrating *ternary* operator of JavaScript.

**Do you know?**<br/>
You can pass methods as `props`
```jsx
import React from "react";

function User({ name, sayHello, showMessage }) {
    return (
        <>
            <h3>{showMessage ? `hello ${name}` : "welcome" }</h3>
            <button onClick={sayHello}>Say Hello</button>
        </>
    )
}

function App() {
    const [message, setMessage] = useState(false)

    const sayHello = () => {
        setMessage(!message)
    }

    return (
        <User
            name="ninja"
            sayHello={sayHello}
            showMessage={message}
        />
    )
}
```