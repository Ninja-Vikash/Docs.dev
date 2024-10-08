# Next.js
### React to Next
**For getting the code [ReactJS.md](ReactJS.md)**

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
**Create a empty `package.json` file** 
```json
{}
```
**Now run the commands on terminal**
```bash
npm install react@latest react-dom@latest next@latest
```

Remove everything from the `index.html` file. Except the code below
```js
function Header(){
    return <h1>Hello React!</h1>
}
```
Now export it default
```js
function Header(){
    return <h1>React component</h1>
}

export default Header
```
Since there is no any HTML code in the document, we can simply change the extension `.html` to `.js` or `.jsx`.
<br/>Create an app folder and move the file inside the folder. and rename it to `page.js`

Now we can run our next app but the **Question is how to run an js file on the browser**.<br/>We don't need to worry about it because next has solution for running their app.

Add a script in `package.json`
```json
{
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "scripts": {
    "dev" : "next dev"
  }
}
```
Run the command `npm run dev`

[localhost:3000](http://localhost:3000/)

***
## Next.js
with **vercel**
```bash
npx create-next-app@latest
```

##### Next.js😍
