## Docs.dev - `useRef`

In our React.js journey, we've explored the `useState`, `useEffect`, and `useContext` hooks. Now, let's delve into the `useRef` hook, a versatile tool in React's arsenal.

### What is `useRef`?

The `useRef` hook provides a way to persist values across renders without causing a re-render when updated. It's commonly used to access and interact with DOM elements directly.

#### When to Use `useRef`

Accessing DOM Elements: Directly interact with DOM elements, such as focusing an input field.

Persisting Values: Store mutable values that don't require re-rendering, like tracking previous state values.

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

**Created with 💖!**
