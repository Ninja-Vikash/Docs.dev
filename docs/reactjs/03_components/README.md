## Docs.dev - React Components

### What is a component?
In React, a component is a reusable, self-contained block of code that defines a part of the user interface (UI).<br/>Think of components as the building blocks of a website. Each component can be as small as a button or as large as an entire page.<br/>By combining multiple components together, you can construct complex UIs.
![components](COMPONENT.png)

#### Creating a component
Lets create a component as `Greet.jsx` inside the `src/components/Greet.jsx`

```jsx
import React from "react";

function Greet() {
    return <h1>Docs.dev</h1>
}

export default Greet;
```

A component is just a function which returns `JSX` code itself.

#### Rendering a component
Lets move to the `app.jsx`

```jsx
import React from "react";
import Greet from "./components/Greet.jsx";

function App() {
    return (
        <Greet />
    )
}

export default App;
```
> [!NOTE]\
> We are not going to write the all `import`, `export` and `function()` statements.
>
> Instead we will use a vscode extension
> ![extension](EXTENSION.png)
> and we can snippets to write the boilers with very ease\
> `rfce` → react functional component with export

#### Nested component
Creating a small component inside a component which is only accessible within the component

Lets create another component as `src/components/ParentComponent.jsx`
```jsx
import React from "react";

function ChildComponent() {
    return <h2>Child Component</h2>
}

function ParentComponent() {
    return (
        <ChildComponent />
    )
}

export default ParentComponent;
```
`ParentComponent.jsx` has a nested component as `<ChildComponent />` which is only accessible within `ParentComponent.jsx`.<br/>
We can't access `<ChildComponent />` in another component.

### Exporting
There are two types of modular `export`s
- **default export**<br/>
    When a module have default export it can be accessible using any name from that file.<br/>
    ```js
    // methods.js

    const currentDate = () => {
        // code...
    }

    export default currentDate;
    ```

    ```jsx
    // App.jsx

    import React from "react";
    import currentDate from "currentDate";

    function App() {
        const getDate = () => {
            const getDate = currentDate()
        }

        return (
            <div>
                Docs.dev
            </div>
        )
    }
    ```
    > [!NOTE]\
    > Instead of `currentDate` we can import as
    > ```jsx
    > import dateFunction from "currentDate";
    > ```
    > or whatever we want to call this method.