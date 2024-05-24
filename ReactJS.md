# ReactJS
### What is ReactJS?
<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/reactjs.png" height="50px" align="left">

ReactJS is the most popular framework for creating single page websites. <br>
Which is maintained by **Facebook**.

---
### Why we use ReactJS?
- Most popular framework.
- Most demanding for job recruiter.
- Gives us good working experience.
- Used to create single page application.

`reactjs` based on components which is the process of creating any website in parts.
We can use one component more than one time.
In the same website or another website.

---
### Caveats
It follows : **Write Once use Everywhere** principle. and **DRY** (Don't repeat yourself) Principle.

One of the best thing of react is, react is bareboned.
We don't need to understand all the concepts of react.
Infact if we know only programming in Javascript then it will become more familiar with us.

Even react don't have ROUTER - Without loading page we can move to the next page.

---
### Installation of NodeJS

1. Go to the browser and search `Node.js install`
2. Open/visit `nodejs.org` main webpage.
3. Choose one of them -
   Windows | macOS | Source

>Note: NodeJS is a javascript runtime which helps our computer to execute javascript. After installing NodeJS we can use Javascript in the computer without using browser.

---
### Installation of VSCode (Visual Studio Code)

> Go to the browser and search `VS code install`

**Why we need VS code?**

We need a Text Editor to write our source code. And VS code is one of the best Text Editor provided by **MICROSOFT**.

---
### React Developer tools Installation

- Go to the browser and search `React dev tools`
- It is Chrome Extension `Add to chrome`

---

### What is DOM?
The DOM is an object representation of the HTML element, thats acts as a bridge between your code and the user interface. It has Tree-Like structure with parent and child relationship.

### Updating UI with JavaScript
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

### Nesting multiple elements
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
**But it will become a problem, on working with a large project**<br/>To solve this problem **React come into existence**

To use React in your newly created project, We need two React scripts from an external website [`unpkg.com`](https://legacy.reactjs.org/docs/cdn-links.html)

- **react** script to enable react in your project
```js
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```
- **react-dom** script to enable the creation of nodes
```js
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
### Source code will look like
```html
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById("app")

        const header = document.createElement("h1")
        header.innerText = "Hello React!"

        app.appendChild(header)
    </script>
</body>
```

Instead of using the appendChild method now, we can use React methods for creating and rendering elements on the browser.
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
> [!IMPORTANT]
> Since react documents works with JSX but browser does not understand JSX.\
> Therefore we need a transpiler in this case we will use **Babel** as a transpiler.

```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
#### Now take a look on the source code
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

We can create a function component for rendering
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

        const root = ReactDOM.createRoot(app).render(<Header/>)
    </script>
</body>
```

## Deploying ReactJS using vite.
1. Create directory | Use the command on your terminal.
   ```cmd
   mkdir "myapp"
   ```
2. Move to the directory in VS code using
    ```cmd
     cd '.\myapp\'
    ```
    If you want to use VS code terminal run this command. It will open the current directory in your VS code.
    ```
     code .
    ```
    > You can skip this if you are not going to open VS code.
3. In terminal [Desktop or VS code]
    ```bash
    npm create vite@latest
    ```
    Now answer the following questions-

    - project name : `<project-name>`
    > If you give any name it will create another folder and deploy all the essentials inside it.

    So, project name : `.`
    > It will deploy all the essential in the current directory.

    - framework : `React`
    - variant : `Javascript`
4. For installing node_module
    ```bash
    npm install
    ```
5. To preview your app in browser
    ```bash
    npm run dev
    ```
    Now you can start working on your react project.

   **Happy Coding**
