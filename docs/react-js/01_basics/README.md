## Docs.dev - DOM and React CDN

### DOM
The *DOM* is an object representation of the HTML element, thats acts as a bridge between your code and the user interface. It has Tree-Like structure with parent and child relationship.

![dom image](DOM.png)

#### Updating UI with JavaScript
```html
<body>
    <div id="app"></div>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const header = document.createElement("h1")
        header.innerText = "Hello React!"

        app.appendChild(header)
    </script>
</body>
```

#### Handling multiple elements with JavaScript
```html
<body>
    <div id="app"></div>
    <script type="text/javascript">
        const app = document.getElementById("app")

        // create header node
        const header = document.createElement("header")
        header.innerHTML = "<h1>Hello React Developer!</h1>"

        // create footer node
        const footer = document.createElement("footer")
        footer.innerHTML = "<p>Copyright reserved!</p>"

        // create parent container
        const main = document.createElement("main")

        // use a proper order
        main.appendChild(header)
        main.appendChild(footer)

        app.appendChild(main)
    </script>
</body>
```

**Creating multiple elements using JavaScript will become a problem, on working with a large project**<br/>To solve this problem **React** come into existence.


### React with CDN
*We can use react via CDN* with very ease 🤓<br/>
To inject React in your project, you need two React `script`s from an external website [`unpkg.com`](https://legacy.reactjs.org/docs/cdn-links.html)

```js
// react script
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

// react-dom script
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

#### Create element using `React.createElement()`
```html
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const header = React.createElement("h1", null, "Docs.dev")
    </script>
</body>
```
> [!IMPORTANT]\
> `React.createElement()` is used to create an element, which accepts three arguments as\
> `React.createElement`(`_TAG_`, `_ATTRIBUTE_`, `_CHILD_`)
>
> ```js
> const element = React.createElement(
>     "div",
>     { className: "container" },
>     React.createElement("h1", null, "Docs.dev"),
> )
> ```
>
> `React.createElement`(`"div"`, `{ className: "container" }`, `STRING` | `OTHER ELEMENT` | `ARRAY OF ELEMENTS` )

#### Create root using `ReactDOM.createRoot()`
```html
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const header = React.createElement("h1", null, "Docs.dev")

        const root = ReactDOM.createRoot(app)
    </script>
</body>
```
*But wait, where will we render it?* 🤔

Just render it using `render()` method.
```html
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const header = React.createElement("h1", null, "Docs.dev")

        const root = ReactDOM.createRoot(app)

        root.render(header)
    </script>
</body>
```

`createElement()` method is okay but it will be still complicated when we build a very large project.<br/>
So here `JSX` comes into existence and it solved all the complication with `createElement()` method.

#### Writing `JSX` in React

*You can assume that `JSX` provides us the facility of writing `HTML` like code in JavaScript to build elements.*
```html
<body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const root = ReactDOM.createRoot(app).render(<h1>Hello React!</h1>)
    </script>
</body>
```
> [!IMPORTANT]\
> Browser does not understand `JSX`.\
> It only understands HTML, CSS and JavaScript.

#### Transpiling `JSX` using `Babel` to JavaScript
**Babel** is a transpiler used to compile `JSX` code into JavaScript code.

```js
// babel script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Lets include the `babel` script so that you can start writing `JSX`.
```html
<body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
        const app = document.getElementById("app")

        const root = ReactDOM.createRoot(app).render(<h1>Hello React!</h1>)
    </script>
</body>
```
Now the `render()` method is able to display `JSX`, pass any HTML code it is ready to render on the screen.
> [!important]\
> Order of scripts
> ```js
> <script src="react.js"></script>
> <script src="react-dom.js"></script>
> <script src="babel.min.js"></script>
> <script type="text/jsx">
>     // JSX code
> </script>
> ```

#### Render `JSX` using a function
```html
<body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
        const app = document.getElementById("app")

        function Header(){
            return <h1>Hello React!</h1>
        }

        const root = ReactDOM.createRoot(app).render(<Header />)
    </script>
</body>
```
> [!caution]\
> In React, you create small components as `function`s.\
> But inside `render()` method we do not call it as a function call.
>
> ```jsx
> // Wrong Approach
> ReactDOM.createRoot(app).render(Header())
> 
> // Right Approach
> ReactDOM.createRoot(app).render(<Header />)
> ```

**Happy Coding 💖**
