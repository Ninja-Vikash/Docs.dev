## Docs.dev - Event Handling

Before learning Event Handling in **React**! 🤓

You should have a look on event handling with vanilla JavaScript.

#### Vanilla JavaScript

Event handling using vanilla JavaScript a bit longer!

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div id="root">
    <h1>Event Handling</h1>
    <p id="text">Text before click</p>

    <div class="btn-container">
      <button id="btn">Click Me</button>
      <button id="reset">Reset</button>
    </div>
  </div>

  <script>
    const btn = document.querySelector("#btn");
    const text = document.querySelector("#text");
    const reset = document.querySelector("#reset");

    btn.addEventListener("click", () => {
      console.log("Button is clicked!");

      text.innerHTML = "Button is clicked!";
    });

    reset.addEventListener("click", () => {
      console.log("Reset is clicked!");

      text.innerHTML = "";
    });
  </script>
</body>
```

> [!IMPORTANT]\
> You will have to listen for each and every event.

#### React

Event handling using react is more concise and feature rich

```jsx
import react, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("Text before click");

  const handleButton = () => {
    setText("Button is clicked!");
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <div className="root">
      <h1>Event Handling</h1>
      <p>{text}</p>

      <div class="btn-container">
        <button onClick={handleButton}>Click Me</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
```

React provides hook like `useState()` for managing state variable.

Remember: _`Event handling is nothing just interactivity`_ 🤓

You will be surprized by knowing there are enumerous events are exist, _browser_ and _window_.

**Created with 💖!**
