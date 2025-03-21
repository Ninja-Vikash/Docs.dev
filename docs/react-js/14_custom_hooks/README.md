## Docs.dev - custom `hooks()`

_What are the purpose of creating custom hooks?_

Suppose, You have a component containing a logic part.<br />
And Surprizingly, It is the same logic you are going to use in many other component.

Should I rewrite 😱?
<br />
_Yes! You will have to_

Just kidding! 😁<br/>
There is a better approach to do this.

Let's understand with the example.

#### `useWindowSize()`

```jsx
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
```

> [!WARNING]\
> To create a custom hook in react\
> Always start the name of the hook with _use_ prefix.
>
> You can use all the inbuilt hooks of React like `useState()`, `useEffect()` and many more inside your custom hook.

Agenda: _You can encapsulate reusable logic to keep your components clean and DRY!_

Wait! 🤔<br />
How to use it?

```jsx
import React from "react";
import useWindowSize from "./useWindowSize";

export default const App = () => {
  const { height, width } = useWindowSize();       // custom hook

  return (
    <>
      <p>Window Height: {height}</p>
      <p>Window Width: {width}</p>
    </>
  );
};
```

**Created with 💖!**
