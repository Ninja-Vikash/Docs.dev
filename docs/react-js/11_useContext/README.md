## Docs.dev - `useContext`

#### Scenario

Imagine! You're building a _react application_ and want to use Theme values (e.g., `"dark"` or `"light"`) inside multiple components.<br/>
Now, You are thinking about of props. Right? 😁

Now another condition!<br/>You want to use it (theme values) in deeply nested components. 😵‍💫<br/>
You can use here `prop` drilling.

#### What is `prop` drilling?
prop drilling is a concept of passing values to top level component to deeply nested component via props.

```jsx
// Top Level Component
const App = () => {
  return <User name="vikash" />
}

// Received value of name and passed further to Nested component
const User = ({ name }) => {
  return <UserCard name={name} />
}

// Received value of name and passed further to Nested component
const UserCard = ({ name }) => {
  return <CheckLoggedIn name={name} />
}

// Finally rendering name
const CheckLoggedIn = ({ name }) => {
  if (!name) return <p>Welcome User!</p>

  return <p>Hello ${name}</p>
}
```

The above example is just a small glance of `prop` drilling.

**Don't worry!**<br/>
We are not going to use `props` drilling.<br/>
But in the real world projects instead of prop drilling there is a better approach to manage states.

Tada `useContext` hook comes into play.

### `useContext()` hook

Lets create a context value. 😎

```js
// themeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
```

You can use a provider component for your contexts

```jsx
import { useState } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
```

```jsx
import ThemeProvider from "./ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Docs.dev</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
```

**Created with 💖!**