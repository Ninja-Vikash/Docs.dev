## Docs.dev - `useEffect`

_Have you ever thought?_<br />
If you are able to refresh the `DOM`.

When any data changes via `server` or by `client`.

**Is it possible?** 🤔<br/>
Interestingly, You can do that in `react`.

Hence, `useEffect` hook comes into play. 😃

### What is `useEffect` ?
It's a react hook for performing side effects. ( eg. data fetching, logging, subscription )

```jsx
useEffect(() => {
    // Side effect
}, [])
```
The above block is the most common code block of `useEffect()` hook.

useEffect(`cb`, `[dependency array]`)

#### How `useEffect` hook works ?
The callback inside useEffect runs after the component renders or when its dependencies change.

```jsx
import React, { useState, useEffect } from 'react';

function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]); // Dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Component;
```
> [!IMPORTANT]\
> `[count]` means the effect only runs when `count` changes. If left empty (`[]`), it runs once on mount.
> ```jsx
> useEffect(() => {})
> ```
> If you will not pass second argument to useEffect hook it will run on every single update.

**Created with 💖!**