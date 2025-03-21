## Docs.dev - Conditional Rendering

You have learned that how to render any `react` component.

```jsx
const User = ({ data }) => (
  <p>
    Hey, I'm {data.name}. I am a {data.role}.
  </p>
);

const App = () => (
  <User
    data={{
      name: "Vikash",
      role: "Software Engineer",
    }}
  />
);

export default App;
```

_But there is a `HACK`!_ 😎<br/>
You can render any component as your convenience.

In clear words— _"Conditional Rendering"_

### What is Conditional Rendering?

**Conditional Rendering** is nothing just a tricky rendering method for `component` rendering.

> [!NOTE]\
> if-else rendering is bit longer but still useful and simplifies many rendering situtaion.

#### `Ternary`

```jsx
import react, { useState } from "react";

const User = ({ data }) => (
  <p>
    Hey, I'm {data.name}. I am a {data.role}.
  </p>
);

const Anonymous = () => (
  <p>Hey, I'm Anonymous User. I prefer to stay mysterious.</p>
);

const App = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <>
      {isUser ? (
        <User
          data={{
            name: "Vikash",
            role: "Software Engineer",
          }}
        />
      ) : (
        <Anonymous />
      )}
    </>
  );
};

export default App;
```

**Ternary** operators help to render component conditionally.

```js
isUser ? <User /> : <Anonymous />; // If "true" User component will show otherwise Anonymous component
```

> [!WARNING]\
> You can use traditional `if-else` statements.\
> But inside JSX if you are using `if-else` may create error and is not a good approach.\
> Don't use `if-else` inside `return` statement.
>
> ```jsx
> const App = () => {
>   const [isUser, setIsUser] = useState(true);
>
>   if (isUser) {
>     return (
>       <User
>         data={{
>           name: "Vikash",
>           role: "Software Engineer",
>         }}
>       />
>     );
>   } else {
>     return <Anonymous />;
>   }
> };
> ```

#### `Short circuit`

```jsx
const App = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <>
      {isUser && (
        <User
          data={{
            name: "Vikash",
            role: "Software Engineer",
          }}
        />
      )}
    </>
  );
};
```
**Short circuit** rendering often use for single `component` rendering.<br />
And executes the JSX if the condition is `true`.

**Created with 💖!**